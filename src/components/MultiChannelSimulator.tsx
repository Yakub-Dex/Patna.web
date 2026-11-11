import React, { useState, useEffect, useRef } from 'react';
import {
  Check,
  CheckCheck,
  Clock,
  Star,
  Send,
  MapPin,
  RotateCcw,
  Play,
  Pause,
  MessageCircle,
} from 'lucide-react';
import { TranslationDictionary } from '../i18n/translations';
import { getWhatsAppUrl } from '../config/patnaConfig';

interface MultiChannelSimulatorProps {
  t: TranslationDictionary;
  activeQueryId?: string;
  onSelectQuery?: (id: string) => void;
}

export type SimStep = 1 | 2 | 3 | 4;

export const MultiChannelSimulator: React.FC<MultiChannelSimulatorProps> = ({
  t,
  activeQueryId,
  onSelectQuery,
}) => {
  const [selectedId, setSelectedId] = useState<string>(activeQueryId || 'phone');
  const [activeChannel, setActiveChannel] = useState<'whatsapp' | 'sms'>('whatsapp');
  const [step, setStep] = useState<SimStep>(1);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [confirmedProviderIndex, setConfirmedProviderIndex] = useState<number>(0);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  const currentQuery =
    t.simulation.queries.find((q) => q.id === selectedId) ||
    t.simulation.queries[0];

  const selectedOffer = currentQuery.offers[confirmedProviderIndex] || currentQuery.offers[0];

  // Sync with external query changes
  useEffect(() => {
    if (activeQueryId && activeQueryId !== selectedId) {
      handleSwitchQuery(activeQueryId);
    }
  }, [activeQueryId]);

  // Smooth scroll chat feed when step changes
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTo({
        top: chatScrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [step, isTyping]);

  // Automated continuous timer engine: Step 1 -> 2 -> 3 -> 4 -> 1
  useEffect(() => {
    if (isPaused || isHovered) return;

    let timer: NodeJS.Timeout;

    if (step === 1) {
      // Step 1: Enquiry sent (show for 2.8s)
      timer = setTimeout(() => {
        setIsTyping(true);
        setStep(2);
      }, 2800);
    } else if (step === 2) {
      // Step 2: Instant ack + parsing (show for 2.8s)
      timer = setTimeout(() => {
        setIsTyping(false);
        setStep(3);
      }, 2800);
    } else if (step === 3) {
      // Step 3: Incoming matched offers (show for 4.2s)
      timer = setTimeout(() => {
        setConfirmedProviderIndex(0);
        setStep(4);
      }, 4200);
    } else if (step === 4) {
      // Step 4: Direct connection result (show for 5.0s, then loop back)
      timer = setTimeout(() => {
        setStep(1);
        setIsTyping(false);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [step, isPaused, isHovered]);

  const handleSwitchQuery = (id: string) => {
    setSelectedId(id);
    if (onSelectQuery) onSelectQuery(id);
    const targetQ = t.simulation.queries.find((q) => q.id === id);
    if (targetQ && targetQ.channel) {
      setActiveChannel(targetQ.channel);
    }
    setStep(1);
    setIsTyping(false);
    setConfirmedProviderIndex(0);
  };

  const handleManualStepSelect = (s: SimStep) => {
    setStep(s);
    setIsTyping(false);
    setIsPaused(true); // Pause auto-loop so user can inspect this step
  };

  const handleSelectOffer = (idx: number) => {
    setConfirmedProviderIndex(idx);
    setStep(4);
    setIsPaused(true);
  };

  const handleRestart = () => {
    setStep(1);
    setIsTyping(false);
    setConfirmedProviderIndex(0);
    setIsPaused(false);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Interactive Query Chips Selector & Controls */}
      <div className="w-full max-w-md lg:max-w-lg mb-3 flex items-center justify-between gap-2 overflow-x-auto pb-1 scrollbar-none">
        <div className="flex items-center gap-2 flex-wrap">
          {t.simulation.queries.map((q) => (
            <button
              key={q.id}
              onClick={() => handleSwitchQuery(q.id)}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all whitespace-nowrap ${
                selectedId === q.id
                  ? 'bg-[#2541b2] text-white border-[#2541b2] font-semibold'
                  : 'bg-white dark:bg-[#151817] text-[#5B615E] dark:text-[#9BA19E] hairline-border hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              {q.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => setIsPaused((prev) => !prev)}
            className="p-1.5 text-xs font-mono rounded-lg border hairline-border bg-white dark:bg-[#151817] text-[#5B615E] dark:text-[#9BA19E] hover:text-[#141716] dark:hover:text-[#E8EAE9] hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 text-[#2541b2] dark:text-[#5B7CF6]" /> : <Pause className="w-3.5 h-3.5 text-[#5B615E] dark:text-[#9BA19E]" />}
          </button>
          <button
            onClick={handleRestart}
            className="p-1.5 text-xs font-mono rounded-lg border hairline-border bg-white dark:bg-[#151817] text-[#5B615E] dark:text-[#9BA19E] hover:text-[#141716] dark:hover:text-[#E8EAE9] hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title={t.simulation.replayBtn}
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#2541b2] dark:text-[#5B7CF6]" />
          </button>
        </div>
      </div>

      {/* Simulator Device Frame */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full max-w-md lg:max-w-lg rounded-2xl border hairline-border bg-white dark:bg-[#121514] overflow-hidden transition-all duration-300"
      >
        {/* Device Top Bar */}
        <div className="px-4 py-2.5 bg-neutral-100/80 dark:bg-[#181B1A] border-b hairline-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Channel Tabs */}
            <div className="inline-flex p-0.5 rounded-md bg-neutral-200/70 dark:bg-[#202422]">
              <button
                onClick={() => {
                  setActiveChannel('whatsapp');
                  handleRestart();
                }}
                className={`px-2.5 py-0.5 text-[11px] font-mono rounded transition-colors ${
                  activeChannel === 'whatsapp'
                    ? 'bg-white dark:bg-[#121514] text-[#25D366] font-semibold'
                    : 'text-[#5B615E] dark:text-[#8D9490]'
                }`}
              >
                {t.simulation.tabWhatsapp}
              </button>
              <button
                onClick={() => {
                  setActiveChannel('sms');
                  handleRestart();
                }}
                className={`px-2.5 py-0.5 text-[11px] font-mono rounded transition-colors ${
                  activeChannel === 'sms'
                    ? 'bg-white dark:bg-[#121514] text-[#2541b2] dark:text-[#5B7CF6] font-semibold'
                    : 'text-[#5B615E] dark:text-[#8D9490]'
                }`}
              >
                {t.simulation.tabSms}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#717774] dark:text-[#8D9490]">
            <Clock className={`w-3 h-3 ${activeChannel === 'whatsapp' ? 'text-[#25D366]' : 'text-[#2541b2]'}`} />
            <span>Dar es Salaam (EAT)</span>
          </div>
        </div>

        {/* Step-by-Step Progress Track (Clickable to inspect any step) */}
        <div className="px-3 py-2 bg-neutral-50 dark:bg-[#151917] border-b hairline-border">
          <div className="grid grid-cols-4 gap-1.5 text-[10px] font-mono">
            {[
              { num: 1 as SimStep, label: t.simulation.step1Label },
              { num: 2 as SimStep, label: t.simulation.step2Label },
              { num: 3 as SimStep, label: t.simulation.step3Label },
              { num: 4 as SimStep, label: t.simulation.step4Label },
            ].map((s) => {
              const isCurrent = step === s.num;
              const isDone = step > s.num;

              return (
                <button
                  key={s.num}
                  onClick={() => handleManualStepSelect(s.num)}
                  className={`py-1 px-1.5 rounded text-center transition-all flex flex-col items-center justify-center border ${
                    isCurrent
                      ? activeChannel === 'whatsapp'
                        ? 'bg-[#25D366]/15 border-[#25D366]/50 text-[#25D366] font-bold ring-1 ring-[#25D366]/30'
                        : 'bg-[#2541b2]/15 border-[#2541b2]/50 text-[#2541b2] dark:text-[#5B7CF6] font-bold ring-1 ring-[#2541b2]/30'
                      : isDone
                      ? 'bg-neutral-100 dark:bg-[#1C201E] border-transparent text-[#141716] dark:text-[#E8EAE9] hover:border-neutral-300'
                      : 'border-transparent text-[#8D9490] hover:text-[#5B615E] hover:border-neutral-200'
                  }`}
                  title={`View ${s.label}`}
                >
                  <span className="text-[9px] uppercase tracking-wider font-semibold truncate max-w-full">
                    {s.num}. {s.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Chat Header (STRICT RULE: NO NUMBER ON SMS VIEW) */}
        <div className="px-4 py-2.5 bg-[#F4F6F5] dark:bg-[#151917] border-b hairline-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`relative w-8 h-8 rounded-full ${
                activeChannel === 'whatsapp' ? 'bg-[#25D366]' : 'bg-[#2541b2]'
              } text-white flex items-center justify-center font-bold text-xs`}
            >
              P
              {activeChannel === 'whatsapp' && (
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-white dark:border-[#151917]" />
              )}
            </div>
            <div>
              {/* STRICT RULE: Patna only, no phone numbers anywhere */}
              <span className="text-xs sm:text-sm font-semibold text-[#141716] dark:text-[#E8EAE9] block leading-tight">
                Patna
              </span>
              <p className="text-[10px] text-[#717774] dark:text-[#8D9490] font-mono">
                {activeChannel === 'whatsapp' ? 'online' : 'SMS'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#717774] dark:text-[#8D9490]">
            <span className={`inline-block w-1.5 h-1.5 rounded-full ${isPaused ? 'bg-amber-500' : 'bg-emerald-500 animate-pulse'}`} />
            <span>{isPaused ? 'Paused' : `Step ${step}/4`}</span>
          </div>
        </div>

        {/* Chat Feed */}
        <div
          ref={chatScrollRef}
          className="p-4 sm:p-5 space-y-3.5 h-[460px] bg-[#FAFBFB] dark:bg-[#0D100F] overflow-y-auto"
        >
          {/* STEP 1: Customer enquiry message */}
          <div className="flex justify-end">
            <div
              className={`max-w-[88%] rounded-2xl rounded-tr-none px-3.5 py-2.5 ${
                activeChannel === 'whatsapp'
                  ? 'bg-[#E7F8ED] dark:bg-[#0D2417] border border-[#25D366]/20'
                  : 'bg-[#EEF2FC] dark:bg-[#121B38] border border-[#2541b2]/20'
              } text-[#141716] dark:text-[#E8EAE9]`}
            >
              <p className="text-xs sm:text-sm leading-relaxed">
                {currentQuery.userMessage}
              </p>
              <div className="mt-1 flex items-center justify-end gap-1 text-[10px] font-mono text-[#717774] dark:text-[#8D9490]">
                <span>10:42 AM</span>
                {activeChannel === 'whatsapp' ? (
                  <CheckCheck className="w-3 h-3 text-[#25D366]" />
                ) : (
                  <span className="text-[9px] uppercase tracking-wider">Sent</span>
                )}
              </div>
            </div>
          </div>

          {/* STEP 2+: Patna Instant Acknowledgement */}
          {step >= 2 && (
            <div className="flex justify-start">
              <div
                className={`max-w-[88%] rounded-2xl rounded-tl-none px-3.5 py-2.5 ${
                  activeChannel === 'whatsapp'
                    ? 'bg-white dark:bg-[#161A18] border hairline-border'
                    : 'bg-white dark:bg-[#161A18] border border-blue-500/20'
                } text-[#141716] dark:text-[#E8EAE9]`}
              >
                <p className="text-xs sm:text-sm leading-relaxed">
                  {activeChannel === 'whatsapp'
                    ? t.simulation.ackMessageWhatsapp
                    : t.simulation.ackMessageSms}
                </p>
                <div className="mt-1 flex items-center justify-between text-[10px] font-mono text-[#717774] dark:text-[#8D9490]">
                  <span>10:42 AM</span>
                  <span className="text-[9px] text-[#2541b2] dark:text-[#5B7CF6]">
                    {currentQuery.parsed.location}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Typing indicator during Step 2 */}
          {isTyping && (
            <div
              className={`flex items-center gap-2 text-xs font-mono ${
                activeChannel === 'whatsapp'
                  ? 'text-[#25D366] bg-emerald-50 dark:bg-[#0D2417] border border-[#25D366]/20'
                  : 'text-[#2541b2] dark:text-[#5B7CF6] bg-blue-50 dark:bg-[#121B38] border border-[#2541b2]/20'
              } px-3 py-2 rounded-lg`}
            >
              <span
                className={`inline-block w-2 h-2 rounded-full ${
                  activeChannel === 'whatsapp' ? 'bg-[#25D366]' : 'bg-[#2541b2]'
                } animate-ping`}
              />
              <span>{t.simulation.patnaTyping}</span>
            </div>
          )}

          {/* STEP 3+: Offers Arrive */}
          {step >= 3 && !isTyping && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#717774] dark:text-[#8D9490] px-1">
                <span>{currentQuery.patnaIntro}</span>
                <span className="text-[10px] text-[#2541b2] dark:text-[#5B7CF6]">
                  {t.simulation.offersFound}
                </span>
              </div>

              {/* WHATSAPP VIEW: Card-based Interactive Offers */}
              {activeChannel === 'whatsapp' ? (
                <div className="space-y-2.5">
                  {currentQuery.offers.map((offer, idx) => {
                    const isSelected = step === 4 && confirmedProviderIndex === idx;

                    return (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl border hairline-border bg-white dark:bg-[#161A18] hover:border-[#25D366]/40 transition-all ${
                          isSelected
                            ? 'border-[#25D366] bg-emerald-50/20 dark:bg-[#0D2417]/30 ring-1 ring-[#25D366]/30'
                            : ''
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-semibold text-xs sm:text-sm text-[#141716] dark:text-[#E8EAE9]">
                                {offer.provider}
                              </span>
                              {idx === 0 && (
                                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                                  {t.simulation.bestMatchBadge}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-[11px] text-[#717774] dark:text-[#8D9490] mt-0.5">
                              <span className="flex items-center gap-0.5">
                                <MapPin className="w-2.5 h-2.5 text-[#2541b2]" />
                                {offer.location}
                              </span>
                              <span>·</span>
                              <span className="flex items-center gap-0.5 font-mono text-amber-600 dark:text-amber-400">
                                <Star className="w-2.5 h-2.5 fill-current" />
                                {offer.rating}
                              </span>
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <span className="font-mono text-xs sm:text-sm font-bold text-[#2541b2] dark:text-[#5B7CF6] block">
                              {offer.price}
                            </span>
                          </div>
                        </div>

                        <p className="text-xs text-[#5B615E] dark:text-[#9BA19E] mb-2.5">
                          {offer.details}
                        </p>

                        <div className="pt-1.5 flex items-center justify-between gap-2">
                          <span className="text-[10px] font-mono text-[#717774] dark:text-[#8D9490] truncate">
                            {offer.deliveryTime}
                          </span>
                          <button
                            onClick={() => handleSelectOffer(idx)}
                            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap flex items-center gap-1 ${
                              isSelected
                                ? 'bg-emerald-600 text-white'
                                : 'bg-[#25D366] hover:bg-[#20ba5a] text-white'
                            }`}
                          >
                            <Check className="w-3 h-3" />
                            <span>{isSelected ? 'Confirmed' : t.simulation.selectOfferBtn}</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* SMS VIEW: Clean Structured GSM Messages (STRICT: NO NUMBERS) */
                <div className="space-y-2.5">
                  {currentQuery.offers.slice(0, 2).map((offer, idx) => {
                    const isSelected = step === 4 && confirmedProviderIndex === idx;

                    return (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border hairline-border bg-white dark:bg-[#161A18] font-mono text-xs text-[#141716] dark:text-[#E8EAE9] ${
                          isSelected ? 'border-[#2541b2] ring-1 ring-[#2541b2]/30' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1 pb-1 border-b border-dashed hairline-border text-[10px] text-[#717774] dark:text-[#8D9490]">
                          <span className="font-bold text-[#141716] dark:text-[#E8EAE9]">
                            PATNA: {offer.provider}
                          </span>
                          <span className="text-[#2541b2] dark:text-[#5B7CF6] font-bold">
                            {offer.price}
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed mb-2 text-[#5B615E] dark:text-[#9BA19E]">
                          {offer.details} · {offer.location}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-[#717774] dark:text-[#8D9490]">
                            Thibitisha ofa
                          </span>
                          <button
                            onClick={() => handleSelectOffer(idx)}
                            className="px-2.5 py-1 text-[11px] font-semibold rounded bg-[#2541b2] hover:bg-[#1D3394] text-white transition-colors"
                          >
                            Thibitisha
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* STEP 4: Direct Connection Confirmation */}
          {step === 4 && (
            <div className="space-y-3 pt-1">
              {/* Customer confirmation message */}
              <div className="flex justify-end">
                <div
                  className={`max-w-[85%] rounded-2xl rounded-tr-none px-3.5 py-2 text-xs ${
                    activeChannel === 'whatsapp'
                      ? 'bg-[#E7F8ED] dark:bg-[#0D2417] border border-[#25D366]/20'
                      : 'bg-[#EEF2FC] dark:bg-[#121B38] border border-[#2541b2]/20'
                  } text-[#141716] dark:text-[#E8EAE9]`}
                >
                  <p className="font-medium">
                    {activeChannel === 'whatsapp'
                      ? `${t.simulation.confirmedBubbleText}: ${selectedOffer.provider}`
                      : `Thibitisha: ${selectedOffer.provider}`}
                  </p>
                  <div className="mt-1 flex items-center justify-end gap-1 text-[10px] font-mono text-[#717774] dark:text-[#8D9490]">
                    <span>10:43 AM</span>
                    <CheckCheck className="w-3 h-3 text-[#25D366]" />
                  </div>
                </div>
              </div>

              {/* Patna direct connect response (STRICT: NO NUMBERS) */}
              <div className="flex justify-start">
                <div className="max-w-[92%] rounded-2xl rounded-tl-none p-3.5 bg-white dark:bg-[#161A18] border hairline-border">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>
                      {activeChannel === 'whatsapp'
                        ? t.simulation.connectedMessageWhatsapp
                        : t.simulation.connectedMessageSms}
                    </span>
                  </div>

                  <div className="mt-2.5 p-2.5 rounded-lg bg-neutral-50 dark:bg-[#1E2320] border hairline-border flex items-center justify-between gap-2">
                    <div>
                      <p className="text-xs font-bold text-[#141716] dark:text-[#E8EAE9]">
                        {selectedOffer.provider}
                      </p>
                      <p className="text-[11px] text-[#717774] dark:text-[#8D9490]">
                        {selectedOffer.location} · {selectedOffer.price}
                      </p>
                    </div>

                    {activeChannel === 'whatsapp' && (
                      <a
                        href={getWhatsAppUrl(`Hi Patna, I'd like to confirm offer from ${selectedOffer.provider}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 text-xs font-semibold rounded bg-[#25D366] text-white hover:bg-[#20ba5a] flex items-center gap-1 shrink-0"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>Chat</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Bar Simulator */}
        <div className="p-3 bg-white dark:bg-[#151917] border-t hairline-border flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={currentQuery.userMessage}
            className="flex-1 px-3 py-1.5 text-xs rounded-lg border hairline-border bg-neutral-50 dark:bg-[#1D211F] text-[#5B615E] dark:text-[#9BA19E] cursor-not-allowed"
          />
          <button
            onClick={handleRestart}
            className={`p-1.5 rounded-lg text-white transition-colors ${
              activeChannel === 'whatsapp'
                ? 'bg-[#25D366] hover:bg-[#20ba5a]'
                : 'bg-[#2541b2] hover:bg-[#1D3394]'
            }`}
            title="Restart demo"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};




import React, { useState } from 'react';
import { Stethoscope, AlertTriangle, CheckCircle2, RotateCcw, MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { DIAGNOSTIC_STEPS, DIAGNOSTIC_RESULTS, SHOP_INFO } from '../data/repairData.ts';

interface SymptomTroubleshooterProps {
  language: 'en' | 'hi';
  onBookResult: (issueTitle: string) => void;
}

export const SymptomTroubleshooter: React.FC<SymptomTroubleshooterProps> = ({ 
  language, 
  onBookResult 
}) => {
  const isHi = language === 'hi';

  const [currentStepId, setCurrentStepId] = useState<string>('q1');
  const [resultId, setResultId] = useState<string | null>(null);

  const currentStep = DIAGNOSTIC_STEPS.find(s => s.id === currentStepId);
  const result = resultId ? DIAGNOSTIC_RESULTS[resultId] : null;

  const handleSelectOption = (option: { next?: string; result?: string }) => {
    if (option.result) {
      setResultId(option.result);
    } else if (option.next) {
      setCurrentStepId(option.next);
    }
  };

  const handleReset = () => {
    setCurrentStepId('q1');
    setResultId(null);
  };

  return (
    <section id="diagnostic" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            <Stethoscope className="w-4 h-4" />
            <span>{isHi ? 'स्मार्ट लक्षण पहचान' : 'Smart Device Troubleshooter'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {isHi ? 'पता नहीं क्या खराब है? 2 मिनट में जांचें' : 'Not Sure What Is Broken? Self-Diagnose in 2 Minutes'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            {isHi 
              ? 'नीचे दिए गए आसान सवालों के जवाब दें और अपनी स्क्रीन, चार्जिंग या बोर्ड की समस्या का तुरंत विश्लेषण पाएं।' 
              : 'Answer simple visual checks to identify internal motherboard faults, screen damage, or thermal issues.'}
          </p>
        </div>

        {/* Wizard Box */}
        <div className="max-w-2xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          
          {/* Top Reset and Breadcrumb */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6 text-xs text-slate-500">
            <span>
              {resultId ? (isHi ? 'डायग्नोसिस परिणाम' : 'Diagnosis Result') : (isHi ? 'चरण अनुसार सवाल' : 'Step-by-step Inspection')}
            </span>
            {(currentStepId !== 'q1' || resultId) && (
              <button
                onClick={handleReset}
                className="flex items-center gap-1 text-slate-600 hover:text-slate-900 font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{isHi ? 'शुरू से जांचें' : 'Start Over'}</span>
              </button>
            )}
          </div>

          {/* QUESTION STEP */}
          {!result && currentStep && (
            <div className="space-y-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {isHi ? currentStep.questionHi : currentStep.question}
              </h3>

              <div className="space-y-2.5">
                {currentStep.options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt)}
                    className="w-full text-left p-4 bg-white hover:bg-amber-50/60 border border-slate-200 hover:border-amber-300 rounded-xl transition-all flex items-center justify-between group"
                  >
                    <span className="text-xs sm:text-sm font-medium text-slate-800 group-hover:text-amber-950">
                      {isHi ? opt.labelHi : opt.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 shrink-0 ml-3 transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* RESULT CARD */}
          {result && (
            <div className="space-y-6">
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                    {isHi ? 'अनुमानित डायग्नोसिस' : 'Probable Diagnosis'}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                    {isHi ? result.titleHi : result.title}
                  </h3>
                </div>
              </div>

              {/* Diagnosis Details */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {isHi ? result.diagnosisHi : result.diagnosis}
              </div>

              {/* Safety Tip Box */}
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">{isHi ? 'सुरक्षा सलाह: ' : 'Safety Caution: '}</span>
                  <span>{isHi ? result.safetyTipHi : result.safetyTip}</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <span className="text-slate-400 block">{isHi ? 'अनुमानित समय' : 'Estimated Fix Time'}</span>
                  <span className="font-bold text-slate-900 font-mono text-sm">{result.estimatedFixTime}</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <span className="text-slate-400 block">{isHi ? 'अनुमानित खर्च' : 'Estimated Cost Range'}</span>
                  <span className="font-bold text-amber-600 font-mono text-sm">{result.priceRange}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={SHOP_INFO.whatsappUrl(`Hello Kashi Computer, my diagnostic result is: ${result.title}. Can I bring this device to Shukla Complex today?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[180px] flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isHi ? 'व्हाट्सएप पर संपर्क करें' : 'Chat on WhatsApp'}</span>
                </a>

                <a
                  href={SHOP_INFO.phoneTel}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>7398396002</span>
                </a>

                <button
                  onClick={() => onBookResult(result.title)}
                  className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-colors"
                >
                  {isHi ? 'इस समस्या के लिए टोकन बुक करें' : 'Book Drop-off Token for This Issue'}
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

import React from "react";
import { useApp } from "@/contexts/AppContext";

const items = [
  "marquee.noQueue",
  "marquee.warranty",
  "marquee.trucksAndCars",
  "marquee.fairPrices",
  "marquee.mobileService",
  "marquee.daily",
  "marquee.experience",
  "marquee.diagnostics",
] as const;

const WrenchIcon = () => (
  <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.049.58.025 1.193-.14 1.743" />
  </svg>
);

const MarqueeBanner: React.FC = () => {
  const { t } = useApp();

  const content = items.map((key, i) => (
    <span key={i} className="flex items-center gap-3 whitespace-nowrap">
      <WrenchIcon />
      <span className="text-sm font-semibold uppercase tracking-wider">{t(key)}</span>
    </span>
  ));

  return (
    <div className="marquee-banner relative overflow-hidden border-y border-red-500/20 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10">
      <div className="flex marquee-track">
        <div className="flex items-center gap-8 py-3 px-4 marquee-content">
          {content}
        </div>
        <div className="flex items-center gap-8 py-3 px-4 marquee-content" aria-hidden="true">
          {content}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;

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
  "marquee.tireStorage",
] as const;

const TireIcon = () => (
  <svg className="w-4 h-4 text-red-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const MarqueeBanner: React.FC = () => {
  const { t } = useApp();

  const content = items.map((key, i) => (
    <span key={i} className="flex items-center gap-3 whitespace-nowrap">
      <TireIcon />
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

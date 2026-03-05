import React from "react";
import { useApp } from "@/contexts/AppContext";

const TestimonialsSection: React.FC = () => {
  const { t } = useApp();
  const reviews = [
    { name: t("rev.r1.name"), role: t("rev.r1.role"), text: t("rev.r1.text") },
    { name: t("rev.r2.name"), role: t("rev.r2.role"), text: t("rev.r2.text") },
    { name: t("rev.r3.name"), role: t("rev.r3.role"), text: t("rev.r3.text") },
    { name: t("rev.r4.name"), role: t("rev.r4.role"), text: t("rev.r4.text") },
  ];

  return (
    <section id="opinie" className="py-10 sm:py-16 md:py-24 theme-bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3">
            {t("rev.title1")} <span className="text-red-500">{t("rev.title2")}</span>
          </h2>
          <p className="theme-text-muted max-w-xl mx-auto text-sm sm:text-base">{t("rev.subtitle")}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="theme-bg-card theme-border border rounded-xl p-3.5 sm:p-6 hover:border-red-500/30 transition">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="theme-text-secondary text-xs sm:text-sm mb-2.5 italic leading-relaxed">"{r.text}"</p>
              <p className="font-semibold theme-text text-xs sm:text-sm">{r.name}</p>
              <p className="theme-text-dimmed text-[10px] sm:text-xs">{r.role}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-10">
          <p className="theme-text-muted mb-3 text-sm sm:text-base">{t("rev.cta")}</p>
          <a href="tel:+48508796011" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all hover:scale-105 shadow-lg shadow-red-600/20 text-sm sm:text-base">
            <PhoneIcon /> {t("rev.bookCta")}: +48 508 796 011
          </a>
        </div>
      </div>
    </section>
  );
};

const PhoneIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;

export default TestimonialsSection;

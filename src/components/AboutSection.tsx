import React from "react";
import { useApp } from "@/contexts/AppContext";

const AboutSection: React.FC = () => {
  const { t } = useApp();
  const stats = [
    { value: "10+", label: t("about.stat1") },
    { value: "1000+", label: t("about.stat2") },
    { value: "7/7", label: t("about.stat3") },
    { value: "12h", label: t("about.stat4") },
  ];

  return (
    <section id="o-nas" className="py-10 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5">
              {t("about.title1")} <span className="text-red-500">{t("about.title2")}</span>
            </h2>
            <div className="space-y-3 theme-text-secondary text-sm sm:text-base leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a href="tel:+48508796011" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-red-600/20 text-sm">
                <PhoneIcon /> {t("common.callUs")}
              </a>
              <a href="#kontakt" className="inline-flex items-center justify-center gap-2 theme-bg-card theme-border border hover:opacity-80 theme-text font-bold py-3 px-5 rounded-xl transition-all text-sm">
                {t("about.findMap")}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-6">
            {stats.map((s, i) => (
              <div key={i} className="theme-bg-card theme-border border rounded-xl p-4 sm:p-6 text-center hover:border-red-500/50 transition">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-1">{s.value}</div>
                <div className="theme-text-muted text-xs sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PhoneIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;

export default AboutSection;

import React from "react";
import { useApp } from "@/contexts/AppContext";

const ServicesSection: React.FC = () => {
  const { t } = useApp();

  const services = [
    { title: t("svc.s1.title"), desc: t("svc.s1.desc"), price: t("svc.s1.price") },
    { title: t("svc.s2.title"), desc: t("svc.s2.desc"), price: t("svc.s2.price") },
    { title: t("svc.s3.title"), desc: t("svc.s3.desc"), price: t("svc.s3.price") },
    { title: t("svc.s4.title"), desc: t("svc.s4.desc"), price: t("svc.s4.price") },
    { title: t("svc.s5.title"), desc: t("svc.s5.desc"), price: t("svc.s5.price") },
    { title: t("svc.s6.title"), desc: t("svc.s6.desc"), price: t("svc.s6.price") },
  ];

  return (
    <section id="uslugi" className="py-10 sm:py-16 md:py-24 theme-bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3">
            {t("svc.title1")} <span className="text-red-500">{t("svc.title2")}</span>
          </h2>
          <p className="theme-text-muted max-w-xl mx-auto text-sm sm:text-base">{t("svc.subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
          {services.map((svc, i) => (
            <div key={i} className="theme-bg-card theme-border border rounded-xl p-3.5 sm:p-6 hover:border-red-500/50 transition-all group">
              <h3 className="text-sm sm:text-lg font-bold mb-1 group-hover:text-red-400 transition">{svc.title}</h3>
              <p className="theme-text-muted text-xs sm:text-sm mb-2.5 sm:mb-4 leading-relaxed">{svc.desc}</p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-red-400 font-semibold text-xs sm:text-sm">{svc.price}</span>
                <a href="tel:+48508796011" className="text-xs theme-text-muted hover:text-red-500 flex items-center gap-1 transition">
                  <PhoneIcon /> {t("common.askPrice")}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 bg-red-600/10 border border-red-500/30 rounded-xl p-5 sm:p-8 text-center">
          <h3 className="text-base sm:text-xl font-bold mb-2">{t("svc.needQuote")}</h3>
          <p className="theme-text-secondary mb-3 text-sm sm:text-base">{t("svc.quoteDesc")}</p>
          <a href="tel:+48508796011" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all hover:scale-105 shadow-lg shadow-red-600/20 text-sm sm:text-lg">
            <PhoneLgIcon /> {t("common.callNow")}: +48 508 796 011
          </a>
        </div>
      </div>
    </section>
  );
};

const PhoneIcon = () => <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const PhoneLgIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;

export default ServicesSection;

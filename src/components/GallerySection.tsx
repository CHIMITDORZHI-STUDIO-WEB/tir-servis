import React from "react";
import { useApp } from "@/contexts/AppContext";

const GallerySection: React.FC = () => {
  const { t } = useApp();
  const base = import.meta.env.BASE_URL;
  const items = [
    { label: t("gal.item1"), image: `${base}assets/gallery/1.jpg` },
    { label: t("gal.item2"), image: `${base}assets/gallery/2.jpg` },
    { label: t("gal.item3"), image: `${base}assets/gallery/3.jpg` },
    { label: t("gal.item4"), image: `${base}assets/gallery/4.jpg` },
    { label: t("gal.item5"), image: `${base}assets/gallery/5.jpg` },
    { label: t("gal.item6"), image: null },
  ];

  return (
    <section id="galeria" className="py-10 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3">
            <span className="text-red-500">{t("gal.title1")}</span> {t("gal.title2")}
          </h2>
          <p className="theme-text-muted max-w-xl mx-auto text-sm sm:text-base">{t("gal.subtitle")}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
          {items.map((item, i) => (
            <div key={i} className="relative aspect-video theme-bg-card rounded-xl overflow-hidden group cursor-pointer theme-border border">
              {item.image ? (
                <img src={item.image} alt={item.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center px-2 theme-bg-card">
                  <div className="text-center">
                    <svg className="w-8 h-8 sm:w-12 sm:h-12 theme-text-dimmed mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span className="theme-text-dimmed text-xs sm:text-sm">{item.label}</span>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-red-600/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5 sm:mt-8">
          <p className="theme-text-muted text-xs sm:text-sm">
            {t("gal.more")}{" "}
            <a href="tel:+48508796011" className="text-red-400 hover:text-red-300 font-medium underline">{t("gal.callLink")}</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

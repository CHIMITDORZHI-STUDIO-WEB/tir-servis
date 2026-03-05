import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import { LANG_LABELS, LANG_NAMES, Lang } from "@/i18n/translations";

const PHONE_PRIMARY = "+48 508 796 011";
const PHONE_SECONDARY = "+48 508 315 051";
const PHONE_LINK_PRIMARY = "tel:+48508796011";
const PHONE_LINK_SECONDARY = "tel:+48508315051";
const EMAIL = "info@tirserwis.pl";
const ADDRESS = "ul. Warszawska 1, 05-310 Kałuszyn";
const WHATSAPP_LINK = "https://wa.me/48508796011";
const TELEGRAM_LINK = "https://t.me/+48508796011";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t, lang, setLang, theme, setTheme } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const langs: Lang[] = ["pl", "ru", "en", "fr", "de", "ua"];
  const location = useLocation();

  // Scroll to hash on load or location change
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen theme-bg theme-text">
      {/* Top info bar - desktop only */}
      <div className="theme-bg-secondary theme-border border-b py-2 text-sm hidden lg:block">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6 theme-text-muted">
            <span className="flex items-center gap-1.5"><MapPinIcon />{ADDRESS}</span>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-red-500 transition"><MailIcon />{EMAIL}</a>
            <span className="flex items-center gap-1.5"><ClockIcon />{t("common.hours")}</span>
          </div>
          <a href={PHONE_LINK_PRIMARY} className="flex items-center gap-1.5 theme-text font-semibold hover:text-red-500 transition text-base">
            <PhoneIcon /> {PHONE_PRIMARY}
          </a>
        </div>
      </div>

      {/* Sticky header */}
      <header className="sticky top-0 z-50 theme-bg-secondary backdrop-blur-sm theme-border border-b shadow-lg" style={{ backgroundColor: `color-mix(in srgb, var(--bg-secondary) 95%, transparent)` }}>
        <div className="container mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between gap-2">
          <Link to="/" className="text-lg sm:text-2xl font-bold theme-text flex-shrink-0">
            <span className="text-red-500">TIR</span> Serwis
          </Link>

          <nav className="hidden lg:flex items-center gap-4 text-sm xl:gap-5">
            <div className="relative group pt-4 pb-4 -my-4">
              <span className="hover:text-red-500 transition cursor-pointer flex items-center gap-1 font-medium">{t("nav.repairTrucks")} <ChevronDownIcon /></span>
              <div className="absolute left-0 top-full mt-0 hidden group-hover:block z-50 theme-bg-secondary theme-border border rounded-lg shadow-xl py-2 min-w-[240px]">
                <Link to="/service/computer-diagnostics" className="block px-4 py-2 hover:bg-red-500/10 transition">{t("srv.cd.title")}</Link>
                <Link to="/service/engine-repair" className="block px-4 py-2 hover:bg-red-500/10 transition">{t("srv.er.title")}</Link>
                <Link to="/service/chassis-repair" className="block px-4 py-2 hover:bg-red-500/10 transition">{t("srv.cr.title")}</Link>
                <Link to="/service/brakes-system" className="block px-4 py-2 hover:bg-red-500/10 transition">{t("srv.br.title")}</Link>
                <Link to="/service/electrics" className="block px-4 py-2 hover:bg-red-500/10 transition">{t("srv.el.title")}</Link>
              </div>
            </div>
            <Link to="/#uslugi" className="hover:text-red-500 transition font-medium">{t("nav.repairTrailers")}</Link>
            <Link to="/#uslugi" className="hover:text-red-500 transition font-medium">{t("nav.repairTractors")}</Link>
            <Link to="/#uslugi" className="hover:text-red-500 transition font-medium">{t("nav.repairBody")}</Link>
            <Link to="/#uslugi" className="text-red-500 transition font-bold">{t("nav.laserCleaning")}</Link>

            <div className="relative group pt-4 pb-4 -my-4">
              <span className="hover:text-red-500 transition cursor-pointer flex items-center gap-1 font-medium">{t("nav.otherServices")} <ChevronDownIcon /></span>
              <div className="absolute left-0 top-full mt-0 hidden group-hover:block z-50 theme-bg-secondary theme-border border rounded-lg shadow-xl py-2 min-w-[240px]">
                <Link to="/service/gearbox" className="block px-4 py-2 hover:bg-red-500/10 transition">{t("srv.gb.title")}</Link>
                <Link to="/service/pneumatics" className="block px-4 py-2 hover:bg-red-500/10 transition">{t("srv.pn.title")}</Link>
                <Link to="/service/service-checks" className="block px-4 py-2 hover:bg-red-500/10 transition">{t("srv.sc.title")}</Link>
                <Link to="/service/buses" className="block px-4 py-2 hover:bg-red-500/10 transition">{t("srv.bs.title")}</Link>
                <Link to="/service/agri" className="block px-4 py-2 hover:bg-red-500/10 transition">{t("srv.ag.title")}</Link>
                <Link to="/service/parts" className="block px-4 py-2 hover:bg-red-500/10 transition">{t("srv.pt.title")}</Link>
              </div>
            </div>

            <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-1"></div>

            <Link to="/#o-nas" className="hover:text-red-500 transition">{t("nav.about")}</Link>
            <Link to="/#galeria" className="hover:text-red-500 transition">{t("nav.gallery")}</Link>
            <Link to="/#opinie" className="hover:text-red-500 transition">{t("nav.reviews")}</Link>
            <Link to="/#kontakt" className="hover:text-red-500 transition">{t("nav.contact")}</Link>
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Theme toggle */}
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-lg theme-bg hover:opacity-80 transition theme-border border" aria-label="Toggle theme">
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Language dropdown */}
            <div className="relative">
              <button onClick={() => setLangDropdownOpen(!langDropdownOpen)} className="flex items-center gap-1 p-2 px-2.5 rounded-lg theme-bg hover:opacity-80 transition theme-border border text-xs sm:text-sm font-medium">
                {LANG_LABELS[lang]} <ChevronDownIcon />
              </button>
              {langDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangDropdownOpen(false)} />
                  <div className="absolute right-0 top-full mt-1 z-50 theme-bg-secondary theme-border border rounded-lg shadow-xl py-1 min-w-[140px]">
                    {langs.map((l) => (
                      <button key={l} onClick={() => { setLang(l); setLangDropdownOpen(false); }} className={`w-full text-left px-4 py-2.5 text-sm hover:bg-red-500/10 transition flex items-center justify-between ${lang === l ? "text-red-500 font-semibold" : "theme-text-secondary"}`}>
                        <span>{LANG_NAMES[l]}</span>
                        <span className="theme-text-dimmed text-xs">{LANG_LABELS[l]}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Phone - tablet+ */}
            <a href={PHONE_LINK_PRIMARY} className="hidden md:flex items-center gap-2 theme-text font-bold hover:text-red-500 transition text-sm">
              <PhoneIcon /> {PHONE_PRIMARY}
            </a>

            {/* CTA - tablet+ */}
            <a href={PHONE_LINK_PRIMARY} className="hidden sm:flex bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 sm:px-4 rounded-lg transition-all hover:scale-105 shadow-lg shadow-red-600/25 items-center gap-1.5 text-xs sm:text-sm">
              <PhoneIcon /> {t("common.callNow")}
            </a>

            {/* Hamburger */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg theme-bg theme-border border" aria-label="Menu">
              {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden theme-bg-secondary theme-border border-t pb-4 px-4">
            <nav className="flex flex-col gap-0.5 pt-2">
              {[
                { to: "/#uslugi", label: t("nav.repairTrucks") },
                { to: "/#uslugi", label: t("nav.repairTrailers") },
                { to: "/#o-nas", label: t("nav.about") },
                { to: "/#galeria", label: t("nav.gallery") },
                { to: "/#opinie", label: t("nav.reviews") },
                { to: "/#kontakt", label: t("nav.contact") },
              ].map((item) => (
                <Link key={item.to} to={item.to} onClick={() => setMobileMenuOpen(false)} className="py-3 px-4 rounded-lg hover:bg-red-500/10 transition text-base font-medium active:bg-red-500/20">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 flex gap-2">
              <a href={PHONE_LINK_PRIMARY} className="flex-1 bg-red-600 text-white font-bold py-3 rounded-lg text-center flex items-center justify-center gap-2 text-sm">
                <PhoneIcon /> {PHONE_PRIMARY}
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white p-3 rounded-lg flex items-center justify-center">
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="theme-bg-secondary theme-border border-t py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4"><span className="text-red-500">TIR</span> Serwis</h3>
              <p className="theme-text-muted text-sm leading-relaxed">{t("footer.desc")}</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t("footer.contactData")}</h4>
              <div className="space-y-2.5 theme-text-secondary text-sm">
                <p className="flex items-center gap-2"><MapPinIcon />{ADDRESS}</p>
                <a href={PHONE_LINK_PRIMARY} className="flex items-center gap-2 hover:text-red-500 font-semibold theme-text text-base"><PhoneIcon />{PHONE_PRIMARY}</a>
                <a href={PHONE_LINK_SECONDARY} className="flex items-center gap-2 hover:text-red-500"><PhoneIcon />{PHONE_SECONDARY}</a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-red-500"><MailIcon />{EMAIL}</a>
                <p className="flex items-center gap-2"><ClockIcon />{t("common.hours")}</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t("footer.writeUs")}</h4>
              <div className="flex gap-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-all hover:scale-110 text-white"><WhatsAppIcon /></a>
                <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-all hover:scale-110 text-white"><TelegramIcon /></a>
              </div>
              <div className="mt-5">
                <a href={PHONE_LINK_PRIMARY} className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105">
                  <PhoneIcon /> {t("common.call")}: {PHONE_PRIMARY}
                </a>
              </div>
            </div>
          </div>
          <div className="theme-border border-t mt-8 pt-6 text-center theme-text-dimmed text-sm">
            © {new Date().getFullYear()} TIR Serwis. {t("common.allRights")}.
          </div>
        </div>
      </footer>

      {/* FLOATING MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden theme-bg-secondary backdrop-blur-sm theme-border border-t p-2.5 shadow-2xl" style={{ backgroundColor: `color-mix(in srgb, var(--bg-secondary) 95%, transparent)` }}>
        <div className="flex gap-2">
          <a href={PHONE_LINK_PRIMARY} className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-lg text-center flex items-center justify-center gap-2 text-base shadow-lg animate-pulse-subtle">
            <PhoneIconLg /> {t("common.callNow")}
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-4 rounded-lg flex items-center justify-center"><WhatsAppIcon /></a>
        </div>
      </div>
      <div className="h-[72px] sm:hidden" />
    </div>
  );
};

const PhoneIcon = () => <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const PhoneIconLg = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const MapPinIcon = () => <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const MailIcon = () => <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const ClockIcon = () => <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const WhatsAppIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>;
const TelegramIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>;
const SunIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const MoonIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>;
const HamburgerIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;
const CloseIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
const ChevronDownIcon = () => <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>;

export default Layout;

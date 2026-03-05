import React from "react";

const PHONE_PRIMARY = "+48 508 796 011";
const PHONE_SECONDARY = "+48 508 315 051";
const PHONE_LINK_PRIMARY = "tel:+48508796011";
const PHONE_LINK_SECONDARY = "tel:+48508315051";
const EMAIL = "info@tirserwis.pl";
const ADDRESS = "ul. Warszawska 1, 05-310 Kałuszyn";
const HOURS = "codziennie: 8:00 - 20:00";
const WHATSAPP_LINK = "https://wa.me/48508796011";
const TELEGRAM_LINK = "https://t.me/+48508796011";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Top info bar */}
      <div className="bg-gray-900 border-b border-gray-800 py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6 text-gray-300">
            <span className="flex items-center gap-1">
              <MapPinIcon />
              {ADDRESS}
            </span>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-1 hover:text-white transition">
              <MailIcon />
              {EMAIL}
            </a>
            <span className="flex items-center gap-1">
              <ClockIcon />
              {HOURS}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={PHONE_LINK_PRIMARY}
              className="flex items-center gap-1 text-white font-semibold hover:text-red-400 transition text-base"
            >
              <PhoneIcon />
              {PHONE_PRIMARY}
            </a>
            <a
              href={PHONE_LINK_SECONDARY}
              className="flex items-center gap-1 text-gray-300 hover:text-red-400 transition"
            >
              <PhoneIcon />
              {PHONE_SECONDARY}
            </a>
          </div>
        </div>
      </div>

      {/* Sticky header with phone - always visible */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-white">
            <span className="text-red-500">TIR</span> Serwis
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <a href="#uslugi" className="hover:text-red-400 transition">Usługi</a>
            <a href="#dlaczego-my" className="hover:text-red-400 transition">Dlaczego my</a>
            <a href="#galeria" className="hover:text-red-400 transition">Galeria</a>
            <a href="#opinie" className="hover:text-red-400 transition">Opinie</a>
            <a href="#kontakt" className="hover:text-red-400 transition">Kontakt</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Phone number - always visible in header */}
            <a
              href={PHONE_LINK_PRIMARY}
              className="hidden sm:flex items-center gap-2 text-white font-bold text-lg hover:text-red-400 transition"
            >
              <PhoneIcon />
              <span>{PHONE_PRIMARY}</span>
            </a>
            {/* CTA button */}
            <a
              href={PHONE_LINK_PRIMARY}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-5 rounded-lg transition-all hover:scale-105 shadow-lg shadow-red-600/25 flex items-center gap-2"
            >
              <PhoneIcon />
              <span className="hidden sm:inline">Zadzwoń teraz</span>
              <span className="sm:hidden">Zadzwoń</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-red-500">TIR</span> Serwis
              </h3>
              <p className="text-gray-400 text-sm">
                Profesjonalny serwis opon dla ciężarówek, busów i samochodów osobowych.
                Działamy codziennie, aby Twój pojazd był bezpieczny na drodze.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Dane kontaktowe</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p className="flex items-center gap-2"><MapPinIcon />{ADDRESS}</p>
                <a href={PHONE_LINK_PRIMARY} className="flex items-center gap-2 hover:text-red-400 font-semibold text-white text-base">
                  <PhoneIcon />{PHONE_PRIMARY}
                </a>
                <a href={PHONE_LINK_SECONDARY} className="flex items-center gap-2 hover:text-red-400">
                  <PhoneIcon />{PHONE_SECONDARY}
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-red-400">
                  <MailIcon />{EMAIL}
                </a>
                <p className="flex items-center gap-2"><ClockIcon />{HOURS}</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Napisz do nas</h4>
              <div className="flex gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-all hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-all hover:scale-110"
                  aria-label="Telegram"
                >
                  <TelegramIcon />
                </a>
              </div>
              <div className="mt-6">
                <a
                  href={PHONE_LINK_PRIMARY}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105"
                >
                  <PhoneIcon />
                  Zadzwoń: {PHONE_PRIMARY}
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} TIR Serwis. Wszystkie prawa zastrzeżone.
          </div>
        </div>
      </footer>

      {/* FLOATING MOBILE CTA - sticky bottom bar on mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 p-3 shadow-2xl">
        <div className="flex gap-2">
          <a
            href={PHONE_LINK_PRIMARY}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-lg text-center flex items-center justify-center gap-2 text-lg shadow-lg shadow-red-600/30 animate-pulse-subtle"
          >
            <PhoneIconLarge />
            Zadzwoń teraz
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-4 rounded-lg flex items-center justify-center"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
        </div>
      </div>

      {/* Spacer for floating bar on mobile */}
      <div className="h-20 md:hidden" />

      <style>{`
        @keyframes pulse-subtle {
          0%, 100% { box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3); }
          50% { box-shadow: 0 4px 25px rgba(220, 38, 38, 0.6); }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

// Icons
const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const PhoneIconLarge = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const TelegramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

export default Layout;

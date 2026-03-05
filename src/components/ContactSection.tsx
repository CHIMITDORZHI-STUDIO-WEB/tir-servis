import React from "react";
import { useApp } from "@/contexts/AppContext";

const ContactSection: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="kontakt" className="py-10 sm:py-16 md:py-24 theme-bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3">
            <span className="text-red-500">{t("contact.title1")}</span> {t("contact.title2")}
          </h2>
          <p className="theme-text-muted max-w-xl mx-auto text-sm sm:text-base">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8">
          <div className="space-y-4">
            <div className="bg-red-600/10 border border-red-500/30 rounded-xl p-4 sm:p-6">
              <h3 className="font-bold text-base sm:text-lg mb-3 flex items-center gap-2">
                <PhoneIcon /> {t("common.callUs")}
              </h3>
              <div className="space-y-2.5">
                <a href="tel:+48508796011" className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-3.5 px-4 sm:px-5 rounded-lg transition-all hover:scale-[1.02] text-base sm:text-lg shadow-lg shadow-red-600/20">
                  <PhoneIcon /> +48 508 796 011
                </a>
                <a href="tel:+48508315051" className="flex items-center gap-3 theme-bg-card hover:opacity-90 theme-border border theme-text font-bold py-2.5 sm:py-3 px-4 sm:px-5 rounded-lg transition-all text-base sm:text-lg">
                  <PhoneIcon /> +48 508 315 051
                </a>
              </div>
            </div>
            <div className="theme-bg-card theme-border border rounded-xl p-4 sm:p-6 space-y-3">
              <div className="flex items-start gap-3">
                <MapPinIcon />
                <div>
                  <p className="font-semibold text-sm">{t("common.address")}</p>
                  <p className="theme-text-muted text-xs sm:text-sm">ul. Warszawska 1, 05-310 Kałuszyn</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MailIcon />
                <div>
                  <p className="font-semibold text-sm">{t("common.email")}</p>
                  <a href="mailto:info@tirserwis.pl" className="theme-text-muted hover:text-red-500 transition text-xs sm:text-sm">info@tirserwis.pl</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ClockIcon />
                <div>
                  <p className="font-semibold text-sm">{t("common.hoursLabel")}</p>
                  <p className="theme-text-muted text-xs sm:text-sm">{t("common.hours")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ChatIcon />
                <div>
                  <p className="font-semibold text-sm">{t("common.messengers")}</p>
                  <div className="flex gap-2 mt-1.5">
                    <a href="https://wa.me/48508796011" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-full text-xs font-medium transition">WhatsApp</a>
                    <a href="https://t.me/+48508796011" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-medium transition">Telegram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="theme-bg-card theme-border border rounded-xl overflow-hidden min-h-[250px] sm:min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.5!2d21.216!3d52.192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDExJzMxLjIiTiAyMcKwMTInNTcuNiJF!5e0!3m2!1spl!2spl!4v1"
              width="100%" height="100%"
              style={{ border: 0, minHeight: "250px" }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TIR Serwis"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const PhoneIcon = () => <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const MapPinIcon = () => <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const MailIcon = () => <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const ClockIcon = () => <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ChatIcon = () => <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;

export default ContactSection;

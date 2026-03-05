import React from "react";

const benefits = [
  {
    icon: "clock",
    title: "Bez kolejki",
    description: "Zadzwoń i przyjedź — obsłużymy Cię od razu. Nie czekasz godzinami.",
  },
  {
    icon: "shield",
    title: "Gwarancja na usługi",
    description: "Każda usługa objęta gwarancją. Jeśli coś nie tak — naprawimy za darmo.",
  },
  {
    icon: "truck",
    title: "TIR-y i osobówki",
    description: "Obsługujemy wszystko — od osobówek przez busy po ciężarówki i naczepy.",
  },
  {
    icon: "wallet",
    title: "Uczciwe ceny",
    description: "Konkurencyjne ceny bez ukrytych kosztów. Wycena przez telefon.",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  clock: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  truck: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  ),
  wallet: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

const WhyUsSection: React.FC = () => {
  return (
    <section id="dlaczego-my" className="py-16 md:py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dlaczego <span className="text-red-500">klienci wybierają nas?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ponad tysiąc zadowolonych klientów. Sprawdź, co nas wyróżnia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition-all hover:-translate-y-1 group"
            >
              <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform">
                {iconMap[benefit.icon]}
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA after benefits */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Chcesz poznać cenę? Wystarczy telefon.</p>
          <a
            href="tel:+48508796011"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all hover:scale-105 shadow-lg shadow-red-600/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Zadzwoń: +48 508 796 011
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

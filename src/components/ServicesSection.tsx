import React from "react";

const services = [
  {
    title: "Wymiana opon TIR",
    description: "Profesjonalna wymiana opon dla pojazdów ciężarowych i naczep.",
    priceFrom: "od 80 zł/szt.",
  },
  {
    title: "Wymiana opon osobowe",
    description: "Szybka wymiana opon dla samochodów osobowych i SUV.",
    priceFrom: "od 25 zł/szt.",
  },
  {
    title: "Wyważanie kół",
    description: "Precyzyjne wyważanie kół na nowoczesnym sprzęcie.",
    priceFrom: "od 15 zł/szt.",
  },
  {
    title: "Naprawa opon",
    description: "Naprawa przebitych i uszkodzonych opon — szybko i trwale.",
    priceFrom: "od 30 zł",
  },
  {
    title: "Serwis mobilny",
    description: "Przyjedziemy do Ciebie! Pomoc na drodze i w bazie.",
    priceFrom: "wycena telefoniczna",
  },
  {
    title: "Przechowywanie opon",
    description: "Bezpieczne sezonowe przechowywanie opon w naszym magazynie.",
    priceFrom: "od 20 zł/mies.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="uslugi" className="py-16 md:py-24 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nasze <span className="text-red-500">usługi</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Kompleksowa obsługa opon — od osobówek po TIR-y.
            Zadzwoń, żeby poznać dokładną cenę.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition-all group"
            >
              <h3 className="text-lg font-bold mb-2 group-hover:text-red-400 transition">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-red-400 font-semibold">{service.priceFrom}</span>
                <a
                  href="tel:+48508796011"
                  className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Zapytaj o cenę
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency CTA */}
        <div className="mt-12 bg-red-600/10 border border-red-500/30 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Potrzebujesz wyceny?</h3>
          <p className="text-gray-300 mb-4">
            Dokładną cenę podamy przez telefon — to trwa mniej niż minutę.
          </p>
          <a
            href="tel:+48508796011"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all hover:scale-105 shadow-lg shadow-red-600/20 text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Zadzwoń teraz: +48 508 796 011
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

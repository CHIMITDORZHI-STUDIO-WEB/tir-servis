import React from "react";

const stats = [
  { value: "10+", label: "lat doświadczenia" },
  { value: "1000+", label: "zadowolonych klientów" },
  { value: "7/7", label: "dni w tygodniu" },
  { value: "12h", label: "dziennie do dyspozycji" },
];

const AboutSection: React.FC = () => {
  return (
    <section id="o-nas" className="py-16 md:py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O <span className="text-red-500">TIR Serwis</span>
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Jesteśmy rodzinną firmą z wieloletnim doświadczeniem w branży oponiarskiej.
                Nasz serwis w Kałuszynie obsługuje zarówno pojazdy ciężarowe (TIR-y, naczepy, busy),
                jak i samochody osobowe.
              </p>
              <p>
                Stawiamy na szybkość, jakość i uczciwość. Każdy klient jest dla nas ważny —
                niezależnie czy przyjeżdża z jedną oponą, czy z całą flotą pojazdów.
              </p>
              <p>
                Pracujemy codziennie od 8:00 do 20:00, abyś mógł przyjechać w dogodnym dla siebie terminie.
                Wystarczy telefon, żeby umówić wizytę.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+48508796011"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all hover:scale-105 shadow-lg shadow-red-600/20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Zadzwoń do nas
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-bold py-3 px-6 rounded-xl transition-all"
              >
                Znajdź nas na mapie
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-red-500/50 transition"
              >
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

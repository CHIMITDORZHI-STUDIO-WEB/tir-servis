import React from "react";

const testimonials = [
  {
    name: "Marek K.",
    role: "Kierowca TIR",
    text: "Szybka obsługa i uczciwe ceny. Zadzwoniłem, przyjechałem i po 30 minutach byłem w trasie. Polecam każdemu kierowcy!",
    rating: 5,
  },
  {
    name: "Anna W.",
    role: "Właścicielka SUV",
    text: "Pierwszy raz byłam u nich na wymianę opon i jestem bardzo zadowolona. Profesjonalna obsługa, wszystko wyjaśnili.",
    rating: 5,
  },
  {
    name: "Piotr D.",
    role: "Właściciel floty",
    text: "Obsługują naszą flotę 12 busów. Zawsze dostępni, elastyczni i punktualni. Polecam dla firm transportowych.",
    rating: 5,
  },
  {
    name: "Tomasz R.",
    role: "Kierowca osobówki",
    text: "Naprawa opony na miejscu w 15 minut. Myślałem, że trzeba kupować nową. Zaoszczędzili mi pieniądze. Super serwis!",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="opinie" className="py-16 md:py-24 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Co mówią <span className="text-red-500">nasi klienci?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Zaufały nam setki kierowców. Sprawdź ich opinie.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-500/30 transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-sm mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                <p className="text-gray-500 text-xs">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof + CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Dołącz do grona zadowolonych klientów — zadzwoń już teraz!
          </p>
          <a
            href="tel:+48508796011"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all hover:scale-105 shadow-lg shadow-red-600/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Umów się: +48 508 796 011
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

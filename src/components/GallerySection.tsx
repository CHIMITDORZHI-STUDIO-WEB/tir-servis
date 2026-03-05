import React from "react";

const galleryItems = [
  { title: "Wymiana opon TIR", alt: "Wymiana opon ciężarówki" },
  { title: "Wyważanie kół", alt: "Precyzyjne wyważanie" },
  { title: "Naprawa opony", alt: "Naprawa opony TIR" },
  { title: "Serwis mobilny", alt: "Mobilny serwis opon" },
  { title: "Nasz warsztat", alt: "Warsztat TIR Serwis" },
  { title: "Zadowolony klient", alt: "Klient TIR Serwis" },
];

const GallerySection: React.FC = () => {
  return (
    <section id="galeria" className="py-16 md:py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-red-500">Galeria</span> naszych prac
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Zobacz, jak pracujemy. Profesjonalny sprzęt i wieloletnie doświadczenie.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Placeholder — replace with real images */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-gray-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-500 text-sm">{item.alt}</span>
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-red-600/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-lg">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Chcesz zobaczyć więcej? Odwiedź nas na miejscu lub{" "}
            <a href="tel:+48508796011" className="text-red-400 hover:text-red-300 font-medium underline">
              zadzwoń
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

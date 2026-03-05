export type Lang = "pl" | "ru" | "en" | "fr" | "de" | "ua";

export const LANG_LABELS: Record<Lang, string> = {
  pl: "PL",
  ru: "RU",
  en: "EN",
  fr: "FR",
  de: "DE",
  ua: "UA",
};

export const LANG_NAMES: Record<Lang, string> = {
  pl: "Polski",
  ru: "Русский",
  en: "English",
  fr: "Français",
  de: "Deutsch",
  ua: "Українська",
};

type Translations = Record<string, Record<Lang, string>>;

const t: Translations = {

  // --- NEW NAV & SERVICES ---
  "nav.repairTrucks": { pl: "Naprawa ciężarówek", ru: "Ремонт грузовиков", en: "Truck Repair", fr: "Réparation de camions", de: "LKW-Reparatur", ua: "Ремонт вантажівок" },
  "nav.repairTrailers": { pl: "Naprawa naczep", ru: "Ремонт прицепов", en: "Trailer Repair", fr: "Réparation de remorques", de: "Auflieger-Reparatur", ua: "Ремонт причепів" },
  "nav.repairTractors": { pl: "Naprawa ciągników", ru: "Ремонт тягачей", en: "Tractor Repair", fr: "Réparation de tracteurs", de: "Sattelzug-Reparatur", ua: "Ремонт тягачів" },
  "nav.repairBody": { pl: "Naprawa blacharska", ru: "Ремонт кузова", en: "Body Repair", fr: "Carrosserie", de: "Karosseriereparatur", ua: "Ремонт кузова" },
  "nav.laserCleaning": { pl: "Czyszczenie laserowe", ru: "Лазерная очистка", en: "Laser Cleaning", fr: "Nettoyage laser", de: "Laserreinigung", ua: "Лазерне очищення" },
  "nav.otherServices": { pl: "Pozostałe usługi", ru: "Прочие услуги", en: "Other Services", fr: "Autres Services", de: "Weitere Leistungen", ua: "Інші послуги" },
  "nav.allServices": { pl: "Wszystkie usługi", ru: "Все услуги", en: "All Services", fr: "Tous les services", de: "Alle Dienstleistungen", ua: "Всі послуги" },

  // Service Page UI
  "srv.scopeOfWork": { pl: "Zakres prac", ru: "Объём работ", en: "Scope of Work", fr: "Étendue des travaux", de: "Arbeitsumfang", ua: "Обсяг робіт" },
  "srv.advantages": { pl: "Zalety", ru: "Преимущества", en: "Advantages", fr: "Avantages", de: "Vorteile", ua: "Переваги" },
  "srv.orderService": { pl: "Zamów usługę", ru: "Заказать услугу", en: "Order Service", fr: "Commander le service", de: "Dienstleistung beauftragen", ua: "Замовити послугу" },

  // --- Computer Diagnostics ---
  "srv.cd.title": { pl: "Diagnostyka komputerowa", ru: "Компьютерная диагностика", en: "Computer Diagnostics", fr: "Diagnostic Informatique", de: "Computerdiagnose", ua: "Комп'ютерна діагностика" },
  "srv.cd.desc": { pl: "Profesjonalna diagnostyka komputerowa samochodów ciężarowych przy użyciu najnowszego oprogramowania i sprzętu diagnostycznego.", ru: "Профессиональная компьютерная диагностика грузовых автомобилей с использованием новейшего ПО и диагностического оборудования.", en: "Professional computer diagnostics for trucks using the latest software and diagnostic equipment.", fr: "Diagnostic informatique professionnel pour camions utilisant les derniers logiciels et équipements de diagnostic.", de: "Professionelle Computerdiagnose für LKW mit modernster Software und Diagnosegeräten.", ua: "Професійна комп'ютерна діагностика вантажних автомобілів з використанням новітнього ПЗ та діагностичного обладнання." },
  "srv.cd.s1": { pl: "Odczyt i kasowanie błędów", ru: "Считывание и сброс ошибок", en: "Reading and clearing faults", fr: "Lecture et effacement des défauts", de: "Fehler auslesen und löschen", ua: "Зчитування та скидання помилок" },
  "srv.cd.s2": { pl: "Diagnostyka silnika i układu wydechowego", ru: "Диагностика двигателя и выхлопной системы", en: "Engine and exhaust system diagnostics", fr: "Diagnostic du moteur et du système d'échappement", de: "Diagnose von Motor und Abgasanlage", ua: "Діагностика двигуна та вихлопної системи" },
  "srv.cd.s3": { pl: "Diagnostyka układu hamulcowego", ru: "Диагностика тормозной системы", en: "Brake system diagnostics", fr: "Diagnostic du système de freinage", de: "Diagnose des Bremssystems", ua: "Діагностика гальмівної системи" },
  "srv.cd.s4": { pl: "Diagnostyka zawieszenia pneumatycznego", ru: "Диагностика пневмоподвески", en: "Air suspension diagnostics", fr: "Diagnostic de la suspension pneumatique", de: "Diagnose der Luftfederung", ua: "Діагностика пневмопідвіски" },
  "srv.cd.s5": { pl: "Diagnostyka skrzyni biegów", ru: "Диагностика коробки передач", en: "Gearbox diagnostics", fr: "Diagnostic de la boîte de vitesses", de: "Getriebediagnose", ua: "Діагностика коробки передач" },
  "srv.cd.s6": { pl: "Programowanie i kalibracja sterowników", ru: "Программирование и калибровка блоков управления", en: "Programming and calibration of control units", fr: "Programmation et calibrage des unités de contrôle", de: "Programmierung und Kalibrierung von Steuergeräten", ua: "Програмування та калібрування блоків управління" },
  "srv.cd.a1": { pl: "Nowoczesny sprzęt diagnostyczny", ru: "Современное диагностическое оборудование", en: "Modern diagnostic equipment", fr: "Équipement de diagnostic moderne", de: "Moderne Diagnosegeräte", ua: "Сучасне діагностичне обладнання" },
  "srv.cd.a2": { pl: "Obsługa wszystkich marek ciężarówek", ru: "Обслуживание всех марок грузовиков", en: "Service for all truck brands", fr: "Service pour toutes les marques de camions", de: "Service für alle LKW-Marken", ua: "Обслуговування всіх марок вантажівок" },
  "srv.cd.a3": { pl: "Szybkie wykrywanie usterek", ru: "Быстрое выявление неисправностей", en: "Quick fault detection", fr: "Détection rapide des pannes", de: "Schnelle Fehlererkennung", ua: "Швидке виявлення несправностей" },
  "srv.cd.a4": { pl: "Doświadczeni diagności", ru: "Опытные диагносты", en: "Experienced diagnosticians", fr: "Diagnostiqueurs expérimentés", de: "Erfahrene Diagnostiker", ua: "Досвідчені діагностични" },

  // --- Engine Repair ---
  "srv.er.title": { pl: "Naprawa silnika", ru: "Ремонт двигателя", en: "Engine Repair", fr: "Réparation de moteur", de: "Motorreparatur", ua: "Ремонт двигуна" },
  "srv.er.desc": { pl: "Kompleksowa naprawa i regeneracja silników samochodów ciężarowych wszystkich marek.", ru: "Комплексный ремонт и восстановление двигателей грузовых автомобилей всех марок.", en: "Comprehensive repair and regeneration of engines for trucks of all brands.", fr: "Réparation complète et régénération de moteurs pour camions de toutes marques.", de: "Umfassende Reparatur und Überholung von LKW-Motoren aller Marken.", ua: "Комплексний ремонт та відновлення двигунів вантажних автомобілів усіх марок." },
  "srv.er.s1": { pl: "Wymiana i regeneracja głowicy", ru: "Замена и восстановление ГБЦ", en: "Cylinder head replacement and regeneration", fr: "Remplacement et régénération de la culasse", de: "Austausch und Überholung des Zylinderkopfes", ua: "Заміна та відновлення ГБЦ" },
  "srv.er.s2": { pl: "Naprawa układu paliwowego", ru: "Ремонт топливной системы", en: "Fuel system repair", fr: "Réparation du système de carburant", de: "Reparatur des Kraftstoffsystems", ua: "Ремонт паливної системи" },
  "srv.er.s3": { pl: "Wymiana rozrządu", ru: "Замена ГРМ", en: "Timing gear replacement", fr: "Remplacement de la distribution", de: "Zahnriemenwechsel", ua: "Заміна ГРМ" },
  "srv.er.s4": { pl: "Naprawa turbosprężarek", ru: "Ремонт турбокомпрессоров", en: "Turbocharger repair", fr: "Réparation de turbocompresseurs", de: "Turbolader-Reparatur", ua: "Ремонт турбокомпресорів" },
  "srv.er.s5": { pl: "Wymiana uszczelnień i uszczelek", ru: "Замена уплотнений и прокладок", en: "Replacement of seals and gaskets", fr: "Remplacement des joints d'étanchéité", de: "Austausch von Dichtungen", ua: "Заміна ущільнень та прокладок" },
  "srv.er.s6": { pl: "Regulacja zaworów", ru: "Регулировка клапанов", en: "Valve adjustment", fr: "Réglage des soupapes", de: "Ventileinstellung", ua: "Регулювання клапанів" },
  "srv.er.a1": { pl: "Oryginalne części lub zamienniki wysokiej jakości", ru: "Оригинальные запчасти, а также их аналоги", en: "Original parts and high-quality alternatives", fr: "Pièces d'origine et alternatives de haute qualité", de: "Originalteile und hochwertige Alternativen", ua: "Оригінальні запчастини, а також їх аналоги" },
  "srv.er.a2": { pl: "Gwarancja na wykonane prace", ru: "Гарантия на выполненные работы", en: "Warranty on completed work", fr: "Garantie sur les travaux effectués", de: "Garantie auf ausgeführte Arbeiten", ua: "Гарантія на виконані роботи" },
  "srv.er.a3": { pl: "Krótkie terminy realizacji", ru: "Короткие сроки выполнения", en: "Short turnaround times", fr: "Délais d'exécution courts", de: "Kurze Ausführungszeiten", ua: "Короткі терміни виконання" },
  "srv.er.a4": { pl: "Konkurencyjne ceny", ru: "Конкурентные цены", en: "Competitive prices", fr: "Prix compétitifs", de: "Aussagekräftige Preise", ua: "Конкурентні ціни" },

  // --- Chassis (Ходовая) ---
  "srv.cr.title": { pl: "Naprawa podwozia", ru: "Ремонт ходовой", en: "Chassis Repair", fr: "Réparation de châssis", de: "Fahrwerksreparatur", ua: "Ремонт ходової" },
  "srv.cr.desc": { pl: "Kompleksowa naprawa zawieszenia i podwozia zwiększająca bezpieczeństwo.", ru: "Комплексный ремонт подвески и ходовой части для безопасной эксплуатации.", en: "Comprehensive suspension and chassis repair for safe operation.", fr: "Réparation complète de la suspension et du châssis.", de: "Umfassende Reparatur von Fahrwerk und Aufhängung.", ua: "Комплексний ремонт підвіски та ходової частини." },
  "srv.cr.s1": { pl: "Wymiana amortyzatorów", ru: "Замена амортизаторов", en: "Shock absorber replacement", fr: "Remplacement des amortisseurs", de: "Stoßdämpferwechsel", ua: "Заміна амортизаторів" },
  "srv.cr.s2": { pl: "Naprawa zawieszenia", ru: "Ремонт подвески", en: "Suspension repair", fr: "Réparation de suspension", de: "Aufhängungsreparatur", ua: "Ремонт підвіски" },
  "srv.cr.s3": { pl: "Wymiana sworzni i drążków kierowniczych", ru: "Замена шкворней и рулевых тяг", en: "Tie rod ends and kingpins replacement", fr: "Remplacement des rotules", de: "Austausch von Spurstangenköpfen", ua: "Заміна шворнів та рульових тяг" },
  "srv.cr.s4": { pl: "Ustawianie zbieżności kół", ru: "Регулировка схождения", en: "Wheel alignment", fr: "Géométrie des roues", de: "Achsvermessung", ua: "Регулювання розвал-сходження" },
  "srv.cr.a1": { pl: "Szybka naprawa", ru: "Оперативный ремонт", en: "Fast repair", fr: "Réparation rapide", de: "Schnelle Reparatur", ua: "Швидкий ремонт" },
  "srv.cr.a2": { pl: "Niezawodne części", ru: "Надежные запчасти", en: "Reliable parts", fr: "Pièces fiables", de: "Zuverlässige Teile", ua: "Надійні запчастини" },
  "srv.cr.a3": { pl: "Bezpieczeństwo na drodze", ru: "Безопасность на дороге", en: "Road safety", fr: "Sécurité routière", de: "Sicherheit auf der Straße", ua: "Безпека на дорозі" },

  // --- Brakes (Тормозная система) ---
  "srv.br.title": { pl: "Układ hamulcowy", ru: "Тормозная система", en: "Brake System", fr: "Système de freinage", de: "Bremssystem", ua: "Гальмівна система" },
  "srv.br.desc": { pl: "Pełen serwis hamulców dla Twojej ciężarówki i naczepy.", ru: "Полное обслуживание тормозов для вашего тягача и прицепа.", en: "Full brake service for your truck and trailer.", fr: "Service de freinage complet pour votre camion et remorque.", de: "Umfassender Bremsenservice für Ihren LKW und Auflieger.", ua: "Повне обслуговування гальм для вашого тягача та причепа." },
  "srv.br.s1": { pl: "Wymiana klocków hamulcowych", ru: "Замена тормозных колодок", en: "Brake pad replacement", fr: "Remplacement des plaquettes de frein", de: "Bremsbelagwechsel", ua: "Заміна гальмівних колодок" },
  "srv.br.s2": { pl: "Regeneracja zacisków", ru: "Ремонт суппортов", en: "Caliper repair", fr: "Réparation des étriers", de: "Bremssattelreparatur", ua: "Ремонт супортів" },
  "srv.br.s3": { pl: "Przetaczanie tarcz", ru: "Проточка дисков", en: "Brake disc machining", fr: "Usinage des disques", de: "Bremsscheiben abdrehen", ua: "Проточка дисків" },
  "srv.br.s4": { pl: "Diagnostyka układów ABS/EBS", ru: "Диагностика систем ABS/EBS", en: "ABS/EBS diagnostics", fr: "Diagnostic ABS/EBS", de: "ABS/EBS Diagnose", ua: "Діагностика систем ABS/EBS" },
  "srv.br.a1": { pl: "Gwarancja poprawnego hamowania", ru: "Гарантия уверенного торможения", en: "Confident braking guarantee", fr: "Garantie de freinage confiant", de: "Garantie für sicheres Bremsen", ua: "Гарантія впевненого гальмування" },
  "srv.br.a2": { pl: "Testy na stanowisku diagnostycznym", ru: "Проверка на стенде", en: "Diagnostic stand testing", fr: "Essai sur banc de diagnostic", de: "Prüfstand-Tests", ua: "Перевірка на стенді" },
  "srv.br.a3": { pl: "Certyfikowane płyny hamulcowe", ru: "Сертифицированные жидкости", en: "Certified fluids", fr: "Fluides certifiés", de: "Zertifizierte Bremsflüssigkeiten", ua: "Сертифіковані рідини" },

  // --- Electrics ---
  "srv.el.title": { pl: "Elektryka", ru: "Электрика", en: "Electrics", fr: "Système électrique", de: "Elektrik", ua: "Електрика" },
  "srv.el.desc": { pl: "Usuwanie usterek w układach zasilania oraz elektronice pojazdu.", ru: "Устранение неисправностей в электрических цепях и электронике автомобиля.", en: "Troubleshooting electrical circuits and vehicle electronics.", fr: "Dépannage des circuits électriques et de l'électronique du véhicule.", de: "Fehlerbehebung an elektrischen Schaltungen und der Fahrzeugelektronik.", ua: "Усунення несправностей в електричних колах та електроніці автомобіля." },
  "srv.el.s1": { pl: "Wymiana akumulatorów i sprawdzenie ładowania", ru: "Замена АКБ и проверка зарядки", en: "Battery replacement and charging check", fr: "Remplacement de batterie et test de charge", de: "Batterieaustausch und Ladekontrolle", ua: "Заміна АКБ та перевірка зарядки" },
  "srv.el.s2": { pl: "Naprawa rozruszników i alternatorów", ru: "Ремонт стартеров и генераторов", en: "Starter and alternator repair", fr: "Réparation des démarreurs et alternateurs", de: "Anlasser- und Lichtmaschinenreparatur", ua: "Ремонт стартерів та генераторів" },
  "srv.el.s3": { pl: "Naprawa oświetlenia i wiązek", ru: "Ремонт освещения и электропроводки", en: "Lighting and wiring harness repair", fr: "Réparation de l'éclairage et câblage", de: "Reparatur von Beleuchtung und Kabelbaum", ua: "Ремонт освітлення та електропроводки" },
  "srv.el.s4": { pl: "Sterowniki i moduły", ru: "Блоки управления и модули", en: "ECUs and modules", fr: "Modules et ECUs", de: "Steuergeräte und Module", ua: "Блоки управління та модулі" },
  "srv.el.a1": { pl: "Precyzyjna diagnoza problemu", ru: "Точное выявление проблемы", en: "Precise problem diagnosis", fr: "Diagnostic précis du problème", de: "Präzise Problemdiagnose", ua: "Точне виявлення проблеми" },
  "srv.el.a2": { pl: "Użycie schematów producenta", ru: "Использование заводских схем", en: "Use of manufacturer schematics", fr: "Utilisation des schémas d'origine", de: "Nutzung von Hersteller-Schaltplänen", ua: "Використання заводських схем" },
  "srv.el.a3": { pl: "Zabezpieczenia antykorozyjne", ru: "Антикоррозионная защита контактов", en: "Anti-corrosion terminal protection", fr: "Protection anti-corrosion des contacts", de: "Korrosionsschutz für Kontakte", ua: "Антикорозійний захист контактів" },

  // --- Gearbox ---
  "srv.gb.title": { pl: "Skrzynia biegów", ru: "Коробка передач", en: "Gearbox", fr: "Boîte de vitesses", de: "Getriebe", ua: "Коробка передач" },
  "srv.gb.desc": { pl: "Diagnoza i kapitalny remont manualnych oraz automatycznych skrzyń.", ru: "Диагностика и капитальный ремонт ручных и автоматических КПП.", en: "Diagnostics and overhaul of manual and automatic transmissions.", fr: "Diagnostic et révision de transmissions.", de: "Diagnose und Überholung von Getrieben.", ua: "Діагностика та капітальний ремонт ручних та автоматичних КПП." },
  "srv.gb.s1": { pl: "Wymiana sprzęgła", ru: "Замена сцепления", en: "Clutch replacement", fr: "Remplacement de l'embrayage", de: "Kupplungswechsel", ua: "Заміна зчеплення" },
  "srv.gb.s2": { pl: "Diagnostyka mechaniczna i elektroniczna", ru: "Механическая и электронная диагностика", en: "Mechanical and electronic diagnostics", fr: "Diagnostics mécaniques et électroniques", de: "Mechanische und elektronische Diagnose", ua: "Механічна та електронна діагностика" },
  "srv.gb.s3": { pl: "Wymiana łożysk i uszczelniaczy", ru: "Замена подшипников и сальников", en: "Bearing and seal replacement", fr: "Remplacement des roulements", de: "Lager- und Dichtungsaustausch", ua: "Заміна підшипників та сальників" },
  "srv.gb.s4": { pl: "Kalibracja automatycznych skrzyń", ru: "Калибровка автоматических КПП", en: "Automatic gearbox calibration", fr: "Calibrage boîte automatique", de: "Kalibrierung von Automatikgetrieben", ua: "Калібрування автоматичних КПП" },

  // --- Pneumatics ---
  "srv.pn.title": { pl: "Pneumatyka", ru: "Пневматика", en: "Pneumatics", fr: "Pneumatique", de: "Pneumatik", ua: "Пневматика" },
  "srv.pn.desc": { pl: "Usuwanie niesprawności systemów powietrznych w ciągnikach i naczepach.", ru: "Устранение неисправностей воздушных систем тягачей и прицепов.", en: "Troubleshooting air systems for tractors and trailers.", fr: "Dépannage des systèmes d'air.", de: "Behebung von Fehlern in den Luftsystemen.", ua: "Усунення несправностей повітряних систем тягачів та причепів." },
  "srv.pn.s1": { pl: "Sprawdzanie szczelności", ru: "Проверка на утечки воздуха", en: "Air leak checking", fr: "Vérification des fuites d'air", de: "Prüfung auf Luftlecks", ua: "Перевірка на витоки повітря" },
  "srv.pn.s2": { pl: "Naprawa kompresorów", ru: "Ремонт компрессоров", en: "Compressor repair", fr: "Réparation des compresseurs", de: "Kompressorreparatur", ua: "Ремонт компресорів" },
  "srv.pn.s3": { pl: "Wymiana zaworów i osuszaczy", ru: "Замена кранов и осушителей", en: "Validation valves and air dryers replacement", fr: "Changement de valves et déshydrateurs", de: "Austausch von Ventilen und Lufttrocknern", ua: "Заміна кранів та осушувачів" },
  "srv.pn.s4": { pl: "Resetowanie wskazań błędów", ru: "Снятие ошибок системы", en: "System error reset", fr: "Réinitialisation des erreurs", de: "Zurücksetzen von Systemfehlern", ua: "Зняття помилок системи" },

  // --- Service Checks ---
  "srv.sc.title": { pl: "Przeglądy", ru: "Сервисные осмотры", en: "Service Checks", fr: "Entretiens", de: "Service-Inspektionen", ua: "Сервісні огляди" },
  "srv.sc.desc": { pl: "Okresowe przeglądy techniczne flot samochodów ciężarowych.", ru: "Регулярные техосмотры для поддержания парка в идеальном состоянии.", en: "Regular technical checks to keep the fleet in top condition.", fr: "Contrôles techniques réguliers de la flotte.", de: "Regelmäßige Inspektion für LKW-Flotten.", ua: "Регулярні техогляди для підтримання парку в ідеальному стані." },
  "srv.sc.s1": { pl: "Wymiana oleju i filtrów", ru: "Замена масла и фильтров", en: "Oil and filter replacement", fr: "Vidange d'huile et filtres", de: "Öl- und Filterwechsel", ua: "Заміна масла та фільтрів" },
  "srv.sc.s2": { pl: "Smarowanie punktów i podzespołów", ru: "Шприцевание узлов", en: "Greasing and lubrication points", fr: "Graissage des pièces", de: "Abschmieren von Bauteilen", ua: "Шприцювання вузлів" },
  "srv.sc.s3": { pl: "Audyt techniczny pojazdu", ru: "Полный технический аудит", en: "Full technical audit", fr: "Audit technique complet", de: "Vollständiges technisches Gutachten", ua: "Повний технічний аудит" },
  "srv.sc.s4": { pl: "Przygotowanie do przeglądu UDT", ru: "Подготовка к сертификации", en: "Preparation for certification", fr: "Préparation pour la certification", de: "Vorbereitung auf Zertifizierungen", ua: "Підготовка до сертифікації" },

  // --- Buses ---
  "srv.bs.title": { pl: "Autobusy", ru: "Автобусы", en: "Buses", fr: "Bus", de: "Busse", ua: "Автобуси" },
  "srv.bs.desc": { pl: "Zaawansowany serwis i naprawa autokarów na najwyższym poziomie.", ru: "Передовое обслуживание и ремонт автобусов всех конфигураций.", en: "Advanced maintenance and repair for buses of all configurations.", fr: "Maintenance et réparation avancées pour les bus.", de: "Erweiterte Wartung und Reparatur für Busse.", ua: "Передове обслуговування та ремонт автобусів усіх конфігурацій." },
  "srv.bs.s1": { pl: "Naprawa systemów drzwi", ru: "Сервис дверных механизмов", en: "Door mechanism service", fr: "Réparation des mécanismes de portes", de: "Wartung der Türmechanismen", ua: "Сервіс дверних механізмів" },
  "srv.bs.s2": { pl: "Diagnostyka układów klimatyzacji", ru: "Диагностика систем кондиционирования", en: "AC system diagnostics", fr: "Diagnostic de la climatisation", de: "Diagnose der Klimaanlage", ua: "Діагностика систем кондиціонування" },
  "srv.bs.s3": { pl: "Zawieszenie poziomujące", ru: "Ремонт пневмосистемы уровня пола", en: "Leveling suspension repair", fr: "Réparation de la suspension de mise à niveau", de: "Reparatur der Niveauregulierung", ua: "Ремонт пневмосистеми рівня підлоги" },
  "srv.bs.s4": { pl: "Generalne przeglądy wnętrz", ru: "Комплексные осмотры технического состояния", en: "Comprehensive technical inspections", fr: "Inspections techniques générales", de: "Umfassende technische Inspektion", ua: "Комплексні огляди технічного стану" },

  // --- Agriculture Tech ---
  "srv.ag.title": { pl: "Maszyny rolnicze", ru: "Сельхозтехника", en: "Agricultural Tech", fr: "Machines agricoles", de: "Landmaschinen", ua: "Сільгосптехніка" },
  "srv.ag.desc": { pl: "Profesjonalna naprawa maszyn rolniczych minimalizująca przestoje w polu.", ru: "Профессиональный ремонт сельскохозяйственной техники для сезона.", en: "Pro repair of agricultural machinery to minimize field downtime.", fr: "Réparation pro de matériel agricole pour la saison.", de: "Professionelle Reparatur von Landmaschinen.", ua: "Професійний ремонт сільськогосподарської техніки." },
  "srv.ag.s1": { pl: "Serwis silników i hydrauliki", ru: "Обслуживание двигателей и гидравлики", en: "Engine and hydraulics service", fr: "Entretien des moteurs et de l'hydraulique", de: "Motor- und Hydraulikservice", ua: "Обслуговування двигунів та гідравліки" },
  "srv.ag.s2": { pl: "Regeneracja podzespołów zębatych", ru: "Ремонт редукторов и передач", en: "Gearbox and transmission repair", fr: "Réparation des engrenages", de: "Getriebereparatur", ua: "Ремонт редукторів та передач" },
  "srv.ag.s3": { pl: "Klimatyzacja kabin", ru: "Сервис кондиционеров тракторов", en: "Tractor AC servicing", fr: "Climatisation des tracteurs", de: "Klimaservice für Traktoren", ua: "Сервіс кондиціонерів тракторів" },
  "srv.ag.s4": { pl: "Części rolnicze i zamienniki", ru: "Поиск аналогов и узлов", en: "Finding part replacements", fr: "Recherche de pièces", de: "Beschaffung von Ersatzteilen", ua: "Пошук аналогів та вузлів" },

  // --- Spare Parts ---
  "srv.pt.title": { pl: "Części zamienne", ru: "Запчасти", en: "Spare Parts", fr: "Pièces de rechange", de: "Ersatzteile", ua: "Запчастини" },
  "srv.pt.desc": { pl: "Tylko oficjalne dostawy. Gwarantujemy najszerszy dostępny wybór komponentów.", ru: "Только сертифицированные детали с гарантией напрямую со склада.", en: "Only certified parts with a warranty direct from the warehouse.", fr: "Uniquement des pièces certifiées en stock.", de: "Nur zertifizierte Teile mit Garantie direkt ab Lager.", ua: "Тільки сертифіковані деталі з гарантією безпосередньо зі складу." },
  "srv.pt.s1": { pl: "Dostępność na miejscu", ru: "Широкое наличие на складе", en: "Wide stock availability", fr: "Disponibilité en stock", de: "Große Lagerverfügbarkeit", ua: "Широка наявність на складі" },
  "srv.pt.s2": { pl: "Dobór po VIN", ru: "Подбор по VIN-коду автомобилей", en: "VIN-based part matching", fr: "Sélection de pièces par VIN", de: "Ersatzteilbestellung nach VIN", ua: "Підбір за VIN-кодом" },
  "srv.pt.s3": { pl: "Części oryginalne OE", ru: "Оригинальные заводские запчасти", en: "Original factory parts (OE)", fr: "Pièces d'origine (OE)", de: "Original-Ersatzteile (OE)", ua: "Оригінальні заводські запчастини" },
  "srv.pt.s4": { pl: "Sprzedaż zamienników premium", ru: "Сотрудничество с лучшими аналогами", en: "Working with premium alternative brands", fr: "Pièces de marques alternatives", de: "Teile von Premium-Zubehörmarken", ua: "Співпраця з кращими аналогами" },
  "srv.pt.a1": { pl: "Bezproblemowa gwarancja", ru: "Гарантия на каждую деталь", en: "Warranty per part", fr: "Garantie de qualité", de: "Teilegarantie", ua: "Гарантія на кожну деталь" },
  "srv.pt.a2": { pl: "Natychmiastowa instalacja", ru: "Возможность быстрой установки", en: "Fast installation available", fr: "Installation rapide", de: "Schnelle Installation möglich", ua: "Можливість швидкого встановлення" },
  "srv.pt.a3": { pl: "Optymalizacja kosztów serwisu", ru: "Оптимизация бюджета на ремонт", en: "Repair budget optimization", fr: "Optimisation de votre budget", de: "Optimierung des Reparaturbudgets", ua: "Оптимізація бюджету на ремонт" },


  // Nav
  "nav.services": { pl: "Usługi", ru: "Услуги", en: "Services", fr: "Services", de: "Leistungen", ua: "Послуги" },
  "nav.whyUs": { pl: "Dlaczego my", ru: "Почему мы", en: "Why us", fr: "Pourquoi nous", de: "Warum wir", ua: "Чому ми" },
  "nav.gallery": { pl: "Galeria", ru: "Галерея", en: "Gallery", fr: "Galerie", de: "Galerie", ua: "Галерея" },
  "nav.reviews": { pl: "Opinie", ru: "Отзывы", en: "Reviews", fr: "Avis", de: "Bewertungen", ua: "Відгуки" },
  "nav.contact": { pl: "Kontakt", ru: "Контакты", en: "Contact", fr: "Contact", de: "Kontakt", ua: "Контакти" },

  // Common
  "common.callNow": { pl: "Zadzwoń teraz", ru: "Позвоните сейчас", en: "Call now", fr: "Appelez maintenant", de: "Jetzt anrufen", ua: "Зателефонуйте зараз" },
  "common.call": { pl: "Zadzwoń", ru: "Позвонить", en: "Call", fr: "Appeler", de: "Anrufen", ua: "Зателефонувати" },
  "common.callUs": { pl: "Zadzwoń do nas", ru: "Позвоните нам", en: "Call us", fr: "Appelez-nous", de: "Rufen Sie uns an", ua: "Зателефонуйте нам" },
  "common.phone": { pl: "Telefon", ru: "Телефон", en: "Phone", fr: "Téléphone", de: "Telefon", ua: "Телефон" },
  "common.secondPhone": { pl: "Drugi numer", ru: "Второй номер", en: "Second number", fr: "Deuxième numéro", de: "Zweite Nummer", ua: "Другий номер" },
  "common.address": { pl: "Adres", ru: "Адрес", en: "Address", fr: "Adresse", de: "Adresse", ua: "Адреса" },
  "common.email": { pl: "Email", ru: "Email", en: "Email", fr: "Email", de: "E-Mail", ua: "Email" },
  "common.hours": { pl: "codziennie: 8:00 - 20:00", ru: "ежедневно: 8:00 - 20:00", en: "daily: 8:00 - 20:00", fr: "tous les jours: 8:00 - 20:00", de: "täglich: 8:00 - 20:00", ua: "щоденно: 8:00 - 20:00" },
  "common.hoursLabel": { pl: "Godziny otwarcia", ru: "Часы работы", en: "Opening hours", fr: "Heures d'ouverture", de: "Öffnungszeiten", ua: "Години роботи" },
  "common.messengers": { pl: "Komunikatory", ru: "Мессенджеры", en: "Messengers", fr: "Messageries", de: "Messenger", ua: "Месенджери" },
  "common.askPrice": { pl: "Zapytaj o cenę", ru: "Узнать цену", en: "Ask for price", fr: "Demander le prix", de: "Preis anfragen", ua: "Дізнатися ціну" },
  "common.allRights": { pl: "Wszystkie prawa zastrzeżone", ru: "Все права защищены", en: "All rights reserved", fr: "Tous droits réservés", de: "Alle Rechte vorbehalten", ua: "Всі права захищені" },

  // Hero
  "hero.badge": { pl: "Pracujemy teraz — zadzwoń od razu!", ru: "Работаем сейчас — звоните!", en: "We're open — call now!", fr: "Nous sommes ouverts — appelez!", de: "Wir sind geöffnet — rufen Sie an!", ua: "Працюємо зараз — телефонуйте!" },
  "hero.title1": { pl: "Profesjonalny serwis opon", ru: "Профессиональный шиномонтаж", en: "Professional tire service", fr: "Service professionnel de pneus", de: "Professioneller Reifenservice", ua: "Професійний шиномонтаж" },
  "hero.title2": { pl: "dla TIR-ów i osobówek", ru: "для грузовиков и легковых", en: "for trucks and cars", fr: "pour camions et voitures", de: "für LKW und PKW", ua: "для вантажівок та легкових" },
  "hero.subtitle": { pl: "Wymiana, naprawa i wyważanie opon. Kałuszyn, ul. Warszawska 1. Obsługujemy pojazdy ciężarowe, dostawcze i osobowe.", ru: "Замена, ремонт и балансировка шин. Калушин, ул. Варшавская 1. Обслуживаем грузовые, доставочные и легковые автомобили.", en: "Tire replacement, repair and balancing. Kałuszyn, ul. Warszawska 1. We service trucks, vans and passenger cars.", fr: "Remplacement, réparation et équilibrage de pneus. Kałuszyn, ul. Warszawska 1. Nous desservons camions, fourgons et voitures.", de: "Reifenwechsel, Reparatur und Auswuchten. Kałuszyn, ul. Warszawska 1. Wir bedienen LKW, Transporter und PKW.", ua: "Заміна, ремонт та балансування шин. Калушин, вул. Варшавська 1. Обслуговуємо вантажівки, мікроавтобуси та легкові авто." },
  "hero.trust1": { pl: "Codziennie 8:00–20:00", ru: "Ежедневно 8:00–20:00", en: "Daily 8:00–20:00", fr: "Tous les jours 8:00–20:00", de: "Täglich 8:00–20:00", ua: "Щоденно 8:00–20:00" },
  "hero.trust2": { pl: "Serwis mobilny", ru: "Мобильный сервис", en: "Mobile service", fr: "Service mobile", de: "Mobiler Service", ua: "Мобільний сервіс" },
  "hero.trust3": { pl: "Bez kolejki — zadzwoń", ru: "Без очереди — звоните", en: "No queue — just call", fr: "Sans file d'attente — appelez", de: "Ohne Wartezeit — anrufen", ua: "Без черги — телефонуйте" },

  // Why us
  "why.title1": { pl: "Dlaczego", ru: "Почему", en: "Why", fr: "Pourquoi", de: "Warum", ua: "Чому" },
  "why.title2": { pl: "klienci wybierają nas?", ru: "клиенты выбирают нас?", en: "clients choose us?", fr: "les clients nous choisissent?", de: "Kunden uns wählen?", ua: "клієнти обирають нас?" },
  "why.subtitle": { pl: "Ponad tysiąc zadowolonych klientów. Sprawdź, co nas wyróżnia.", ru: "Более тысячи довольных клиентов. Узнайте, чем мы отличаемся.", en: "Over a thousand satisfied clients. See what sets us apart.", fr: "Plus de mille clients satisfaits. Découvrez ce qui nous distingue.", de: "Über tausend zufriedene Kunden. Sehen Sie, was uns auszeichnet.", ua: "Понад тисячу задоволених клієнтів. Дізнайтесь, чим ми відрізняємось." },
  "why.b1.title": { pl: "Bez kolejki", ru: "Без очереди", en: "No queue", fr: "Sans file d'attente", de: "Ohne Wartezeit", ua: "Без черги" },
  "why.b1.desc": { pl: "Zadzwoń i przyjedź — obsłużymy Cię od razu. Nie czekasz godzinami.", ru: "Позвоните и приезжайте — обслужим сразу. Не ждёте часами.", en: "Call and come — we'll serve you right away. No hours of waiting.", fr: "Appelez et venez — nous vous servirons immédiatement. Sans attendre.", de: "Anrufen und kommen — wir bedienen Sie sofort. Kein stundenlanges Warten.", ua: "Зателефонуйте і приїжджайте — обслужимо одразу. Не чекаєте годинами." },
  "why.b2.title": { pl: "Gwarancja na usługi", ru: "Гарантия на услуги", en: "Service warranty", fr: "Garantie de service", de: "Servicegarantie", ua: "Гарантія на послуги" },
  "why.b2.desc": { pl: "Każda usługa objęta gwarancją. Jeśli coś nie tak — naprawimy za darmo.", ru: "Каждая услуга с гарантией. Если что-то не так — исправим бесплатно.", en: "Every service comes with a warranty. If something's wrong — we fix it free.", fr: "Chaque service est garanti. Si quelque chose ne va pas — nous le réparons gratuitement.", de: "Jeder Service mit Garantie. Wenn etwas nicht stimmt — reparieren wir kostenlos.", ua: "Кожна послуга з гарантією. Якщо щось не так — виправимо безкоштовно." },
  "why.b3.title": { pl: "TIR-y i osobówki", ru: "Грузовые и легковые", en: "Trucks and cars", fr: "Camions et voitures", de: "LKW und PKW", ua: "Вантажівки та легкові" },
  "why.b3.desc": { pl: "Obsługujemy wszystko — od osobówek przez busy po ciężarówki i naczepy.", ru: "Обслуживаем всё — от легковых через микроавтобусы до грузовиков и полуприцепов.", en: "We handle everything — from cars to vans, trucks and trailers.", fr: "Nous traitons tout — des voitures aux fourgons, camions et remorques.", de: "Wir bedienen alles — vom PKW über Transporter bis zum LKW und Auflieger.", ua: "Обслуговуємо все — від легкових через мікроавтобуси до вантажівок та напівпричепів." },
  "why.b4.title": { pl: "Uczciwe ceny", ru: "Честные цены", en: "Fair prices", fr: "Prix honnêtes", de: "Faire Preise", ua: "Чесні ціни" },
  "why.b4.desc": { pl: "Konkurencyjne ceny bez ukrytych kosztów. Wycena przez telefon.", ru: "Конкурентные цены без скрытых платежей. Оценка по телефону.", en: "Competitive prices with no hidden fees. Quote over the phone.", fr: "Prix compétitifs sans frais cachés. Devis par téléphone.", de: "Wettbewerbsfähige Preise ohne versteckte Kosten. Angebot per Telefon.", ua: "Конкурентні ціни без прихованих платежів. Оцінка по телефону." },
  "why.cta": { pl: "Chcesz poznać cenę? Wystarczy telefon.", ru: "Хотите узнать цену? Просто позвоните.", en: "Want to know the price? Just call.", fr: "Vous voulez connaître le prix? Appelez.", de: "Sie möchten den Preis wissen? Einfach anrufen.", ua: "Хочете дізнатися ціну? Просто зателефонуйте." },

  // Services
  "svc.title1": { pl: "Nasze", ru: "Наши", en: "Our", fr: "Nos", de: "Unsere", ua: "Наші" },
  "svc.title2": { pl: "usługi", ru: "услуги", en: "services", fr: "services", de: "Leistungen", ua: "послуги" },
  "svc.subtitle": { pl: "Kompleksowa obsługa opon — od osobówek po TIR-y. Zadzwoń, żeby poznać dokładną cenę.", ru: "Комплексное обслуживание шин — от легковых до грузовых. Позвоните, чтобы узнать точную цену.", en: "Complete tire service — from cars to trucks. Call for an exact quote.", fr: "Service complet de pneus — des voitures aux camions. Appelez pour un devis.", de: "Kompletter Reifenservice — vom PKW bis zum LKW. Rufen Sie an für ein genaues Angebot.", ua: "Комплексне обслуговування шин — від легкових до вантажних. Зателефонуйте для точної ціни." },
  "svc.s1.title": { pl: "Wymiana opon TIR", ru: "Замена шин грузовых", en: "Truck tire replacement", fr: "Changement pneus camion", de: "LKW-Reifenwechsel", ua: "Заміна шин вантажних" },
  "svc.s1.desc": { pl: "Profesjonalna wymiana opon dla pojazdów ciężarowych i naczep.", ru: "Профессиональная замена шин для грузовых автомобилей и полуприцепов.", en: "Professional tire replacement for trucks and trailers.", fr: "Changement professionnel de pneus pour camions et remorques.", de: "Professioneller Reifenwechsel für LKW und Auflieger.", ua: "Професійна заміна шин для вантажівок та напівпричепів." },
  "svc.s1.price": { pl: "od 80 zł/szt.", ru: "от 80 зл/шт.", en: "from 80 PLN/pc.", fr: "à partir de 80 PLN/pc.", de: "ab 80 PLN/Stk.", ua: "від 80 зл/шт." },
  "svc.s2.title": { pl: "Wymiana opon osobowe", ru: "Замена шин легковых", en: "Car tire replacement", fr: "Changement pneus voiture", de: "PKW-Reifenwechsel", ua: "Заміна шин легкових" },
  "svc.s2.desc": { pl: "Szybka wymiana opon dla samochodów osobowych i SUV.", ru: "Быстрая замена шин для легковых автомобилей и внедорожников.", en: "Fast tire replacement for cars and SUVs.", fr: "Changement rapide de pneus pour voitures et SUV.", de: "Schneller Reifenwechsel für PKW und SUV.", ua: "Швидка заміна шин для легкових авто та позашляховиків." },
  "svc.s2.price": { pl: "od 25 zł/szt.", ru: "от 25 зл/шт.", en: "from 25 PLN/pc.", fr: "à partir de 25 PLN/pc.", de: "ab 25 PLN/Stk.", ua: "від 25 зл/шт." },
  "svc.s3.title": { pl: "Wyważanie kół", ru: "Балансировка колёс", en: "Wheel balancing", fr: "Équilibrage des roues", de: "Radauswuchten", ua: "Балансування коліс" },
  "svc.s3.desc": { pl: "Precyzyjne wyważanie kół na nowoczesnym sprzęcie.", ru: "Точная балансировка колёс на современном оборудовании.", en: "Precise wheel balancing on modern equipment.", fr: "Équilibrage précis des roues sur équipement moderne.", de: "Präzises Radauswuchten auf modernen Geräten.", ua: "Точне балансування коліс на сучасному обладнанні." },
  "svc.s3.price": { pl: "od 15 zł/szt.", ru: "от 15 зл/шт.", en: "from 15 PLN/pc.", fr: "à partir de 15 PLN/pc.", de: "ab 15 PLN/Stk.", ua: "від 15 зл/шт." },
  "svc.s4.title": { pl: "Naprawa opon", ru: "Ремонт шин", en: "Tire repair", fr: "Réparation de pneus", de: "Reifenreparatur", ua: "Ремонт шин" },
  "svc.s4.desc": { pl: "Naprawa przebitych i uszkodzonych opon — szybko i trwale.", ru: "Ремонт проколотых и повреждённых шин — быстро и надёжно.", en: "Repair of punctured and damaged tires — fast and durable.", fr: "Réparation de pneus crevés et endommagés — rapide et durable.", de: "Reparatur von platten und beschädigten Reifen — schnell und dauerhaft.", ua: "Ремонт проколотих та пошкоджених шин — швидко та надійно." },
  "svc.s4.price": { pl: "od 30 zł", ru: "от 30 зл", en: "from 30 PLN", fr: "à partir de 30 PLN", de: "ab 30 PLN", ua: "від 30 зл" },
  "svc.s5.title": { pl: "Serwis mobilny", ru: "Мобильный сервис", en: "Mobile service", fr: "Service mobile", de: "Mobiler Service", ua: "Мобільний сервіс" },
  "svc.s5.desc": { pl: "Przyjedziemy do Ciebie! Pomoc na drodze i w bazie.", ru: "Приедем к вам! Помощь на дороге и на базе.", en: "We come to you! Roadside and on-site assistance.", fr: "Nous venons à vous! Assistance routière et sur site.", de: "Wir kommen zu Ihnen! Pannen- und Vor-Ort-Service.", ua: "Приїдемо до вас! Допомога на дорозі та на базі." },
  "svc.s5.price": { pl: "wycena telefoniczna", ru: "оценка по телефону", en: "phone quote", fr: "devis téléphonique", de: "telefonisches Angebot", ua: "оцінка по телефону" },
  "svc.s6.title": { pl: "Przechowywanie opon", ru: "Хранение шин", en: "Tire storage", fr: "Stockage de pneus", de: "Reifenlagerung", ua: "Зберігання шин" },
  "svc.s6.desc": { pl: "Bezpieczne sezonowe przechowywanie opon w naszym magazynie.", ru: "Безопасное сезонное хранение шин на нашем складе.", en: "Safe seasonal tire storage in our warehouse.", fr: "Stockage saisonnier sécurisé dans notre entrepôt.", de: "Sichere saisonale Reifenlagerung in unserem Lager.", ua: "Безпечне сезонне зберігання шин на нашому складі." },
  "svc.s6.price": { pl: "od 20 zł/mies.", ru: "от 20 зл/мес.", en: "from 20 PLN/mo.", fr: "à partir de 20 PLN/mois", de: "ab 20 PLN/Mon.", ua: "від 20 зл/міс." },
  "svc.needQuote": { pl: "Potrzebujesz wyceny?", ru: "Нужна оценка?", en: "Need a quote?", fr: "Besoin d'un devis?", de: "Brauchen Sie ein Angebot?", ua: "Потрібна оцінка?" },
  "svc.quoteDesc": { pl: "Dokładną cenę podamy przez telefon — to trwa mniej niż minutę.", ru: "Точную цену скажем по телефону — это займёт меньше минуты.", en: "We'll give you an exact price over the phone — takes less than a minute.", fr: "Nous vous donnerons un prix exact par téléphone — en moins d'une minute.", de: "Den genauen Preis nennen wir Ihnen am Telefon — dauert weniger als eine Minute.", ua: "Точну ціну скажемо по телефону — це займе менше хвилини." },

  // Gallery
  "gal.title1": { pl: "Galeria", ru: "Галерея", en: "Gallery", fr: "Galerie", de: "Galerie", ua: "Галерея" },
  "gal.title2": { pl: "naszych prac", ru: "наших работ", en: "of our work", fr: "de nos travaux", de: "unserer Arbeit", ua: "наших робіт" },
  "gal.subtitle": { pl: "Zobacz, jak pracujemy. Profesjonalny sprzęt i wieloletnie doświadczenie.", ru: "Посмотрите, как мы работаем. Профессиональное оборудование и многолетний опыт.", en: "See how we work. Professional equipment and years of experience.", fr: "Découvrez comment nous travaillons. Équipement professionnel et années d'expérience.", de: "Sehen Sie, wie wir arbeiten. Professionelle Ausrüstung und jahrelange Erfahrung.", ua: "Подивіться, як ми працюємо. Професійне обладнання та багаторічний досвід." },
  "gal.item1": { pl: "Wymiana opon TIR", ru: "Замена шин грузовых", en: "Truck tire change", fr: "Changement pneus camion", de: "LKW-Reifenwechsel", ua: "Заміна шин вантажних" },
  "gal.item2": { pl: "Wyważanie kół", ru: "Балансировка колёс", en: "Wheel balancing", fr: "Équilibrage des roues", de: "Radauswuchten", ua: "Балансування коліс" },
  "gal.item3": { pl: "Naprawa opony", ru: "Ремонт шин", en: "Tire repair", fr: "Réparation de pneu", de: "Reifenreparatur", ua: "Ремонт шин" },
  "gal.item4": { pl: "Serwis mobilny", ru: "Мобильный сервис", en: "Mobile service", fr: "Service mobile", de: "Mobiler Service", ua: "Мобільний сервіс" },
  "gal.item5": { pl: "Nasz warsztat", ru: "Наша мастерская", en: "Our workshop", fr: "Notre atelier", de: "Unsere Werkstatt", ua: "Наша майстерня" },
  "gal.item6": { pl: "Zadowolony klient", ru: "Довольный клиент", en: "Happy client", fr: "Client satisfait", de: "Zufriedener Kunde", ua: "Задоволений клієнт" },
  "gal.more": { pl: "Chcesz zobaczyć więcej? Odwiedź nas lub", ru: "Хотите увидеть больше? Посетите нас или", en: "Want to see more? Visit us or", fr: "Vous voulez en voir plus? Visitez-nous ou", de: "Mehr sehen? Besuchen Sie uns oder", ua: "Хочете побачити більше? Відвідайте нас або" },
  "gal.callLink": { pl: "zadzwoń", ru: "позвоните", en: "call us", fr: "appelez-nous", de: "rufen Sie an", ua: "зателефонуйте" },

  // Testimonials
  "rev.title1": { pl: "Co mówią", ru: "Что говорят", en: "What", fr: "Ce que disent", de: "Was sagen", ua: "Що кажуть" },
  "rev.title2": { pl: "nasi klienci?", ru: "наши клиенты?", en: "our clients say?", fr: "nos clients?", de: "unsere Kunden?", ua: "наші клієнти?" },
  "rev.subtitle": { pl: "Zaufały nam setki kierowców. Sprawdź ich opinie.", ru: "Нам доверяют сотни водителей. Посмотрите их отзывы.", en: "Hundreds of drivers trust us. Check their reviews.", fr: "Des centaines de chauffeurs nous font confiance. Lisez leurs avis.", de: "Hunderte Fahrer vertrauen uns. Lesen Sie ihre Bewertungen.", ua: "Нам довіряють сотні водіїв. Перегляньте їх відгуки." },
  "rev.r1.name": { pl: "Marek K.", ru: "Марек К.", en: "Marek K.", fr: "Marek K.", de: "Marek K.", ua: "Марек К." },
  "rev.r1.role": { pl: "Kierowca TIR", ru: "Водитель грузовика", en: "Truck driver", fr: "Chauffeur routier", de: "LKW-Fahrer", ua: "Водій вантажівки" },
  "rev.r1.text": { pl: "Szybka obsługa i uczciwe ceny. Zadzwoniłem, przyjechałem i po 30 minutach byłem w trasie. Polecam każdemu kierowcy!", ru: "Быстрое обслуживание и честные цены. Позвонил, приехал — через 30 минут был в пути. Рекомендую каждому водителю!", en: "Fast service and fair prices. I called, came in, and was back on the road in 30 minutes. Recommend to every driver!", fr: "Service rapide et prix honnêtes. J'ai appelé, je suis venu et en 30 minutes j'étais de retour sur la route. Je recommande!", de: "Schneller Service und faire Preise. Ich rief an, kam vorbei und war in 30 Minuten wieder unterwegs. Empfehle ich jedem Fahrer!", ua: "Швидке обслуговування та чесні ціни. Зателефонував, приїхав — через 30 хвилин був у дорозі. Рекомендую кожному водію!" },
  "rev.r2.name": { pl: "Anna W.", ru: "Анна В.", en: "Anna W.", fr: "Anna W.", de: "Anna W.", ua: "Анна В." },
  "rev.r2.role": { pl: "Właścicielka SUV", ru: "Владелица внедорожника", en: "SUV owner", fr: "Propriétaire de SUV", de: "SUV-Besitzerin", ua: "Власниця позашляховика" },
  "rev.r2.text": { pl: "Pierwszy raz byłam u nich na wymianę opon i jestem bardzo zadowolona. Profesjonalna obsługa, wszystko wyjaśnili.", ru: "Первый раз была у них на замене шин — очень довольна. Профессиональное обслуживание, всё объяснили.", en: "First time here for a tire change and I'm very satisfied. Professional service, they explained everything.", fr: "Première visite pour un changement de pneus et je suis très satisfaite. Service professionnel, tout expliqué.", de: "Zum ersten Mal hier zum Reifenwechsel und sehr zufrieden. Professioneller Service, alles erklärt.", ua: "Вперше була у них на заміні шин — дуже задоволена. Професійне обслуговування, все пояснили." },
  "rev.r3.name": { pl: "Piotr D.", ru: "Пётр Д.", en: "Piotr D.", fr: "Piotr D.", de: "Piotr D.", ua: "Пьотр Д." },
  "rev.r3.role": { pl: "Właściciel floty", ru: "Владелец автопарка", en: "Fleet owner", fr: "Propriétaire de flotte", de: "Flottenbesitzer", ua: "Власник автопарку" },
  "rev.r3.text": { pl: "Obsługują naszą flotę 12 busów. Zawsze dostępni, elastyczni i punktualni. Polecam dla firm transportowych.", ru: "Обслуживают наш парк из 12 микроавтобусов. Всегда доступны, гибкие и пунктуальные. Рекомендую транспортным компаниям.", en: "They service our fleet of 12 vans. Always available, flexible and punctual. Recommend for transport companies.", fr: "Ils entretiennent notre flotte de 12 fourgons. Toujours disponibles, flexibles et ponctuels. Recommandé pour les entreprises de transport.", de: "Sie betreuen unsere Flotte von 12 Transportern. Immer verfügbar, flexibel und pünktlich. Empfohlen für Transportunternehmen.", ua: "Обслуговують наш парк з 12 мікроавтобусів. Завжди доступні, гнучкі та пунктуальні. Рекомендую транспортним компаніям." },
  "rev.r4.name": { pl: "Tomasz R.", ru: "Томаш Р.", en: "Tomasz R.", fr: "Tomasz R.", de: "Tomasz R.", ua: "Томаш Р." },
  "rev.r4.role": { pl: "Kierowca osobówki", ru: "Водитель легковой", en: "Car driver", fr: "Conducteur", de: "Autofahrer", ua: "Водій легкового авто" },
  "rev.r4.text": { pl: "Naprawa opony na miejscu w 15 minut. Myślałem, że trzeba kupować nową. Zaoszczędzili mi pieniądze. Super serwis!", ru: "Ремонт шины на месте за 15 минут. Думал, придётся покупать новую. Сэкономили мне деньги. Супер сервис!", en: "Tire repair on the spot in 15 minutes. I thought I'd need a new one. Saved me money. Great service!", fr: "Réparation du pneu sur place en 15 minutes. Je pensais devoir en acheter un nouveau. Ils m'ont fait économiser. Super service!", de: "Reifenreparatur vor Ort in 15 Minuten. Ich dachte, ich müsste einen neuen kaufen. Hat mir Geld gespart. Toller Service!", ua: "Ремонт шини на місці за 15 хвилин. Думав, доведеться купувати нову. Заощадили мені гроші. Супер сервіс!" },
  "rev.cta": { pl: "Dołącz do grona zadowolonych klientów — zadzwoń już teraz!", ru: "Присоединяйтесь к довольным клиентам — звоните прямо сейчас!", en: "Join our happy clients — call right now!", fr: "Rejoignez nos clients satisfaits — appelez maintenant!", de: "Werden Sie Teil unserer zufriedenen Kunden — rufen Sie jetzt an!", ua: "Приєднуйтесь до задоволених клієнтів — телефонуйте прямо зараз!" },
  "rev.bookCta": { pl: "Umów się", ru: "Записаться", en: "Book now", fr: "Réserver", de: "Termin buchen", ua: "Записатися" },

  // About
  "about.title1": { pl: "O", ru: "О", en: "About", fr: "À propos de", de: "Über", ua: "Про" },
  "about.title2": { pl: "TIR Serwis", ru: "TIR Serwis", en: "TIR Serwis", fr: "TIR Serwis", de: "TIR Serwis", ua: "TIR Serwis" },
  "about.p1": { pl: "Kompleksowy serwis samochodów ciężarowych, naczep, przyczep i maszyn rolniczych. TIR Serwis to profesjonalny warsztat specjalizujący się w naprawie i konserwacji samochodów ciężarowych, naczep, przyczep, autobusów i maszyn rolniczych.", ru: "Комплексный сервис грузовых автомобилей, полуприцепов, прицепов и сельхозтехники. TIR Serwis — профессиональная мастерская, специализирующаяся на ремонте и обслуживании грузовых автомобилей, полуприцепов, прицепов, автобусов и сельхозтехники.", en: "Comprehensive service for trucks, semi-trailers, trailers, and agricultural machinery. TIR Serwis is a professional workshop specializing in the repair and maintenance of trucks, semi-trailers, trailers, buses, and agricultural equipment.", fr: "Service complet pour camions, semi-remorques, remorques et machines agricoles. TIR Serwis est un atelier professionnel spécialisé dans la réparation et l'entretien de camions, semi-remorques, remorques, bus et équipements agricoles.", de: "Umfassender Service für LKW, Auflieger, Anhänger und Landmaschinen. TIR Serwis ist eine professionelle Werkstatt, die sich auf die Reparatur und Wartung von LKW, Aufliegern, Anhängern, Bussen und landwirtschaftlichen Geräten spezialisiert hat.", ua: "Комплексний сервіс вантажних автомобілів, напівпричепів, причепів та сільгосптехніки. TIR Serwis — професійна майстерня, що спеціалізується на ремонті та обслуговуванні вантажних автомобілів, напівпричепів, причепів, автобусів та сільгосптехніки." },
  "about.p2": { pl: "Działamy w Kałuszynie i okolicach — obsługujemy również Klientów z Mińska Mazowieckiego, Warszawy i Siedlec, zapewniając kompleksowe zaplecze serwisowe dla transportu ciężkiego.", ru: "Мы работаем в Калушине и окрестностях — обслуживаем также клиентов из Минска-Мазовецкого, Варшавы и Седльце, предоставляя комплексные сервисные услуги для тяжёлого транспорта.", en: "We operate in Kałuszyn and the surrounding areas – we also serve clients from Mińsk Mazowiecki, Warsaw, and Siedlce, providing comprehensive service facilities for heavy transport.", fr: "Nous intervenons à Kałuszyn et dans les environs – nous servons également des clients de Mińsk Mazowiecki, de Varsovie et de Siedlce, en fournissant des installations de service complètes pour le transport lourd.", de: "Wir sind in Kałuszyn und Umgebung tätig – wir betreuen auch Kunden aus Mińsk Mazowiecki, Warschau und Siedlce und bieten umfassende Serviceeinrichtungen für den Schwerlasttransport.", ua: "Ми працюємо в Калушині та околицях — обслуговуємо також клієнтів з Мінська-Мазовецького, Варшави та Седльце, надаючи комплексні сервісні послуги для важкого транспорту." },
  "about.p3": { pl: "Nasz zespół tworzą doświadczeni mechanicy i diagności, którzy łączą wieloletnią praktykę z nowoczesnym podejściem do napraw. Dysponujemy specjalistycznym sprzętem diagnostycznym i innowacyjną technologią czyszczenia laserowego, która pozwala precyzyjnie usuwać rdzę, powłoki lakiernicze i zabrudzenia bez uszkadzania podłoża. Stawiamy na jakość, terminowość i uczciwe ceny – bo w transporcie każda godzina przestoju ma znaczenie.", ru: "Наша команда — опытные механики и диагносты, сочетающие многолетнюю практику с современным подходом к ремонту. Мы располагаем специализированным диагностическим оборудованием и инновационной технологией лазерной очистки, позволяющей точно удалять ржавчину, краску и загрязнения без повреждения основы. Мы ставим на качество, своевременность и честные цены — ведь в транспорте важен каждый час простоя.", en: "Our team consists of experienced mechanics and diagnosticians who combine years of practice with a modern approach to repairs. We have specialized diagnostic equipment and innovative laser cleaning technology that allows us to precisely remove rust, paint coatings, and dirt without damaging the substrate. We focus on quality, timeliness, and fair prices – because in transport, every hour of downtime matters.", fr: "Notre équipe est composée de mécaniciens et de diagnosticiens expérimentés qui allient des années de pratique à une approche moderne des réparations. Nous disposons d'équipements de diagnostic spécialisés et d'une technologie innovante de nettoyage au laser qui nous permet d'éliminer précisément la rouille, les revêtements de peinture et la saleté sans endommager le substrat. Nous nous concentrons sur la qualité, la rapidité et des prix justes – car dans le transport, chaque heure d'immobilisation compte.", de: "Unser Team besteht aus erfahrenen Mechanikern und Diagnostikern, die jahrelange Praxis mit einem modernen Ansatz für Reparaturen verbinden. Wir verfügen über spezielle Diagnosegeräte und eine innovative Laserreinigungstechnologie, mit der wir Rost, Lackbeschichtungen und Schmutz präzise und ohne Beschädigung des Untergrunds entfernen können. Wir konzentrieren uns auf Qualität, Pünktlichkeit und faire Preise – denn im Transportwesen zählt jede Stunde Ausfallzeit.", ua: "Наша команда — це досвідчені механіки та діагности, які поєднують багаторічну практику з сучасним підходом до ремонту. Ми маємо спеціалізоване діагностичне обладнання та інноваційну технологію лазерного очищення, що дозволяє точно видаляти іржу, лакофарбові покриття та забруднення без пошкодження основи. Ми ставимо на якість, своєчасність і чесні ціни — адже в транспорті кожна година простою має значення." },
  "about.findMap": { pl: "Znajdź nas na mapie", ru: "Найти на карте", en: "Find us on map", fr: "Trouvez-nous sur la carte", de: "Finden Sie uns auf der Karte", ua: "Знайти на карті" },
  "about.stat1": { pl: "lat doświadczenia", ru: "лет опыта", en: "years of experience", fr: "ans d'expérience", de: "Jahre Erfahrung", ua: "років досвіду" },
  "about.stat2": { pl: "zadowolonych klientów", ru: "довольных клиентов", en: "happy clients", fr: "clients satisfaits", de: "zufriedene Kunden", ua: "задоволених клієнтів" },
  "about.stat3": { pl: "dni w tygodniu", ru: "дней в неделю", en: "days a week", fr: "jours par semaine", de: "Tage die Woche", ua: "днів на тиждень" },
  "about.stat4": { pl: "dziennie do dyspozycji", ru: "часов в день", en: "hours daily", fr: "heures par jour", de: "Stunden täglich", ua: "годин на день" },

  // Contact
  "contact.title1": { pl: "Skontaktuj się", ru: "Свяжитесь", en: "Get in", fr: "Contactez", de: "Kontaktieren", ua: "Зв'яжіться" },
  "contact.title2": { pl: "z nami", ru: "с нами", en: "touch", fr: "-nous", de: "Sie uns", ua: "з нами" },
  "contact.subtitle": { pl: "Masz pytanie? Potrzebujesz wyceny? Zadzwoń — odpowiemy od razu.", ru: "Есть вопрос? Нужна оценка? Позвоните — ответим сразу.", en: "Have a question? Need a quote? Call — we'll answer right away.", fr: "Une question? Besoin d'un devis? Appelez — nous répondons immédiatement.", de: "Haben Sie eine Frage? Brauchen Sie ein Angebot? Rufen Sie an — wir antworten sofort.", ua: "Є питання? Потрібна оцінка? Зателефонуйте — відповімо одразу." },

  // Footer
  "footer.desc": { pl: "Profesjonalny serwis opon dla ciężarówek, busów i samochodów osobowych. Działamy codziennie, aby Twój pojazd był bezpieczny na drodze.", ru: "Профессиональный шиномонтаж для грузовиков, микроавтобусов и легковых автомобилей. Работаем ежедневно, чтобы ваш автомобиль был в безопасности на дороге.", en: "Professional tire service for trucks, vans and passenger cars. We work daily to keep your vehicle safe on the road.", fr: "Service professionnel de pneus pour camions, fourgons et voitures. Nous travaillons chaque jour pour la sécurité de votre véhicule.", de: "Professioneller Reifenservice für LKW, Transporter und PKW. Wir arbeiten täglich für Ihre Sicherheit auf der Straße.", ua: "Професійний шиномонтаж для вантажівок, мікроавтобусів та легкових автомобілів. Працюємо щоденно, щоб ваш автомобіль був у безпеці на дорозі." },
  "footer.contactData": { pl: "Dane kontaktowe", ru: "Контактные данные", en: "Contact details", fr: "Coordonnées", de: "Kontaktdaten", ua: "Контактні дані" },
  "footer.writeUs": { pl: "Napisz do nas", ru: "Напишите нам", en: "Write to us", fr: "Écrivez-nous", de: "Schreiben Sie uns", ua: "Напишіть нам" },

  // Marquee
  "marquee.noQueue": { pl: "Bez kolejki", ru: "Без очереди", en: "No queue", fr: "Sans attente", de: "Ohne Wartezeit", ua: "Без черги" },
  "marquee.warranty": { pl: "Gwarancja na usługi", ru: "Гарантия на услуги", en: "Service warranty", fr: "Garantie de service", de: "Servicegarantie", ua: "Гарантія на послуги" },
  "marquee.trucksAndCars": { pl: "TIR-y i osobówki", ru: "Грузовые и легковые", en: "Trucks & cars", fr: "Camions & voitures", de: "LKW & PKW", ua: "Вантажівки та легкові" },
  "marquee.fairPrices": { pl: "Uczciwe ceny", ru: "Честные цены", en: "Fair prices", fr: "Prix honnêtes", de: "Faire Preise", ua: "Чесні ціни" },
  "marquee.mobileService": { pl: "Serwis mobilny", ru: "Мобильный сервис", en: "Mobile service", fr: "Service mobile", de: "Mobiler Service", ua: "Мобільний сервіс" },
  "marquee.daily": { pl: "Codziennie 8-20", ru: "Ежедневно 8-20", en: "Daily 8-20", fr: "Chaque jour 8-20", de: "Täglich 8-20", ua: "Щоденно 8-20" },
  "marquee.experience": { pl: "10+ lat doświadczenia", ru: "10+ лет опыта", en: "10+ years experience", fr: "10+ ans d'expérience", de: "10+ Jahre Erfahrung", ua: "10+ років досвіду" },
  "marquee.diagnostics": { pl: "Profesjonalna diagnostyka", ru: "Профессиональная диагностика", en: "Professional diagnostics", fr: "Diagnostic professionnel", de: "Professionelle Diagnose", ua: "Професійна діагностика" },

  // Theme
  "theme.light": { pl: "Jasny", ru: "Светлая", en: "Light", fr: "Clair", de: "Hell", ua: "Світла" },
  "theme.dark": { pl: "Ciemny", ru: "Тёмная", en: "Dark", fr: "Sombre", de: "Dunkel", ua: "Темна" },
};

export function tr(key: string, lang: Lang): string {
  return t[key]?.[lang] ?? t[key]?.["pl"] ?? key;
}

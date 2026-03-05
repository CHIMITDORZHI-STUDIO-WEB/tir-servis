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
  "about.p1": { pl: "Jesteśmy rodzinną firmą z wieloletnim doświadczeniem w branży oponiarskiej. Nasz serwis w Kałuszynie obsługuje zarówno pojazdy ciężarowe (TIR-y, naczepy, busy), jak i samochody osobowe.", ru: "Мы — семейная компания с многолетним опытом в шинной индустрии. Наш сервис в Калушине обслуживает как грузовые автомобили (фуры, полуприцепы, микроавтобусы), так и легковые.", en: "We are a family business with years of experience in the tire industry. Our service in Kałuszyn handles both heavy vehicles (trucks, trailers, vans) and passenger cars.", fr: "Nous sommes une entreprise familiale avec des années d'expérience dans l'industrie du pneu. Notre service à Kałuszyn traite les véhicules lourds (camions, remorques, fourgons) et les voitures.", de: "Wir sind ein Familienunternehmen mit langjähriger Erfahrung in der Reifenbranche. Unser Service in Kałuszyn bedient sowohl schwere Fahrzeuge (LKW, Auflieger, Transporter) als auch PKW.", ua: "Ми — сімейна компанія з багаторічним досвідом у шинній індустрії. Наш сервіс у Калушині обслуговує як вантажні автомобілі (фури, напівпричепи, мікроавтобуси), так і легкові." },
  "about.p2": { pl: "Stawiamy na szybkość, jakość i uczciwość. Każdy klient jest dla nas ważny — niezależnie czy przyjeżdża z jedną oponą, czy z całą flotą pojazdów.", ru: "Мы делаем ставку на скорость, качество и честность. Каждый клиент для нас важен — неважно, приехал он с одной шиной или целым автопарком.", en: "We focus on speed, quality and honesty. Every client matters to us — whether you come with one tire or a whole fleet.", fr: "Nous misons sur la rapidité, la qualité et l'honnêteté. Chaque client compte — qu'il vienne avec un pneu ou une flotte entière.", de: "Wir setzen auf Schnelligkeit, Qualität und Ehrlichkeit. Jeder Kunde ist uns wichtig — ob mit einem Reifen oder einer ganzen Flotte.", ua: "Ми робимо ставку на швидкість, якість та чесність. Кожен клієнт для нас важливий — неважливо, приїхав він з однією шиною чи цілим автопарком." },
  "about.p3": { pl: "Pracujemy codziennie od 8:00 do 20:00, abyś mógł przyjechać w dogodnym dla siebie terminie. Wystarczy telefon, żeby umówić wizytę.", ru: "Работаем ежедневно с 8:00 до 20:00, чтобы вы могли приехать в удобное время. Достаточно одного звонка.", en: "We work daily from 8:00 to 20:00 so you can come at a convenient time. Just one phone call is enough.", fr: "Nous travaillons tous les jours de 8h00 à 20h00 pour que vous puissiez venir à votre convenance. Un simple appel suffit.", de: "Wir arbeiten täglich von 8:00 bis 20:00, damit Sie zu einer günstigen Zeit kommen können. Ein Anruf genügt.", ua: "Працюємо щоденно з 8:00 до 20:00, щоб ви могли приїхати у зручний час. Достатньо одного дзвінка." },
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

  // Theme
  "theme.light": { pl: "Jasny", ru: "Светлая", en: "Light", fr: "Clair", de: "Hell", ua: "Світла" },
  "theme.dark": { pl: "Ciemny", ru: "Тёмная", en: "Dark", fr: "Sombre", de: "Dunkel", ua: "Темна" },
};

export function tr(key: string, lang: Lang): string {
  return t[key]?.[lang] ?? t[key]?.["pl"] ?? key;
}

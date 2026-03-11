import Image from "next/image";
import Link from "next/link";
import {
  SITE_NAME,
  PHONE,
  WHATSAPP_LINK,
  PHONE_RAW,
  ADDRESS,
  SERVICES,
  YANDEX_MAP_EMBED_URL,
  YANDEX_MAP_LINK,
  GOOGLE_MAP_LINK,
} from "@/lib/constants";
import { ServiceIcon } from "@/components/SvgIcons";
import type { IconName } from "@/components/SvgIcons";

const ADVANTAGES: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "star",
    title: "Опыт и мастерство",
    desc: "Работаем с Лада, Hyundai, Kia, Renault и другими популярными марками",
  },
  {
    icon: "polish",
    title: "Современное оборудование",
    desc: "Профессиональная покрасочная камера и инструменты",
  },
  {
    icon: "spray",
    title: "Качественные материалы",
    desc: "Используем сертифицированные краски и лаки",
  },
  {
    icon: "check",
    title: "Гарантия на работы",
    desc: "Предоставляем гарантию на все виды выполненных работ",
  },
  {
    icon: "shield",
    title: "Честные цены",
    desc: "Доступные цены без скрытых платежей — лучшее соотношение цена/качество",
  },
  {
    icon: "car",
    title: "Индивидуальный подход",
    desc: "Подбираем оптимальное решение для каждого клиента",
  },
];

const PORTFOLIO_ITEMS = [
  {
    imageBefore: "/portfolio/IMG_2127.JPG",
    imageAfter: "/portfolio/IMG_2128.JPG",
    title: "Полная покраска Лада Приора (серебро)",
    tag: "До → После",
  },
  {
    imageBefore: "/portfolio/IMG_2140.jpg",
    imageAfter: "/portfolio/IMG_2141.jpg",
    title: "Полная покраска Лада Приора (чёрная)",
    tag: "До → После",
  },
  {
    imageBefore: "/portfolio/IMG_2142.PNG",
    imageAfter: "/portfolio/IMG_2124.jpg",
    title: "Покраска капота Hyundai Solaris",
    tag: "До → После",
  },
  {
    imageBefore: "/portfolio/IMG_21442.jpg",
    imageAfter: "/portfolio/IMG_21442.jpg",
    title: "Покраска джипа",
    tag: "До → После",
  },
];

const REVIEWS = [
  {
    name: "Михаил К.",
    text: "Покрасили капот и крыло на Ладе — идеальное попадание в цвет. Цена адекватная, рекомендую!",
  },
  {
    name: "Анна С.",
    text: "Делали полировку всего кузова на Hyundai Solaris. Машина как новая! Очень довольна.",
  },
  {
    name: "Дмитрий В.",
    text: "Полная покраска Приоры. Сделали быстро и качественно, лучшее соотношение цена/качество в городе.",
  },
  {
    name: "Сергей П.",
    text: "Покрасил джип у Арама — результат превзошёл ожидания. Цвет ровный, без подтёков. Буду обращаться ещё.",
  },
  {
    name: "Елена М.",
    text: "Ремонт сколов и покраска бампера на Kia Rio. Сделали за день, выглядит как с завода. Спасибо!",
  },
  {
    name: "Андрей Л.",
    text: "Делал антикор на Приоре. Внимательно обработали все пороги и арки. Цена нормальная, качество отличное.",
  },
  {
    name: "Ольга К.",
    text: "Полировка фар и кузова на Hyundai. Фары как новые, кузов блестит. Очень благодарна мастеру.",
  },
  {
    name: "Игорь Н.",
    text: "Полная покраска в другой цвет. Подобрали краску точно, машина выглядит дорого. Рекомендую АрмаПокрас.",
  },
  {
    name: "Татьяна В.",
    text: "Покраска капота после ДТП. Попадание в цвет идеальное, не отличить от родного. Довольна на 100%.",
  },
  {
    name: "Виктор С.",
    text: "Не первый раз обращаюсь. Каждый раз делают качественно и в срок. Лучшая автомалярка в Пятигорске.",
  },
  {
    name: "Наталья Г.",
    text: "Полировка и защита ЛКП на новой Ладе. Бережная работа, никаких царапин. Спасибо за профессионализм!",
  },
  {
    name: "Павел Д.",
    text: "Покрасили крыло и дверь на Renault Logan. Быстро, недорого, цвет совпал. Буду советовать знакомым.",
  },
  {
    name: "Марина Т.",
    text: "Делали локальный ремонт царапин на бампере. Точечная покраска — не видно, что было повреждение.",
  },
  {
    name: "Алексей Ж.",
    text: "Пригонял джип на полную покраску. Обсудили все нюансы, сделали в оговорённые сроки. Результат отличный.",
  },
  {
    name: "Юлия Р.",
    text: "Покраска элементов кузова на Solaris. Честные цены, никаких доплат. Машина как новенькая, спасибо!",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 text-yellow-400" aria-label="5 из 5 звёзд">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 fill-current"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Фон ПК */}
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-desktop.png')" }}
        />
        {/* Фон мобильная */}
        <div
          className="absolute inset-0 block md:hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-mobile.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        <div className="relative z-10 container-custom text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
            Доступная покраска автомобилей в Пятигорске
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Покраска Лада, Hyundai, Kia и других авто. Полировка, антикор.
            Честные цены, гарантия на все работы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Записаться на осмотр
            </a>
            <a
              href="#uslugi"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg"
            >
              Наши услуги
            </a>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="преимущества" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-4">
            Почему выбирают нас
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ADVANTAGES.map((item) => (
              <article key={item.title} className="card p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5 text-accent">
                  <ServiceIcon name={item.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="section-padding">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-4">Наши услуги</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <article key={service.slug} className="card p-8 text-center group">
                <div className="w-16 h-16 bg-accent/10 group-hover:bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-5 text-accent transition-colors duration-300">
                  <ServiceIcon
                    name={service.icon as IconName}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>
                <Link
                  href={service.href}
                  className="text-accent font-semibold hover:text-accent-dark transition-colors inline-flex items-center gap-1"
                >
                  Подробнее →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-4">Примеры работ</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-12" />
          <p className="text-gray-500 text-center text-sm mb-8">
            Наведите на карточку, чтобы увидеть результат
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.map((item) => (
              <article key={item.title} className="card group">
                <div className="relative h-64 overflow-hidden">
                  {/* Нижний слой — «после» */}
                  <Image
                    src={item.imageAfter}
                    alt={`${item.title} — после`}
                    fill
                    className="object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Верхний слой — «до», при наведении исчезает */}
                  <Image
                    src={item.imageBefore}
                    alt={`${item.title} — до`}
                    fill
                    className="absolute inset-0 object-cover scale-105 group-hover:scale-110 transition-all duration-500 group-hover:opacity-0"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-4 left-4 z-10 bg-accent text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/portfolio" className="btn-outline">
              Все работы
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-4">
            Отзывы наших клиентов
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <article key={review.name} className="card p-8">
                <StarRating />
                <p className="text-gray-600 leading-relaxed mt-4 mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-semibold text-primary">
                    {review.name}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Нужна покраска или полировка?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Запишитесь на бесплатный осмотр и оценку стоимости работ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Написать в WhatsApp
            </a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-lg"
            >
              Позвонить: {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-4">Как нас найти</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-center text-lg mb-4">
            {ADDRESS}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a
              href={YANDEX_MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              Яндекс.Карты
            </a>
            <a
              href={GOOGLE_MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              Google Карты
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src={YANDEX_MAP_EMBED_URL}
              width="100%"
              height={400}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title={`${SITE_NAME} на карте`}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

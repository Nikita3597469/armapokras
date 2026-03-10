import Image from "next/image";
import Link from "next/link";
import {
  SITE_NAME,
  PHONE,
  WHATSAPP_LINK,
  PHONE_RAW,
  ADDRESS,
  SERVICES,
} from "@/lib/constants";

const ADVANTAGES = [
  {
    icon: "🏆",
    title: "Опыт и мастерство",
    desc: "Многолетний опыт работы с автомобилями любых марок",
  },
  {
    icon: "⚙️",
    title: "Современное оборудование",
    desc: "Профессиональная покрасочная камера и инструменты",
  },
  {
    icon: "🎨",
    title: "Качественные материалы",
    desc: "Используем только сертифицированные краски и лаки",
  },
  {
    icon: "✅",
    title: "Гарантия на работы",
    desc: "Предоставляем гарантию на все виды выполненных работ",
  },
  {
    icon: "💰",
    title: "Честные цены",
    desc: "Прозрачное ценообразование без скрытых платежей",
  },
  {
    icon: "🤝",
    title: "Индивидуальный подход",
    desc: "Подбираем оптимальное решение для каждого клиента",
  },
];

const PORTFOLIO_ITEMS = [
  {
    image:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&q=80",
    title: "Полная покраска BMW X5",
    tag: "До → После",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494ceb8?w=600&q=80",
    title: "Полировка Mercedes-Benz E-Class",
    tag: "До → После",
  },
  {
    image:
      "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&q=80",
    title: "Локальная покраска Audi A4",
    tag: "До → После",
  },
];

const REVIEWS = [
  {
    name: "Михаил К.",
    text: "Отличная работа! Покрасили капот и крыло — идеальное попадание в цвет. Рекомендую!",
  },
  {
    name: "Анна С.",
    text: "Делали полировку всего кузова. Машина выглядит как новая! Очень довольна результатом.",
  },
  {
    name: "Дмитрий В.",
    text: "Кузовной ремонт после ДТП. Сделали быстро и качественно, цена адекватная.",
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
      <section
        className="relative min-h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        <div className="relative z-10 container-custom text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
            Профессиональная покраска автомобилей в Пятигорске
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Качественная покраска, кузовной ремонт и полировка вашего
            автомобиля. Современное оборудование, опытные мастера, гарантия на
            все работы.
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
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-3xl" role="img" aria-label={item.title}>
                    {item.icon}
                  </span>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <article key={service.slug} className="card p-8 text-center group">
                <div className="w-16 h-16 bg-accent/10 group-hover:bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                  <span className="text-3xl" role="img" aria-label={service.title}>
                    {service.icon}
                  </span>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.map((item) => (
              <article key={item.title} className="card group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-4 left-4 bg-accent text-white text-sm font-semibold px-3 py-1 rounded-full">
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
            Нужна покраска или ремонт кузова?
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
          <p className="text-gray-600 text-center text-lg mb-10">
            {ADDRESS}
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aarmapokras&source=constructor&ll=43.059275%2C44.037965&z=16&pt=43.059275%2C44.037965%2Cpm2rdm"
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

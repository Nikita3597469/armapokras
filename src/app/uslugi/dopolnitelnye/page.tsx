import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, WHATSAPP_LINK, PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Дополнительные услуги — ${SITE_NAME}`,
  description:
    "Дополнительные автомалярные услуги в Пятигорске: антикоррозийная обработка, подбор краски по VIN, тонировка, оклейка плёнкой, покраска дисков.",
};

const additionalServices = [
  {
    icon: (
      <svg
        className="w-10 h-10 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    title: "Антикоррозийная обработка",
    description:
      "Комплексная защита кузова от коррозии — обработка днища, колёсных арок, скрытых полостей и сварных швов специальными антикоррозийными составами. Применяем материалы на восковой и битумной основе от ведущих производителей. Особенно актуально после кузовного ремонта или для автомобилей, эксплуатируемых в условиях повышенной влажности.",
    details: [
      "Обработка днища и колёсных арок",
      "Заливка скрытых полостей",
      "Защита сварных швов",
      "Срок защиты — от 3 до 5 лет",
    ],
    price: "от 5 000 ₽",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
    title: "Подбор краски по VIN",
    description:
      "Точный подбор цвета краски для вашего автомобиля с помощью компьютерного спектрофотометра и базы цветовых формул. Учитываем выгорание и старение оригинального покрытия для идеального совпадения оттенка. Работаем с базами всех ведущих производителей красок — результат неотличим от заводского цвета.",
    details: [
      "Компьютерный подбор по VIN-коду",
      "Спектрофотометр для точности",
      "Учёт выгорания оригинала",
      "Пробный выкрас перед покраской",
    ],
    price: "от 500 ₽",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
        />
      </svg>
    ),
    title: "Тонировка стёкол",
    description:
      "Профессиональная тонировка стёкол автомобиля плёнками премиум-класса. Защита салона от ультрафиолета, снижение нагрева в летнее время и улучшение внешнего вида. Используем плёнки ведущих брендов с гарантией от выгорания и пузырения. Работаем в соответствии с требованиями ГОСТ.",
    details: [
      "Плёнки от 5% до 70% светопропускания",
      "Атермальная тонировка лобового",
      "Соответствие требованиям ГОСТ",
      "Гарантия от пузырения — 3 года",
    ],
    price: "от 3 000 ₽",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
        />
      </svg>
    ),
    title: "Оклейка защитной плёнкой",
    description:
      "Оклейка кузовных элементов полиуретановой защитной плёнкой (PPF) — надёжная физическая защита от сколов, царапин и пескоструя. Плёнка невидима на поверхности и обладает эффектом самовосстановления мелких повреждений при нагреве. Защищаем наиболее уязвимые зоны — капот, бампер, крылья, зеркала.",
    details: [
      "Полиуретановая плёнка (PPF)",
      "Эффект самовосстановления",
      "Защита от сколов и царапин",
      "Срок службы — до 7 лет",
    ],
    price: "от 3 000 ₽",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
    title: "Покраска дисков",
    description:
      "Профессиональная покраска колёсных дисков — порошковая и жидкая. Восстанавливаем внешний вид дисков после повреждений или меняем цвет по вашему желанию. Полный цикл подготовки включает пескоструйную обработку, грунтование и нанесение стойкого покрытия с финишным лакированием.",
    details: [
      "Порошковая и жидкая покраска",
      "Любые цвета и эффекты",
      "Пескоструйная подготовка",
      "Гарантия стойкости покрытия",
    ],
    price: "от 6 000 ₽ / комплект",
  },
];

export default function DopolnitelnyePage() {
  return (
    <main>
      {/* Breadcrumbs */}
      <nav className="bg-gray-50 py-4 px-4 md:px-8" aria-label="Breadcrumb">
        <div className="container-custom">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">
                Главная
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/uslugi"
                className="hover:text-accent transition-colors"
              >
                Услуги
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-primary font-medium">Дополнительные услуги</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary text-white section-padding">
        <div className="container-custom text-center">
          <span className="text-7xl mb-6 block">🛡️</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Дополнительные услуги
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Комплексный уход за автомобилем — от защиты кузова до покраски
            дисков. Всё в одном месте с гарантией качества.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Узнать подробнее
            </a>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-8">
            {additionalServices.map((service) => (
              <article key={service.title} className="card">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                        <h2 className="heading-3">{service.title}</h2>
                        <span className="text-xl font-bold text-accent whitespace-nowrap">
                          {service.price}
                        </span>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-6 sm:items-end justify-between">
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {service.details.map((detail) => (
                            <li
                              key={detail}
                              className="flex items-center gap-2 text-sm text-gray-700"
                            >
                              <svg
                                className="w-4 h-4 text-accent flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {detail}
                            </li>
                          ))}
                        </ul>

                        <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm py-2 px-6 whitespace-nowrap self-start sm:self-auto"
                        >
                          Заказать
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-accent to-accent-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Нужна дополнительная услуга?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Напишите или позвоните нам — расскажем подробнее о каждой услуге и
            подберём оптимальный вариант
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-accent font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Написать в WhatsApp
            </a>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="bg-white/20 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

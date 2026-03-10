import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, WHATSAPP_LINK, PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Полировка автомобиля в Пятигорске — ${SITE_NAME}`,
  description:
    "Профессиональная полировка автомобиля в Пятигорске. Абразивная, защитная полировка, керамическое покрытие, нанокерамика, полировка фар.",
};

const polishingTypes = [
  {
    icon: "💎",
    title: "Абразивная полировка",
    description:
      "Глубокая абразивная полировка устраняет царапины, потёртости, окисления и «паутинку» на лакокрасочном покрытии. Многоступенчатая обработка пастами разной зернистости возвращает кузову зеркальный заводской блеск.",
    benefits: [
      "Удаление царапин и потёртостей",
      "Устранение окислений и помутнений",
      "Восстановление глубины цвета",
      "Подготовка к нанесению защитных составов",
    ],
    price: "от 8 000 ₽",
  },
  {
    icon: "🛡️",
    title: "Защитная полировка",
    description:
      "Защитная полировка создаёт на поверхности кузова тонкий барьерный слой, который предохраняет ЛКП от агрессивного воздействия окружающей среды — ультрафиолета, реагентов, птичьего помёта и древесной смолы.",
    benefits: [
      "Защита от UV-излучения",
      "Водоотталкивающий эффект",
      "Устойчивость к химическим воздействиям",
      "Эффект сохраняется до 6 месяцев",
    ],
    price: "от 5 000 ₽",
  },
  {
    icon: "🔬",
    title: "Керамическое покрытие",
    description:
      "Керамическое покрытие — это многослойная защита кузова на молекулярном уровне. Состав на основе кварца образует твёрдую прозрачную плёнку толщиной в несколько микрон, которая защищает ЛКП и сохраняет блеск на протяжении 2–3 лет.",
    benefits: [
      "Защита на 2–3 года",
      "Твёрдость 9H по шкале карандашей",
      "Гидрофобный эффект",
      "Усиление глубины и яркости цвета",
    ],
    price: "от 15 000 ₽",
  },
  {
    icon: "⚗️",
    title: "Нанокерамика",
    description:
      "Нанокерамика — премиальный состав последнего поколения с улучшенными характеристиками стойкости и гидрофобности. Наночастицы заполняют микропоры в лаке, создавая идеально гладкую и защищённую поверхность с эффектом «самоочищения».",
    benefits: [
      "Защита до 5 лет",
      "Эффект самоочищения",
      "Устойчивость к химии и реагентам",
      "Облегчение мойки автомобиля",
    ],
    price: "от 20 000 ₽",
  },
  {
    icon: "💡",
    title: "Полировка фар",
    description:
      "Со временем пластик фар мутнеет, желтеет и покрывается микроцарапинами, что снижает яркость света и ухудшает видимость. Профессиональная полировка возвращает фарам прозрачность и наносит защитное покрытие для длительного эффекта.",
    benefits: [
      "Восстановление прозрачности на 95%",
      "Улучшение светопропускания",
      "Защитное покрытие от повторного помутнения",
      "Результат за 1–2 часа",
    ],
    price: "от 1 500 ₽",
  },
];

export default function PolirovkaPage() {
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
            <li className="text-primary font-medium">Полировка автомобиля</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary text-white section-padding">
        <div className="container-custom text-center">
          <span className="text-7xl mb-6 block">✨</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Полировка автомобиля в Пятигорске
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Вернём вашему автомобилю зеркальный блеск и обеспечим надёжную
            защиту лакокрасочного покрытия на годы вперёд
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Записаться на полировку
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

      {/* Polishing Types */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-4">Виды полировки</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Подберём оптимальный вариант полировки и защиты в зависимости от
            состояния кузова и ваших целей
          </p>

          <div className="space-y-8">
            {polishingTypes.map((type) => (
              <article key={type.title} className="card overflow-visible">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0 text-center">
                      <span className="text-5xl block mb-2">{type.icon}</span>
                      <span className="text-xl font-bold text-accent">
                        {type.price}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3 className="heading-3 mb-3">{type.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-5">
                        {type.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-3">
                        {type.benefits.map((benefit) => (
                          <div
                            key={benefit}
                            className="flex items-start gap-3"
                          >
                            <svg
                              className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
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
                            <span className="text-gray-700 text-sm">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex-shrink-0 flex items-center">
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary whitespace-nowrap text-sm py-2 px-6"
                      >
                        Заказать
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">
            Почему выбирают нас
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
                title: "Профессиональные составы",
                text: "Работаем с материалами Koch Chemie, Menzerna, Ceramic Pro",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Опыт более 10 лет",
                text: "Мастера с многолетним стажем и постоянным повышением квалификации",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: "Гарантия результата",
                text: "Предоставляем гарантию на все виды полировки и защитных покрытий",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                ),
                title: "Фото до/после",
                text: "Фиксируем состояние автомобиля до и после — вы видите результат",
              },
            ].map((item) => (
              <div key={item.title} className="card p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-accent to-accent-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Хотите вернуть блеск своему автомобилю?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Запишитесь на полировку прямо сейчас — оценим состояние покрытия и
            подберём оптимальный вариант защиты
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
              Записаться в WhatsApp
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

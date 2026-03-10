import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, WHATSAPP_LINK, PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Кузовной ремонт в Пятигорске — ${SITE_NAME}`,
  description:
    "Профессиональный кузовной ремонт в Пятигорске. Рихтовка, PDR, сварочные работы, замена элементов кузова, восстановление геометрии. Гарантия на все работы.",
};

const repairServices = [
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
          d="M11.42 15.17l-5.1-3.9a1.5 1.5 0 01-.17-2.23l3.44-3.44a1.5 1.5 0 012.23.17l3.9 5.1m-4.3 4.3l4.3-4.3m0 0l3.12 3.12a2.1 2.1 0 01-2.97 2.97l-3.12-3.12m0 0l-1.5 1.5"
        />
      </svg>
    ),
    title: "Рихтовка",
    description:
      "Восстановление формы повреждённых элементов кузова методом рихтовки. Опытные мастера возвращают деталям заводскую геометрию с помощью специализированного инструмента. Рихтовка позволяет сохранить оригинальный металл кузова, что положительно влияет на долговечность и стоимость автомобиля.",
    features: [
      "Сохранение заводского металла",
      "Восстановление геометрии детали",
      "Подготовка к покраске",
    ],
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
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
        />
      </svg>
    ),
    title: "Выправление вмятин без покраски (PDR)",
    description:
      "Технология PDR (Paintless Dent Repair) позволяет убрать вмятины, не нарушая лакокрасочное покрытие. Идеально подходит для устранения последствий града, парковочных повреждений и мелких вмятин. Процедура занимает значительно меньше времени по сравнению с традиционным ремонтом.",
    features: [
      "Без повреждения ЛКП",
      "Быстрый результат (от 30 минут)",
      "Экономия до 70% стоимости",
    ],
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
          d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z"
        />
      </svg>
    ),
    title: "Сварочные работы",
    description:
      "Выполняем все виды кузовных сварочных работ: заварку трещин, вварку ремонтных вставок, восстановление лонжеронов и порогов. Используем полуавтоматическую сварку в среде защитного газа, что обеспечивает прочный и аккуратный шов без деформации металла.",
    features: [
      "Полуавтоматическая сварка MIG/MAG",
      "Точечная контактная сварка",
      "Антикоррозийная обработка швов",
    ],
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
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"
        />
      </svg>
    ),
    title: "Замена элементов кузова",
    description:
      "Когда восстановление детали нецелесообразно, выполняем замену на новую или б/у деталь в отличном состоянии. Подгонка, антикоррозийная обработка, грунтование и покраска с точным подбором цвета. Результат неотличим от заводского исполнения.",
    features: [
      "Оригинальные и качественные аналоги",
      "Точная подгонка элементов",
      "Антикоррозийная обработка",
    ],
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
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
        />
      </svg>
    ),
    title: "Восстановление геометрии кузова",
    description:
      "После серьёзных ДТП геометрия кузова может быть нарушена, что влияет на управляемость и безопасность. Мы восстанавливаем заводские параметры на профессиональном стапельном оборудовании с лазерным контролем точности. Каждый этап документируется замерами.",
    features: [
      "Стапельное оборудование",
      "Лазерный контроль геометрии",
      "Гарантия заводских параметров",
    ],
  },
];

const processSteps = [
  {
    num: 1,
    title: "Диагностика",
    description:
      "Осмотр автомобиля, выявление скрытых повреждений, составление акта работ.",
  },
  {
    num: 2,
    title: "Разборка",
    description:
      "Снятие повреждённых элементов, демонтаж смежных деталей для обеспечения доступа.",
  },
  {
    num: 3,
    title: "Кузовной ремонт",
    description:
      "Рихтовка, сварка, замена деталей — выполнение основного объёма восстановительных работ.",
  },
  {
    num: 4,
    title: "Подготовка к покраске",
    description:
      "Шпатлёвка, шлифовка, грунтование — подготовка поверхности для идеального результата.",
  },
  {
    num: 5,
    title: "Покраска",
    description:
      "Нанесение краски и лака в покрасочной камере с точным подбором цвета.",
  },
  {
    num: 6,
    title: "Сборка и контроль",
    description:
      "Установка всех элементов, проверка зазоров, финальный контроль качества.",
  },
];

export default function KuzovnojRemontPage() {
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
            <li className="text-primary font-medium">Кузовной ремонт</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary text-white section-padding">
        <div className="container-custom text-center">
          <span className="text-7xl mb-6 block">🔧</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Кузовной ремонт в Пятигорске
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Восстановим кузов после ДТП любой сложности. Современное
            оборудование, опытные мастера и гарантия на все виды работ.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Оценить ремонт
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
          <h2 className="heading-2 text-center mb-4">Виды кузовного ремонта</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Полный комплекс работ по восстановлению кузова — от мелких вмятин до
            капитального ремонта после серьёзных ДТП
          </p>

          <div className="space-y-8">
            {repairServices.map((service) => (
              <article
                key={service.title}
                className="card p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-3 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="flex flex-wrap gap-3">
                      {service.features.map((feat) => (
                        <li
                          key={feat}
                          className="bg-accent/5 text-accent text-sm font-medium px-4 py-2 rounded-full"
                        >
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-4">Этапы ремонта</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Прозрачный процесс — вы знаете, что происходит с вашим автомобилем на
            каждом этапе
          </p>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 -translate-x-1/2" />

            <div className="space-y-8 lg:space-y-12">
              {processSteps.map((step, idx) => (
                <div
                  key={step.num}
                  className={`flex flex-col lg:flex-row items-center gap-6 ${
                    idx % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`lg:w-5/12 ${idx % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}
                  >
                    <div className="card p-6">
                      <h3 className="heading-3 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 w-12 h-12 rounded-full bg-accent text-white font-bold flex items-center justify-center text-lg shadow-lg shadow-accent/30 flex-shrink-0">
                    {step.num}
                  </div>

                  <div className="lg:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-accent to-accent-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Попали в ДТП? Поможем восстановить автомобиль
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Отправьте фото повреждений — бесплатно оценим стоимость и сроки
            ремонта. Работаем со страховыми случаями.
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
              Отправить фото
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

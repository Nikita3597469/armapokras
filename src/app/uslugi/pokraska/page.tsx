import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, WHATSAPP_LINK, PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Покраска автомобиля в Пятигорске — ${SITE_NAME}`,
  description:
    "Профессиональная покраска автомобилей в Пятигорске. Полная и локальная покраска, покраска переходом, матовая покраска. Гарантия качества.",
};

const paintingTypes = [
  {
    title: "Полная покраска легкового авто",
    description:
      "Полная покраска кузова — при значительных повреждениях ЛКП, смене цвета или восстановлении. Работаем с Лада, Hyundai, Kia, Renault и другими. Каждый элемент подготавливается: шлифовка, грунтование, нанесение краски с лакированием.",
    price: "70 000 ₽",
    image: "/portfolio/IMG_2128.JPG",
  },
  {
    title: "Полная покраска джипа / кроссовера",
    description:
      "Полная покраска внедорожников и кроссоверов. Те же этапы, что и для легковых — подготовка, грунт, краска, лак. Доступная цена при высоком качестве.",
    price: "100 000 ₽",
    image: "/portfolio/IMG_21442.jpg",
  },
  {
    title: "Покраска элемента",
    description:
      "Покраска бампера, крыла, двери, капота, крыши или крышки багажника. Подбор цвета обеспечивает точное совпадение с заводским оттенком. Идеально для Лада, Hyundai, Kia и других популярных марок.",
    price: "7 000 ₽",
    image: "/portfolio/IMG_2126.PNG",
  },
  {
    title: "Покраска пятна (локальная)",
    description:
      "Локальная покраска небольшого участка без перекраски всего элемента. Экономичный вариант при сколах и мелких повреждениях.",
    price: "3 000 ₽",
    image: "/portfolio/IMG_2142.PNG",
  },
];

const processSteps = [
  {
    num: 1,
    title: "Осмотр и оценка",
    description:
      "Детальный осмотр повреждений, составление плана работ и расчёт стоимости.",
  },
  {
    num: 2,
    title: "Подготовка поверхности",
    description:
      "Зачистка старого покрытия, шпатлёвка дефектов, шлифовка поверхности до идеальной гладкости.",
  },
  {
    num: 3,
    title: "Грунтование",
    description:
      "Нанесение грунта для обеспечения адгезии краски и защиты металла от коррозии.",
  },
  {
    num: 4,
    title: "Нанесение краски",
    description:
      "Послойное нанесение базовой краски в покрасочной камере с контролем температуры и влажности.",
  },
  {
    num: 5,
    title: "Лакирование",
    description:
      "Нанесение 2–3 слоёв лака для создания глубокого блеска и защиты покрытия.",
  },
  {
    num: 6,
    title: "Сушка и полировка",
    description:
      "Инфракрасная сушка, контроль качества и финишная полировка для безупречного результата.",
  },
];

const materials = [
  {
    brand: "Standox",
    description: "Немецкие лакокрасочные материалы премиум-класса",
  },
  {
    brand: "Sikkens",
    description: "Голландские краски с высокой укрывистостью и стойкостью",
  },
  {
    brand: "PPG",
    description: "Американские материалы, применяемые на конвейерах автозаводов",
  },
  {
    brand: "3M",
    description: "Абразивные и полировальные материалы мирового лидера",
  },
];

export default function PokraskaPage() {
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
            <li className="text-primary font-medium">Покраска автомобиля</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary text-white section-padding">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDJ2LTJoMzR6bTAtNHYySDJ2LTJoMzR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="container-custom relative text-center">
          <span className="text-7xl mb-6 block">🎨</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Покраска автомобиля в Пятигорске
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Профессиональная покраска автомобилей с гарантией точного попадания в
            цвет. Используем покрасочную камеру и материалы премиум-класса.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Рассчитать стоимость
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

      {/* Types of Painting */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-4">Виды покраски</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Подберём оптимальный вид покраски в зависимости от состояния кузова и
            ваших задач
          </p>

          <div className="space-y-12">
            {paintingTypes.map((type, idx) => (
              <article
                key={type.title}
                className={`card flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                <div className="lg:w-1/2 relative min-h-[280px]">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="lg:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="heading-3 mb-4">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {type.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">
                      {type.price}
                    </span>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm py-2 px-6"
                    >
                      Заказать
                    </a>
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
          <h2 className="heading-2 text-center mb-4">Процесс работы</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Строго соблюдаем технологию на каждом этапе — от осмотра до финишной
            полировки
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="card p-6 relative border-l-4 border-accent"
              >
                <span className="text-5xl font-bold text-accent/15 absolute top-4 right-6">
                  {String(step.num).padStart(2, "0")}
                </span>
                <div className="relative">
                  <h3 className="heading-3 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-4">
            Используемые материалы
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Работаем только с проверенными брендами мирового уровня
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((mat) => (
              <div
                key={mat.brand}
                className="card p-6 text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {mat.brand}
                </h3>
                <p className="text-gray-500 text-sm">{mat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-accent to-accent-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Готовы обновить внешний вид автомобиля?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Отправьте фото повреждений в WhatsApp — оценим объём работ и
            рассчитаем стоимость в течение 15 минут
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

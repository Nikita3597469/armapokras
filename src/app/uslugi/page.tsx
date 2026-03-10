import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SERVICES, WHATSAPP_LINK, PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Наши услуги — ${SITE_NAME}`,
  description:
    "Полный спектр услуг по покраске и ремонту кузова автомобиля в Пятигорске. Покраска, кузовной ремонт, полировка и дополнительные услуги.",
};

const serviceDetails: Record<
  string,
  { description: string; subServices: string[] }
> = {
  pokraska: {
    description:
      "Выполняем полную и локальную покраску автомобилей любых марок. Используем только высококачественные материалы ведущих производителей, что гарантирует идеальное совпадение цвета и долговечность покрытия. Подбор краски осуществляется с помощью компьютерной колеровки.",
    subServices: [
      "Полная покраска кузова",
      "Локальная покраска элементов",
      "Покраска переходом",
      "Матовая покраска",
      "Покраска бамперов и пластиковых деталей",
    ],
  },
  "kuzovnoj-remont": {
    description:
      "Профессиональный кузовной ремонт любой сложности — от мелких вмятин до серьёзных повреждений после ДТП. Восстанавливаем заводскую геометрию кузова на современном стапельном оборудовании. Каждый ремонт проходит многоэтапный контроль качества.",
    subServices: [
      "Рихтовка и выправление вмятин",
      "Беспокрасочное удаление вмятин (PDR)",
      "Сварочные работы",
      "Замена элементов кузова",
      "Восстановление геометрии кузова",
    ],
  },
  polirovka: {
    description:
      "Возвращаем кузову заводской блеск и обеспечиваем долговременную защиту лакокрасочного покрытия. Абразивная полировка устраняет царапины и потёртости, а защитные составы — керамика и нанокерамика — сохраняют результат на годы.",
    subServices: [
      "Абразивная полировка кузова",
      "Защитная полировка",
      "Керамическое покрытие",
      "Нанокерамика",
      "Полировка фар",
    ],
  },
  dopolnitelnye: {
    description:
      "Широкий перечень дополнительных услуг для комплексного ухода за вашим автомобилем. От антикоррозийной обработки до покраски дисков — всё в одном месте. Предоставляем гарантию на все виды работ.",
    subServices: [
      "Антикоррозийная обработка",
      "Подбор краски по VIN-коду",
      "Тонировка стёкол",
      "Оклейка защитной плёнкой",
      "Покраска дисков",
    ],
  },
};

export default function UslugiPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-primary text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Наши услуги</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Полный спектр услуг по покраске и ремонту кузова автомобиля в
            Пятигорске
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid gap-8 md:gap-12">
            {SERVICES.map((service) => {
              const details = serviceDetails[service.slug];
              return (
                <article key={service.slug} className="card p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Icon & Title */}
                    <div className="flex-shrink-0 text-center lg:text-left">
                      <span
                        className="text-6xl block mb-4"
                        role="img"
                        aria-label={service.title}
                      >
                        {service.icon}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="heading-2 mb-4">{service.title}</h2>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {details.description}
                      </p>

                      <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                        {details.subServices.map((sub) => (
                          <li key={sub} className="flex items-center gap-3">
                            <svg
                              className="w-5 h-5 text-accent flex-shrink-0"
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
                            <span className="text-gray-700">{sub}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-4">
                        <Link href={service.href} className="btn-primary">
                          Подробнее
                        </Link>
                        <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline"
                        >
                          Узнать стоимость
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Нужна консультация?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Свяжитесь с нами удобным способом — оценим объём работ и рассчитаем
            стоимость бесплатно
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Написать в WhatsApp
            </a>
            <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              {PHONE}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

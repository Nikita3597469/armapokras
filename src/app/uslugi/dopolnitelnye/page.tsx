import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, WHATSAPP_LINK, PHONE, PHONE_RAW } from "@/lib/constants";
import { ServiceIcon } from "@/components/SvgIcons";
import type { IconName } from "@/components/SvgIcons";

export const metadata: Metadata = {
  title: `Дополнительные услуги — ${SITE_NAME}`,
  description:
    "Антикоррозийная обработка и покраска дисков в Пятигорске. Доступные цены, гарантия качества.",
};

const additionalServices = [
  {
    icon: "shield" as IconName,
    title: "Антикоррозийная обработка",
    description:
      "Защита кузова от коррозии — обработка днища, колёсных арок и скрытых полостей. Применяем качественные составы. Особенно актуально для автомобилей в условиях влажного климата и для Лада, Hyundai, Kia и других популярных марок.",
    details: [
      "Обработка днища и колёсных арок",
      "Заливка скрытых полостей",
      "Защита сварных швов",
    ],
    price: "7 000 ₽",
  },
  {
    icon: "polish" as IconName,
    title: "Покраска дисков",
    description:
      "Покраска колёсных дисков в любой цвет. Восстанавливаем внешний вид после повреждений или меняем цвет по вашему желанию. Комплект из 4 дисков — по доступной цене.",
    details: [
      "Подготовка поверхности",
      "Грунт и покраска",
      "Комплект (4 диска)",
    ],
    price: "8 000 ₽ (комплект)",
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
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
            <ServiceIcon name="shield" className="w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Дополнительные услуги
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Антикоррозийная обработка и покраска дисков. Всё по доступным ценам
            с гарантией качества.
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
              href={`tel:${PHONE_RAW}`}
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
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                        <ServiceIcon name={service.icon} className="w-8 h-8" />
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
            Напишите или позвоните — расскажем подробнее и подберём удобное время
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
              href={`tel:${PHONE_RAW}`}
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

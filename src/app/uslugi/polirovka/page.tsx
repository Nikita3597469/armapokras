import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, WHATSAPP_LINK, PHONE, PHONE_RAW } from "@/lib/constants";
import { ServiceIcon } from "@/components/SvgIcons";
import WhatsAppLink from "@/components/WhatsAppLink";

export const metadata: Metadata = {
  title: `Полировка автомобиля в Пятигорске — ${SITE_NAME}`,
  description:
    "Полировка кузова, элементов и фар в Пятигорске. Лада, Hyundai, Kia и другие. Доступные цены, качественный результат.",
};

const polishingTypes = [
  {
    title: "Полировка кузова",
    description:
      "Абразивная полировка устраняет царапины, потёртости и окисления. Возвращаем кузову зеркальный блеск. Работаем с любыми марками — от Лада до Hyundai.",
    benefits: [
      "Удаление царапин и потёртостей",
      "Восстановление глубины цвета",
      "Идеальный результат за разумные деньги",
    ],
    price: "10 000 ₽",
    image: "/portfolio/IMG_2135.PNG",
  },
  {
    title: "Полировка одного элемента",
    description:
      "Полировка капота, крыла, двери или другого элемента. Удобно, когда нужно освежить только повреждённый участок.",
    benefits: [
      "Быстро и недорого",
      "Локальный ремонт без лишних затрат",
    ],
    price: "1 500 ₽",
    image: "/portfolio/IMG_2136.PNG",
  },
  {
    title: "Полировка фар",
    description:
      "Со временем пластик фар мутнеет и желтеет. Полировка возвращает прозрачность и улучшает светопропускание. Результат за 1–2 часа.",
    benefits: [
      "Восстановление прозрачности",
      "Улучшение видимости в темноте",
      "Пара фар — фиксированная цена",
    ],
    price: "2 000 ₽ (пара)",
    image: "/portfolio/IMG_2134.jpg",
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
            <li className="text-primary font-medium">Полировка</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary text-white section-padding">
        <div className="container-custom text-center">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
            <ServiceIcon name="polish" className="w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Полировка автомобиля в Пятигорске
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Вернём кузову и фарам блеск. Работаем с Лада, Hyundai, Kia и другими.
            Доступные цены.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppLink
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Записаться
            </WhatsAppLink>
            <a
              href={`tel:${PHONE_RAW}`}
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Polishing types */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-4">Виды полировки</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-12" />

          <div className="space-y-8">
            {polishingTypes.map((type) => (
              <article key={type.title} className="card overflow-visible">
                <div className="p-8 md:p-10 flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3 relative min-h-[220px] rounded-xl overflow-hidden">
                    <Image
                      src={type.image}
                      alt={type.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="lg:flex-1">
                    <h3 className="heading-3 mb-4">{type.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {type.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {type.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-gray-700">
                          <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="text-2xl font-bold text-accent">{type.price}</span>
                      <WhatsAppLink
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm py-2 px-6"
                      >
                        Заказать
                      </WhatsAppLink>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Нужна полировка?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Напишите в WhatsApp или позвоните — рассчитаем стоимость
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppLink
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Написать в WhatsApp
            </WhatsAppLink>
            <a href={`tel:${PHONE_RAW}`} className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              {PHONE}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

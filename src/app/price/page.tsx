import Link from "next/link";
import { PRICE_DATA, WHATSAPP_LINK, SITE_NAME } from "@/lib/constants";
import { ServiceIcon } from "@/components/SvgIcons";
import WhatsAppLink from "@/components/WhatsAppLink";
import type { Metadata } from "next";
import type { IconName } from "@/components/SvgIcons";

export const metadata: Metadata = {
  title: `Прайс-лист — ${SITE_NAME}`,
  description:
    "Цены на покраску, полировку и доп. услуги в Пятигорске. Ориентировочные цены — точная стоимость после осмотра.",
};

const CATEGORY_ICONS: IconName[] = ["spray", "polish", "shield"];

export default function PricePage() {
  return (
    <main className="section-padding">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="transition-colors hover:text-accent">
                Главная
              </Link>
            </li>
            <li aria-hidden="true">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="font-medium text-primary">Прайс-лист</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="heading-1 mb-4">Прайс-лист</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Ориентировочные цены на наши услуги. Точная стоимость определяется
            после осмотра автомобиля.
          </p>
        </div>

        {/* Price categories */}
        <div className="space-y-12">
          {PRICE_DATA.map((category, catIdx) => (
            <section key={category.category} className="card p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <ServiceIcon name={CATEGORY_ICONS[catIdx] ?? "spray"} className="w-6 h-6" />
                </span>
                <h2 className="heading-3">{category.category}</h2>
              </div>

              <div className="overflow-hidden rounded-xl border border-gray-100">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-4 py-3 text-left text-sm font-semibold md:px-6">
                        Услуга
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-semibold md:px-6">
                        Стоимость
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((item, idx) => (
                      <tr
                        key={item.name}
                        className={`border-b border-gray-50 transition-colors hover:bg-accent/5 ${
                          idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                        }`}
                      >
                        <td className="px-4 py-3.5 text-sm text-gray-700 md:px-6 md:text-base">
                          {item.name}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3.5 text-right text-sm font-semibold text-accent md:px-6 md:text-base">
                          {item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>

        {/* Important note */}
        <div className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8">
          <div className="flex gap-4">
            <div className="shrink-0">
              <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-amber-800">
                Важная информация
              </h3>
              <p className="text-amber-700">
                Указанные цены являются ориентировочными. Окончательная стоимость
                работ определяется после осмотра автомобиля мастером. Для
                получения точной оценки свяжитесь с нами.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="card mx-auto max-w-xl p-8 md:p-10">
            <h2 className="heading-3 mb-3">Хотите узнать точную стоимость?</h2>
            <p className="mb-6 text-gray-600">
              Отправьте фото повреждений в WhatsApp и получите оценку стоимости
              в&nbsp;течение 30 минут.
            </p>
            <WhatsAppLink
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Получить точную оценку
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </main>
  );
}

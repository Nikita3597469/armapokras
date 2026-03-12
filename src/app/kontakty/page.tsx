"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  PHONE,
  PHONE_RAW,
  WHATSAPP_LINK,
  EMAIL,
  ADDRESS_FULL,
  WORKING_HOURS,
  YANDEX_MAP_EMBED_URL,
  YANDEX_MAP_LINK,
  GOOGLE_MAP_LINK,
} from "@/lib/constants";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function ContactsPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Введите ваше имя";
    if (!form.phone.trim()) newErrors.phone = "Введите номер телефона";
    if (!form.consent) newErrors.consent = "Необходимо ваше согласие";
    return newErrors;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const text = [
      `Имя: ${form.name}`,
      `Телефон: ${form.phone}`,
      form.message ? `Описание: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

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
            <li className="font-medium text-primary">Контакты</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="heading-1 mb-4">Контакты</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Свяжитесь с нами любым удобным способом или приезжайте к нам
            в&nbsp;мастерскую.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Contact cards */}
          <div className="space-y-4">
            {/* Phone */}
            <a
              href={`tel:${PHONE_RAW}`}
              className="card flex items-center gap-4 p-5 transition-colors hover:border-accent"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Телефон</p>
                <p className="text-lg font-semibold text-primary">{PHONE}</p>
              </div>
            </a>

            {/* WhatsApp */}
            <WhatsAppLink
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 p-5 transition-colors hover:border-accent"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-green-600" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">WhatsApp</p>
                <p className="text-lg font-semibold text-primary">
                  Написать сообщение
                </p>
              </div>
            </WhatsAppLink>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="card flex items-center gap-4 p-5 transition-colors hover:border-accent"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg font-semibold text-primary">{EMAIL}</p>
              </div>
            </a>

            {/* Address */}
            <div className="card flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Адрес</p>
                <p className="text-lg font-semibold text-primary">
                  {ADDRESS_FULL}
                </p>
              </div>
            </div>

            {/* Working hours */}
            <div className="card flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Режим работы</p>
                <p className="text-lg font-semibold text-primary">
                  {WORKING_HOURS}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="card p-6 md:p-8">
            <h2 className="heading-3 mb-6">Записаться на ремонт</h2>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Имя <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Ваше имя"
                  className={`w-full rounded-lg border px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Телефон <span className="text-accent">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: e.target.value }))
                  }
                  placeholder="+7 (___) ___-__-__"
                  className={`w-full rounded-lg border px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 ${
                    errors.phone ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Описание проблемы
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="Опишите, что нужно сделать..."
                  className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, consent: e.target.checked }))
                    }
                    className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
                  />
                  <span className="text-sm text-gray-600">
                    Я согласен с{" "}
                    <Link
                      href="/privacy"
                      className="text-accent underline transition-colors hover:text-accent-dark"
                    >
                      обработкой персональных данных
                    </Link>{" "}
                    <span className="text-accent">*</span>
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1 text-xs text-red-500">{errors.consent}</p>
                )}
              </div>

              {/* Submit */}
              <button type="submit" className="btn-primary w-full">
                Записаться
              </button>
            </form>
          </div>
        </div>

        {/* Map and route links */}
        <div className="mt-12">
          <div className="flex flex-wrap gap-3 mb-6">
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
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src={YANDEX_MAP_EMBED_URL}
              width="100%"
              className="h-96 border-0"
              allowFullScreen
              title="АрмаПокрас на карте — Пятигорск, Московская ул., 31"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

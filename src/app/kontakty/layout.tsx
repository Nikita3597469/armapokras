import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты — Запись на осмотр",
  description:
    "Контакты автомалярной мастерской АрмаПокрас в Пятигорске. Телефон, WhatsApp, адрес, режим работы. Запишитесь на бесплатный осмотр.",
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

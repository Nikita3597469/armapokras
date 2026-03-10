import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Портфолио — Примеры наших работ",
  description:
    "Примеры работ автомалярной мастерской АрмаПокрас в Пятигорске. Покраска, кузовной ремонт, полировка — фото до и после.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

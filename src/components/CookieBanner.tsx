"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-4">
      <div className="container-custom mx-auto flex flex-col items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-[0_-4px_24px_rgba(0,0,0,0.1)] sm:flex-row sm:gap-6">
        <p className="text-sm leading-relaxed text-gray-600">
          Мы используем файлы cookie для улучшения работы сайта. Продолжая использовать сайт, вы
          соглашаетесь с&nbsp;нашей{" "}
          <Link href="/privacy" className="font-medium text-accent underline hover:no-underline">
            Политикой конфиденциальности
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Принять
        </button>
      </div>
    </div>
  );
}

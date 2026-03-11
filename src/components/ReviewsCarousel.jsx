"use client";

import { useState, useCallback, useEffect } from "react";

function StarRating() {
  return (
    <div className="flex gap-1 text-yellow-400" aria-label="5 из 5 звёзд">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 fill-current"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsCarousel({ reviews }) {
  const [index, setIndex] = useState(0);
  const total = reviews.length;

  const goPrev = useCallback(() => {
    setIndex((i) => (i <= 0 ? total - 1 : i - 1));
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((i) => (i >= total - 1 ? 0 : i + 1));
  }, [total]);

  useEffect(() => {
    const t = setInterval(goNext, 6000);
    return () => clearInterval(t);
  }, [goNext]);

  if (total === 0) return null;

  const review = reviews[index];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="heading-2 text-center mb-4">
          Отзывы наших клиентов
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-12" />

        <div className="relative max-w-2xl mx-auto">
          <article className="card p-8 min-h-[240px] flex flex-col">
            <StarRating />
            <p className="text-gray-600 leading-relaxed mt-4 mb-6 italic flex-1">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                <span className="text-accent font-bold text-sm">
                  {review.name.charAt(0)}
                </span>
              </div>
              <span className="font-semibold text-primary">{review.name}</span>
            </div>
          </article>

          <button
            type="button"
            onClick={goPrev}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-primary hover:bg-gray-50 hover:border-accent transition-colors"
            aria-label="Предыдущий отзыв"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-primary hover:bg-gray-50 hover:border-accent transition-colors"
            aria-label="Следующий отзыв"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === index ? "bg-accent scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Отзыв ${i + 1} из ${total}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

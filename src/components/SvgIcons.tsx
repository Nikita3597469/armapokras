import type { SVGProps } from "react";

const defaultClassName = "w-8 h-8";

export function IconSpray(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={defaultClassName}
      aria-hidden
      {...props}
    >
      <path d="M8 6v12" />
      <path d="M8 12h10" />
      <circle cx="20" cy="12" r="2" />
      <path d="M8 15h2v3" />
    </svg>
  );
}

export function IconPolish(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={defaultClassName}
      aria-hidden
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="14" cy="10" r="4" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function IconShield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={defaultClassName}
      aria-hidden
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function IconCar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={defaultClassName}
      aria-hidden
      {...props}
    >
      <path d="M5 17h14v-5H5v5z" />
      <path d="M5 12l2-4h10l2 4" />
      <circle cx="7.5" cy="17" r="1.5" />
      <circle cx="16.5" cy="17" r="1.5" />
    </svg>
  );
}

export function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={defaultClassName}
      aria-hidden
      {...props}
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function IconStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={defaultClassName}
      aria-hidden
      {...props}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

const iconMap = {
  spray: IconSpray,
  polish: IconPolish,
  shield: IconShield,
  car: IconCar,
  check: IconCheck,
  star: IconStar,
} as const;

export type IconName = keyof typeof iconMap;

export function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = iconMap[name];
  return Icon ? <Icon className={className ?? defaultClassName} /> : null;
}

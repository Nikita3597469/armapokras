"use client";

import { track } from "@vercel/analytics";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function WhatsAppLink({ href, onClick, children, ...rest }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    track("whatsapp_click");
    onClick?.(e);
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

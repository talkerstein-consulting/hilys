import type { AnchorHTMLAttributes, ReactNode } from "react";

interface CtaButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> {
  href: string;
  children: ReactNode;
  className?: string;
  iconClassName?: string;
}

export function CtaButton({
  href,
  children,
  className = "",
  iconClassName = "h-9 w-9",
  ...rest
}: CtaButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-3 rounded-md bg-[#A30F52] py-3 pl-5 pr-2 text-base font-medium uppercase tracking-wide text-white transition-all duration-300 hover:rounded-[50px] ${className}`}
      {...rest}
    >
      <span>{children}</span>
      <span
        className={`flex shrink-0 items-center justify-center rounded-full bg-white text-[#A30F52] transition-transform duration-300 group-hover:scale-110 ${iconClassName}`}
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
          <path
            d="M7.5 4.5L13 10l-5.5 5.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}

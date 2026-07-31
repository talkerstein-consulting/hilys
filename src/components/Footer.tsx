import { motion, useReducedMotion, type Variants } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

const navGroups = [
  {
    title: "Birthday Packages",
    links: [
      { label: "Little Sparkly Princess", href: "/birthday-packages/little-sparkly-princess" },
      { label: "Tie-Dye Birthday Bash", href: "/birthday-packages/tie-dye-birthday-party" },
      { label: "Sparkly Slime Birthday", href: "/birthday-packages/your-sparkly-slime-birthday" },
      { label: "Super Model Birthday", href: "/birthday-packages/super-model-birthday" },
      { label: "Canvas Birthday Party", href: "/birthday-packages/canvas-birthday-party" },
    ],
  },
  {
    title: "Day Spa Packages",
    links: [
      { label: "Twinkly Day", href: "/day-spa-packages/twinkly-day" },
      { label: "Sparkly Day", href: "/day-spa-packages/sparkly-day" },
      { label: "Super Shiny Day", href: "/day-spa-packages/super-shiny-day" },
      { label: "Hily's Sparkly Day", href: "/day-spa-packages/hilys-sparkly-day" },
      { label: "Special One & Me", href: "/day-spa-packages/special-one-me" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Articles", href: "/articles" },
      { label: "Contact", href: "/contact" },
      { label: "Book Now", href: "/booking" },
    ],
  },
];

const hours = [
  { day: "Sunday", time: "9 AM - 8 PM" },
  { day: "Monday", time: "9 AM - 8 PM" },
  { day: "Tuesday", time: "9 AM - 8 PM" },
  { day: "Wednesday", time: "9 AM - 8 PM" },
  { day: "Thursday", time: "9 AM - 8 PM" },
  { day: "Friday", time: "9 AM - 8 PM" },
  { day: "Saturday", time: "9 AM - 8 PM" },
];

const OPEN_HOUR = 9;
const CLOSE_HOUR = 20;

function useOpenStatus(): { mounted: boolean; isOpen: boolean; todayIndex: number } {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  if (!now) {
    return { mounted: false, isOpen: false, todayIndex: -1 };
  }

  const hour = now.getHours();
  return {
    mounted: true,
    isOpen: hour >= OPEN_HOUR && hour < CLOSE_HOUR,
    todayIndex: now.getDay(),
  };
}

const socialLinks = [
  { label: "Facebook", icon: FacebookIcon, href: "https://www.facebook.com/HilysSparklySpa/" },
  { label: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/hilyssparklyspa/" },
];

function FacebookIcon({ className }: { className?: string }): ReactNode {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.022 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.877h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.918 8.437-9.94z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }): ReactNode {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Footer(): ReactNode {
  const reduce = useReducedMotion();
  const { mounted, isOpen, todayIndex } = useOpenStatus();

  return (
    <footer className="w-full bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <motion.div
        variants={container}
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto w-full max-w-6xl"
      >
        <motion.div
          variants={item}
          className="relative overflow-hidden rounded-3xl bg-[#A30F52] p-7 sm:p-10 lg:p-14"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/[0.06] blur-3xl"
          />
          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="lg:pr-8">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                  Opening Hours
                </h2>
                {mounted && (
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#A30F52]">
                    <span className="relative flex h-2 w-2">
                      <span
                        className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                          isOpen ? "bg-emerald-500" : "bg-red-500"
                        }`}
                      />
                      <span
                        className={`relative inline-flex h-2 w-2 rounded-full ${
                          isOpen ? "bg-emerald-500" : "bg-red-500"
                        }`}
                      />
                    </span>
                    {isOpen
                      ? `Open now · closes at ${CLOSE_HOUR - 12} PM`
                      : "Closed · by appointment"}
                  </span>
                )}
              </div>
              <p className="mb-6 text-sm text-white/60">
                207 Edgeley Blvd Unit 5, Concord, ON L4K 4B5
              </p>
              <dl className="divide-y divide-white/10">
                {hours.map((entry, index) => (
                  <div
                    key={entry.day}
                    className={`flex items-center justify-between gap-6 rounded-md px-3 py-2.5 first:pt-2.5 last:pb-2.5 ${
                      mounted && index === todayIndex ? "bg-white/10" : ""
                    }`}
                  >
                    <dt className="text-sm font-medium text-white">
                      {entry.day}
                    </dt>
                    <dd className="text-sm font-medium text-white/80">
                      {entry.time}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 px-3 text-xs text-white/50">
                By appointment only.
              </p>
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10 lg:min-h-0">
              <iframe
                title="Hily's Sparkly Spa location"
                src="https://www.google.com/maps?q=207+Edgeley+Blvd+Unit+5,+Concord,+ON+L4K+4B5&output=embed"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:grid-cols-[1.35fr_1fr_1fr_1fr]"
        >
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <a href="/" className="inline-block">
              <img
                src="/img/spa/full-horizontal.webp"
                alt="Hily's Sparkly Spa"
                width={240}
                height={64}
                className="h-14 w-auto object-contain"
              />
            </a>
            <p className="text-muted-foreground mt-3 max-w-[28ch] text-sm leading-relaxed">
              Vaughan&apos;s premier children&apos;s spa and birthday party
              venue.
            </p>
          </div>
          {navGroups.map((group) => (
            <nav key={group.title} aria-label={group.title} className="min-w-0">
              <h3 className="text-muted-foreground mb-5 text-xs font-medium uppercase tracking-[0.16em]">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="border-border mt-14 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Hily&apos;s Sparkly Spa.
          </p>
          <div className="flex items-center gap-1">
            {socialLinks.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:bg-muted hover:text-foreground flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

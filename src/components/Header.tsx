import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useState, useSyncExternalStore, type ReactNode } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;
const easeInOut = [0.65, 0, 0.35, 1] as const;
const spring = { type: "spring", stiffness: 100, damping: 20, mass: 1 } as const;
const DESKTOP_BREAKPOINT = 700;

const socialLinks = [
  { label: "Facebook", icon: FacebookIcon, href: "https://www.facebook.com/HilysSparklySpa/" },
  { label: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/hilyssparklyspa/" },
];

function useIsDesktop(): boolean {
  return useSyncExternalStore(
    (callback) => {
      const mq = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
      mq.addEventListener("change", callback);
      return () => mq.removeEventListener("change", callback);
    },
    () => window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`).matches,
    () => true
  );
}

const menuCards = [
  {
    id: "products",
    title: "BIRTHDAY PACKAGES",
    links: [
      { label: "Little Sparkly Princess", href: "/birthday-packages/little-sparkly-princess", badge: null },
      { label: "Tie-Dye Birthday Party", href: "/birthday-packages/tie-dye-birthday-party", badge: null },
      { label: "Sparkly Slime Birthday", href: "/birthday-packages/your-sparkly-slime-birthday", badge: null },
      { label: "Super Model Birthday", href: "/birthday-packages/super-model-birthday", badge: null },
      { label: "Canvas Birthday Party", href: "/birthday-packages/canvas-birthday-party", badge: null },
    ],
  },
  {
    id: "resources",
    title: "DAY SPA PACKAGES",
    links: [
      { label: "Twinkly Day", href: "/day-spa-packages/twinkly-day", badge: null },
      { label: "Sparkly Day", href: "/day-spa-packages/sparkly-day", badge: null },
      { label: "Super Shiny Day", href: "/day-spa-packages/super-shiny-day", badge: null },
      { label: "Hily's Sparkly Day", href: "/day-spa-packages/hilys-sparkly-day", badge: null },
      { label: "Special One & Me", href: "/day-spa-packages/special-one-me", badge: null },
    ],
  },
  {
    id: "contact",
    title: "INFORMATION",
    links: [
      { label: "Gallery", href: "/gallery", badge: null },
      { label: "Articles", href: "/articles", badge: null },
      { label: "Contact", href: "/contact", badge: null },
      { label: "Waiver & Consent", href: "/waiver-consent", badge: null },
    ],
  },
];

function HamburgerIcon({ isOpen }: { isOpen: boolean }): ReactNode {
  return (
    <div className="relative flex h-2.5 w-7 cursor-pointer flex-col justify-between">
      <motion.span
        className="block h-0.5 w-full origin-center rounded-full bg-current"
        animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.4, ease: easeOut }}
      />
      <motion.span
        className="block h-0.5 w-full origin-center rounded-full bg-current"
        animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.4, ease: easeOut }}
      />
    </div>
  );
}

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

function MenuCard({
  card,
  onNavigate,
}: {
  card: (typeof menuCards)[number];
  onNavigate: () => void;
}): ReactNode {
  return (
    <motion.div
      className="bg-white min-h-50 rounded-2xl p-6 min-[1080px]:min-h-80"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: easeOut },
        },
      }}
    >
      <span className="text-foreground/50 text-xs font-medium tracking-widest uppercase">
        {card.title}
      </span>

      {card.links.length > 0 && (
        <ul className="mt-6">
          {card.links.map((link, index) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={onNavigate}
                className="group text-foreground hover:text-foreground/70 flex items-center justify-between py-4 text-xl font-semibold transition-all duration-300 md:text-2xl"
              >
                <span className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-1">
                  {link.label}
                  {link.badge && (
                    <span className="bg-accent rounded px-2 py-0.5 text-xs font-medium text-black uppercase">
                      {link.badge}
                    </span>
                  )}
                </span>
                <ArrowUpRight className="h-5 w-5 opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>
              {index < card.links.length - 1 && (
                <div className="bg-foreground/10 h-px" />
              )}
            </li>
          ))}
        </ul>
      )}

      {card.id === "contact" && (
        <div className="mt-6 flex items-center gap-4">
          {socialLinks.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground/10 text-foreground hover:bg-foreground/20 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function MobileSignUpButton({
  onNavigate,
}: {
  onNavigate: () => void;
}): ReactNode {
  return (
    <motion.div
      className="col-span-full flex items-center justify-center gap-2 pt-2"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: easeOut },
        },
      }}
    >
      <a
        href="/gallery"
        onClick={onNavigate}
        className="text-foreground rounded-[3.5px] bg-foreground/10 px-6 py-3 text-xl font-medium tracking-tight transition-colors"
      >
        Gallery
      </a>
      <a
        href="/booking"
        onClick={onNavigate}
        className="group bg-[#A30F52] relative rounded-[3.5px] px-6 py-3 text-xl font-medium tracking-tight text-white transition-all duration-500 hover:rounded-[50px]"
      >
        <span
          className="relative block h-[1.25em] overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          }}
        >
          <span className="flex flex-col duration-0 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2/3 group-hover:transition-transform group-hover:duration-300">
            <span className="block leading-[1.25em]">Book Now</span>
            <span className="block leading-[1.25em]">Book Now</span>
            <span className="block leading-[1.25em]">Book Now</span>
          </span>
        </span>
      </a>
    </motion.div>
  );
}

export default function Header(): ReactNode {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const isDesktop = useIsDesktop();
  const heightDelay = isDesktop ? 0.2 : 0;
  const cardsDelay = isDesktop ? 0.7 : 0.2;

  React.useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        initial={false}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: easeOut }}
        style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />

      <motion.header
        className="fixed top-0 left-0 z-50 flex w-full justify-center px-4 pt-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: easeOut,
        }}
      >
        <motion.nav
          className="bg-gradient-to-r from-[#FBE7E4] to-accent shadow-2xl/20 flex max-w-6xl flex-col overflow-hidden rounded-md"
          initial={false}
          animate={{
            width: isMenuOpen ? "100%" : hasScrolled ? "56rem" : "42rem",
          }}
          transition={{ ...spring, delay: isMenuOpen ? 0 : 0.15 }}
        >
          <div className="flex w-full items-center justify-between py-2 pr-2 pl-4">
            <a href="/" className="flex items-center">
              <img
                src="/img/spa/full-horizontal.webp"
                alt="Hily's Sparkly Spa"
                width={180}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </a>

            <button
              className="text-black/80 hover:text-black flex h-full cursor-pointer items-center gap-2 rounded-[3.5px] px-2 transition-colors hover:bg-black/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <HamburgerIcon isOpen={isMenuOpen} />
              <span className="text-xl font-medium tracking-tight">Menu</span>
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="overflow-hidden"
                style={{ maxHeight: "calc(100vh - 6rem)" }}
                initial={{ height: 0 }}
                animate={{
                  height: "auto",
                  transition: {
                    duration: 0.5,
                    ease: easeInOut,
                    delay: heightDelay,
                  },
                }}
                exit={{
                  height: 0,
                  transition: { duration: 0.4, ease: easeInOut },
                }}
              >
                <div className="scrollbar-hide max-h-[calc(100vh-6rem)] overflow-y-auto">
                  <motion.div
                    className="grid grid-cols-1 gap-6 p-6 min-[1080px]:grid-cols-3"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      hidden: {
                        transition: {
                          staggerChildren: 0.05,
                          staggerDirection: -1,
                        },
                      },
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: cardsDelay,
                        },
                      },
                    }}
                  >
                    {menuCards.map((card) => (
                      <MenuCard
                        key={card.id}
                        card={card}
                        onNavigate={() => setIsMenuOpen(false)}
                      />
                    ))}
                    <MobileSignUpButton onNavigate={() => setIsMenuOpen(false)} />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </motion.header>
    </>
  );
}

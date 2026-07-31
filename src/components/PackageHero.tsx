import { CtaButton } from "./CtaButton";
import { Crown, Sparkles, PartyPopper } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import type { PointerEvent } from "react";
import type { PackageData } from "../data/packages-data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const headline: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const panel: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.07,
      delayChildren: 0.25,
    },
  },
};

const panelRow: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function extractAgeRange(tagline: string): string | null {
  const match = tagline.match(/ages\s+\d+[–‐-]\d+/i);
  return match ? match[0].replace(/^ages/i, "Ages") : null;
}

export default function PackageHero({
  pkg,
  categoryLabel,
}: {
  pkg: PackageData;
  categoryLabel: string;
}) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 90, damping: 28, mass: 0.8 });
  const springY = useSpring(pointerY, { stiffness: 90, damping: 28, mass: 0.8 });
  const cardX = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const cardY = useTransform(springY, [-0.5, 0.5], [-4, 4]);

  const ageRange = extractAgeRange(pkg.tagline);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      onPointerMove={handlePointerMove}
      className="relative flex min-h-screen w-full items-start overflow-hidden bg-white px-4 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-20 lg:items-center lg:px-8"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_95px,rgba(163,15,82,0.035)_95px,rgba(163,15,82,0.035)_96px)] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
        <div className="absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-[#F0A3C4]/30 blur-[120px]" />
        <div className="bg-muted absolute bottom-[-20%] left-[-8%] h-[400px] w-[400px] rounded-full blur-[100px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 mx-auto w-full max-w-[1400px]"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="flex flex-col items-start">
            <motion.p
              variants={item}
              className="text-xs font-medium uppercase tracking-[0.2em] text-[#A30F52]"
            >
              {categoryLabel}
              {ageRange ? ` · ${ageRange}` : ""}
            </motion.p>

            <motion.h1
              variants={headline}
              className="mt-8 max-w-2xl text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              {pkg.title}.
            </motion.h1>

            <motion.p
              variants={item}
              className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
            >
              {pkg.tagline}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <CtaButton href="/booking" className="w-full sm:w-auto">
                Book This Package
              </CtaButton>
              <a
                href="/contact"
                className="border-border text-foreground hover:bg-muted inline-flex w-full items-center justify-center rounded-full border px-6 py-3 text-sm font-medium transition-colors duration-200 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
              >
                Ask a Question
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="border-border mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t pt-6"
            >
              {ageRange && (
                <span className="text-muted-foreground flex items-center gap-2 text-sm">
                  <Crown className="h-4 w-4 text-[#A30F52]" />
                  {ageRange}
                </span>
              )}
              <span className="text-muted-foreground flex items-center gap-2 text-sm">
                <PartyPopper className="h-4 w-4 text-[#A30F52]" />
                {pkg.duration}
              </span>
            </motion.div>

            <motion.div
              variants={item}
              className="relative mt-8 h-64 w-full max-w-xl overflow-hidden rounded-2xl sm:h-80"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </motion.div>
          </div>

          <motion.div variants={panel} className="relative">
            <div
              aria-hidden="true"
              className="bg-muted absolute -inset-8 rounded-[3rem] blur-3xl"
            />

            <motion.div style={{ x: cardX, y: cardY }} className="relative">
              <div className="bg-background border-border rounded-3xl border p-5 shadow-2xl shadow-black/10 sm:p-6">
                <motion.div
                  variants={panelRow}
                  className="border-border flex items-center justify-between gap-3 border-b pb-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A30F52] text-white">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-medium">
                        {pkg.title}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {pkg.pricing[0]?.label} · {pkg.pricing[0]?.price}
                      </p>
                    </div>
                  </div>
                  <span className="border-border text-muted-foreground flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A30F52]" />
                    {pkg.duration}
                  </span>
                </motion.div>

                <div className="divide-border mt-2 divide-y">
                  {pkg.sections.map((section) => (
                    <motion.div key={section.title} variants={panelRow} className="py-4">
                      <p className="text-foreground mb-2 text-sm font-medium">
                        {section.title}
                      </p>
                      <ul className="text-muted-foreground space-y-2 text-sm leading-relaxed">
                        {section.items.map((sectionItem) => (
                          <li key={sectionItem} className="flex gap-2">
                            <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#A30F52]" />
                            <span>{sectionItem}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  variants={panelRow}
                  className="bg-muted mt-2 rounded-2xl p-4 sm:p-5"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-muted-foreground text-xs font-medium uppercase tracking-[0.15em]">
                      Details &amp; Pricing
                    </p>
                    <p className="text-foreground text-lg font-semibold tracking-tight">
                      {pkg.pricing[0]?.price}
                    </p>
                  </div>
                  <ul className="text-muted-foreground mt-3 space-y-1 text-xs">
                    {pkg.pricing.map((p) => (
                      <li key={p.label} className="flex items-center justify-between gap-3">
                        <span>{p.label}</span>
                        <span className="text-foreground font-medium">{p.price}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-muted-foreground mt-3 text-xs">
                    Duration: {pkg.duration}
                    {pkg.deposit ? ` · ${pkg.deposit}` : ""}
                  </p>

                  {pkg.includes && (
                    <p className="text-muted-foreground mt-2 text-xs leading-relaxed">
                      {pkg.includes}
                    </p>
                  )}

                  {pkg.addons && pkg.addons.length > 0 && (
                    <ul className="text-muted-foreground mt-3 space-y-1 text-xs">
                      {pkg.addons.map((addon) => (
                        <li key={addon}>Add {addon}</li>
                      ))}
                    </ul>
                  )}

                  <p className="text-muted-foreground mt-4 text-xs">
                    Please contact us for further pricing and package
                    inquiries.
                  </p>

                  <div className="mt-4 flex flex-col gap-2">
                    <CtaButton href="/booking" iconClassName="h-8 w-8">
                      Book Now
                    </CtaButton>
                    <a
                      href="/contact"
                      className="text-muted-foreground hover:text-foreground text-center text-xs underline underline-offset-4 transition-colors"
                    >
                      Contact Us
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

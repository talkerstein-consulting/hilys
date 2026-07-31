import { motion, useReducedMotion, type Variants } from "motion/react";
import { Compass, Handshake, Layers3, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

const values = [
  {
    index: "01",
    title: "Premier Children's Spa in Vaughan",
    icon: Sparkles,
    text: "We specialize in age-appropriate treatments and workshops so every child feels comfortable and excited.",
  },
  {
    index: "02",
    title: "Safety & Supervision",
    icon: Handshake,
    text: "Our fully trained, sparkle-savvy staff maintains a spotless, allergen-friendly environment — mom-approved down to the last detail.",
  },
  {
    index: "03",
    title: "Unforgettable Keepsakes",
    icon: Layers3,
    text: "From custom tie-dye tees to glitter slime, each workshop leaves kids with a handmade memento to cherish.",
  },
  {
    index: "04",
    title: "Stress-Free Planning",
    icon: Compass,
    text: "We handle everything — décor, supervising, and cleanup — so you can sit back, relax, and enjoy your child's big smile.",
  },
];

export default function AboutValues(): ReactNode {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" className="w-full bg-background px-6 py-16 md:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-24">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.p
                variants={item}
                className="text-xs font-medium uppercase tracking-[0.2em] text-[#A30F52]"
              >
                About Us
              </motion.p>
              <motion.figure
                variants={item}
                className="relative mt-6 overflow-hidden rounded-3xl p-8 sm:p-10"
              >
                <img
                  src="/img/spa/bday-service.webp"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#A30F52]/80" />
                <blockquote className="relative text-2xl font-semibold leading-[1.15] tracking-tight text-white [text-wrap:balance] sm:text-3xl lg:text-4xl">
                  &ldquo;Every child deserves a moment in the
                  spotlight.&rdquo;
                </blockquote>
                <figcaption className="relative mt-8 flex items-center gap-3">
                  <img
                    src="/img/spa/logo.webp"
                    alt="Hily's Sparkly Spa"
                    className="h-10 w-10 rounded-full bg-white object-contain p-1"
                  />
                  <span>
                    <span className="block text-sm font-medium text-white">
                      Hily&apos;s Sparkly Spa
                    </span>
                    <span className="block text-xs text-white/60">
                      Vaughan, Ontario
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
              <motion.p
                variants={item}
                className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground [text-wrap:pretty] sm:text-lg"
              >
                Our safe, supervised environment invites kids (and their
                parents) to dive into a world of shimmer and shine: from
                glitter tattoos to DIY cupcake decorating, it&apos;s all here
                under one roof.
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="divide-border border-border divide-y border-y"
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.article
                  key={value.index}
                  variants={item}
                  className="grid grid-cols-[3.5rem_1fr] gap-4 py-8 sm:grid-cols-[5rem_1fr] sm:gap-6 sm:py-10"
                >
                  <p className="text-muted-foreground pt-1 font-mono text-sm">
                    {value.index}
                  </p>
                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
                        {value.title}
                      </h3>
                      <Icon className="text-muted-foreground mt-1 h-5 w-5 shrink-0" />
                    </div>
                    <p className="text-muted-foreground mt-3 max-w-lg text-base leading-relaxed [text-wrap:pretty]">
                      {value.text}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

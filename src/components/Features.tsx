import { ChevronRightIcon } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;

interface Feature {
  number: string;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    number: "01",
    title: "Premier Children's Spa in Vaughan",
    description:
      "We specialize in age-appropriate treatments and workshops so every child feels comfortable and excited.",
    image: "/img/spa/bday-service.webp",
  },
  {
    number: "02",
    title: "Safety & Supervision",
    description:
      "Our fully trained, sparkle-savvy staff maintains a spotless, allergen-friendly environment — mom-approved down to the last detail.",
    image: "/img/spa/day-spa-service.webp",
  },
  {
    number: "03",
    title: "Unforgettable Keepsakes",
    description:
      "From custom tie-dye tees to glitter slime, each workshop leaves kids with a handmade memento to cherish.",
    image: "/img/spa/gallary-5.jpg.jpg",
  },
  {
    number: "04",
    title: "Stress-Free Planning",
    description:
      "We handle everything — decor, cleanup — so you can focus on enjoying your child's big smile.",
    image: "/img/spa/gallary-6.jpg.jpg",
  },
  {
    number: "05",
    title: "Local, Lovingly Run",
    description:
      "As a Vaughan-based children's spa, we're deeply rooted in our community. We know local moms want safe, joy-filled fun that feels personal.",
    image: "/img/spa/gallary-2.jpg.jpg",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}): ReactNode {
  return (
    <motion.div
      className={`grid grid-cols-1 gap-2 overflow-hidden rounded-2xl p-2 transition-colors duration-300 md:grid-cols-2 ${
        index % 2 === 0
          ? "bg-[#F0A3C4]/25 hover:bg-[#F0A3C4]/35"
          : "bg-muted hover:bg-muted/80"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: easeOut,
      }}
    >
      <div className="px-4 py-28">
        <span className="text-muted-foreground bg-foreground/5 mb-4 block w-fit rounded-md px-2 py-1 text-sm font-medium transition-colors duration-300 group-hover:bg-foreground/10">
          {feature.number}
        </span>
        <h3 className="mb-4 text-2xl font-medium tracking-tight md:text-3xl">
          {feature.title}
        </h3>
        <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>

      <div className="relative aspect-4/3 w-full self-stretch overflow-hidden rounded-xl md:aspect-auto">
        <img
          src={feature.image}
          alt={feature.title}
          className="relative! h-full! w-full! object-cover md:absolute!"
        />
      </div>
    </motion.div>
  );
}

export default function Features(): ReactNode {
  return (
    <section className="bg-background px-6 py-16 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
        {/* Sticky left column */}
        <motion.div
          className="lg:sticky lg:top-60 lg:w-96 lg:shrink-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <h2 className="mb-4 text-2xl font-medium tracking-tight md:mb-6 md:text-3xl lg:text-4xl">
            Why Choose Hily&apos;s Sparkly Spa?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-sm text-base md:mb-8 md:text-lg">
            As a Vaughan-based children&apos;s spa, we&apos;re deeply rooted in our
            community and know local moms want safe, joy-filled fun that feels
            personal.
          </p>
          <a
            href="/booking"
            className="bg-[#A30F52] group inline-flex w-full items-center justify-center gap-3 rounded-md py-3 pr-3 pl-5 text-base font-medium uppercase tracking-wide text-white transition-all duration-500 ease-out hover:rounded-[50px] sm:w-auto"
          >
            <span>Book Your Sparkle Party</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#A30F52] transition-all duration-300 group-hover:scale-110">
              <ChevronRightIcon className="relative left-px h-4 w-4" />
            </span>
          </a>
        </motion.div>

        {/* Scrolling right column */}
        <div className="flex min-w-0 flex-1 flex-col gap-6 md:gap-32">
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, type Variants } from "motion/react";
import { CalendarCheck2, PartyPopper, Search } from "lucide-react";
import type { ReactNode } from "react";

const cards = [
  {
    icon: Search,
    statement: "Choose your experience.",
    description:
      "Browse our Birthday Packages or Day Spa Packages and pick the one that fits your celebration.",
    surface: "bg-muted",
    heading: "text-foreground",
    body: "text-muted-foreground",
  },
  {
    icon: CalendarCheck2,
    statement: "Book & customize.",
    description:
      "Select your date, pick a theme, and let us know any dietary or allergy notes.",
    surface: "bg-accent/40",
    heading: "text-foreground",
    body: "text-muted-foreground",
  },
  {
    icon: PartyPopper,
    statement: "Arrive & sparkle.",
    description:
      "Show up to our Vaughan location, relax, and watch the magic unfold.",
    surface: "bg-[#A30F52]",
    heading: "text-white",
    body: "text-white/70",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function BookingFeaturesTrio(): ReactNode {
  return (
    <section className="bg-background px-6 pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.statement}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={`flex min-h-[280px] flex-col rounded-3xl p-6 transition-shadow duration-200 hover:shadow-xl hover:shadow-black/10 sm:p-8 lg:min-h-[340px] ${card.surface}`}
              >
                <Icon className={`h-7 w-7 ${card.heading}`} strokeWidth={1.5} />

                <div className="mt-auto pt-14 sm:pt-16">
                  <h3
                    className={`text-2xl font-medium leading-snug tracking-tight ${card.heading}`}
                  >
                    {card.statement}
                  </h3>
                  <p className={`mt-4 text-sm leading-relaxed sm:text-base ${card.body}`}>
                    {card.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

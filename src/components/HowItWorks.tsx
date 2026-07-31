import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Download, MousePointer, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Choose Your Experience",
    icon: Download,
    description:
      "Browse our Birthday Packages or Day Spa Packages on our website.",
    image: "/img/spa/bday-service.webp",
    card: {
      title: "Popular Packages",
      items: [
        { label: "Little Sparkly Princess", tag: "Ages 3-13" },
        { label: "Tie-Dye Birthday Bash", tag: "Ages 6-13" },
        { label: "Sparkly Day Spa", tag: "Ages 3-12" },
      ],
    },
  },
  {
    title: "Book & Customize",
    icon: MousePointer,
    description:
      "Select your date, pick a theme, and let us know any dietary or allergy notes.",
    image: "/img/spa/day-spa-service.webp",
    card: {
      title: "What We'll Ask",
      items: [
        { label: "Preferred Date & Time", tag: "Step 1" },
        { label: "Party Theme", tag: "Step 2" },
        { label: "Dietary or Allergy Notes", tag: "Step 3" },
      ],
    },
  },
  {
    title: "Arrive & Sparkle",
    icon: Sparkles,
    description:
      "Show up to our Vaughan location, relax, and watch the magic unfold.",
    image: "/img/spa/gallary-5.jpg.jpg",
    card: {
      title: "On Arrival",
      items: [
        { label: "Check In at the Front Desk", tag: "1" },
        { label: "Meet Your Party Host", tag: "2" },
        { label: "Let the Sparkle Begin", tag: "3" },
      ],
    },
  },
];

export default function HowItWorks(): ReactNode {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleStepClick = (index: number): void => {
    setActiveIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 5000);
  };

  return (
    <section className="bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-0">
          <div className="flex flex-col lg:pr-12 xl:pr-16">
            <div className="mb-8 md:mb-12">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-muted-foreground mb-4 text-sm sm:text-base"
              >
                How It Works
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-6 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl"
              >
                From booking to sparkle in three easy steps
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-muted-foreground max-w-xl text-base sm:text-lg"
              >
                Booking a birthday party or day spa visit at Hily&apos;s
                Sparkly Spa only takes a few minutes.
              </motion.p>
            </div>

            <div className="bg-border mb-8 h-px w-full lg:w-[calc(100%+3rem)] xl:w-[calc(100%+4rem)]" />

            <div className="space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeIndex === index;

                return (
                  <motion.button
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    onClick={() => handleStepClick(index)}
                    className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors duration-200 ${
                      isActive ? "bg-[#F0A3C4]/25" : "hover:bg-muted/50"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 transition-colors duration-200 ${
                        isActive ? "text-[#A30F52]" : "text-muted-foreground/50"
                      }`}
                    />
                    <span
                      className={`text-base font-medium transition-colors duration-200 sm:text-lg ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-muted relative aspect-[3/4] max-h-[650px] w-full overflow-hidden rounded-3xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <img
                    src={steps[activeIndex]!.image}
                    alt={steps[activeIndex]!.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-60"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-2.5 flex items-center justify-center">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={activeIndex}
                      initial={{ y: "250%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-250%" }}
                      transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute mx-auto w-full max-w-md"
                    >
                      <div className="rounded-2xl bg-white/80 p-1 shadow-lg backdrop-blur-md">
                        <div className="rounded-xl bg-white p-6">
                          <h3 className="mb-4 text-lg font-semibold text-foreground">
                            {steps[activeIndex]!.card.title}
                          </h3>
                          <div className="space-y-3">
                            {steps[activeIndex]!.card.items.map((item) => (
                              <div
                                key={item.label}
                                className="flex items-start justify-between gap-3 py-2"
                              >
                                <p className="text-sm font-medium text-foreground">
                                  {item.label}
                                </p>
                                <span className="inline-flex shrink-0 rounded bg-[#A30F52]/10 px-2 py-0.5 text-xs font-medium text-[#A30F52]">
                                  {item.tag}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { CtaButton } from "./CtaButton";

const images = [
  { id: 1, url: "/img/spa/bday-service.webp", alt: "Birthday Party Blowout at Hily's Sparkly Spa" },
  { id: 2, url: "/img/spa/day-spa-service.webp", alt: "Day spa treatment at Hily's Sparkly Spa" },
  { id: 3, url: "/img/spa/mini-duo-package.webp", alt: "Special One & Me parent-child spa duo" },
  { id: 4, url: "/img/spa/gallary-1.jpg.jpg", alt: "Glitter tattoos at Hily's Sparkly Spa" },
  { id: 5, url: "/img/spa/gallary-2.jpg.jpg", alt: "Mani-pedi at Hily's Sparkly Spa" },
  { id: 6, url: "/img/spa/gallary-3.jpg.jpg", alt: "Glitter makeup at Hily's Sparkly Spa" },
  { id: 7, url: "/img/spa/gallary-4.jpg.jpg", alt: "Face mask treatment at Hily's Sparkly Spa" },
  { id: 8, url: "/img/spa/gallary-5.jpg.jpg", alt: "Sparkle party at Hily's Sparkly Spa" },
  { id: 9, url: "/img/spa/gallary-6.jpg.jpg", alt: "Parent's lounge at Hily's Sparkly Spa" },
  { id: 10, url: "/img/spa/step1.jpg", alt: "Tie-dye birthday craft station" },
  { id: 11, url: "/img/spa/step2.jpg", alt: "Sparkly slime lab" },
];

const duplicatedImages = [...images, ...images];

export default function GalleryCTA(): ReactNode {
  return (
    <section className="flex w-full flex-col items-center overflow-visible bg-background">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
        <div className="space-y-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Every party is <span className="italic font-light">a story</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Glitter tattoos, mani-pedis, and hands-on crafts — take a peek at
            the sparkle from real Hily&apos;s Sparkly Spa celebrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <CtaButton href="/gallery">See the full gallery</CtaButton>
          </motion.div>
        </div>
      </div>

      <div className="w-full overflow-x-clip pb-12 pt-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="relative">
          <motion.div
            className="flex gap-4 sm:gap-6 md:gap-8"
            animate={{ x: ["-0%", "-50%"] }}
            transition={{
              x: {
                duration: 40,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            style={{ willChange: "transform" }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className={`relative h-44 w-32 shrink-0 overflow-hidden rounded-lg bg-muted sm:h-48 sm:w-36 md:h-56 md:w-44 lg:h-64 lg:w-48 ${
                  index % 2 === 1 ? "-mt-8 sm:-mt-10 md:-mt-12 lg:-mt-16" : ""
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { ChevronRightIcon } from "lucide-react";
import { useState, type ReactNode } from "react";

interface ExperienceSection {
  heading: string;
  body: string;
}

interface Experience {
  title: string;
  image: string;
  sections: ExperienceSection[];
  cta: { text: string; href: string };
}

const experiences: Experience[] = [
  {
    title: "Birthday Party Blowouts",
    image: "/img/spa/bday-service.webp",
    sections: [
      {
        heading: "What to expect?",
        body: "Themed mani-pedis, glitter tattoos, and hands-on activities (slime labs, tie-dye, canvas painting) tailored to each party's theme.",
      },
      {
        heading: "Highlights",
        body: "Private party suite, digital photo gallery, and take-home keepsakes.",
      },
      {
        heading: "Why Moms Love it",
        body: "We handle décor, supervising, and cleanup — so you can sit back, relax, and capture every sparkly moment.",
      },
    ],
    cta: { text: "Book Your Sparkle Party", href: "/booking" },
  },
  {
    title: "Day Spa Delights",
    image: "/img/spa/day-spa-service.webp",
    sections: [
      {
        heading: "Half-Day & Full-Day Options:",
        body: "Mini mani-pedis, facial masks, glitter makeup, and creative workshops keep kids entertained for hours.",
      },
      {
        heading: "Works for:",
        body: "Playdates, rainy-day plans, birthday gifts or extra-special treats.",
      },
      {
        heading: "Why Moms Love it",
        body: "Drop off your child with confidence, knowing they're in a safe, uplifting environment that nurtures creativity.",
      },
    ],
    cta: { text: "Book Your Day Spa", href: "/day-spa-packages" },
  },
  {
    title: "Hily's Specials",
    image: "/img/spa/two-girls-manicure.webp",
    sections: [
      {
        heading: "Midweek Special",
        body: "Come celebrate your little one's birthday at Hily's Sparkly Spa!",
      },
      {
        heading: "Special One & Me (Parent + Child)",
        body: "A bonding spa experience with matching mani-pedis, glitter tattoos, and shared crafts.",
      },
      {
        heading: "Why Moms Love It",
        body: "Busy families looking for a memorable hour or a heartwarming parent-child outing. Drop off your kids in the spa while you relax in the parent's lounge.",
      },
    ],
    cta: { text: "Book Your Package", href: "/booking" },
  },
];

function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}): ReactNode {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-muted relative flex flex-col overflow-hidden rounded-2xl border border-border p-6"
    >
      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 0.5 : 0, scale: hovered ? 1 : 0.75 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-md"
        style={{
          background:
            "radial-gradient(circle, rgba(163,15,82,0.85) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl">
        <img
          src={experience.image}
          alt={experience.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <h3 className="relative mb-4 text-xl font-medium tracking-tight text-[#A30F52]">
        {experience.title}
      </h3>

      <div className="relative flex-1 space-y-4">
        {experience.sections.map((section) => (
          <div key={section.heading}>
            <p className="text-foreground mb-1 text-sm font-semibold">
              {section.heading}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {section.body}
            </p>
          </div>
        ))}
      </div>

      <a
        href={experience.cta.href}
        className="group relative mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-[#A30F52] py-3 pl-5 pr-3 text-base font-medium uppercase tracking-wide text-white transition-all duration-300 hover:rounded-[50px]"
      >
        <span>{experience.cta.text}</span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#A30F52] transition-transform duration-300 group-hover:scale-110">
          <ChevronRightIcon className="h-4 w-4" />
        </span>
      </a>
    </motion.div>
  );
}

export default function SignatureExperiences(): ReactNode {
  return (
    <section className="bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-medium tracking-tight md:text-4xl"
        >
          Our Signature Experiences
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.title}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import BookingFeaturesTrio from "./BookingFeaturesTrio";
import BookingModal from "./BookingModal";
import { birthdayPackages, daySpaPackages, type PackageData } from "../data/packages-data";
import { Sparkles } from "lucide-react";
import { useState, type ReactNode } from "react";

const midweekSpecial = {
  title: "Midweek Special",
  image: "/img/spa/booking/midweek-special.webp",
  tags: [
    "Eyeliner",
    "Mani & Pedi",
    "Lip Glitter",
    "Hand Cream",
    "Tattoos",
    "Glitters",
    "Face Glitter",
    "Hair Glitter",
    "Sparkly Cake Ceremony",
  ],
};

const bookingImages: Record<string, string> = {
  "little-sparkly-princess": "/img/spa/booking/little-sparkly.webp",
  "tie-dye-birthday-party": "/img/spa/booking/tie-dye.webp",
  "your-sparkly-slime-birthday": "/img/spa/booking/sparkle-slime.webp",
  "super-model-birthday": "/img/spa/booking/super-model.webp",
  "canvas-birthday-party": "/img/spa/booking/canvas-birthday.webp",
  "twinkly-day": "/img/spa/booking/twinkly-day.webp",
  "sparkly-day": "/img/spa/booking/sparkly-day.webp",
  "super-shiny-day": "/img/spa/booking/super-shiny-day.webp",
  "hilys-sparkly-day": "/img/spa/booking/hilys-sparkly.webp",
  "special-one-me": "/img/spa/booking/special-one-me.webp",
};

function tagsFor(pkg: PackageData): string[] {
  return pkg.sections.flatMap((section) => section.items);
}

function PackageTagCard({
  title,
  image,
  tags,
  onBook,
}: {
  title: string;
  image?: string;
  tags: string[];
  onBook: () => void;
}): ReactNode {
  return (
    <div className="bg-muted flex flex-col overflow-hidden rounded-2xl">
      {image && (
        <div className="relative h-64 w-full">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-lg font-medium tracking-tight text-[#A30F52]">
          {title}
        </h3>
        <p className="text-foreground mb-3 text-sm font-semibold">
          What to expect?
        </p>
        <ul className="mb-6 flex-1 space-y-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="text-muted-foreground flex items-center gap-2 text-xs font-medium uppercase tracking-wide"
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#A30F52]" />
              {tag}
            </li>
          ))}
        </ul>
        <button
          onClick={onBook}
          className="group mt-auto inline-flex items-center justify-center gap-3 rounded-md bg-[#A30F52] py-3 pl-5 pr-2 text-sm font-medium uppercase tracking-wide text-white transition-all duration-300 hover:rounded-[50px]"
        >
          <span>Book Now</span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#A30F52] transition-transform duration-300 group-hover:scale-110">
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
        </button>
      </div>
    </div>
  );
}

export default function BookingPageClient(): ReactNode {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="flex-1">
      <section className="bg-background px-6 pt-40 pb-16 md:pt-52 md:pb-24 text-center">
        <h1 className="mx-auto mb-4 max-w-3xl text-4xl font-medium tracking-tight md:text-6xl">
          Hily&apos;s Sparkly Spa
        </h1>
        <p className="text-muted-foreground mx-auto max-w-xl text-lg">
          At Hily&apos;s Sparkly Spa, we turn ordinary days into glittering
          adventures for ages 3 – 13.
        </p>
      </section>

      <BookingFeaturesTrio />

      <section className="bg-background px-6 pb-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-2xl font-medium tracking-tight md:text-3xl">
            Birthday Packages
          </h2>
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {birthdayPackages.map((pkg) => (
              <PackageTagCard
                key={pkg.slug}
                title={pkg.title}
                image={bookingImages[pkg.slug]}
                tags={tagsFor(pkg)}
                onBook={() => setSelected(pkg.title)}
              />
            ))}
            <PackageTagCard
              title={midweekSpecial.title}
              image={midweekSpecial.image}
              tags={midweekSpecial.tags}
              onBook={() => setSelected(midweekSpecial.title)}
            />
          </div>

          <h2 className="mb-6 text-2xl font-medium tracking-tight md:text-3xl">
            Day Spa Packages
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {daySpaPackages.map((pkg) => (
              <PackageTagCard
                key={pkg.slug}
                title={pkg.title}
                image={bookingImages[pkg.slug]}
                tags={tagsFor(pkg)}
                onBook={() => setSelected(pkg.title)}
              />
            ))}
          </div>
        </div>
      </section>

      <BookingModal packageName={selected} onClose={() => setSelected(null)} />
    </main>
  );
}

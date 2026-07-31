import { motion } from "motion/react";
import type { ReactNode } from "react";
import type { PackageData } from "../data/packages-data";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function PackageListing({
  title,
  description,
  basePath,
  packages,
}: {
  title: string;
  description: string;
  basePath: string;
  packages: PackageData[];
}): ReactNode {
  return (
    <main className="flex-1">
      <section className="bg-background px-6 pt-40 pb-16 text-center md:pt-52 md:pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mx-auto mb-4 max-w-3xl text-4xl font-medium tracking-tight md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
          className="text-muted-foreground mx-auto max-w-xl text-lg"
        >
          {description}
        </motion.p>
      </section>

      <section className="bg-background px-6 pb-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: easeOut }}
              className="bg-muted flex flex-col overflow-hidden rounded-2xl transition-colors duration-300 hover:bg-muted/80"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h2 className="mb-2 text-2xl font-medium tracking-tight">
                  {pkg.title}
                </h2>
                <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">
                  {pkg.tagline}
                </p>
                <p className="mb-4 text-sm font-medium">
                  {pkg.pricing[0]?.price}
                  <span className="text-muted-foreground">
                    {" "}
                    · {pkg.pricing[0]?.label} · {pkg.duration}
                  </span>
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/booking"
                    className="group inline-flex items-center justify-center gap-2 rounded-md bg-[#A30F52] py-2.5 pl-5 pr-2 text-base font-medium uppercase tracking-wide text-white transition-all duration-300 hover:rounded-[50px]"
                  >
                    <span>Book Now</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#A30F52] transition-transform duration-300 group-hover:scale-110">
                      <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
                        <path
                          d="M7.5 4.5L13 10l-5.5 5.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    href={`${basePath}/${pkg.slug}`}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center justify-center text-sm underline underline-offset-4 transition-colors"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

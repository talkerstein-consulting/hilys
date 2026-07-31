import type { ReactNode } from "react";

export default function ArticleLayout({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}): ReactNode {
  return (
    <main className="flex-1">
      <section className="bg-background px-6 pt-40 pb-12 md:pt-52 text-center">
        <p className="text-muted-foreground mb-4 text-sm">
          <a href="/" className="hover:text-foreground">
            Home
          </a>{" "}
          ✦{" "}
          <a href="/articles" className="hover:text-foreground">
            Articles
          </a>
        </p>
        <h1 className="mx-auto mb-6 max-w-3xl text-3xl font-medium tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          {intro}
        </p>
      </section>

      <section className="bg-background px-6 pb-24">
        <div className="mx-auto max-w-2xl space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="mb-3 text-xl font-medium tracking-tight">
                {section.heading}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}

          <div className="bg-muted rounded-2xl p-8 text-center">
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Ready to plan your own party? Reach out and we&apos;ll help you
              pick the perfect package.
            </p>
            <a
              href="mailto:info@hilysparklyspa.com"
              className="group inline-flex items-center gap-3 rounded-md bg-[#A30F52] py-3 pl-5 pr-2 text-base font-medium uppercase tracking-wide text-white transition-all duration-300 hover:rounded-[50px]"
            >
              <span>Ask Us Directly</span>
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
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { CtaButton } from "./CtaButton";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Hily's+Sparkly+Spa/@43.797625,-79.5343557,17z/data=!3m1!4b1!4m6!3m5!1s0x882b2f9ffac74e0d:0x65a04c1c963f2d1b!8m2!3d43.797625!4d-79.5317808!16s%2Fg%2F11fjmvz1y_";

interface Review {
  name: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Anael Lepski",
    text: "Celebrated my girl's 6th birthday at the spa it was incredible! All girls had a good time and were super happy! The audio is beautifully designed and the ladies working there are super nice made everyone feel comfortable.",
  },
  {
    name: "Anna Nguyen",
    text: "My 4-year-old daughter and her friend had such a wonderful experience! From start to finish, the staff made the girls feel comfortable and excited. The girl who provided the services was patient, gentle, and very attentive.",
  },
  {
    name: "Mrs R. Cordova",
    text: "Incredible! I highly recommend this hidden gem to anyone with a tiny diva in their life. The venue is stunning & perfectly equipped for a small-midsized group. The staff was absolutely incredible.",
  },
  {
    name: "Victoria Cohen",
    text: "Hily's Sparkly Spa is amazing! We had my daughter's 7th birthday party there with a cupcake theme, and it was perfect. The staff was so friendly and great with the kids.",
  },
  {
    name: "Hazel S.A",
    text: "Amazing experience for kids! My children really enjoyed their time at the spa and absolutely loved the whole experience. We will definitely be coming back!",
  },
  {
    name: "Chantalle Sara Baboolal",
    text: "We celebrated my daughter's 5th birthday at Hily's Sparkly Spa yesterday and it was an absolute hit with all her friends and their parents! The girls facilitating were so friendly and helpful.",
  },
  {
    name: "Jessica A",
    text: "We just celebrated my daughter's 7th birthday here over the weekend and it was so amazing! The spa part was so cute but the slime experiment is what made it even better for the girls!",
  },
  {
    name: "Jerrah May Go",
    text: "My daughter Dolores and her friends had an absolutely incredible experience at your spa! The friendly staff, whimsical decor, and special treatments created an enchanting experience she'll cherish.",
  },
  {
    name: "Yaarit Vichodez",
    text: "Had my daughter's birthday party and the kids had the best time. It was very easy to book, the owner was very accommodating and the girls working there were great with the kids.",
  },
  {
    name: "Anna Ung",
    text: "We just visited here for a play date with all the classmates. It was perfect! The kids had the best most memorable amazing time. Thank you again, all the girls can't wait to come back!",
  },
  {
    name: "Sarah Sikdar",
    text: "Great service! I took my daughter there for her birthday, she had a fantastic time. Jenny did everything keeping her age in mind. They have kid friendly products.",
  },
  {
    name: "Heran Wang",
    text: "We had our little girl's 5th birthday party here! I was amazed by all the friendly and helpful hosts, the fun and engaging activities, and the beautiful and stylish rooms.",
  },
];

function StarRow(): ReactNode {
  return (
    <div className="mb-3 flex gap-0.5 text-[#A30F52]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.77l-5.2 2.75.99-5.8-4.21-4.1 5.82-.85z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon({ className }: { className?: string }): ReactNode {
  return (
    <svg className={className} viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
    </svg>
  );
}

function ReviewCard({
  review,
  index = 0,
}: {
  review: Review;
  index?: number;
}): ReactNode {
  return (
    <figure
      className={`flex h-56 w-80 flex-none flex-col justify-between rounded-2xl p-6 ${
        index % 2 === 0 ? "bg-[#F0A3C4]/25" : "bg-muted"
      }`}
    >
      <div>
        <StarRow />
        <blockquote className="text-muted-foreground line-clamp-4 text-sm leading-relaxed">
          {review.text}
        </blockquote>
      </div>
      <figcaption className="mt-4 flex items-center gap-2">
        <GoogleIcon className="h-4 w-4 shrink-0" />
        <span className="text-foreground text-sm font-semibold uppercase tracking-wide">
          {review.name}
        </span>
        <span className="text-muted-foreground text-xs">on Google</span>
      </figcaption>
    </figure>
  );
}

function MarqueeRow({
  rowReviews,
  direction = 1,
}: {
  rowReviews: Review[];
  direction?: 1 | -1;
}): ReactNode {
  const trackRef = useRef<HTMLDivElement>(null);
  const sets = 2;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover: hover)").matches;
    const SPEED = 0.5;

    let raf = 0;
    let pos = 0;
    let paused = false;
    let down = false;
    let startX = 0;
    let startScroll = 0;

    const half = () => track.scrollWidth / 2;
    const active = () => canHover && !reduce && !paused && !down;

    pos = direction < 0 ? half() : 0;

    const tick = () => {
      const h = half();
      if (active() && h > 0) {
        pos += SPEED * direction;
        if (pos >= h) pos -= h;
        else if (pos < 0) pos += h;
        track.scrollLeft = pos;
      } else {
        pos = track.scrollLeft;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onEnter = () => {
      paused = true;
    };
    const onLeave = () => {
      paused = false;
      down = false;
      track.classList.remove("cursor-grabbing");
    };
    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      down = true;
      startX = e.clientX;
      startScroll = track.scrollLeft;
      track.classList.add("cursor-grabbing");
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      e.preventDefault();
      let next = startScroll - (e.clientX - startX);
      const h = half();
      if (h > 0) {
        if (next < 0) {
          next += h;
          startScroll += h;
        } else if (next >= h) {
          next -= h;
          startScroll -= h;
        }
      }
      track.scrollLeft = next;
    };
    const onUp = () => {
      down = false;
      track.classList.remove("cursor-grabbing");
    };
    const onTouch = () => {
      paused = true;
    };

    track.addEventListener("pointerenter", onEnter);
    track.addEventListener("pointerleave", onLeave);
    track.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    track.addEventListener("touchstart", onTouch, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("pointerenter", onEnter);
      track.removeEventListener("pointerleave", onLeave);
      track.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      track.removeEventListener("touchstart", onTouch);
    };
  }, [direction]);

  return (
    <div
      ref={trackRef}
      className="scrollbar-hide flex cursor-grab gap-6 overflow-x-auto"
    >
      {Array.from({ length: sets }).map((_, s) => (
        <div key={s} className="flex gap-6">
          {rowReviews.map((review, i) => (
            <ReviewCard key={`${s}-${i}`} review={review} index={i} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Testimonials(): ReactNode {
  const [twoRows, setTwoRows] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => setTwoRows(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const mid = Math.ceil(reviews.length / 2);
  const rowA = reviews.slice(0, mid);
  const rowB = reviews.slice(mid);

  return (
    <section className="bg-background overflow-hidden px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="text-muted-foreground mb-2 text-xs font-medium uppercase tracking-[0.16em]">
              Straight From Our Customers
            </p>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              4.7 Stars From Our Customers.
            </h2>
          </div>
          <CtaButton
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            Read All on Google
          </CtaButton>
        </motion.div>

        <div className="flex flex-col gap-4 overflow-hidden rounded-lg">
          {twoRows ? (
            <>
              <MarqueeRow rowReviews={rowA} direction={1} />
              <MarqueeRow rowReviews={rowB} direction={-1} />
            </>
          ) : (
            <MarqueeRow rowReviews={reviews} direction={1} />
          )}
        </div>
      </div>
    </section>
  );
}

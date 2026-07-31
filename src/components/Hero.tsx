import { ChevronRight as ChevronRightIcon } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import DitherCursor from "./DitherCursor";
import Grainient from "./Grainient";
import RotatingCards, { type Card } from "./RotatingCards";

const easeOut = [0.16, 1, 0.3, 1] as const;
const headlineLines = ["Vaughan Kids Spa &", "Birthday Parties"];

const cardData = [
  { label: "Birthday Party Blowouts", image: "/img/spa/bday-service.webp" },
  { label: "Day Spa Delights", image: "/img/spa/day-spa-service.webp" },
  { label: "Special One & Me", image: "/img/spa/mini-duo-package.webp" },
  { label: "Glitter Tattoos", image: "/img/spa/gallary-1.jpg.jpg" },
  { label: "Mani-Pedi", image: "/img/spa/gallary-2.jpg.jpg" },
  { label: "Makeup", image: "/img/spa/gallary-3.jpg.jpg" },
  { label: "Face Mask", image: "/img/spa/gallary-4.jpg.jpg" },
  { label: "Sparkle Parties", image: "/img/spa/gallary-5.jpg.jpg" },
  { label: "Parent's Lounge", image: "/img/spa/gallary-6.jpg.jpg" },
  { label: "Tie-Dye Birthday", image: "/img/spa/step1.jpg" },
  { label: "Sparkly Slime Lab", image: "/img/spa/step2.jpg" },
];

const carouselCards: Card[] = cardData.map((card, index) => ({
  id: index + 1,
  content: (
    <div className="flex h-full flex-col p-2">
      <div className="relative flex-1 overflow-hidden rounded-t-sm rounded-b-full">
        <img
          src={card.image}
          alt={card.label}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="px-1 pt-3 text-center">
        <span className="text-sm font-medium">{card.label}</span>
      </div>
    </div>
  ),
}));

export default function Hero(): ReactNode {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const opacityRef = useRef(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const headline = headlineRef.current;
    if (!headline) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) setShouldRender(true);
      },
      { threshold: 0, rootMargin: "-10% 0px -10% 0px" }
    );

    observer.observe(headline);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const targetOpacity = isVisible ? 1 : 0;

    const animate = () => {
      const diff = targetOpacity - opacityRef.current;
      const step = diff * 0.02;

      if (Math.abs(diff) > 0.001) {
        opacityRef.current += step;
        setOpacity(opacityRef.current);
        animationRef.current = requestAnimationFrame(animate);
      } else {
        opacityRef.current = targetOpacity;
        setOpacity(targetOpacity);
        if (targetOpacity === 0) setShouldRender(false);
      }
    };

    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-dvh flex-col items-center justify-start overflow-hidden px-6 pt-40 sm:pt-82"
    >
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#e6aee4"
          color2="#ffffff"
          color3="#f5b9d7"
          timeSpeed={0.25}
          colorBalance={0.0}
          warpStrength={1.15}
          warpFrequency={5.0}
          warpSpeed={2.0}
          warpAmplitude={44}
          blendAngle={0.0}
          blendSoftness={0.05}
          rotationAmount={610}
          noiseScale={2.0}
          grainAmount={0.1}
          grainScale={2.0}
          grainAnimated={false}
          contrast={1.5}
          gamma={1.0}
          saturation={1.0}
          centerX={0.0}
          centerY={0.0}
          zoom={0.9}
        />
      </div>
      {!isMobile && shouldRender && <DitherCursor opacity={opacity} />}
      <div ref={headlineRef} className="relative z-10 mx-auto md:text-center">
        <h1 className="mb-8 text-5xl font-medium tracking-tighter md:text-8xl lg:text-8xl">
          {headlineLines.map((line, lineIndex) => {
            const charOffset = headlineLines
              .slice(0, lineIndex)
              .reduce((sum, l) => sum + l.length, 0);
            return (
              <span key={lineIndex} className="block">
                {line.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.4,
                      delay: (charOffset + index) * 0.03,
                      ease: "easeOut",
                    }}
                    className="inline-block"
                    style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            );
          })}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: "easeOut",
          }}
          className="hero-subtext text-muted-foreground mx-auto mt-6 max-w-xl tracking-tight"
        >
          <span className="text-white bg-[#A30F52] inline-block rounded-md px-3 py-1 leading-normal">
            Shimmer
          </span>{" "}
          &{" "}
          <span className="text-white bg-[#A30F52] inline-block rounded-md px-3 py-1 leading-normal">
            shine
          </span>{" "}
          — we turn ordinary days into glittering{" "}
          <span className="text-white bg-[#A30F52] inline-block rounded-md px-3 py-1 leading-normal">
            adventures
          </span>{" "}
          for ages 3 – 13.
        </motion.p>
      </div>

      {/* Carousel */}
      <div
        className="relative z-10 -mx-6 mt-2 h-100 w-screen overflow-hidden sm:h-125 md:h-137.5 lg:h-150 xl:h-175"
        style={{
          maskImage:
            "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
        }}
      >
        <div className="absolute left-1/2 top-25 -translate-x-1/2 sm:top-30 lg:top-35 xl:top-40">
          <div className="origin-top scale-[0.6] lg:scale-[0.7] xl:scale-100">
            <RotatingCards
              cards={carouselCards}
              radius={1000}
              cardClassName="rounded-md"
              cardWidth={350}
              cardHeight={275}
              duration={100}
              pauseOnHover={true}
              autoPlay={true}
              initialRotation={-90}
              showTrackLine={true}
              trackLineOffset={25}
            />
          </div>
        </div>
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center px-6 pb-24 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <h2 className="max-w-3xl text-3xl font-medium tracking-tight md:text-5xl lg:text-6xl">
          Every Child Deserves <br />
          A Moment In The Spotlight
        </h2>
        <motion.a
          href="/booking"
          className="bg-[#A30F52] group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-md py-3 pl-5 pr-3 text-base font-medium uppercase tracking-wide text-white shadow-lg shadow-accent/25 transition-all duration-500 ease-out hover:rounded-[50px] hover:shadow-xl hover:shadow-accent/40 sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
        >
          <span>Book Your Sparkle Party</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#A30F52] transition-all duration-300 group-hover:scale-110">
            <ChevronRightIcon className="relative left-px h-4 w-4" />
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}

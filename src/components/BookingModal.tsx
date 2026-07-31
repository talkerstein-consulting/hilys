import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import type { ReactNode } from "react";

export default function BookingModal({
  packageName,
  onClose,
}: {
  packageName: string | null;
  onClose: () => void;
}): ReactNode {
  return (
    <AnimatePresence>
      {packageName && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Book ${packageName}`}
            className="fixed left-1/2 top-1/2 z-[70] w-[calc(100vw-3rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 text-center shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="text-muted-foreground hover:text-foreground absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="text-muted-foreground mb-2 text-xs font-medium uppercase tracking-[0.16em]">
              Book Now
            </p>
            <h3 className="mb-4 text-2xl font-medium tracking-tight">
              {packageName}
            </h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Call or email us to confirm your date, guest count, and any
              dietary or allergy notes for the {packageName} package.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="tel:6473354055"
                className="group inline-flex items-center justify-center gap-3 rounded-md bg-[#A30F52] py-3 pl-5 pr-2 text-base font-medium uppercase tracking-wide text-white transition-all duration-300 hover:rounded-[50px]"
              >
                <span>Call (647) 335-4055</span>
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
              <a
                href="mailto:info@hilysparklyspa.com"
                className="text-muted-foreground hover:text-foreground text-sm underline underline-offset-4 transition-colors"
              >
                info@hilysparklyspa.com
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

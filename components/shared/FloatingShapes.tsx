"use client";

import { motion } from "framer-motion";

/**
 * Ambient background built from drafting-instrument silhouettes
 * (compass, set-square, protractor arc) rather than generic blobs —
 * ties the atmosphere directly to the drafting/CAD subject matter.
 */
export function FloatingShapes({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* Set-square */}
      <motion.svg
        className="absolute -right-10 top-20 h-64 w-64 md:h-80 md:w-80 opacity-[0.07] dark:opacity-[0.1]"
        viewBox="0 0 200 200"
        animate={{ rotate: [0, 8, 0], y: [0, -18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <polygon points="10,190 10,10 190,190" fill="none" stroke="#0F172A" strokeWidth="2" />
        <line x1="10" y1="150" x2="150" y2="150" stroke="#0F172A" strokeWidth="1" />
      </motion.svg>

      {/* Compass / arc */}
      <motion.svg
        className="absolute left-[-4rem] top-[40%] h-72 w-72 md:h-96 md:w-96 opacity-[0.06] dark:opacity-[0.09]"
        viewBox="0 0 200 200"
        animate={{ rotate: [0, -10, 0], y: [0, 16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="100" cy="100" r="80" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 6" />
        <circle cx="100" cy="100" r="4" fill="#0F172A" />
        <line x1="100" y1="100" x2="170" y2="60" stroke="#0F172A" strokeWidth="2" />
        <line x1="100" y1="100" x2="60" y2="20" stroke="#0F172A" strokeWidth="2" />
      </motion.svg>

      {/* Floating dimension line */}
      <motion.svg
        className="absolute bottom-24 right-[15%] h-40 w-64 opacity-[0.08] dark:opacity-[0.12]"
        viewBox="0 0 260 100"
        animate={{ x: [0, 14, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <line x1="10" y1="50" x2="250" y2="50" stroke="#475569" strokeWidth="1.5" />
        <line x1="10" y1="35" x2="10" y2="65" stroke="#475569" strokeWidth="1.5" />
        <line x1="250" y1="35" x2="250" y2="65" stroke="#475569" strokeWidth="1.5" />
        <text x="110" y="35" fontSize="12" fill="#475569" fontFamily="monospace">4200</text>
      </motion.svg>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[radial-gradient(circle_at_top,_#020617_0,_#020617_35%,#020014_70%,#000000_100%)]">
      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0,_transparent_45%,rgba(0,0,0,0.9)_100%)]" />

      {/* Moving Blue Orb */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-15%] left-[-10%] w-[520px] h-[520px] bg-blue-600/22 blur-[130px] rounded-full animate-mesh"
      />

      {/* Moving Purple Orb */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[640px] h-[640px] bg-purple-600/20 blur-[150px] rounded-full animate-mesh"
      />

      {/* Soft center spotlight behind content */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35)_0,transparent_65%)] blur-[120px]" />

      {/* Grid Pattern Layer */}
      <div className="absolute inset-0 opacity-60 bg-[linear-gradient(to_right,#1f293714_1px,transparent_1px),linear-gradient(to_bottom,#1f293714_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Noise/Grain Layer */}
      <div className="absolute inset-0 opacity-[0.08] bg-grain" />
    </div>
  );
}
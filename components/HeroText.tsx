"use client";

import { motion } from "framer-motion";
import { personal } from "@/data/profile";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroText() {
  const words = personal.tagline.split(" ");

  return (
    <div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="font-mono text-sm text-teal"
      >
        {personal.role}
      </motion.p>
      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-4 flex flex-wrap font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl md:text-6xl"
      >
        {words.map((word, i) => (
          <motion.span key={i} variants={item} className="mr-3">
            {word}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-3 font-mono text-sm text-muted"
      >
        {personal.name} · {personal.location}
      </motion.p>
    </div>
  );
}

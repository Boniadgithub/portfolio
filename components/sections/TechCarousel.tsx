"use client";

import { motion } from "framer-motion";
import InfiniteSkillCarousel from "@/components/ui/InfiniteSkillCarousel";

export default function TechCarousel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <InfiniteSkillCarousel />
    </motion.div>
  );
}

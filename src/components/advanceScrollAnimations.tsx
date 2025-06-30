import React from "react";
import { motion } from "framer-motion";

const sections = ["Section 1", "Section 2", "Section 3", "Section 4"];

export const AdvanceScrollAnimations: React.FC = () => {
  return (
    <div>
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="scroll-animate"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ amount: 0.5 }}
        >
          <h1 className="text-4xl font-bold">{section}</h1>
        </motion.div>
      ))}
    </div>
  );
};
// This component is a related advace scroll animations

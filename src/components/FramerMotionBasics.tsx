import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

export const FramerMotionBasics = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <motion.button
        className="button"
        onClick={() => setVisible(!visible)}
        // Button will have a slide animation on DOM changes that can affect the button visibility
        layout
      >
        {visible ? "Hide" : "Show"}
      </motion.button>
      <AnimatePresence mode="popLayout">
        {visible && (
          <motion.div
            className="animate-box"
            initial={{ scale: 0, opacity: 0, y: 0 }}
            animate={{
              rotate: "180deg",
              opacity: 1,
              scale: 1,
              type: "spring",
              y: [0, 150, 150, -150, 150],
            }}
            exit={{
              rotate: "0deg",
              scale: [1, 0.5, 0.25, 0],
              opacity: 0,
              y: [0, 0.25, 0.5, 0.75, 1],
            }}
            transition={{ duration: 1.6, ease: "backInOut" }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
// This component is a related to framermotion basics

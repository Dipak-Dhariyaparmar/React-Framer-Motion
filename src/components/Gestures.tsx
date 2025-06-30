import { motion, MotionConfig } from "framer-motion";
import AnimatedButton from "./animated-button";
import SpotLightButton from "./spotlight-button";

export default function Gestures() {
  return (
    <div>
      <MotionConfig
        // Sets the props for all the child elements
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="flex gap-4">
          <motion.button
            className="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Button1
          </motion.button>
          <motion.button
            className="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95, rotate: "-2.5deg" }}
          >
            Button2
          </motion.button>
        </div>
        <div className="mt-6 flex gap-4">
          <AnimatedButton />
          <SpotLightButton />
        </div>
      </MotionConfig>
    </div>
  );
}
// This component is a related geatures

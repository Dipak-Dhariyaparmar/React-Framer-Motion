import { motion, useAnimationControls } from "framer-motion";

export default function AnimationControls() {
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start("flip");
  };

  return (
    <div>
      <motion.button className="button" onClick={handleClick}>
        Flip it
      </motion.button>
      <motion.div
        className="animate-box"
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "90deg",
          },
        }}
        // Referencing the initial variant
        initial="initial"
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
        // Referencing the (Framer motion useAnimation hook) controls
        animate={controls}
      ></motion.div>
    </div>
  );
}
// This component is a related animation controls

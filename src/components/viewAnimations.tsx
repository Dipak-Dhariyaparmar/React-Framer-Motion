import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ViewAnimations = () => {
  const ref = useRef(null);

  const isInView = useInView(ref);
  return (
    <div>
      <div style={{ height: "120vh" }}>Scroll Down</div>
      <motion.div
        style={{
          height: "10rem",
          width: "20rem",
          background: "var(--primary-color)",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <br /> <br />
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "blue" : "red",
          transition: "1s background",
        }}
      />
    </div>
  );
};
// This component is related to view animations

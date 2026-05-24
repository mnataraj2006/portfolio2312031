import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.93 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="back-to-top"
          aria-label="Back to top"
          style={{ color: "#A1A1AA" }}
        >
          <HiArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;


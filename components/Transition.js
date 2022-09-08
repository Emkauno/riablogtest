import { motion, AnimatePresence } from "framer-motion";

const Transition = ({key, children }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.5 }}
      key={key}
    >
      {children}
    </motion.div>
  );
};

export default Transition;

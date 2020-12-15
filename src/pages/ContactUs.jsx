import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function Contactus(props) {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h1>Our Contact</h1>
    </motion.div>
  );
}

export default Contactus;

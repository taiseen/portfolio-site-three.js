import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../style";

const StarWrapper = (Component, idName) =>

  function HOC() { // Higher Order Component...

    return (
      <motion.section
        initial='hidden'
        whileInView='show'
        variants={staggerContainer()}
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>&nbsp;</span>

        <Component />

      </motion.section>
    );
  };

export default StarWrapper;

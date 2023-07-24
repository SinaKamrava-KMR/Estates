import Lottie from "react-lottie";
import aniamtionEstate from "../../assets/animations/estate.json";
import { motion } from "framer-motion";
import { memo } from "react";

const Animation = memo(() => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: aniamtionEstate,
  };
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 4 }}
    >
      <Lottie options={defaultOptions} height={650} width={650}></Lottie>
    </motion.div>
  );
});

export default Animation;

import React from "react";
import styles from "../styles/modules/todoItem.module.scss";
import { motion, useMotionValue, useTransform } from "framer-motion";

const checkVariants = {
  initial: {
    color: " #fff",
  },
  checked: {
    pathLength: 1,
  },

  unChecked: {
    pathLength: 0,
  },
};
const boxVariant = {
  checked: {
    background: "var(--primary",
    transition: { duration: 0.1 },
  },
  unChecked: {
    background: "var(--gray-1",
    transition: { duration: 0.1 },
  },
};
const CheckButton = ({ checked, handleCheck }) => {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);
  return (
    <motion.div
      variants={boxVariant}
      className={styles.svgBox}
      animate={checked ? "checked" : "unChecked"}
      onClick={handleCheck}
    >
      <motion.svg
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        <motion.path
          variants={checkVariants}
          animate={checked ? "checked" : "unChecked"}
          style={{ pathLength, opacity }}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></motion.path>
      </motion.svg>
    </motion.div>
  );
};

export default CheckButton;

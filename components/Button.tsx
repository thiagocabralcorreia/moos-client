import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="text-lg py-2.5 sm:py-3 px-6 shadow-lg duration-500 border-0
      bg-primary hover:bg-secondary text-dark"
      onClick={onClick}
    >
      <div className="flex justify-center items-center m-auto">{children}</div>
    </motion.button>
  );
};

export default Button;

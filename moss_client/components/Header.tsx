import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <motion.header
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <>
        <nav
          className="flex justify-between gap-2 md:gap-4 items-center
    w-full mx-auto px-10  md:px-12 py-4 z-50 bg-primary relative"
        >
          <div className="flex items-center justify-self-start">
            <div className="flex-shrink-0">
              <Link href={"/"}>
                <img
                  className="h-14 w-14"
                  src="images/mooz-white.png"
                  alt="Mooz Logo"
                />
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-end col-span-1">
            <div className="flex items-baseline space-x-4 justify-self-end">
              {children}
            </div>
          </div>
        </nav>

        <div className="flex flex-col items-center"></div>
      </>
    </motion.header>
  );
};

export default Header;

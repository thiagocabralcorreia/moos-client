import { motion } from "framer-motion";
import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Login() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="w-full h-screen flex items-center justify-center p-10 md:p-20 bg-dark"
    >
      <div className="w-full h-full flex items-center justify-center bg-white">
        <div
          className="w-full h-full lg:w-1/2 py-10 px-10 md:px-32 lg:px-18 xl:px-32
        flex flex-col m-auto items-center justify-center"
        >
          <h1 className="w-full text-[40px] font-bold mb-4">Login</h1>
          <Input
            inputLabel="Username"
            labelFor="text"
            inputType="text"
            inputId="text"
            inputName="text"
            placeholderText="Enter your username"
            ariaLabelName="Username"
            error="Error message"
          />
          <Input
            inputLabel="Password"
            labelFor="password"
            inputType="password"
            inputId="password"
            inputName="password"
            placeholderText="Enter your password"
            ariaLabelName="password"
            error="Error message"
          />
          <div className="w-full flex justify-end mt-8">
            <Button type="submit" aria-label="Login" onClick={() => {}}>
              Login
            </Button>
          </div>
        </div>
        <div className="hidden w-full h-full lg:w-1/2 lg:flex items-center justify-center bg-primary">
          <img
            className="h-[250px] w-[250px]"
            src="images/mooz-gray.png"
            alt="Mooz Logo"
          />
        </div>
      </div>
    </motion.div>
  );
}

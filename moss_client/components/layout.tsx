import React, { useEffect, useState } from "react";
import Header from "./Header";
import { BiSolidUser, BiSolidLogOut } from "react-icons/bi";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header
        children={
          <div className="flex ml-8 my-4 py-1 gap-6">
            <div className="flex items-center cursor-pointer text-lg font-bold text-white">
              <BiSolidUser />
              <p className="hidden lg:block header-link pl-2 transition ease-out duration-900">
                Users
              </p>
            </div>
            <div className="flex items-center cursor-pointer text-lg font-bold text-white">
              <BiSolidLogOut />
              <p className="hidden lg:block header-link pl-2 transition ease-out duration-900">
                Logout
              </p>
            </div>
          </div>
        }
      />
      <div>{children}</div>
    </div>
  );
}

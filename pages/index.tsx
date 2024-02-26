import React from "react";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex items-center justify-center w-screen h-screen">
        <img
          className="h-[250px] w-[250px]"
          src="images/mooz-orange.png"
          alt="Mooz Logo"
        />
      </div>
    </Layout>
  );
}

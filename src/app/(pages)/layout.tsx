import Navigation from "@/common/Navigation";
import Footer from "@/components/Footer";
import React from "react";

const Pageslayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="relative py-[4.5rem] mx-auto lg:max-w-6xl px-[2rem] sm:px-[3rem] lg:px-[1.5rem]">
      <Navigation />
      {children}
      {/* <Footer /> */}
    </main>
  );
};

export default Pageslayout;

import Navbar from "@/components/Navbar";
import Vm from "@/components/Vm";
import Proker from "@/components/Proker";
import React from "react";
import Footer from "@/components/Footer";

export default function Program() {
  return (
    <>
      <Navbar />
      <Vm />
      <div className="py-10 px-12">
        <Proker />
      </div>
      <Footer/>
    </>
  );
}

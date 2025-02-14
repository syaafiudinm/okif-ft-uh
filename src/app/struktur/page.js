"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Tentang() {
  return (
    <>
      <Navbar />
      <div className="mt-32 px-4 md:px-10 lg:px-32 min-h-[50vh] lg:min-h-screen">
        <h1 className="font-bold text-lg md:text-2xl lg:text-4xl mb-4 md:mb-10 text-center">
          Struktur Kepengurusan OKIF FT-UH Periode 2024/2025
        </h1>
        <Image
          src="/struktur.jpg"
          alt="Struktur Organisasi OKIF FT UH"
          layout="intrinsic"
          width={2000}
          height={500}
          style={{ width: "100%", height: "auto" }}
          className="rounded-lg mb-14"
        ></Image>
      </div>
      <Footer />
    </>
  );
}

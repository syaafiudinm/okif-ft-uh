"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";

export default function Tentang() {
  // const [loading, setLoading] = useState(true);
  // const [users, setUsers] = useState();
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     setLoading(true);
  //     const { data, error } = await supabase.from("users").select("*");

  //     if (error) {
  //       setError(error.message);
  //     } else {
  //       setUsers(data);
  //     }

  //     setLoading(false);
  //   };

  //   fetchUsers();
  // }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Navbar />
      <div className="mt-32 px-4 md:px-10 lg:px-32 min-h-screen">
        <h1 className="font-bold text-lg md:text-2xl lg:text-4xl mb-4 md:mb-10 text-center">
          Struktur Organisasi OKIF FT-UH Periode 2024/2025
        </h1>
        <Image
          src="/struktur.jpg"
          alt="Struktur Organisasi OKIF FT UH"
          layout="intrinsic"
          width={2000}
          height={500}
          style={{ width: "100%", height: "auto" }}
        ></Image>
      </div>

      {/* <div className="mt-32">Ini Halaman Tentang</div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Daftar Users</h1>
        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user.id}
              className="p-2 bg-gray-100 rounded shadow-sm hover:bg-gray-200"
            >
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
}

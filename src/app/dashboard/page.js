"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data?.session) {
        router.push("/login"); // Redirect tanpa flash halaman
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("logout gagal:", error.message);
    } else {
      router.push("/login");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard Admin</h1>
      <p>Selamat datang, {user?.email}</p>
      <button
        onClick={handleLogout}
        className="bg-red-600 rounded-lg hover:bg-red-700 text-white px-3 py-2"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
      } else {
        setUser(user);
      }
    };
    getUser();
  }, [router]);

  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard Admin</h1>
      <p>Selamat datang, {user?.email}</p>
    </div>
  );
};

export default Dashboard;

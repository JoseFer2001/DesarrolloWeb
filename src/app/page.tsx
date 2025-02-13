"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth");
    if (!isAuthenticated) {
      router.push("/login"); // Redirige al login
    } else {
      router.push("/modelos"); // Redirige a la página de modelos si está autenticado
    }
  }, []);

  return <div>Cargando...</div>;
}
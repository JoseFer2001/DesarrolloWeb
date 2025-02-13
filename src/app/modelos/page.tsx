"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { MainNav } from "@/components/ui/nav-principal";
import { UserTable } from "@/components/ui/Tabla-de-modelos";
import Quincenas from "@/components/AsistenciaComponents/QuincenaAsistencias";

export default function ModelosPage() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth");
    if (!isAuthenticated) {
      router.push("/login"); // Redirige al login si no está autenticado
    }
  }, []);

  return (
    <>
      {/* Barra de navegación */}
      <MainNav />

      {/* Calendario */}
      <Quincenas onChangeQuincena={(quincena) => console.log(quincena)} />

      {/* Sección 1 */}
      <div className="flex h-screen items-center justify-center bg-white">
        <UserTable />
      </div>
    </>
  );
}

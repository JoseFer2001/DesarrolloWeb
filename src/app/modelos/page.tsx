"use client";

import Quincenas from "@/components/AsistenciaComponents/QuincenaAsistencias";
import { MainNav } from "@/components/ui/nav-principal";
import { UserTable } from "@/components/ui/Tabla-de-modelos";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ModelosPage() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth");
    if (!isAuthenticated) {
      router.push("/login");
    }
  });

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

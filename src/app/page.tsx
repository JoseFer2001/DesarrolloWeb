"use client";

import { MainNav } from "@/components/ui/nav-principal";
import { DateRangePicker } from "@/components/ui/calendario";
import { UserTable } from "@/components/ui/Tabla-de-modelos";
import Quincenas from "@/components/AsistenciaComponents/QuincenaAsistencias";

export default function Home() {
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

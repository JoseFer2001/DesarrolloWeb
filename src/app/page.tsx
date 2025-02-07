"use client";

import { MainNav } from "@/components/ui/nav";
import { DateRangePicker } from "@/components/ui/calendario";
import { UserTable } from "@/components/ui/Tabla-de-modelos";

export default function Home() {
  return (
    <>
      {/* Barra de navegación */}
      <MainNav />

      {/* Calendario */}
      <DateRangePicker />

      {/* Sección 1 */}
      <div className="flex h-screen items-center justify-center bg-white">
        <UserTable />
      </div>
    </>
  );
}

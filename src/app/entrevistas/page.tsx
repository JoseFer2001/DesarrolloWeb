"use client";

import { MainNav } from "@/components/ui/nav-principal";
import { useRouter } from "next/navigation";

export default function Entrevistas() {
  const router = useRouter();

  return (
    <div className="mt-10 flex flex-col items-center">
      <h2 className="mb-4 text-2xl font-semibold">Seleccione una opción</h2>
      <button
        className="m-2 rounded bg-blue-500 px-4 py-2 text-white"
        onClick={() => router.push("/entrevistas/entrevistas-nuevas")}
      >
        Entrevistas Nuevas
      </button>
      <button
        className="m-2 rounded bg-green-500 px-4 py-2 text-white"
        onClick={() => router.push("/entrevistas/entrevistas-realizadas")}
      >
        Entrevistas Realizadas
      </button>
    </div>
  );
}

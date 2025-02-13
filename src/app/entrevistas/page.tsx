"use client";

import { useRouter } from "next/navigation";

export default function Entrevistas() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-semibold mb-4">Seleccione una opción</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded m-2"
        onClick={() => router.push("/entrevistas/entrevistas-nuevas")}
      >
        Entrevistas Nuevas
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded m-2"
        onClick={() => router.push("/entrevistas/entrevistas-realizadas")}
      >
        Entrevistas Realizadas
      </button>
    </div>
  );
}

"use client";

import NavEntrevista from "@/components/EntrevistasComponents/NavEntrevistas";
import TablaEntrevistas from "@/components/EntrevistasComponents/TablaEntrevistas";
import { MainNav } from "@/components/ui/nav-principal";
import { useRouter } from "next/navigation";

const Entrevistas = () => {
  const router = useRouter();

  const handleNuevaEntrevista = () => {
    router.push("/entrevistas/entrevistas-nuevas");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `url('/fondo-entrevistas.jpg')`,
        backgroundAttachment: "fixed",
      }}
    >
      <MainNav />
      <div className="flex-grow flex flex-col items-center justify-center bg-black bg-opacity-50 py-20">
        <h1 className="text-white text-3xl font-bold mb-6">Entrevistas Realizadas</h1>
        <button
          onClick={handleNuevaEntrevista}
          className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition duration-150"
        >
          Nueva Entrevista
        </button>
        <div className="w-11/12 lg:w-3/4 bg-white rounded-2xl shadow-2xl p-6">
          <NavEntrevista />
          <TablaEntrevistas />
        </div>
      </div>
    </div>
  );
};

export default Entrevistas;

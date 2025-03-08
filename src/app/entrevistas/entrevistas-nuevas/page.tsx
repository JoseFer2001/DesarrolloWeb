"use client";

import { FormEntrevista } from "@/components/EntrevistasComponents/FormEntrevistas";
import { MainNav } from "@/components/ui/nav-principal";

const Entrevistas = () => {
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
        <h1 className="text-white text-3xl font-bold mb-6">Nueva Entrevista</h1>
        <div className="w-11/12 lg:w-3/4 bg-white rounded-2xl shadow-2xl p-6">
          <FormEntrevista />
        </div>
      </div>
    </div>
  );
};

export default Entrevistas;

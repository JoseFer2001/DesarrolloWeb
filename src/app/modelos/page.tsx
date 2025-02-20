"use client";

import { MainNav } from "@/components/ui/nav-principal";

const Modelos = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `url('/fondo-trabajadores.webp')`,
        backgroundAttachment: "fixed",
      }}
    >
      <MainNav />
      <div className="flex-grow flex flex-col items-center justify-center bg-black bg-opacity-50 py-20">
        <h1 className="text-white text-3xl font-bold mb-6">Gestión de Modelos</h1>
        <div className="w-11/12 lg:w-3/4 bg-white rounded-2xl shadow-2xl p-6">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">16 - 28 febrero 2025</h2>
            <input
              type="text"
              placeholder="Buscar por Nombre o Usuario..."
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Nombre</th>
                <th className="py-3 px-4 text-left">Usuario</th>
                <th className="py-3 px-4 text-left">Fecha de Ingreso</th>
                <th className="py-3 px-4 text-center">Modificar</th>
                <th className="py-3 px-4 text-center">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100 transition duration-150">
                <td className="py-3 px-4">Modelo 1</td>
                <td className="py-3 px-4">Umodelo 1</td>
                <td className="py-3 px-4">2024-11-26</td>
                <td className="py-3 px-4 text-center text-blue-600 cursor-pointer hover:underline">
                  Modificar
                </td>
                <td className="py-3 px-4 text-center text-red-600 cursor-pointer hover:underline">
                  Eliminar
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-100 transition duration-150">
                <td className="py-3 px-4">Modelo 2</td>
                <td className="py-3 px-4">Umodelo 2</td>
                <td className="py-3 px-4">2024-01-10</td>
                <td className="py-3 px-4 text-center text-blue-600 cursor-pointer hover:underline">
                  Modificar
                </td>
                <td className="py-3 px-4 text-center text-red-600 cursor-pointer hover:underline">
                  Eliminar
                </td>
              </tr>
              <tr className="hover:bg-gray-100 transition duration-150">
                <td className="py-3 px-4">Modelo 3</td>
                <td className="py-3 px-4">Umodelo 3</td>
                <td className="py-3 px-4">2023-10-23</td>
                <td className="py-3 px-4 text-center text-blue-600 cursor-pointer hover:underline">
                  Modificar
                </td>
                <td className="py-3 px-4 text-center text-red-600 cursor-pointer hover:underline">
                  Eliminar
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Modelos;

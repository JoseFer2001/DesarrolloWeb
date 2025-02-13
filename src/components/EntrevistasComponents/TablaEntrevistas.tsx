import { Trash } from "lucide-react";
import React from "react";

// Datos de ejemplo temporalmente antes de la integración con base de datos
const interviews = [
  { name: "Entrevistado 1", age: 23, date: "11/11/2024", neighborhood: "Robledo", result: "Aceptado", linked: false },
  { name: "Entrevistado 2", age: 33, date: "11/11/2024", neighborhood: "Laureles", result: "Aceptado", linked: true },
  { name: "Entrevistado 3", age: 22, date: "10/11/2024", neighborhood: "San Javier", result: "Negado", linked: false },
  { name: "Entrevistado 4", age: 20, date: "28/10/2024", neighborhood: "Manrique", result: "Negado", linked: false },
];

const TablaEntrevistas: React.FC = () => {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-full border border-gray-200 bg-white">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="px-4 py-2 text-left">Nombre</th>
            <th className="px-4 py-2 text-left">Edad</th>
            <th className="px-4 py-2 text-left">Fecha de Realización</th>
            <th className="px-4 py-2 text-left">Barrio / Comuna</th>
            <th className="px-4 py-2 text-left">Resultado</th>
            <th className="px-4 py-2 text-left">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {interviews.map((interview, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{interview.name}</td>
              <td className="px-4 py-2">{interview.age}</td>
              <td className="px-4 py-2">{interview.date}</td>
              <td className="px-4 py-2">{interview.neighborhood}</td>
              <td className="px-4 py-2">{interview.result}</td>
              <td className="flex gap-2 px-4 py-2">
                {interview.result === "Aceptado" ? (
                  interview.linked ? (
                    <span className="font-semibold text-green-600">Vinculado</span>
                  ) : null
                ) : null}
                <Trash className="cursor-pointer text-red-500" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaEntrevistas;

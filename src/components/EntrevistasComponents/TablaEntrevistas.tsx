import React from "react";
import { Trash } from "lucide-react";

// Datos de ejemplo temporalmente antes de la integración con base de datos
const interviews = [
  { name: "Entrevistado 1", age: 23, date: "11/11/2024", neighborhood: "Robledo", result: "Aceptado", linked: false },
  { name: "Entrevistado 2", age: 33, date: "11/11/2024", neighborhood: "Laureles", result: "Aceptado", linked: true },
  { name: "Entrevistado 3", age: 22, date: "10/11/2024", neighborhood: "San Javier", result: "Negado", linked: false },
  { name: "Entrevistado 4", age: 20, date: "28/10/2024", neighborhood: "Manrique", result: "Negado", linked: false },
];

const TablaEntrevistas: React.FC = () => {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 text-left">Nombre</th>
            <th className="py-2 px-4 text-left">Edad</th>
            <th className="py-2 px-4 text-left">Fecha de Realización</th>
            <th className="py-2 px-4 text-left">Barrio / Comuna</th>
            <th className="py-2 px-4 text-left">Resultado</th>
            <th className="py-2 px-4 text-left">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {interviews.map((interview, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4">{interview.name}</td>
              <td className="py-2 px-4">{interview.age}</td>
              <td className="py-2 px-4">{interview.date}</td>
              <td className="py-2 px-4">{interview.neighborhood}</td>
              <td className="py-2 px-4">{interview.result}</td>
              <td className="py-2 px-4 flex gap-2">
                {interview.result === "Aceptado" ? (
                  interview.linked ? (
                    <span className="text-green-600 font-semibold">Vinculado</span>
                  ) : null
                ) : null}
                <Trash className="text-red-500 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaEntrevistas;

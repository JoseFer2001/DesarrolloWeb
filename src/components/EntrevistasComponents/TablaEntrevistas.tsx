import React, { useState } from "react";
import { Trash2, CheckCircle, Circle } from "lucide-react";

const datosEntrevistas = [
  {
    id: 1,
    nombre: "Entrevistado 1",
    edad: 23,
    fecha: "11/11/2024",
    barrio: "Robledo",
    resultado: "Aceptado",
    vinculado: false,
  },
  {
    id: 2,
    nombre: "Entrevistado 2",
    edad: 33,
    fecha: "11/11/2024",
    barrio: "Laureles",
    resultado: "Aceptado",
    vinculado: true,
  },
  {
    id: 3,
    nombre: "Entrevistado 3",
    edad: 22,
    fecha: "10/11/2024",
    barrio: "San Javier",
    resultado: "Negado",
    vinculado: false,
  },
  {
    id: 4,
    nombre: "Entrevistado 4",
    edad: 20,
    fecha: "28/10/2024",
    barrio: "Manrique",
    resultado: "Negado",
    vinculado: false,
  },
];

const TablaEntrevistas = () => {
  const [entrevistas, setEntrevistas] = useState(datosEntrevistas);

  const eliminarEntrevista = (id: number, vinculado: boolean) => {
    if (vinculado) {
      alert("No se puede eliminar a un usuario vinculado.");
      return;
    }
    if (confirm("¿Estás seguro de que deseas eliminar esta entrevista?")) {
      setEntrevistas(entrevistas.filter((item) => item.id !== id));
    }
  };

  const toggleVinculado = (id: number, vinculado: boolean) => {
    if (!vinculado) {
      if (confirm("¿Deseas vincular a este usuario?")) {
        setEntrevistas(
          entrevistas.map((item) =>
            item.id === id ? { ...item, vinculado: true } : item
          )
        );
      }
    } else {
      if (confirm("¿Deseas desvincular a este usuario?")) {
        setEntrevistas(
          entrevistas.map((item) =>
            item.id === id ? { ...item, vinculado: false } : item
          )
        );
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Nombre</th>
            <th className="py-3 px-4 text-left">Edad</th>
            <th className="py-3 px-4 text-left">Fecha de Realización</th>
            <th className="py-3 px-4 text-left">Barrio / Comuna</th>
            <th className="py-3 px-4 text-left">Resultado</th>
            <th className="py-3 px-4 text-center">Vinculado</th>
            <th className="py-3 px-4 text-center">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {entrevistas.map((item) => (
            <tr
              key={item.id}
              className="border-b hover:bg-gray-100 transition duration-150"
            >
              <td className="py-3 px-4">{item.nombre}</td>
              <td className="py-3 px-4">{item.edad}</td>
              <td className="py-3 px-4">{item.fecha}</td>
              <td className="py-3 px-4">{item.barrio}</td>
              <td className="py-3 px-4">{item.resultado}</td>

              {/* Vinculado */}
              <td className="py-3 px-4 text-center">
                {item.vinculado ? (
                  <CheckCircle
                    className="text-green-600 cursor-pointer hover:text-green-800 transition duration-150"
                    onClick={() => toggleVinculado(item.id, item.vinculado)}
                  />
                ) : (
                  <Circle
                    className="text-gray-400 cursor-pointer hover:text-green-600 transition duration-150"
                    onClick={() => toggleVinculado(item.id, item.vinculado)}
                  />
                )}
              </td>

              {/* Opciones */}
              <td className="py-3 px-4 text-center">
                <Trash2
                  className={`cursor-pointer ${
                    item.vinculado
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-red-600 hover:text-red-800 transition duration-150"
                  }`}
                  onClick={() => eliminarEntrevista(item.id, item.vinculado)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaEntrevistas;

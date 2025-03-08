"use client";

import { useState, useEffect } from "react";
import supabase from "@/utils/supabase/client";
import { Trash2, PlusCircle } from "lucide-react";
import { MainNav } from "@/components/ui/nav-principal";

interface Entrevista {
  id: number;
  nombre: string;
}

interface Modelo {
  id: number;
  entrevista_id: number;
  nombre: string;
  fecha_ingreso: string;
}

export default function Modelos() {
  const [modelos, setModelos] = useState<Modelo[]>([]);
  const [entrevistas, setEntrevistas] = useState<Entrevista[]>([]);
  const [search, setSearch] = useState("");
  const [filteredEntrevistas, setFilteredEntrevistas] = useState<Entrevista[]>([]);

  useEffect(() => {
    fetchModelos();
    fetchEntrevistas();
  }, []);

  // Obtener Modelos de la BD
  const fetchModelos = async () => {
    const { data, error } = await supabase.from("modelos").select("*").order("fecha_ingreso", { ascending: false });

    if (error) {
      console.error("Error al obtener modelos:", error);
    } else {
      setModelos(data);
    }
  };

  // Obtener Entrevistas que NO están en Modelos
  const fetchEntrevistas = async () => {
    const { data: entrevistasData, error } = await supabase.from("entrevistas").select("id, nombre");

    if (error) {
      console.error("Error al obtener entrevistas:", error);
    } else {
      const { data: modelosData } = await supabase.from("modelos").select("entrevista_id");

      const entrevistasFiltradas = entrevistasData.filter(
        (e) => !modelosData?.some((m) => m.entrevista_id === e.id)
      );

      setEntrevistas(entrevistasFiltradas);
      setFilteredEntrevistas(entrevistasFiltradas);
    }
  };

  // Función para filtrar entrevistas según la búsqueda
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setFilteredEntrevistas(
      entrevistas.filter((item) =>
        item.nombre.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  // Función para Vincular una Entrevista a Modelos
  const handleVincular = async (entrevista: Entrevista) => {
    const { error } = await supabase.from("modelos").insert([
      {
        entrevista_id: entrevista.id,
        nombre: entrevista.nombre,
        fecha_ingreso: new Date().toISOString().split("T")[0], // Fecha actual
        estado: "activo",
      },
    ]);

    if (error) {
      console.error("Error al vincular modelo:", error);
      alert("Hubo un error al vincular el modelo.");
    } else {
      alert("Modelo vinculado correctamente.");
      fetchModelos(); // Recargar la tabla de modelos
      fetchEntrevistas(); // Actualizar lista de entrevistas disponibles
    }
  };

  // Función para eliminar un modelo
  const handleEliminar = async (id: number) => {
    if (!confirm("¿Estás seguro de eliminar este modelo?")) return;

    const { error } = await supabase.from("modelos").delete().eq("id", id);

    if (error) {
      console.error("Error al eliminar modelo:", error);
      alert("Error al eliminar el modelo.");
    } else {
      alert("Modelo eliminado correctamente.");
      fetchModelos();
    }
  };

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

        {/* SECCIÓN DE VINCULACIÓN */}
        <div className="w-11/12 lg:w-3/4 bg-white rounded-2xl shadow-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Vincular Nuevo Modelo</h2>
          <input
            type="text"
            placeholder="Buscar entrevista..."
            value={search}
            onChange={handleSearch}
            className="border rounded-lg p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <div className="max-h-40 overflow-y-auto">
            {filteredEntrevistas.map((entrevista) => (
              <div
                key={entrevista.id}
                className="p-2 flex justify-between border-b hover:bg-gray-100 transition"
              >
                <span>{entrevista.nombre}</span>
                <button
                  onClick={() => handleVincular(entrevista)}
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <PlusCircle size={18} />
                  Vincular
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* TABLA DE MODELOS */}
        <div className="w-11/12 lg:w-3/4 bg-white rounded-2xl shadow-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Modelos Registrados</h2>
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Nombre</th>
                <th className="py-3 px-4 text-left">Fecha de Ingreso</th>
                <th className="py-3 px-4 text-center">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {modelos.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-100 transition duration-150">
                  <td className="py-3 px-4">{item.nombre}</td>
                  <td className="py-3 px-4">{new Date(item.fecha_ingreso).toLocaleDateString()}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleEliminar(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

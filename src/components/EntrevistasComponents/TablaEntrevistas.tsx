"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

interface Entrevista {
  id: number;
  nombre: string;
  fecha_entrevista: string;
  correo: string;
}

export default function TablaEntrevistas() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  ); // ✅ Se usa la versión del cliente

  const [entrevistas, setEntrevistas] = useState<Entrevista[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleFetchEntrevistas = async () => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase
      .from("entrevistas")
      .select("id, nombre, fecha_entrevista, correo")
      .order("fecha_entrevista", { ascending: false });

    if (error) {
      console.error("Error al obtener entrevistas:", error);
      setError("No se pudieron cargar las entrevistas.");
    } else {
      setEntrevistas(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    handleFetchEntrevistas();
  }, []);

  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-xl font-bold mb-4">Lista de Entrevistas</h2>

      {loading ? (
        <p className="text-gray-500">Cargando entrevistas...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Nombre</th>
              <th className="py-3 px-4 text-left">Fecha de Realización</th>
              <th className="py-3 px-4 text-left">Correo</th>
            </tr>
          </thead>
          <tbody>
            {entrevistas.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-100 transition duration-150">
                <td className="py-3 px-4">{item.nombre}</td>
                <td className="py-3 px-4">{new Date(item.fecha_entrevista).toLocaleDateString()}</td>
                <td className="py-3 px-4">{item.correo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

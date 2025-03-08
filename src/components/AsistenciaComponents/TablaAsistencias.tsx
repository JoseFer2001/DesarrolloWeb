"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import QuincenaAsistencias from "@/components/AsistenciaComponents/QuincenaAsistencias";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Inicializar Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const TablaAsistencias = () => {
  const [quincena, setQuincena] = useState<{
    startDay: number;
    endDay: number;
    month: string;
    year: number;
    days: { date: number; dayOfWeek: string }[];
  } | null>(null);

  const [modelos, setModelos] = useState<{ id: number; nombre: string }[]>([]);
  const [asistencia, setAsistencia] = useState<{ [key: string]: boolean }>({});

  // Configurar quincena por defecto al cargar la página
  useEffect(() => {
    const fechaActual = new Date();
    const mes = fechaActual.toLocaleString("es-ES", { month: "long" });
    const year = fechaActual.getFullYear();
    const startDay = fechaActual.getDate() <= 15 ? 1 : 16;
    const endDay = fechaActual.getDate() <= 15 ? 15 : new Date(year, fechaActual.getMonth() + 1, 0).getDate();

    const days = Array.from({ length: endDay - startDay + 1 }, (_, i) => ({
      date: startDay + i,
      dayOfWeek: new Date(year, fechaActual.getMonth(), startDay + i).toLocaleString("es-ES", {
        weekday: "short",
      }),
    }));

    setQuincena({ startDay, endDay, month: mes, year, days });
  }, []);

  // Obtener modelos desde Supabase
  useEffect(() => {
    const fetchModelos = async () => {
      const { data, error } = await supabase.from("modelos").select("id, nombre");
      if (error) {
        console.error("Error obteniendo modelos:", error);
      } else {
        setModelos(data);
      }
    };

    fetchModelos();
  }, []);

  // Obtener asistencia existente desde Supabase cuando cambia la quincena
  useEffect(() => {
    if (!quincena) return;

    const fetchAsistencias = async () => {
      const { data, error } = await supabase
        .from("asistencias")
        .select("modelo_id, fecha, presente");

      if (error) {
        console.error("Error obteniendo asistencias:", error);
      } else {
        const asistenciaMap: { [key: string]: boolean } = {};
        data.forEach((registro) => {
          const key = `${registro.modelo_id}-${registro.fecha}`;
          asistenciaMap[key] = registro.presente;
        });
        setAsistencia(asistenciaMap);
      }
    };

    fetchAsistencias();
  }, [quincena]);

  // Manejar asistencia (marcar o desmarcar)
  const toggleAsistencia = async (modeloId: number, fecha: string) => {
    const key = `${modeloId}-${fecha}`;
    const nuevaAsistencia = !asistencia[key];

    setAsistencia((prev) => ({ ...prev, [key]: nuevaAsistencia }));

    if (nuevaAsistencia) {
      // Guardar asistencia en Supabase
      await supabase.from("asistencias").upsert([{ modelo_id: modeloId, fecha, presente: true }]);
    } else {
      // Eliminar asistencia en Supabase
      await supabase.from("asistencias").delete().match({ modelo_id: modeloId, fecha });
    }
  };

  return (
    <div className="w-full overflow-auto p-4">
      {/* Quincena visible pero sin necesidad de clics */}
      <QuincenaAsistencias onChangeQuincena={setQuincena} />

      <div className="overflow-x-auto rounded-md border p-4 bg-white shadow-md">
        {quincena ? (
          <Table className="min-w-full">
            <TableHeader>
              <TableRow className="bg-gray-800 text-white">
                <TableHead className="w-40 text-left p-3">Modelo</TableHead>
                {quincena.days.map((day, index) => (
                  <TableHead key={index} className="text-center p-3">
                    <div className="text-base font-semibold">{day.date}</div>
                    <div className="text-xs">{day.dayOfWeek}</div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {modelos.map((modelo) => (
                <TableRow key={modelo.id} className="hover:bg-gray-100">
                  <TableCell className="font-medium p-3">{modelo.nombre}</TableCell>
                  {quincena.days.map((day, index) => {
                    const fecha = `${quincena.year}-${(new Date().getMonth() + 1)
                      .toString()
                      .padStart(2, "0")}-${day.date.toString().padStart(2, "0")}`;
                    const key = `${modelo.id}-${fecha}`;

                    return (
                      <TableCell
                        key={index}
                        className="cursor-pointer border text-center p-3"
                        onClick={() => toggleAsistencia(modelo.id, fecha)}
                      >
                        {asistencia[key] ? "✅" : "⬜"}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-center text-gray-500">Cargando asistencia...</p>
        )}
      </div>
    </div>
  );
};

export default TablaAsistencias;

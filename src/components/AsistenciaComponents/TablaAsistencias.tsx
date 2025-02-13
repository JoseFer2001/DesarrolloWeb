"use client";

import QuincenaAsistencias from "@/components/AsistenciaComponents/QuincenaAsistencias";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React, { useEffect, useState } from "react";

const TablaAsistencias: React.FC = () => {
  const [quincena, setQuincena] = useState<{
    startDay: number;
    endDay: number;
    month: string;
    year: number;
    days: { date: number; dayOfWeek: string }[];
  } | null>(null);
  const [asistencia, setAsistencia] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    console.log("Nueva quincena recibida:", quincena);
  }, [quincena]);

  const toggleAsistencia = (dayKey: string) => {
    setAsistencia((prev) => {
      const newState = { ...prev };
      if (!newState[dayKey]) {
        newState[dayKey] = "✅"; // Si está vacío, se marca como falta
      } else if (newState[dayKey] === "✅") {
        newState[dayKey] = "❌"; // Si está en falta, se cambia a asistencia
      } else {
        delete newState[dayKey]; // Si ya está en asistencia, vuelve a vacío
      }
      return newState;
    });
  };

  return (
    <div>
      <QuincenaAsistencias onChangeQuincena={setQuincena} />

      <div className="overflow-auto rounded-md border p-4">
        {quincena ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-40">Datos iniciales del Modelo</TableHead>
                {quincena.days.map((day, index) => (
                  <TableHead key={index} className="text-center">
                    <div>{day.date}</div>
                    <div className="text-xs text-gray-500">{day.dayOfWeek}</div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Modelo 1, Usuario 1</TableCell>
                {quincena.days.map((day, dayIndex) => {
                  const dayKey = `${day.date}-${quincena.month}-${quincena.year}`;
                  return (
                    <TableCell
                      key={dayIndex}
                      className="cursor-pointer border text-center"
                      onClick={() => toggleAsistencia(dayKey)}
                    >
                      {asistencia[dayKey] || "⬜"}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableBody>
          </Table>
        ) : (
          <p className="text-center text-gray-500">Selecciona una fecha para ver la asistencia.</p>
        )}
      </div>
    </div>
  );
};

export default TablaAsistencias;

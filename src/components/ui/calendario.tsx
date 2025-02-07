"use client";

import { useState } from "react";
import { format, parseISO } from "date-fns";

export function DateRangePicker() {
  const [date, setDate] = useState<{ from?: Date; to?: Date }>({
    from: undefined,
    to: undefined,
  });

  // Maneja la entrada manual de fechas
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>, type: "from" | "to") => {
    const newDate = e.target.value ? parseISO(e.target.value) : undefined;
    setDate((prev) => ({ ...prev, [type]: newDate }));
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Input de Fecha de Inicio */}
      <input
        type="date"
        value={date.from ? format(date.from, "yyyy-MM-dd") : ""}
        onChange={(e) => handleDateChange(e, "from")}
        className="border rounded p-2"
      />
      
      <span>—</span>
      
      {/* Input de Fecha de Fin */}
      <input
        type="date"
        value={date.to ? format(date.to, "yyyy-MM-dd") : ""}
        onChange={(e) => handleDateChange(e, "to")}
        className="border rounded p-2"
      />
    </div>
  );
}

"use client";

import { format, parseISO } from "date-fns";
import { useState } from "react";

export function DateRangePicker() {
  const [date, setDate] = useState<{ from?: Date; to?: Date }>({
    from: undefined,
    to: undefined,
  });

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>, type: "from" | "to") => {
    const newDate = e.target.value ? parseISO(e.target.value) : undefined;
    setDate((prev) => ({ ...prev, [type]: newDate }));
  };

  return (
    <div className="flex items-center space-x-2">
      {/*Fecha de Inicio */}
      <input
        type="date"
        value={date.from ? format(date.from, "yyyy-MM-dd") : ""}
        onChange={(e) => handleDateChange(e, "from")}
        className="rounded border p-2"
      />

      <span>—</span>

      {/*Fecha de Fin */}
      <input
        type="date"
        value={date.to ? format(date.to, "yyyy-MM-dd") : ""}
        onChange={(e) => handleDateChange(e, "to")}
        className="rounded border p-2"
      />
    </div>
  );
}

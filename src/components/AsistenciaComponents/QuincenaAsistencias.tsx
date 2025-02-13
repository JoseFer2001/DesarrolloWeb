"use client";

import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";

const getQuincena = (date: Date) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("es-ES", { month: "long" });
  const monthIndex = date.getMonth();
  const lastDay = new Date(year, monthIndex + 1, 0).getDate();
  const startDay = date.getDate() <= 15 ? 1 : 16;
  const endDay = date.getDate() <= 15 ? 15 : lastDay;

  const days = Array.from({ length: endDay - startDay + 1 }, (_, i) => ({
    date: startDay + i,
    dayOfWeek: new Date(year, monthIndex, startDay + i).toLocaleString("es-ES", { weekday: "short" }),
  }));

  return { startDay, endDay, month, year, days };
};

interface QuincenaProps {
  onChangeQuincena?: (quincena: {
    startDay: number;
    endDay: number;
    month: string;
    year: number;
    days: { date: number; dayOfWeek: string }[];
  }) => void;
}

const Quincenas: React.FC<QuincenaProps> = ({ onChangeQuincena = () => {} }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [quincena, setQuincena] = useState(getQuincena(currentDate));

  useEffect(() => {
    const nuevaQuincena = getQuincena(currentDate);
    if (
      nuevaQuincena.startDay !== quincena.startDay ||
      nuevaQuincena.endDay !== quincena.endDay ||
      nuevaQuincena.month !== quincena.month ||
      nuevaQuincena.year !== quincena.year
    ) {
      setQuincena(nuevaQuincena);
      onChangeQuincena(nuevaQuincena);
    }
  }, [currentDate]);

  return (
    <div className="flex cursor-pointer items-center rounded-md border px-3 py-1 text-sm font-medium">
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex items-center gap-1">
            <span>{`${quincena.startDay} - ${quincena.endDay} ${quincena.month} ${quincena.year}`}</span>
            <ChevronDown className="size-4" />
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar mode="single" selected={currentDate} onSelect={(date) => date && setCurrentDate(date)} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Quincenas;

"use client"

import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, ChevronDown } from "lucide-react"
import type React from "react"
import { useEffect, useState } from "react"
import { es } from "date-fns/locale"
import { cn } from "@/lib/utils"

const getQuincena = (date: Date) => {
  const year = date.getFullYear()
  const month = date.toLocaleString("es-ES", { month: "long" })
  const monthIndex = date.getMonth()
  const lastDay = new Date(year, monthIndex + 1, 0).getDate()
  const startDay = date.getDate() <= 15 ? 1 : 16
  const endDay = date.getDate() <= 15 ? 15 : lastDay

  const days = Array.from({ length: endDay - startDay + 1 }, (_, i) => ({
    date: startDay + i,
    dayOfWeek: new Date(year, monthIndex, startDay + i).toLocaleString("es-ES", { weekday: "short" }),
  }))

  return { startDay, endDay, month, year, days }
}

interface QuincenaProps {
  onChangeQuincena?: (quincena: {
    startDay: number
    endDay: number
    month: string
    year: number
    days: { date: number; dayOfWeek: string }[]
  }) => void
}

const Quincenas: React.FC<QuincenaProps> = ({ onChangeQuincena = () => {} }) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [quincena, setQuincena] = useState(getQuincena(currentDate))
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const nuevaQuincena = getQuincena(currentDate)
    if (
      nuevaQuincena.startDay !== quincena.startDay ||
      nuevaQuincena.endDay !== quincena.endDay ||
      nuevaQuincena.month !== quincena.month ||
      nuevaQuincena.year !== quincena.year
    ) {
      setQuincena(nuevaQuincena)
      onChangeQuincena(nuevaQuincena)
    }
  }, [currentDate, onChangeQuincena, quincena])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="flex cursor-pointer items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
          <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          <span className="text-foreground">
            {`${quincena.startDay} - ${quincena.endDay} ${quincena.month} ${quincena.year}`}
          </span>
          <ChevronDown className="ml-2 h-4 w-4 text-muted-foreground" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={currentDate}
          onSelect={(date) => {
            if (date) {
              setCurrentDate(date)
              setOpen(false)
            }
          }}
          locale={es}
          className="rounded-md border"
          classNames={{
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: cn("h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: cn(
              "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground rounded-md",
            ),
            day_selected:
              "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            day_today: "bg-accent text-accent-foreground",
            day_outside: "text-muted-foreground opacity-50",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible",
          }}
        />
      </PopoverContent>
    </Popover>
  )
}

export default Quincenas


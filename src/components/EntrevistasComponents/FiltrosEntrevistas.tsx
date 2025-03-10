import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import React from "react";

const FiltrosEntrevistas: React.FC = () => {
  return (
    <div className="mb-4 flex flex-wrap gap-4 rounded-lg bg-gray-100 p-4">
      {/* Filtro por Resultado */}
      <Select>
        <option value="">Filtro: Resultado</option>
        <option value="aceptado">Aceptado</option>
        <option value="negado">Negado</option>
      </Select>

      {/* Filtro por Barrio */}
      <Select>
        <option value="">Barrio</option>
        <option value="Robledo">Robledo</option>
        <option value="Laureles">Laureles</option>
        <option value="San Javier">San Javier</option>
        <option value="Manrique">Manrique</option>
      </Select>

      {/* Filtro por Fecha de Realización */}
      <Input type="date" placeholder="Fecha Realizada" />

      {/* Filtro por Edad */}
      <Input type="number" placeholder="Edad" min="18" max="100" />

      {/* Búsqueda por Nombre */}
      <Input type="text" placeholder="Buscar por nombre..." />
    </div>
  );
};

export default FiltrosEntrevistas;

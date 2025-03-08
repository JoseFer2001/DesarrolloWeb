"use client";

import { useActionState } from "react";
import { saveEntrevista } from "@/actions/EntrevistasEnvio";

// Componente para el botón de envío
function SubmitButton({ pending }: { pending: boolean }) {
  
  return (
    <button 
      type="submit" 
      className="mt-4 w-full rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600" 
      disabled={pending}
    >
      {pending ? "Guardando..." : "Guardar Entrevista"}
    </button>
  );
}

export function FormEntrevista() {
  // Estado inicial vacío
  const initialState = { errors: {}, message: "" };
  
  // Usamos useFormState con la acción del servidor
  const [state, action, pending] = useActionState(saveEntrevista, undefined);

  return (
    <form action={action} className="w-full rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-center text-xl font-bold">Registrar Entrevista</h2>

      <div className="grid grid-cols-2 gap-6">
        {/* 🏆 Columna 1: Información Personal */}
        <div className="rounded-lg border p-4">
          <h3 className="mb-3 text-lg font-bold">Información Personal</h3>

          <label className="mb-1 block">Nombre</label>
          <input type="text" name="nombre" className="input-form" />
          {state?.errors?.nombre && <p className="text-sm text-red-500">{state.errors.nombre}</p>}

          <label className="mb-1 mt-2 block">Tipo de Documento</label>
          <select name="tipo_documento" className="input-form">
            <option value="CC">C.C</option>
            <option value="CE">C.E</option>
            <option value="PP">P.P</option>
          </select>

          <label className="mb-1 mt-2 block">Número de Documento</label>
          <input type="text" name="numero_documento" className="input-form" />
          {state?.errors?.numero_documento && <p className="text-sm text-red-500">{state.errors.numero_documento}</p>}

          <label className="mb-1 mt-2 block">Fecha de Nacimiento</label>
          <input type="date" name="fecha_nacimiento" className="input-form" />
          {state?.errors?.fecha_nacimiento && <p className="text-sm text-red-500">{state.errors.fecha_nacimiento}</p>}

          <label className="mb-1 mt-2 block">Correo Electrónico</label>
          <input type="email" name="correo" className="input-form" />
          {state?.errors?.correo && <p className="text-sm text-red-500">{state.errors.correo}</p>}
        </div>

        {/* 🏆 Columna 2: Experiencia y Bloqueos */}
        <div className="rounded-lg border p-4">
          <h3 className="mb-3 text-lg font-bold">Experiencia Previa</h3>
          <label className="mb-1 block">¿Tiene experiencia previa?</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="radio" name="experiencia_previa" value="true" className="mr-2" /> Sí
            </label>
            <label className="flex items-center">
              <input type="radio" name="experiencia_previa" value="false" className="mr-2" defaultChecked /> No
            </label>
          </div>

          <h3 className="mb-3 mt-6 text-lg font-bold">Bloqueos Previos</h3>
          <label className="mb-1 block">¿Ha tenido bloqueos en plataformas?</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="radio" name="bloqueos_previos" value="true" className="mr-2" /> Sí
            </label>
            <label className="flex items-center">
              <input type="radio" name="bloqueos_previos" value="false" className="mr-2" defaultChecked /> No
            </label>
          </div>
        </div>
      </div>

      <SubmitButton pending = {pending}/>

      {state?.message && <p className="mt-2 text-center text-sm text-green-500">{state.message}</p>}
    </form>
  );
}
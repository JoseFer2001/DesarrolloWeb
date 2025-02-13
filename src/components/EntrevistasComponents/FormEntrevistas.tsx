"use client";

import { useState } from "react";

interface FormData {
  nombre: string;
  tipoDocumento: string;
  documento: string;
  fechaNacimiento: string;
  lugarNacimiento: string;
  email: string;
  telefono: string;
  barrio: string;
  direccion: string;
  eps: string;
  nivelAcademico: string;
  viveCon: string;
  experienciaPrevia: string;
  bloqueosPrevios: string;
}

const EntrevistaForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    tipoDocumento: "CC",
    documento: "",
    fechaNacimiento: "",
    lugarNacimiento: "",
    email: "",
    telefono: "",
    barrio: "",
    direccion: "",
    eps: "",
    nivelAcademico: "",
    viveCon: "",
    experienciaPrevia: "",
    bloqueosPrevios: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.nombre || !formData.documento || !formData.fechaNacimiento || !formData.email) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    console.log("Enviando formulario...", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-center text-xl font-bold">Registrar Entrevista</h2>

      {/* Contenedor de dos columnas */}
      <div className="grid grid-cols-2 gap-6">
        {/* 🏆 Columna 1: Información Personal */}
        <div className="rounded-lg border p-4">
          <h3 className="mb-3 text-lg font-bold">Información Personal</h3>

          <label className="mb-1 block">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="input-form"
          />

          <label className="mb-1 mt-2 block">Tipo de Documento</label>
          <select name="tipoDocumento" value={formData.tipoDocumento} onChange={handleChange} className="input-form">
            <option value="CC">C.C</option>
            <option value="CE">C.E</option>
            <option value="PP">P.P</option>
          </select>

          <label className="mb-1 mt-2 block">Número de Documento</label>
          <input
            type="text"
            name="documento"
            value={formData.documento}
            onChange={handleChange}
            required
            className="input-form"
          />

          <label className="mb-1 mt-2 block">Fecha de Nacimiento</label>
          <input
            type="date"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            required
            className="input-form"
          />

          <label className="mb-1 mt-2 block">Lugar de Nacimiento</label>
          <input
            type="text"
            name="lugarNacimiento"
            value={formData.lugarNacimiento}
            onChange={handleChange}
            required
            className="input-form"
          />

          <label className="mb-1 mt-2 block">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-form"
          />

          <label className="mb-1 mt-2 block">Teléfono</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="input-form"
          />

          <label className="mb-1 mt-2 block">Barrio</label>
          <input type="text" name="barrio" value={formData.barrio} onChange={handleChange} className="input-form" />

          <label className="mb-1 mt-2 block">Dirección</label>
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            className="input-form"
          />

          <label className="mb-1 mt-2 block">EPS</label>
          <input type="text" name="eps" value={formData.eps} onChange={handleChange} className="input-form" />

          <label className="mb-1 mt-2 block">Nivel Académico</label>
          <input
            type="text"
            name="nivelAcademico"
            value={formData.nivelAcademico}
            onChange={handleChange}
            className="input-form"
          />

          <label className="mb-1 mt-2 block">Con Quién Vive</label>
          <input type="text" name="viveCon" value={formData.viveCon} onChange={handleChange} className="input-form" />
        </div>

        {/* 🏆 Columna 2: Experiencia y Bloqueos */}
        <div className="rounded-lg border p-4">
          <h3 className="mb-3 text-lg font-bold">Experiencia Previa</h3>

          <label className="mb-1 block">¿Tiene experiencia previa?</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="radio" name="experienciaPrevia" value="Sí" onChange={handleChange} className="mr-2" /> Sí
            </label>
            <label className="flex items-center">
              <input type="radio" name="experienciaPrevia" value="No" onChange={handleChange} className="mr-2" /> No
            </label>
          </div>

          <h3 className="mb-3 mt-6 text-lg font-bold">Bloqueos Previos</h3>

          <label className="mb-1 block">¿Ha tenido bloqueos en plataformas?</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="radio" name="bloqueosPrevios" value="Sí" onChange={handleChange} className="mr-2" /> Sí
            </label>
            <label className="flex items-center">
              <input type="radio" name="bloqueosPrevios" value="No" onChange={handleChange} className="mr-2" /> No
            </label>
          </div>
        </div>
      </div>

      {/* Botón de enviar */}
      <button type="submit" className="mt-4 w-full rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">
        Guardar Entrevista
      </button>
    </form>
  );
};

export default EntrevistaForm;

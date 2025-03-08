"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

interface FormState {
  errors?: Record<string, string>;
  message?: string;
}

export async function saveEntrevista(
  prevState: FormState | undefined, 
  formData: FormData
): Promise<FormState> {
  // Conectar a Supabase
  const supabase = await createClient();

  // Validar datos obligatorios
  const nombre = formData.get("nombre") as string;
  const numero_documento = formData.get("numero_documento") as string;
  const fecha_nacimiento = formData.get("fecha_nacimiento") as string;
  const correo = formData.get("correo") as string;

  const errors: Record<string, string> = {};
  
  if (!nombre) errors.nombre = "El nombre es obligatorio";
  if (!numero_documento) errors.numero_documento = "El documento es obligatorio";
  if (!fecha_nacimiento) errors.fecha_nacimiento = "La fecha de nacimiento es obligatoria";
  if (!correo) errors.correo = "El correo es obligatorio";

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  // Preparar datos para la base de datos
  const entrevista = {
    nombre,
    tipo_documento: formData.get("tipo_documento") as string,
    numero_documento,
    fecha_nacimiento,
    correo,
    experiencia_previa: formData.get("experiencia_previa") === "true",
    bloqueos_previos: formData.get("bloqueos_previos") === "true",
    // Añadir campos opcionales solo si existen en el formulario
    ...(formData.get("lugar_nacimiento") && { lugar_nacimiento: formData.get("lugar_nacimiento") as string }),
    ...(formData.get("telefono") && { telefono: formData.get("telefono") as string }),
    ...(formData.get("barrio") && { barrio: formData.get("barrio") as string }),
    ...(formData.get("direccion") && { direccion: formData.get("direccion") as string }),
    ...(formData.get("eps") && { eps: formData.get("eps") as string }),
    ...(formData.get("nivel_academico") && { nivel_academico: formData.get("nivel_academico") as string }),
    ...(formData.get("con_quien_vive") && { con_quien_vive: formData.get("con_quien_vive") as string }),
  };

  try {
    // Insertar en Supabase
    const { error } = await supabase.from("entrevistas").insert([entrevista]);

    if (error) {
      console.error("Error al guardar la entrevista:", error);
      return { message: "Hubo un error al guardar la entrevista." };
    }

    // Limpiar caché y actualizar la UI
    revalidatePath("/entrevistas/entrevistas-nuevas");

    return { message: "Entrevista guardada correctamente." };
  } catch (error) {
    console.error("Error inesperado:", error);
    return { message: "Ocurrió un error inesperado." };
  }
}
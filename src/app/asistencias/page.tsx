"use client";

import TablaAsistencias from "@/components/AsistenciaComponents/TablaAsistencias";
import { MainNav } from "@/components/ui/nav-principal";
import Quincenas from "@/components/AsistenciaComponents/QuincenaAsistencias";

const Asistencias = () => {
  return (
    <>
      <MainNav />
      <Quincenas onChangeQuincena={(quincena) => console.log(quincena)} />
      <TablaAsistencias />
    </>
  );
};

export default Asistencias;

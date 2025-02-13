"use client";

import NavEntrevista from "@/components/EntrevistasComponents/NavEntrevistas";
import TablaEntrevistas from "@/components/EntrevistasComponents/TablaEntrevistas";
import { MainNav } from "@/components/ui/nav-principal";

const Entrevistas = () => {
  return (
    <>
      <MainNav />
      <NavEntrevista />
      <TablaEntrevistas />
    </>
  );
};

export default Entrevistas;

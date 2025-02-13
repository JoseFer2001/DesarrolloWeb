"use client";

import FormEntrevista from "@/components/EntrevistasComponents/FormEntrevistas";
import NavEntrevista from "@/components/EntrevistasComponents/NavEntrevistas";
import { MainNav } from "@/components/ui/nav-principal";

const Entrevistas = () => {
  return (
    <>
      <MainNav />
      <NavEntrevista />
      <FormEntrevista />
    </>
  );
};

export default Entrevistas;

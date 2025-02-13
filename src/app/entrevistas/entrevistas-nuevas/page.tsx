"use client";

import { MainNav } from "@/components/ui/nav-principal";
import NavEntrevista from "@/components/EntrevistasComponents/NavEntrevistas";
import FormEntrevista from "@/components/EntrevistasComponents/FormEntrevistas";

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

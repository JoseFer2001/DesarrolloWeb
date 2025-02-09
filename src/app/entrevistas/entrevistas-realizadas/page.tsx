"use client";

import { MainNav } from "@/components/ui/nav-principal";
import NavEntrevista from "@/components/EntrevistasComponents/NavEntrevistas";
import TablaEntrevistas from "@/components/EntrevistasComponents/TablaEntrevistas";

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

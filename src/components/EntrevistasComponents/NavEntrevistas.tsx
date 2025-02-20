"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export function NavEntrevista() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("realizadas");

  useEffect(() => {
    // Redireccionar según la pestaña seleccionada
    if (selectedTab === "nueva") {
      router.push("/entrevistas/entrevistas-nuevas");
    } else if (selectedTab === "realizadas") {
      router.push("/entrevistas/entrevistas-realizadas");
    }
  }, [selectedTab, router]);

  return (
    <Tabs
      value={selectedTab}
      onValueChange={(value) => setSelectedTab(value)}
      className="w-full"
    >
      <TabsList className="flex gap-4 rounded-xl bg-gray-100 p-2">
        <TabsTrigger value="nueva">Nueva Entrevista</TabsTrigger>
        <TabsTrigger value="realizadas">Entrevistas Realizadas</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default NavEntrevista;

"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export function NavEntrevista() {
  return (
    <Tabs defaultValue="realizadas" className="w-full">
      <TabsList className="flex gap-4 bg-gray-100 p-2 rounded-xl">
        <Link href="/entrevistas/page">
          <TabsTrigger value="nueva">Nueva Entrevista</TabsTrigger>
        </Link>
        <Link href="/entrevistas/entrevistas-realizadas">
          <TabsTrigger value="realizadas">Entrevistas Realizadas</TabsTrigger>
        </Link>
      </TabsList>
    </Tabs>
  );
}

export default NavEntrevista;

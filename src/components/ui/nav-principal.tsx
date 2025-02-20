"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";

const navigationItems = [
  {
    title: "Modelos",
    href: "/modelos",
  },
  {
    title: "Gestión de Entrevistas",
    href: "/entrevistas/entrevistas-realizadas",
  },
  {
    title: "Asistencias",
    href: "/asistencias",
  },
  {
    title: "Cerrar Sesión",
    href: "/login",
  },
];

export function MainNav() {
  return (
    <NavigationMenu className="max-w-full border-b bg-gray-900 text-white">
      <NavigationMenuList className="space-x-4 px-4">
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className="block h-10 px-4 py-2 text-white hover:bg-gray-800"
              >
                {item.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

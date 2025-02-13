"use client";

import React from 'react';
import Link from 'next/link';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";

const navigationItems = [
  {
    title: "Modelos",
    href: "/modelos",
    content: [
      {
        title: "Gestión de Modelos",
        href: "/modelos",
        description: "Administrar modelos y sus características"
      }
    ]
  },
  {
    title: "Gestión de Entrevistas",
    href: "/entrevistas",
    content: [
      {
        title: "Programar Entrevistas",
        href: "/entrevistas",
        description: "Agendar y gestionar entrevistas"
      }
    ]
  },
  {
    title: "Asistencias",
    href: "/asistencias",
    content: [
      {
        title: "Control de Asistencias",
        href: "/asistencias",
        description: "Gestionar asistencias y registros"
      }
    ]
  },
];

export function MainNav() {
  return (
    <NavigationMenu className="max-w-full bg-white border-b">
      <NavigationMenuList className="px-4 space-x-4">
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuTrigger className="h-10 px-4 py-2">
              {item.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                {item.content.map((subItem) => (
                  <li key={subItem.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={subItem.href}
                        className="block p-3 space-y-1 rounded-md hover:bg-slate-100"
                      >
                        <div className="text-sm font-medium leading-none">
                          {subItem.title}
                        </div>
                        <p className="text-sm leading-snug text-slate-500">
                          {subItem.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

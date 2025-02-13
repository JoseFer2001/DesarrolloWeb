"use client";

import { useState } from "react";
import { Trash2, Edit, Search } from "lucide-react";

interface User {
  id: number;
  name: string;
  username: string;
  joinedDate: string;
}

const initialUsers: User[] = [
  { id: 1, name: "Modelo 1", username: "Umodelo 1", joinedDate: "2024-11-26" },
  { id: 2, name: "Modelo 2", username: "Umodelo 2", joinedDate: "2024-01-10" },
  { id: 3, name: "Modelo 3", username: "Umodelo 3", joinedDate: "2023-10-23" },
];

export function UserTable() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [search, setSearch] = useState("");

  //eliminar un usuario
  const handleDelete = (id: number) => {
    setUsers(users.filter((user: User) => user.id !== id));
  };

  //filtrar usuarios
  const filteredUsers = users.filter(
    (user: User) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="border rounded-lg p-4 shadow-md">
      {/* Barra de búsqueda */}
      <div className="flex items-center space-x-2 mb-4">
        <Search className="size-5 text-gray-500" />
        <input
          type="text"
          placeholder="Buscar por Nombre o Usuario..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Tabla de Usuarios */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Nombre</th>
            <th className="p-2 text-left">Usuario</th>
            <th className="p-2 text-left">Fecha de Ingreso</th>
            <th className="p-2 text-center">Modificar</th>
            <th className="p-2 text-center">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user: User) => (
              <tr key={user.id} className="border-t">
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.username}</td>
                <td className="p-2">{user.joinedDate}</td>
                <td className="p-2 text-center">
                  <button className="text-blue-500 hover:underline flex items-center">
                    <Edit className="size-4 mr-1" /> Modificar
                  </button>
                </td>
                <td className="p-2 text-center">
                  <button
                    className="text-red-500 hover:underline flex items-center"
                    onClick={() => handleDelete(user.id)}
                  >
                    <Trash2 className="size-4 mr-1" /> Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="p-4 text-center text-gray-500">
                No se encontraron resultados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

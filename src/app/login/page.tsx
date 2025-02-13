"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    if (isRegistering) {
      // Registrar usuario
      const userExists = users.some((user: any) => user.email === email);
      if (userExists) {
        alert("El usuario ya existe");
      } else {
        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Usuario registrado con éxito");
        setIsRegistering(false);
      }
    } else {
      // Iniciar sesión
      const user = users.find((user: any) => user.email === email && user.password === password);
      if (user) {
        localStorage.setItem("auth", "true");
        router.push("/modelos");
      } else {
        alert("Correo o contraseña incorrectos");
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isRegistering ? "Registro" : "Iniciar Sesión"}
        </h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full p-2 border rounded mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-2 border rounded mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded">
          {isRegistering ? "Registrarse" : "Ingresar"}
        </button>
        <p
          className="mt-2 text-blue-500 text-center cursor-pointer"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate"}
        </p>
      </form>
    </div>
  );
}

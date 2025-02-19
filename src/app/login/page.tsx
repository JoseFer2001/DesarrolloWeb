"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface User {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRegistering, setIsRegistering] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const users: User[] = JSON.parse(localStorage.getItem("users") ?? "[]");

    if (isRegistering) {
      const userExists = users.some((user: User) => user.email === email);
      if (userExists) {
        alert("El usuario ya existe");
      } else {
        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Usuario registrado con éxito");
        setIsRegistering(false);
      }
    } else {
      const user = users.find((user: User) => user.email === email && user.password === password);
      if (user) {
        localStorage.setItem("auth", "true");
        router.push("/modelos");
      } else {
        alert("Correo o contraseña incorrectos");
      }
    }
  };

  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/fondo.jpg')", backgroundColor: "rgba(0, 0, 0, 0.5)", backgroundBlendMode: "overlay" }}
    >
      <form onSubmit={handleSubmit} className="rounded-lg bg-white/10 p-6 shadow-md backdrop-blur-md w-96 border border-white/20 mt-10">
        <img src="/user-icon.png" alt="User Icon" className="w-16 mx-auto mb-4" />
        <h2 className="mb-4 text-center text-2xl font-bold text-white">
          {isRegistering ? "Registro" : "Iniciar Sesión"}
        </h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          className="mb-2 w-full rounded border p-2 bg-white/30 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="mb-2 w-full rounded border p-2 bg-white/30 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full rounded bg-blue-500 p-2 text-white hover:shadow-lg transition-all">
          {isRegistering ? "Registrarse" : "Ingresar"}
        </button>
        <p className="mt-2 cursor-pointer text-center text-blue-500" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate"}
        </p>
      </form>
    </div>
  );
}

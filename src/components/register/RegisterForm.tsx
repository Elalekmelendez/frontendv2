"use client";
import React, { useState } from "react";
import { InputField, SubmitButton } from "../common";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      confirmPassword: "",
    });
  
    const [loading, setLoading] = useState(false);
    const router = useRouter(); // Hook para manejar la navegación
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      if (formData.password !== formData.confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }
  
      setLoading(true);
  
      try {
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });
  
        if (response.ok) {
          alert("Registro exitoso. Redirigiendo al inicio de sesión...");
          setFormData({ email: "", password: "", confirmPassword: "" });
  
          // Redirigir a /login
          router.push("/login");
        } else {
          const data = await response.json();
          alert(data.message || "Ocurrió un error durante el registro.");
        }
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        alert("Ocurrió un error al conectarse al servidor.");
      } finally {
        setLoading(false);
      }
    };

  return (
    <form
      className="bg-white rounded-xl px-6 py-8 space-y-6 max-w-md md:ml-auto w-full"
      onSubmit={handleSubmit}
    >
      <h3 className="text-3xl font-extrabold mb-12">Bienvenidos</h3>
      <InputField
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Correo electrónico"
      />
      <InputField
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Contraseña"
      />
      <InputField
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirma tu contraseña"
      />
      <SubmitButton text={loading ? "Registrando..." : "Registrar"} disabled={loading} />
      <p className="my-6 text-sm text-gray-400 text-center">o continuar con</p>
    </form>
  );
};

export default RegisterForm;

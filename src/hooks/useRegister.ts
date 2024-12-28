"use client";
import React, { useState } from "react";
import { API_REGISTER } from "@/components/common/constants";

const useRegister = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
  
    try {
      const response = await fetch(API_REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      if (!response.ok) {
        const errorDetails = await response.text(); // Lee el error del servidor
        console.error("Error during registration:", errorDetails);
        throw new Error(`Registration failed: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Registro exitoso:", data);
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
    } catch (error) {
      console.error("Error durante el registro:", error);
      alert("Hubo un problema con el registro. Inténtalo de nuevo.");
    }
  };
  

  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleRegister,
    name,
    setName
  };
};

export default useRegister;

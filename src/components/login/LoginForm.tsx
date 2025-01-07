"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { InputField, SocialLoginButtons, SubmitButton } from "../common";
import Link from "next/link";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/"); // Redirige al usuario al inicio
      }
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      setError("Ocurrió un error inesperado. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl px-6 py-8 space-y-6 max-w-md md:ml-auto w-full"
    >
      <h3 className="text-3xl font-extrabold mb-12">Bienvenidos</h3>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Mensaje de error */}

      <InputField
        type="email"
        placeholder="Correo electrónico"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        type="password"
        placeholder="Contraseña"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <div className="text-sm text-right">
        <Link href="#" className="text-blue-600 font-semibold hover:underline">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
      <SubmitButton text={loading ? "Cargando..." : "Iniciar Sesión"} disabled={loading} />
      <p className="my-6 text-sm text-gray-400 text-center">o continuar con</p>
      <SocialLoginButtons />
    </form>
  );
};

export default LoginForm;

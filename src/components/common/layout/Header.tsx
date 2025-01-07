"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo_zenomy from "@public/logo-zenomy.png";
import { MenuList, CloseIcon, HamburgerIcon } from "../../header";
import { useSession, signOut } from "next-auth/react"; // Importamos signOut

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const profileMenuRef = useRef<HTMLDivElement | null>(null);

  const { data: session, status } = useSession();
  // Cerrar el menú de perfil si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (status === "loading") {
    return (
      <div role="status" className="flex items-center justify-center h-screen">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }


  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen((prevState) => !prevState);
  };

  // Función para manejar el logout del usuario
  const handleLogout = async () => {
    try {
      await signOut({
        callbackUrl: "/", // Redirige al usuario a /login tras cerrar sesión
      });
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };



  return (
    <header className="py-4 px-4 sm:px-10 bg-white z-50 sticky top-0">
      <div className="max-w-7xl w-full mx-auto flex flex-wrap items-center gap-4 relative">
        {/* Logo */}
        <Link href="/">
          <Image src={logo_zenomy} width={180} alt="Logo Zenomy" />
        </Link>

        {/* Menu */}
        <div
          id="collapseMenu"
          className={`fixed inset-0 transition-transform duration-500 ease-in-out transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:!block lg:static lg:translate-x-0 z-[101] bg-[opacity-50]`}
        >
          {/* Botón para cerrar el menú en modo móvil */}
          <button
            id="toggleClose"
            className="lg:hidden fixed top-4 right-4 z-[102] rounded-full bg-white p-3"
            onClick={toggleMenu}
          >
            <CloseIcon />
          </button>

          <div className="max-lg:p-6 max-lg:pt-20">
            <MenuList />
          </div>
        </div>

        {/* Overlay para opacidad */}
        {isMenuOpen && (
          <button
            className="fixed inset-0 bg-black opacity-50 z-[100]"
            onClick={toggleMenu}
          ></button>
        )}

        {/* Botón para abrir el menú en modo móvil */}
        <div className="flex ml-auto">
          <button
            id="toggleOpen"
            className="lg:hidden ml-7"
            onClick={toggleMenu}
            aria-label="Open Menu"
          >
            <HamburgerIcon />
          </button>
        </div>

        {/* Botón de perfil con menú desplegable */}
        {session && (
          <div className="ml-auto flex items-center relative">
            <button
              onClick={toggleProfileMenu}
              className="focus:outline-none"
              aria-label="Profile Menu"
            >
              <Image
                src={session.user?.image ?? ""}
                alt="Profile Icon"
                width={40}
                height={40}
                className="rounded-full cursor-pointer"
              />
            </button>
            {profileMenuOpen && (
              <div
                ref={profileMenuRef}
                className="absolute right-0 mt-2 w-18 bg-white rounded-md shadow-lg z-10"
              >
                <ul className="py-1">
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <svg className="h-6 w-6 text-gray-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}

        {!session && (
          <>
            <button className="hidden sm:block">
              <Link
                href="/login"
                className="rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Iniciar
              </Link>
            </button>

            <button className="hidden sm:block">
              <Link
                href="/register"
                className="rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:shadow-none"
                type="button"
              >
                Registrar
              </Link>
            </button>
          </>
        )}

      </div>
    </header>
  );
};

export default Header;

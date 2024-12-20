"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo_zenomy from "@public/logo-zenomy.png";
import { MenuList, CloseIcon, HamburgerIcon } from "../../header";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
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
          className={`fixed inset-0 transition-transform duration-500 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
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
          <div
            className="fixed inset-0 bg-black opacity-50 z-[100]"
            onClick={toggleMenu}
          ></div>
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
      </div>
    </header>
  );
};

export default Header;

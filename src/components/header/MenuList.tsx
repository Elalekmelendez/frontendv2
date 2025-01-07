import React from 'react'
import MenuItem from './MenuItem'
import logo_zenomy from '@public/logo-zenomy.png'
import Image from 'next/image'
import { useSession } from 'next-auth/react';

const MenuList = () => {
    const { data: session } = useSession();

    return (
        <ul className="lg:!flex lg:ml-12 lg:space-x-6 max-lg:space-y-6 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            {/* Logo visible solo en modo responsive */}
            <MenuItem href="javascript:void(0)" className="lg:hidden">
                <Image
                    src={logo_zenomy}
                    alt="logo"
                    width={160}
                    className="w-40"
                />
            </MenuItem>
            <MenuItem href="/" text="Inicio" />
            <MenuItem href="/chat" text="Chat" />

            {/* Mostrar "Iniciar" y "Registrar" solo en modo responsive */}

            {
                !session && (
                    <>
                        <MenuItem href="/login" text="Iniciar" className="lg:hidden" />
                        <MenuItem href="/register" text="Registrar" className="lg:hidden" />
                    </>
                )
            }

        </ul>
    )
}

export default MenuList

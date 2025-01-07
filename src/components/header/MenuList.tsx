import React from 'react'
import MenuItem from './MenuItem'
import logo_zenomy from '@public/logo-zenomy.png'
import Image from 'next/image'

const MenuList = () => (
    <ul className="lg:!flex lg:ml-12 lg:space-x-6 max-lg:space-y-6 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
        <MenuItem href="javascript:void(0)" className="lg:hidden">
            <Image
                src={logo_zenomy}
                alt="logo"
                className="w-40"
            />
        </MenuItem>
        <MenuItem href="/" text="Inicio" />
        <MenuItem href="/chat" text="Chat" />
        <MenuItem href="/login" text="Iniciar" />
        <MenuItem href="/register" text="Registrar" />

       
    </ul>
)

export default MenuList
import React from 'react'
import MenuItem from './MenuItem'

const SubMenu = () => (
    <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-0 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
        <MenuItem href="javascript:void(0)" text="Contacto" />
        <MenuItem href="/login" text="Iniciar Sesión" />
        <MenuItem href="/register" text="Registrar" />
    </ul>
)

export default SubMenu
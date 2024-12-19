import React from 'react'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'

const MenuList = () => (
    <ul className="lg:!flex lg:ml-12 lg:space-x-6 max-lg:space-y-6 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
        <MenuItem href="javascript:void(0)" className="lg:hidden">
            <img
                src="https://readymadeui.com/readymadeui.svg"
                alt="logo"
                className="w-40"
            />
        </MenuItem>
        <MenuItem href="javascript:void(0)" text="Inicio" />
        <MenuItem href="javascript:void(0)" text="Páginas" hasSubmenu>
            <SubMenu />
        </MenuItem>
        <MenuItem href="/subscriptions" text="Suscripciones" />
        <MenuItem href="javascript:void(0)" text="Blog" />
        <MenuItem href="javascript:void(0)" text="Sobre nosotros" />
        <MenuItem href="/chat" text="Chat" />
    </ul>
)

export default MenuList
"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo_zenomy from '@public/logo-zenomy.png'
import {MenuList, CloseIcon, HamburgerIcon} from '../../header';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="py-4 px-4 sm:px-10 bg-white z-50 sticky top-0">
            <div className="max-w-7xl w-full mx-auto flex flex-wrap items-center gap-4">
                <Link href="/">
                    <Image src={logo_zenomy} width={180} alt="logo zenomy" />
                </Link>
                <div
                    id="collapseMenu"
                    className={`max-lg:${
                        isMenuOpen ? 'block' : 'hidden'
                    } lg:!block max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 transition-all duration-500 ease-in-out`}
                >
                    <button
                        id="toggleClose"
                        className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
                        onClick={toggleMenu}
                    >
                        <CloseIcon />
                    </button>
                    <MenuList />
                </div>
                <div className="flex ml-auto">
                    <button id="toggleOpen" className="lg:hidden ml-7" onClick={toggleMenu}>
                        <HamburgerIcon />
                    </button>
                </div>
            </div>
        </header>
    );
};


export default Header

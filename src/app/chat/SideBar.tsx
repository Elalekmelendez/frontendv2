import React, { useState } from 'react';
import logoZenomy from '@public/logo-zenomy.png';
import Image from 'next/image';
import Link from 'next/link';
import { UserProfile, ArrowIcon, ConversationItem } from '@/components/side-bar';
import useSideBar from '@/hooks/useSideBar';
import Hamburger from '@/components/common/icons/Hamburger.icon';

const conversations = [
    'Hola, como estas?',
    'Como se programa en Typescript?',
    'Dame una dieta para ser fuerte',
    'Como saber si el mani me da...',
];

const SideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const {
        popupRef,
        buttonRef,
        showPopup,
        searchQuery,
        togglePopup,
        setSearchQuery,
        filteredConversations,
    } = useSideBar(conversations);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
            <div
                className={`fixed top-0 left-0 h-screen bg-[#f7f7f8] z-40 transition-all duration-400 ${
                    isCollapsed ? 'w-0 overflow-hidden' : 'w-[280px] py-6 px-4'
                }`}
            >
                {!isCollapsed && (
                    <nav className="h-full font-[sans-serif]">
                        <div className="relative">
                            <Link href="/">
                                <Image src={logoZenomy} width={150} alt="Logo Zenomy" />
                            </Link>

                            <div
                                className="absolute -right-6 top-2 h-6 w-6 p-[6px] cursor-pointer bg-[#007bff] flex items-center justify-center rounded-full"
                                onClick={toggleSidebar}
                            >
                                <ArrowIcon />
                            </div>
                        </div>

                        <div className="overflow-auto py-6 h-full mt-4">
                            <ul className="space-y-2 p-1 text-white">
                                <li className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#007bff] text-black"
                                    />
                                </li>
                                {filteredConversations.map((item, index) => (
                                    <ConversationItem key={index} text={item} />
                                ))}
                            </ul>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-4 bg-[#7CC3C7] text-white">
                            <UserProfile
                                name="Felipe Castro"
                                email="felipe@gmail.com"
                                togglePopup={togglePopup}
                                showPopup={showPopup}
                                popupRef={popupRef}
                                buttonRef={buttonRef}
                            />
                        </div>
                    </nav>
                )}
            </div>

            {isCollapsed && (
                <div
                    className="fixed top-4 left-4 h-8 w-8 p-2 cursor-pointer bg-[#007bff] flex items-center justify-center rounded-full z-50"
                    onClick={toggleSidebar}
                >
                    <Hamburger />
                </div>
            )}
        </>
    );
};


export default SideBar;
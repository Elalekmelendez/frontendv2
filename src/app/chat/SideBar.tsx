import React, { useState } from 'react';
import logoZenomy from '@public/logo-zenomy.png';
import Image from 'next/image';
import Link from 'next/link';
import { UserProfile, ArrowIcon, ConversationItem } from '@/components/side-bar';
import useSideBar from '@/hooks/useSideBar';

const conversations = [
    { id: 1, text: 'Hola, como estas?' },
    { id: 2, text: 'Como se programa en Typescript?' },
    { id: 3, text: 'Dame una dieta para ser fuerte' },
    { id: 4, text: 'Como saber si el mani me da...' },
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
    } = useSideBar(conversations.map(conversation => conversation.text));

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-screen bg-[#f7f7f8] z-40 transition-transform duration-300 transform ${isCollapsed ? '-translate-x-full sm:translate-x-0' : 'translate-x-0'
                    } w-[280px] sm:w-[320px] py-6 px-4`}
            >
                <nav className="h-full font-[sans-serif] flex flex-col">
                    <div className="relative flex items-center justify-between mb-6">
                        <Link href="/">
                            <Image src={logoZenomy} width={150} alt="Logo Zenomy" />
                        </Link>
                        {/* Collapse button for mobile */}
                        <button
                            className="h-6 w-6 p-[6px] cursor-pointer bg-[#007bff] flex items-center justify-center rounded-full sm:hidden"
                            onClick={toggleSidebar}
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    toggleSidebar();
                                }
                            }}
                        >
                            <ArrowIcon />
                        </button>
                    </div>

                    <div className="flex-grow overflow-auto py-6">
                        <ul className="space-y-2 p-1">
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
                                <ConversationItem key={conversations[index].id} text={item} />
                            ))}
                        </ul>
                    </div>

                    <div className="p-4 bg-[#7CC3C7] text-white">
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
            </div>

            {/* Hamburger Icon for mobile */}
            {
                isCollapsed ?
                    (<button
                        className="fixed top-4 left-4 h-8 w-8 p-2 cursor-pointer bg-[#007bff] flex items-center justify-center rounded-full z-50 sm:hidden"
                        onClick={toggleSidebar}
                    >
                        <ArrowIcon />
                    </button>) : null
            }

            {/* Overlay for mobile */}
            {!isCollapsed && (
                <button
                    className="fixed inset-0 bg-black bg-opacity-40 z-30 sm:hidden"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
};

export default SideBar;

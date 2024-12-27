import React from 'react'
import { UserProfileProps } from '@/interfaces';
import Image from 'next/image';


const UserProfile: React.FC<UserProfileProps> = ({
    name,
    email,
    togglePopup,
    showPopup,
    popupRef,
    buttonRef,
}) => (
    <div className="flex flex-wrap items-center justify-start gap-4 cursor-pointer">
        <Image
            src="https://readymadeui.com/team-1.webp"
            className="w-12 h-12 rounded-full"
            alt="User Avatar"
        />

        <div className="relative">
            <button ref={buttonRef} onClick={togglePopup} className="text-sm font-medium">
                <div>
                    <p className="text-[15px] text-gray-800 font-bold">{name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{email}</p>
                </div>
            </button>

            {showPopup && (
                <div
                    ref={popupRef}
                    className="absolute bottom-16 right-[-25] w-48 p-4 bg-[#212121] shadow-lg rounded-md"
                >
                    <ul className="text-sm">
                        <li className="p-2 hover:bg-[#7CC385] cursor-pointer rounded-md">
                            <b>Estación de Trabajo</b>
                        </li>
                        <hr />
                        <li className="p-2 hover:bg-[#7CC385] cursor-pointer rounded-md">Cambiar Tema</li>
                        <li className="p-2 hover:bg-[#7CC385] cursor-pointer rounded-md">Configuración</li>
                        <hr />
                        <li className="p-2 hover:bg-[#7CC385] cursor-pointer rounded-md">Cerrar sesión</li>
                    </ul>
                </div>
            )}
        </div>
    </div>
);
export default UserProfile
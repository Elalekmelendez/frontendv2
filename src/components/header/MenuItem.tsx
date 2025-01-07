import React from 'react'
import Link from 'next/link'
import { MenuItemProps } from '@/interfaces'

const MenuItem = ({ href, text, children, className = '', hasSubmenu = false }: MenuItemProps) => (
    <li className={`max-lg:border-b max-lg:py-2 px-3 ${className} ${hasSubmenu ? 'group relative' : ''}`}>
        <Link href={href} className="hover:text-blue-600 block font-semibold transition-all">
            {text}
            {hasSubmenu && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 fill-current inline ml-1.5"
                    viewBox="0 0 24 24"
                >
                    <path
                        fillRule="evenodd"
                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        clipRule="evenodd"
                        data-original="#000000"
                    />
                </svg>
            )}
        </Link>
        {children}
    </li>
)

export default MenuItem
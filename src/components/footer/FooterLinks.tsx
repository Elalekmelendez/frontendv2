import React from 'react'
import { ArrowIcon } from '../common';
// Componente reutilizable para listas de enlaces
interface FooterLinksProps {
    title: string;
    links: { href: string; text: string }[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => (
    <div>
        <h4 className="text-xl font-semibold mb-4">{title}</h4>
        <ul className="space-y-4">
            {links.map((link, index) => (
                <li key={index}>
                    <a href={link.href} className="hover:text-blue-600 flex items-center gap-2">
                        <ArrowIcon />
                        {link.text}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default FooterLinks;
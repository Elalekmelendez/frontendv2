import React from 'react'
import Image from 'next/image';
import logo_zenomy from '@public/logo-zenomy.png'
import Link from 'next/link';

const FooterIntro = () => (
    <div className="xl:col-span-2">
        <Link href="#">
            <Image src={logo_zenomy} width={250} alt="logo zenomy" />
        </Link>
        <p className="mb-2">
            <b>Conectando tu negocio con el futuro de la inteligencia artificial.hgjhghjfjhdfhgdx</b>
        </p>
    </div>
);


export default FooterIntro
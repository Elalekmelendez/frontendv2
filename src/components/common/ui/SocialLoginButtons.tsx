"use client";
import React from 'react'
import GoogleIcon from '@/components/login/GoogleIcon';
import SocialButton from '../icons/SocialButton';
import FacebookIcon from '../icons/FacebookIcon';
import { signIn } from 'next-auth/react';


const SocialLoginButtons = () => {

    const handleLogin = async (provider: string) => {
        await signIn(provider);
    }

    return (
        <div className="space-x-6 flex justify-center">
            <div onClick={() => handleLogin('google')} role='button' aria-label="Sign in with Google">
                <SocialButton svg={GoogleIcon} />
            </div>
            <div onClick={() => handleLogin('facebook')} role='button' aria-label="Sign in with Facebook">
                <SocialButton svg={FacebookIcon} />
            </div>
        </div>
    );
};


export default SocialLoginButtons
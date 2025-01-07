import React from 'react'
import GoogleIcon from '@/components/login/GoogleIcon';
import SocialButton from '../icons/SocialButton';
import FacebookIcon from '../icons/FacebookIcon';


const SocialLoginButtons = () => (
    <div className="space-x-6 flex justify-center">
        <SocialButton svg={GoogleIcon} />
        <SocialButton svg={FacebookIcon} />
    </div>
);


export default SocialLoginButtons
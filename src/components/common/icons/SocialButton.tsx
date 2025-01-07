import React from 'react'

interface SocialButtonProps {
    svg: React.FC<React.SVGProps<SVGSVGElement>>;
}


const SocialButton: React.FC<SocialButtonProps> = ({ svg: Icon }) => (
    <button type="button" className="border-none outline-none">
        <Icon />
    </button>
);

export default SocialButton
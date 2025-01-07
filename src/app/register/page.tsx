import React from 'react';
import { IntroSection, RegisterForm } from '@/components/register';

const Register = () => {
  return (
    <div className="font-sans bg-gradient-to-r from-blue-700 via-blue-300 to-blue-400 text-gray-800">
      <div className="min-h-screen flex flex-col items-center justify-center lg:p-6 p-4">
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
          <IntroSection />
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};




export default Register;

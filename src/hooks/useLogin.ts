"use client";
import { API_LOGIN } from '@/components/common/constants';
import React, { useState } from 'react'

const useLogin = () => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        console.log(email, password);
        e.preventDefault();
        try {
            const response = await fetch(API_LOGIN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            console.log(response)

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();

            // Muestra el token o redirige
            if (data.access_token) {

                // Almacena el token en una cookie segura
                document.cookie = `access_token=${data.access_token}; path=/; domain=pagina-a.com; secure; samesite=Strict`;

                console.log(document.cookie);


                // Redirige al subdominio
                window.location.href = `https://chat.pagina-a.com`;
            } else {
                console.error('No access token received');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Inicio de sesión fallido. Inténtalo de nuevo.');
        }
    };

  
    return { email, setEmail, password, setPassword, handleLogin }
}

export default useLogin
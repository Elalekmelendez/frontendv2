import { useEffect, useState } from "react";

export const useMercadoPago = (publicKey: string) => {
  const [mercadoPago, setMercadoPago] = useState<any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.mercadopago.com/js/v2";
    script.async = true;

    script.onload = () => {
      if (mercadoPago) {
        const mp = new mercadoPago(publicKey, {
          locale: "es-CL", // Cambiar al locale del país correspondiente
        });
        setMercadoPago(mp);
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [publicKey]);

  return mercadoPago;
};

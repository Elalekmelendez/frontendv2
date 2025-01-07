"use server";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import prisma, { SubscriptionnStatus } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  console.log("Webhook recibido:", payload);

  // Manejo según el tipo de evento
  if (payload.type === "payment") {
    const userId = payload.data.id;
    console.log("User ID typeof:", typeof userId);

    try {
      const clientDetails = await getClientDetails(userId);
      console.log("CLIENT DETAILS:", clientDetails);

      // Extraer y manejar los detalles del cliente (personalización según tus necesidades)
      const { email, status, subscriptionId } = await extractClientDetails(clientDetails);
      console.log("Client Extracted Details:", { email, status, subscriptionId });

      if (!subscriptionId) {
        throw new Error("No se puede asociar el usuario a una suscripción");
      }

      // Actualizar base de datos o realizar lógica adicional
      // await updateDatabase.execute({ email, status, subscriptionId });

      return NextResponse.json({ message: "Webhook procesado con éxito" }, { status: 200 });
    } catch (error: any) {
      console.error("Error al procesar el webhook:", error);
      return NextResponse.json({ message: "Error al procesar el webhook" }, { status: 500 });
    }
  }

  console.log("Evento ignorado:", payload.type);
  return NextResponse.json({ message: "Evento ignorado" }, { status: 200 });
}

async function getClientDetails(userId: string) {
  try {
    const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN; 
    const response = await axios.get(
      `https://api.mercadopago.com/v1/customers/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Token de autenticación
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener detalles del cliente:", error.response?.data || error.message);
    throw new Error("Error al obtener detalles del cliente");
  }
}

async function extractClientDetails(clientDetails: any) {
  // Extraer los datos relevantes del cliente
  const email = clientDetails.email;
  const status = clientDetails.status;
  const subscriptionId = clientDetails.subscriptionId || null;

  // await prisma.transactions.create({
  //   data:{
  //     user_id: '', // Add appropriate user_id value
  //     amount: 0, // CHEKEAR
  //     transaction_date: new Date(),
  //     payment_id:  '',
  //     payment_method: '',
  //     model_id: '', // Add appropriate model_id value
  //     status_subscription: SubscriptionnStatus.ACTIVE , // Add appropriate status_subscription value
  //     created_at: new Date(),
  //     updated_at: new Date()
  //   }
  // })

  return { email, status, subscriptionId };
}

"use server";
import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, PreApproval } from "mercadopago";
import { CreateSubscriptionDto, Frecuency } from "@/dto";
import { PRICE_MONTHLY, PRICE_YEARLY } from "@/lib/Prices";

export async function POST(request: NextRequest) {

  try {
    const createSubscriptionDto: CreateSubscriptionDto = await request.json();
    const url_payment = await createSubscription(createSubscriptionDto);
    return NextResponse.json(
      { payment_url: url_payment },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error creating subscription", error);
    return NextResponse.json(
      { error: "Error creating subscription" },
      { status: 500 }
    );
  }
}

const config = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});

export const createSubscription = async (createSubscriptionDto: CreateSubscriptionDto) => {


  const {payer_email,frequency, back_url} = createSubscriptionDto;

  const transactionAmount = frequency === Frecuency.MONTHLY ? PRICE_MONTHLY : PRICE_YEARLY;

  const endDateMonthly = new Date(
    new Date().setMonth(new Date().getMonth() + frequency)
  ).toISOString(); 

  const endDateYearly = new Date(
    new Date().setFullYear(new Date().getFullYear() + frequency)
  ).toISOString(); 
  
  const preApproval = new PreApproval(config);
  const newSubscriber = await preApproval.create({
    body: {
      reason: frequency === Frecuency.MONTHLY ? "Suscripción Mensual Premium" : "Suscripción Anual Premium",
      payer_email: payer_email,
      external_reference: `Zen-AI-${payer_email}`,
      auto_recurring: {
        frequency: frequency,
        frequency_type: "months", 
        transaction_amount: transactionAmount, 
        currency_id: "CLP",
        end_date: frequency === Frecuency.MONTHLY ? endDateMonthly : endDateYearly,
      },
      status: "pending",
      back_url: back_url
    },
  });

  return newSubscriber.init_point;
};

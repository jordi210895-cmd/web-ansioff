import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

export async function POST(req: Request) {
  console.log("POST /api/checkout initiated");
  console.log("STRIPE_SECRET_KEY present:", !!process.env.STRIPE_SECRET_KEY);
  
  if (!stripe) {
    console.error("Stripe not initialized - missing key");
    return NextResponse.json({ error: "Stripe is not configured" }, { status: 500 });
  }

  try {
    const origin = req.headers.get("origin");
    console.log("Request origin:", origin);

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "ANSIOFF App - Suscripción Mensual",
              description: "3 días de prueba gratis, después 3,99€ al mes.",
            },
            unit_amount: 399,
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      mode: "subscription",
      subscription_data: {
        trial_period_days: 3,
      },
      success_url: `${origin || "https://ansioff-landing.vercel.app"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin || "https://ansioff-landing.vercel.app"}/`,
    });

    console.log("Checkout session created successfully:", session.id);
    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe Checkout Error:", {
      message: err.message,
      type: err.type,
      code: err.code
    });
    return NextResponse.json({ 
      error: "Error al crear la sesión de pago",
      details: err.message 
    }, { status: 500 });
  }
}

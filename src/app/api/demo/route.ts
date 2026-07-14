import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const contactEmail = process.env.CONTACT_EMAIL || "ansioffapp@gmail.com";
  
  try {
    const body = await req.json();
    const { name, company, email, employees, hp } = body;

    // 1. Honeypot check (anti-bot)
    if (hp) {
      console.warn("ALERTA: Intento de bot detectado (Honeypot)");
      return NextResponse.json({ success: true }); // Engañamos al bot simulando éxito
    }

    // 2. Validación de campos obligatorios
    if (!name || !company || !email || !employees) {
      console.error("Error: Intento de envío con campos vacíos.");
      return NextResponse.json({ error: "Todos los campos son obligatorios" }, { status: 400 });
    }

    console.log("=== Nueva Solicitud de Demo (B2B) ===");
    console.log("Nombre:", name);
    console.log("Empresa:", company);
    console.log("Email:", email);
    console.log("Nº Empleados:", employees);
    console.log("=====================================");

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: "ANSIOFF Business <onboarding@resend.dev>", // Nota: Cambiar a dominio verificado en producción
      to: [contactEmail],
      subject: `🚀 Nueva solicitud de demo: ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #f8fafc;">
          <h1 style="color: #1e293b; font-size: 24px; margin-bottom: 20px;">Nueva Solicitud de Demo (B2B)</h1>
          
          <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #cbd5e1;">
            <p style="margin-bottom: 12px;"><strong>Nombre:</strong> ${name}</p>
            <p style="margin-bottom: 12px;"><strong>Empresa:</strong> ${company}</p>
            <p style="margin-bottom: 12px;"><strong>Email corporativo:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
            <p style="margin-bottom: 0;"><strong>Nº de empleados:</strong> ${employees}</p>
          </div>
          
          <p style="margin-top: 24px; color: #64748b; font-size: 14px;">
            Este es un mensaje automático generado por el formulario de la landing page de ANSIOFF Business.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Error de Resend:", error);
      return NextResponse.json({ error: "Error al enviar el email" }, { status: 500 });
    }
    
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error en /api/demo:", error);
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
  }
}

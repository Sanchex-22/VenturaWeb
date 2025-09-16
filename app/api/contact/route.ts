import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Inicializa Resend con tu API Key desde las variables de entorno
const resend = new Resend(process.env.RESEND_API_KEY)

// Define los orígenes permitidos para CORS
const allowedOrigins = process.env.ORIGINS?.split(",").map(o => o.trim()) || []

// Función auxiliar para gestionar los encabezados CORS
function withCors(origin: string | null) {
  const isAllowed = origin && allowedOrigins.includes(origin)
  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : allowedOrigins[0] || "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-CSRF-Token",
    "Access-Control-Allow-Credentials": "true",
  }
}

// Handler para solicitudes OPTIONS (Preflight de CORS)
export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin")
  return new NextResponse(null, {
    status: 200,
    headers: withCors(origin),
  })
}

// Handler para solicitudes POST (Envío del formulario)
export async function POST(req: Request) {
  const origin = req.headers.get("origin")
  const { name, email, phone, company, message } = await req.json()

  // Validación básica de los campos requeridos
  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Nombre, Email y Mensaje son campos requeridos." },
      { status: 400, headers: withCors(origin) },
    )
  }

  // Lógica para determinar el destinatario(s)
  let recipients: string | string[]
  const emailTo = process.env.RESEND_EMAIL_TO
  const emailTo2 = process.env.RESEND_EMAIL_TO2

  if (emailTo && emailTo2) {
    recipients = [emailTo, emailTo2]
  } else if (emailTo) {
    recipients = emailTo
  } else {
    return NextResponse.json(
      { message: "Error de configuración: No hay destinatarios definidos para el correo." },
      { status: 500, headers: withCors(origin) },
    )
  }

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_EMAIL_FROM as string,
      to: recipients,
      subject: `Nueva solicitud de cotización de ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nueva Solicitud de Cotización</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 40px 20px;">
                <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">
                        Nueva Solicitud de Cotización
                      </h1>
                      <p style="color: #e0e7ff; margin: 8px 0 0 0; font-size: 14px;">
                        Formulario de contacto empresarial
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                        Se ha recibido una nueva solicitud de cotización a través del formulario de contacto:
                      </p>
                      
                      <!-- Contact Information Table -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                        <tr>
                          <td style="padding: 15px 20px; background-color: #f8fafc; border-left: 4px solid #3b82f6; border-bottom: 1px solid #e5e7eb;">
                            <strong style="color: #1f2937; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Nombre Completo</strong>
                            <p style="color: #374151; font-size: 16px; margin: 5px 0 0 0; font-weight: 500;">${name}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 15px 20px; background-color: #ffffff; border-left: 4px solid #10b981; border-bottom: 1px solid #e5e7eb;">
                            <strong style="color: #1f2937; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Correo Electrónico</strong>
                            <p style="color: #374151; font-size: 16px; margin: 5px 0 0 0; font-weight: 500;">
                              <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 15px 20px; background-color: #f8fafc; border-left: 4px solid #f59e0b; border-bottom: 1px solid #e5e7eb;">
                            <strong style="color: #1f2937; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Teléfono</strong>
                            <p style="color: #374151; font-size: 16px; margin: 5px 0 0 0; font-weight: 500;">
                              ${phone || '<em style="color: #9ca3af;">No especificado</em>'}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 15px 20px; background-color: #ffffff; border-left: 4px solid #8b5cf6; border-bottom: 1px solid #e5e7eb;">
                            <strong style="color: #1f2937; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Empresa</strong>
                            <p style="color: #374151; font-size: 16px; margin: 5px 0 0 0; font-weight: 500;">
                              ${company || '<em style="color: #9ca3af;">No especificada</em>'}
                            </p>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Message Section -->
                      <div style="background-color: #f8fafc; border-radius: 6px; padding: 25px; border-left: 4px solid #ef4444;">
                        <strong style="color: #1f2937; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 10px;">Mensaje</strong>
                        <div style="color: #374151; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                      </div>
                      
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                      <p style="color: #6b7280; font-size: 12px; margin: 0; line-height: 1.5;">
                        Este correo fue generado automáticamente desde el formulario de contacto.<br>
                        Fecha: ${new Date().toLocaleDateString("es-ES", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error("Error al enviar el correo con Resend:", error)
      return NextResponse.json(
        { message: error.message || "Error al enviar el correo." },
        { status: 500, headers: withCors(origin) },
      )
    }

    const confirmationEmail = await resend.emails.send({
      from: process.env.RESEND_EMAIL_FROM as string,
      to: email,
      subject: "Confirmación: Hemos recibido tu solicitud de cotización",
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Confirmación de Solicitud</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 40px 20px;">
                <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px 30px; text-align: center;">
                      <div style="background-color: rgba(255, 255, 255, 0.2); width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                        ¡Solicitud Recibida!
                      </h1>
                      <p style="color: #d1fae5; margin: 12px 0 0 0; font-size: 16px; font-weight: 500;">
                        Gracias por contactarnos, ${name}
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <div style="text-align: center; margin-bottom: 30px;">
                        <h2 style="color: #1f2937; font-size: 24px; font-weight: 600; margin: 0 0 15px 0;">
                          Hemos recibido tu cotización
                        </h2>
                        <p style="color: #6b7280; font-size: 16px; line-height: 1.6; margin: 0;">
                          Te estaremos contactando pronto para brindarte la mejor propuesta
                        </p>
                      </div>
                      
                      <!-- Summary Card -->
                      <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 12px; padding: 30px; margin-bottom: 30px; border: 1px solid #e2e8f0;">
                        <h3 style="color: #1e40af; font-size: 18px; font-weight: 600; margin: 0 0 20px 0; text-align: center;">
                          Resumen de tu solicitud
                        </h3>
                        
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                              <strong style="color: #374151; font-size: 14px;">Nombre:</strong>
                              <span style="color: #1f2937; font-size: 14px; margin-left: 10px;">${name}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                              <strong style="color: #374151; font-size: 14px;">Email:</strong>
                              <span style="color: #1f2937; font-size: 14px; margin-left: 10px;">${email}</span>
                            </td>
                          </tr>
                          ${
                            phone
                              ? `
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                              <strong style="color: #374151; font-size: 14px;">Teléfono:</strong>
                              <span style="color: #1f2937; font-size: 14px; margin-left: 10px;">${phone}</span>
                            </td>
                          </tr>
                          `
                              : ""
                          }
                          ${
                            company
                              ? `
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                              <strong style="color: #374151; font-size: 14px;">Empresa:</strong>
                              <span style="color: #1f2937; font-size: 14px; margin-left: 10px;">${company}</span>
                            </td>
                          </tr>
                          `
                              : ""
                          }
                          <tr>
                            <td style="padding: 12px 0;">
                              <strong style="color: #374151; font-size: 14px;">Fecha de solicitud:</strong>
                              <span style="color: #1f2937; font-size: 14px; margin-left: 10px;">
                                ${new Date().toLocaleDateString("es-ES", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </span>
                            </td>
                          </tr>
                        </table>
                      </div>
                
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                      <p style="color: #6b7280; font-size: 12px; margin: 0 0 10px 0; line-height: 1.5;">
                        Este es un correo de confirmación automático. Por favor, no respondas a este mensaje.
                      </p>
                      <p style="color: #9ca3af; font-size: 11px; margin: 0; line-height: 1.4;">
                        © ${new Date().getFullYear()} - Todos los derechos reservados
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    if (confirmationEmail.error) {
      console.error("Error al enviar correo de confirmación:", confirmationEmail.error)
        return NextResponse.json(
      { message: "Error al enviar el correo." },
      { status: 500, headers: withCors(origin) },
    )
    }

    console.log("Correo enviado con éxito (Resend ID):", data?.id)
    console.log("Correo de confirmación enviado (ID):", confirmationEmail.data?.id)
    return NextResponse.json({ message: "Correo enviado con éxito." }, { status: 200, headers: withCors(origin) })
  } catch (error: any) {
    console.error("Error general al enviar el correo (catch):", error)
    return NextResponse.json(
      { message: error.message || "Error al enviar el correo." },
      { status: 500, headers: withCors(origin) },
    )
  }
}

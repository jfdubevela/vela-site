import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const { nom, courriel, typeEntreprise, tailleEntreprise, message } = body

    if (!nom || !courriel) {
      return NextResponse.json({ success: false, error: 'Champs requis manquants.' }, { status: 400 })
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(courriel)) {
      return NextResponse.json({ success: false, error: 'Courriel invalide.' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'VELA <onboarding@resend.dev>',
      to: 'jf@velavelavela.com',
      replyTo: courriel,
      subject: `Nouvelle demande — Agent vocal I.A. — ${nom}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0A2E4D;">
          <h2 style="color: #0A2E4D;">Nouvelle demande — Agent vocal I.A.</h2>
          <hr style="border-color: #e5e7eb;" />
          <p><strong>Nom :</strong> ${nom}</p>
          <p><strong>Courriel :</strong> <a href="mailto:${courriel}">${courriel}</a></p>
          <p><strong>Type d'entreprise :</strong> ${typeEntreprise || '—'}</p>
          <p><strong>Taille de l'entreprise :</strong> ${tailleEntreprise || '—'}</p>
          <p><strong>Message :</strong></p>
          <p style="background:#f5f5f0; padding: 12px; border-radius: 8px;">${message || '(aucun message)'}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ success: false, error: "Erreur lors de l'envoi. Réessayez." }, { status: 500 })
  }
}

'use server'

import { Resend } from 'resend'

export async function submitContact(formData: FormData) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const nom = formData.get('nom') as string
  const courriel = formData.get('courriel') as string
  const typeEntreprise = formData.get('typeEntreprise') as string
  const tailleEntreprise = formData.get('tailleEntreprise') as string
  const message = formData.get('message') as string

  if (!nom || !courriel) {
    return { success: false, error: 'Champs requis manquants.' }
  }

  try {
    await resend.emails.send({
      from: 'VELA <onboarding@resend.dev>',
      to: 'jf@velavelavela.com',
      replyTo: courriel,
      subject: `Nouvelle demande de diagnostic — ${nom}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0A2E4D;">
          <h2 style="color: #0A2E4D;">Nouvelle demande de diagnostic</h2>
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
    return { success: true }
  } catch {
    return { success: false, error: 'Erreur lors de l\'envoi. Réessayez.' }
  }
}

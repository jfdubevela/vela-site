'use server'

import { Resend } from 'resend'

export async function submitFormation(formData: FormData) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const nom = formData.get('nom') as string
    const courriel = formData.get('courriel') as string
    const formation = formData.get('formation') as string
    const typeEntreprise = formData.get('typeEntreprise') as string
    const tailleEntreprise = formData.get('tailleEntreprise') as string
    const message = formData.get('message') as string

    if (!nom || !courriel || !formation) {
      return { success: false, error: 'Champs requis manquants.' }
    }

    await resend.emails.send({
      from: 'VELA <onboarding@resend.dev>',
      to: 'jf@velavelavela.com',
      replyTo: courriel,
      subject: `Demande de formation \u2014 ${formation} \u2014 ${nom}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0A2E4D;">
          <h2 style="color: #0A2E4D;">Nouvelle demande de formation</h2>
          <hr style="border-color: #e5e7eb;" />
          <p><strong>Formation choisie :</strong> ${formation}</p>
          <p><strong>Nom :</strong> ${nom}</p>
          <p><strong>Courriel :</strong> <a href="mailto:${courriel}">${courriel}</a></p>
          <p><strong>Type d'entreprise :</strong> ${typeEntreprise || '\u2014'}</p>
          <p><strong>Taille de l'entreprise :</strong> ${tailleEntreprise || '\u2014'}</p>
          <p><strong>Message :</strong></p>
          <p style="background:#f5f5f0; padding: 12px; border-radius: 8px;">${message || '(aucun message)'}</p>
        </div>
      `,
    })
    return { success: true }
  } catch (err) {
    console.error('submitFormation error:', err)
    return { success: false, error: "Erreur lors de l'envoi. R\u00e9essayez." }
  }
}

export async function submitCoaching(formData: FormData) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const prenom = formData.get('prenom') as string
    const courriel = formData.get('courriel') as string
    const role = formData.get('role') as string
    const usage = formData.get('usage') as string
    const reference = formData.get('reference') as string

    if (!prenom || !courriel || !role) {
      return { success: false, error: 'Champs requis manquants.' }
    }

    await resend.emails.send({
      from: 'VELA <onboarding@resend.dev>',
      to: 'jf@velavelavela.com',
      replyTo: courriel,
      subject: `Session découverte coaching - ${prenom}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0A2E4D;">
          <h2 style="color: #0A2E4D;">Nouvelle demande de coaching individuel</h2>
          <hr style="border-color: #e5e7eb;" />
          <p><strong>Prénom :</strong> ${prenom}</p>
          <p><strong>Courriel :</strong> <a href="mailto:${courriel}">${courriel}</a></p>
          <p><strong>Rôle :</strong> ${role}</p>
          <p><strong>Usage actuel de l'I.A. :</strong> ${usage || 'Non précisé'}</p>
          <p><strong>Référencé par :</strong> ${reference || 'Non précisé'}</p>
        </div>
      `,
    })
    return { success: true }
  } catch (err) {
    console.error('submitCoaching error:', err)
    return { success: false, error: "Erreur lors de l'envoi. Réessayez." }
  }
}

export async function submitContact(formData: FormData) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const nom = formData.get('nom') as string
  const courriel = formData.get('courriel') as string
  const typeEntreprise = formData.get('typeEntreprise') as string
  const tailleEntreprise = formData.get('tailleEntreprise') as string
  const service = formData.get('service') as string
  const message = formData.get('message') as string

  const serviceLabels: Record<string, string> = {
    incertain: 'Je ne suis pas certain',
    automatisations: 'Automatisations I.A.',
    'agent-vocal': 'Agent vocal I.A.',
    formation: 'Formation',
    coaching: 'Coaching I.A.',
  }
  const serviceLabel = service ? (serviceLabels[service] ?? service) : '—'

  if (!nom || !courriel) {
    return { success: false, error: 'Champs requis manquants.' }
  }

  try {
    await resend.emails.send({
      from: 'VELA <onboarding@resend.dev>',
      to: 'jf@velavelavela.com',
      replyTo: courriel,
      subject: `Nouvelle demande — ${serviceLabel} — ${nom}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0A2E4D;">
          <h2 style="color: #0A2E4D;">Nouvelle demande de contact</h2>
          <hr style="border-color: #e5e7eb;" />
          <p><strong>Nom :</strong> ${nom}</p>
          <p><strong>Courriel :</strong> <a href="mailto:${courriel}">${courriel}</a></p>
          <p><strong>Service d'intérêt :</strong> ${serviceLabel}</p>
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

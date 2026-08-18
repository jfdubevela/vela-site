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
          <p><strong>Référé par :</strong> ${reference || 'Non précisé'}</p>
        </div>
      `,
    })
    return { success: true }
  } catch (err) {
    console.error('submitCoaching error:', err)
    return { success: false, error: "Erreur lors de l'envoi. Réessayez." }
  }
}

export async function submitSondagePGA(formData: FormData) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const q1 = formData.get('q1') as string
    const q2 = formData.getAll('q2') as string[]
    const q3 = formData.get('q3') as string
    const q4 = formData.get('q4') as string
    const q5 = formData.get('q5') as string
    const q6 = formData.get('q6') as string

    await resend.emails.send({
      from: 'VELA <onboarding@resend.dev>',
      to: 'jf@velavelavela.com',
      subject: `[Sondage] PGA Experts · Utiliser l'I.A. de manière stratégique et sécuritaire`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0A2E4D;">
          <p style="display:inline-block; background:#C9A961; color:#0A2E4D; font-size: 12px; font-weight:700; padding: 4px 10px; border-radius: 999px; letter-spacing: 0.04em; text-transform: uppercase;">Sondage de calibrage</p>
          <h2 style="color: #0A2E4D; margin-top: 10px;">PGA Experts inc.</h2>
          <p style="color:#0A2E4D; font-size: 14px; margin-top: -8px;"><strong>Formation :</strong> Utiliser l'I.A. de manière stratégique et sécuritaire</p>
          <p style="color:#6b7280; font-size: 13px;">Réponse anonyme</p>
          <hr style="border-color: #e5e7eb;" />
          <p><strong>1. Fréquence d'utilisation d'un outil d'I.A. :</strong><br />${q1 || 'Non répondu'}</p>
          <p><strong>2. Outils déjà utilisés :</strong><br />${q2.length ? q2.join(', ') : 'Non répondu'}</p>
          <p><strong>3. Tâche de la semaine à accélérer :</strong><br /><span style="background:#f5f5f0; padding: 12px; border-radius: 8px; display:block;">${q3 || 'Non répondu'}</span></p>
          <p><strong>4. Principale inquiétude :</strong><br />${q4 || 'Non répondu'}</p>
          <p><strong>5. Aisance avec ces outils (1 à 10) :</strong><br />${q5 || 'Non répondu'}</p>
          <p><strong>6. Question précise pour la formation :</strong><br /><span style="background:#f5f5f0; padding: 12px; border-radius: 8px; display:block;">${q6 || 'Aucune'}</span></p>
        </div>
      `,
    })
    return { success: true }
  } catch (err) {
    console.error('submitSondagePGA error:', err)
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

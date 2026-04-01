# Guide de déploiement — VELA

## Architecture
```
git push main → GitHub Actions → SSH VPS → Docker (port 3002) → Nginx → velavelavela.com
```

---

## ÉTAPE 1 — Créer le repo GitHub

1. Aller sur github.com → New repository
2. Nom : `vela-site`, visibilité : **Public**
3. Ne pas initialiser avec README
4. Copier l'URL SSH du repo (ex: `git@github.com:TON_USERNAME/vela-site.git`)

Dans ce répertoire (`site/`) :
```bash
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin git@github.com:TON_USERNAME/vela-site.git
git push -u origin main
```

---

## ÉTAPE 2 — Créer la clé SSH pour GitHub Actions

Sur ta machine locale :
```bash
ssh-keygen -t ed25519 -C "github-actions-vela" -f ~/.ssh/github_actions_vela
```

Cela crée :
- `~/.ssh/github_actions_vela` → **clé privée** (pour GitHub Secrets)
- `~/.ssh/github_actions_vela.pub` → **clé publique** (pour le VPS)

### Ajouter la clé publique au VPS
```bash
ssh root@187.124.226.112 "echo '$(cat ~/.ssh/github_actions_vela.pub)' >> ~/.ssh/authorized_keys"
```

### Ajouter les secrets dans GitHub
Aller sur : `github.com/TON_USERNAME/vela-site → Settings → Secrets and variables → Actions`

Ajouter ces 3 secrets :

| Nom | Valeur |
|-----|--------|
| `VPS_HOST` | `187.124.226.112` |
| `VPS_SSH_KEY` | contenu de `~/.ssh/github_actions_vela` (clé privée) |
| `RESEND_API_KEY` | ta clé Resend |

Pour afficher la clé privée : `cat ~/.ssh/github_actions_vela`

---

## ÉTAPE 3 — Préparer le VPS

Se connecter au VPS :
```bash
ssh root@187.124.226.112
```

Cloner le repo sur le VPS :
```bash
mkdir -p /opt/vela
git clone https://github.com/TON_USERNAME/vela-site.git /opt/vela
```

---

## ÉTAPE 4 — Configurer Nginx

```bash
cp /opt/vela/nginx/velavelavela.com.conf /etc/nginx/sites-available/velavelavela.com
ln -s /etc/nginx/sites-available/velavelavela.com /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

---

## ÉTAPE 5 — Premier déploiement manuel (test)

```bash
cd /opt/vela
docker build -t vela-site .
docker run -d \
  --name vela-site \
  --restart unless-stopped \
  -p 3002:3000 \
  -e RESEND_API_KEY="TA_CLE_RESEND" \
  vela-site
```

Tester : `curl http://localhost:3002` → doit retourner du HTML

---

## ÉTAPE 6 — SSL avec Certbot

```bash
apt install certbot python3-certbot-nginx -y
certbot --nginx -d velavelavela.com -d www.velavelavela.com
```

Certbot modifie automatiquement le config Nginx pour HTTPS.

---

## ÉTAPE 7 — Pointer le DNS (IONOS)

**Attendre que tout fonctionne sur le VPS avant de changer le DNS.**

Dans IONOS → DNS de `velavelavela.com` :
- Modifier le record `A` : `velavelavela.com` → `187.124.226.112`
- Modifier le record `A` : `www.velavelavela.com` → `187.124.226.112`

Propagation : 1–24h. Le site Webflow reste actif jusqu'à la propagation complète.

---

## Mise à jour du site (après setup)

```bash
git add .
git commit -m "description du changement"
git push
```

GitHub Actions se charge du reste automatiquement (~2-3 min).

---

## Commandes utiles sur le VPS

```bash
# Voir les logs du container
docker logs vela-site

# Voir le statut
docker ps

# Redémarrer manuellement
docker restart vela-site
```

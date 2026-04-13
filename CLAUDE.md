@AGENTS.md

# Déploiement

Quand l'utilisateur dit "push", "déploie", "envoie sur le site" ou toute variante :
**toujours** exécuter `bash deploy.sh` depuis `/Users/jean-francoisdube/Documents/Master/Vela/site/`.

Ne jamais faire un simple `git push` seul — ça ne met pas le site à jour.

Le script fait automatiquement :
1. `git push origin main` (GitHub)
2. SSH sur `root@187.124.226.112` → `git pull` + rebuild Docker + redémarrage du conteneur

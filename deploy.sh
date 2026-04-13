#!/bin/bash
set -e

VPS="root@187.124.226.112"

echo "🚀 Déploiement en cours..."

ssh "$VPS" '
  set -e
  cd /opt/vela
  git pull origin main
  docker build -t vela-site .
  docker rm -f vela-site 2>/dev/null || true
  docker run -d \
    --name vela-site \
    --restart unless-stopped \
    -p 3003:3000 \
    --env-file /opt/vela/.env \
    -v /opt/vela/public/videos:/app/public/videos:ro \
    vela-site
  echo "✅ Déployé avec succès"
'

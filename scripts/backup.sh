#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BACKUP_DIR="$REPO_ROOT/.backups"
TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
ARCHIVE="$BACKUP_DIR/cosmo-backup-${TIMESTAMP}.tar.gz"

mkdir -p "$BACKUP_DIR"

tar --create --gzip --file "$ARCHIVE" \
  --exclude="node_modules" \
  --exclude=".backups" \
  ai game package.json package-lock.json

echo "Backup created at $ARCHIVE"

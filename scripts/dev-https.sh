#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CERT_DIR="$ROOT_DIR/certificates"
KEY_FILE="$CERT_DIR/localhost-key.pem"
CERT_FILE="$CERT_DIR/localhost.pem"

if ! command -v openssl >/dev/null 2>&1; then
	echo "OpenSSL is required to start the local HTTPS dev server." >&2
	exit 1
fi

mkdir -p "$CERT_DIR"

if [ ! -f "$KEY_FILE" ] || [ ! -f "$CERT_FILE" ]; then
	echo "Generating a local self-signed certificate in $CERT_DIR..."
	openssl req -x509 -newkey rsa:2048 -sha256 -nodes \
		-keyout "$KEY_FILE" \
		-out "$CERT_FILE" \
		-days 365 \
		-subj "/CN=localhost" \
		-addext "subjectAltName=DNS:localhost,IP:127.0.0.1,IP:::1"
fi

if [ "${1-}" = "--" ]; then
	shift
fi

exec next dev \
	--experimental-https \
	--experimental-https-key "$KEY_FILE" \
	--experimental-https-cert "$CERT_FILE" \
	"$@"

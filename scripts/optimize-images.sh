#!/usr/bin/env bash
# Regenerates the optimized WebP images the site ships, from the original
# source files (which stay untouched in src/assets).
#
# Requires cwebp (libwebp): `brew install webp` on macOS.
# Quality 85 measured 39–50 dB PSNR against the originals (visually
# transparent) while cutting file size by ~90%.
set -euo pipefail
cd "$(dirname "$0")/../src/assets"

webp() { cwebp -quiet -q 85 -m 6 -sharp_yuv -metadata none "$@"; }

# Project covers, at their original dimensions (no upscaling).
webp "projects/chõra.png"      -o projects/chora.webp       # ASCII name for the shipped file
webp projects/astrotrack.png   -o projects/astrotrack.webp
webp projects/mirofish.png     -o projects/mirofish.webp
webp projects/fidus.png        -o projects/fidus.webp

# Fidus logo (opaque, black background kept as in the original).
webp case-studies/fidus-hero.png -o case-studies/fidus-hero.webp

# Portrait: 800px wide covers the desktop hero frame at 2x; 160px wide covers
# the 40px navbar avatar at 3x+. (profile.png is a JPEG despite its name.)
webp -resize 800 0 profile.png -o profile-portrait.webp
webp -resize 160 0 profile.png -o profile-avatar.webp

ls -l projects/*.webp case-studies/*.webp profile-*.webp

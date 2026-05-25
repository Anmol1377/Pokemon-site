# Pokémon Safari · Landing page

Marketing site for the [Pokémon Safari](https://github.com/Anmol1377/Pok-mon-Safari) game. Live at **https://anmol1377.github.io/Pokemon-site/** once GitHub Pages is enabled on the repo.

## Run locally

```bash
npm install
npm run dev    # opens http://localhost:5181
```

Vite + React 18 + TypeScript + Tailwind + Framer Motion + lucide-react. Same stack as the game.

## Deploy

Every push to `main` triggers `.github/workflows/deploy.yml` — builds and deploys to GitHub Pages automatically. The workflow detects the repo name and sets the Vite `base` accordingly, so the same config works for any repo name.

**One-time setup** on the repo: Settings → Pages → Build and deployment → Source → **GitHub Actions**.

## Update the download link

The "Download for Android" button points at the latest APK in the **game repo's** GitHub Releases. To publish a new APK:

1. In [`pokedex-game/`](https://github.com/Anmol1377/Pok-mon-Safari), build a release APK
2. Tag and push: `git tag v1.0.0 && git push --tags`
3. Create a release on GitHub: https://github.com/Anmol1377/Pok-mon-Safari/releases/new
4. Upload `app-debug.apk` (or `app-release.apk`) as the release asset
5. The landing page button auto-points at `releases/latest/download/app-debug.apk`

When you publish to Play Store, set `LINKS.playStore` in [`src/lib/config.ts`](src/lib/config.ts) and a Play Store badge will appear.

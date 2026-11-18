import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Le quota Hobby est de 5 000 transformations par mois, et seules les 21 figures
    // du GIEC et d'OWID passent par l'optimiseur (les emojis sont `unoptimized`).
    // 3 largeurs × 2 qualités × webp seul (défaut) : au plus 126 variantes.
    // Les cartes en `100vw` ou `50vw` prennent 640, 1200 ou 2048 selon l'écran,
    // l'agrandi en 2400 px se rabat sur 2048, le grand côté des sources (~2 000 px).
    // Sous-ensemble des défauts, donc les variantes déjà en cache resservent.
    localPatterns: [{ pathname: "/figures/**", search: "" }],
    imageSizes: [],
    deviceSizes: [640, 1200, 2048],
    qualities: [75, 95],
    // 31 jours, le plafond de cache Vercel pour les images locales (4 h par défaut).
    minimumCacheTTL: 2678400,
  },
  // Ancienne adresse de l'explorateur, dont le projet Vercel ne faisait plus que
  // rediriger : toute page renvoie à l'accueil, comme avant.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "explorateur.climatelab.fr" }],
        destination: "https://thermometre.climatelab.fr/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ANSIOFF',
    short_name: 'ANSIOFF',
    description: 'La ansiedad no tiene que controlarte. Tu compañero para los momentos difíciles.',
    start_url: '/',
    display: 'standalone',
    background_color: '#060b18',
    theme_color: '#14b8a6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}

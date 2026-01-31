// Placeholder image generator for game covers
// These would be replaced with actual exported assets in production

export const placeholderImages = {
  games: {
    'elden-ring': 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=450&fit=crop',
    'bioshock': 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&h=450&fit=crop',
    'doom': 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop',
    'borderlands-2': 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=450&fit=crop',
    'rust': 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop',
    'starfield': 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=450&fit=crop',
    'baldurs-gate-3': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=450&fit=crop',
    'cyberpunk': 'https://images.unsplash.com/photo-1563089145-599997674d42?w=800&h=450&fit=crop',
    'no-mans-sky': 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=450&fit=crop',
    'destiny2': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop',
    'stellaris': 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=450&fit=crop',
  },
  banners: {
    'elden-ring': 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&h=600&fit=crop',
    'bioshock': 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=1920&h=600&fit=crop',
  }
};

export function getGameImage(gameId: string): string {
  return placeholderImages.games[gameId as keyof typeof placeholderImages.games]
    || `https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=450&fit=crop&q=80`;
}

export function getGameBanner(gameId: string): string {
  return placeholderImages.banners[gameId as keyof typeof placeholderImages.banners]
    || getGameImage(gameId);
}

export interface Game {
  id: string;
  title: string;
  image: string;
  banner?: string;
  price?: number;
  originalPrice?: number;
  discount?: number;
  tags: string[];
  releaseDate: string;
  developer: string;
  publisher: string;
  description: string;
  rating: number;
  reviews: number;
  installed?: boolean;
  playTime?: number;
  lastPlayed?: string;
  achievements?: { unlocked: number; total: number };
}

// Use Unsplash for placeholder gaming images
const gameImages = {
  eldenRing: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=450&fit=crop&q=80',
  bioshock: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&h=450&fit=crop&q=80',
  doom: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop&q=80',
  borderlands: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=450&fit=crop&q=80',
  rust: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop&q=80',
  starfield: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=450&fit=crop&q=80',
  baldursGate: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=450&fit=crop&q=80',
  cyberpunk: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=800&h=450&fit=crop&q=80',
  noMansSky: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=450&fit=crop&q=80',
  destiny: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop&q=80',
  stellaris: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=450&fit=crop&q=80',
  fallOfEden: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b0?w=800&h=450&fit=crop&q=80',
};

export const featuredGames: Game[] = [
  {
    id: 'elden-ring',
    title: 'Elden Ring',
    image: gameImages.eldenRing,
    banner: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&h=600&fit=crop&q=80',
    price: 23.09,
    originalPrice: 34.99,
    discount: 34,
    tags: ['Action', 'RPG', 'Open World', 'Souls-like'],
    releaseDate: 'Feb 25, 2022',
    developer: 'FromSoftware Inc.',
    publisher: 'Bandai Namco Entertainment',
    description: 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
    rating: 92,
    reviews: 524891,
  },
  {
    id: 'bioshock-remastered',
    title: 'Bioshock Remastered',
    image: gameImages.bioshock,
    banner: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=1920&h=600&fit=crop&q=80',
    price: 19.99,
    tags: ['FPS', 'Action', 'Story Rich', 'Atmospheric'],
    releaseDate: 'Sep 15, 2016',
    developer: 'Blind Squirrel',
    publisher: '2K',
    description: 'BioShock Remastered brings Rapture to life like never before. Explore the underwater city of Rapture, a haven for society\'s greatest minds.',
    rating: 95,
    reviews: 89532,
    installed: true,
    playTime: 92,
    lastPlayed: '21 Aug 2023',
    achievements: { unlocked: 20, total: 95 },
  },
  {
    id: 'doom',
    title: 'DOOM',
    image: gameImages.doom,
    price: 19.99,
    tags: ['FPS', 'Action', 'Shooter', 'Gore'],
    releaseDate: 'May 13, 2016',
    developer: 'id Software',
    publisher: 'Bethesda Softworks',
    description: 'Developed by id software, the studio that pioneered the first-person shooter genre and created multiplayer Deathmatch, DOOM returns as a brutally fun and challenging modern-day shooter experience.',
    rating: 92,
    reviews: 134567,
    installed: true,
    playTime: 68,
    lastPlayed: '21 Aug 2023',
  },
  {
    id: 'borderlands-2',
    title: 'Borderlands 2',
    image: gameImages.borderlands,
    price: 15.99,
    discount: 75,
    originalPrice: 59.99,
    tags: ['FPS', 'Action', 'RPG', 'Co-op'],
    releaseDate: 'Sep 18, 2012',
    developer: 'Gearbox Software',
    publisher: '2K',
    description: 'The ultimate vault hunting experience is back.',
    rating: 96,
    reviews: 245000,
    installed: true,
    playTime: 75,
    achievements: { unlocked: 35, total: 75 },
  },
];

export const specialOffers: Game[] = [
  {
    id: 'rust',
    title: 'Rust',
    image: gameImages.rust,
    price: 13.99,
    originalPrice: 39.99,
    discount: 65,
    tags: ['Survival', 'Multiplayer', 'Open World'],
    releaseDate: 'Feb 8, 2018',
    developer: 'Facepunch Studios',
    publisher: 'Facepunch Studios',
    description: 'The only aim in Rust is to survive.',
    rating: 84,
    reviews: 567890,
  },
  {
    id: 'fall-of-eden',
    title: 'Fall of Eden',
    image: gameImages.fallOfEden,
    price: 24.99,
    originalPrice: 49.99,
    discount: 50,
    tags: ['Action', 'Adventure', 'RPG'],
    releaseDate: 'Mar 15, 2023',
    developer: 'Eden Studios',
    publisher: 'Eden Studios',
    description: 'A new epic adventure awaits.',
    rating: 88,
    reviews: 12345,
  },
];

export const newReleases: Game[] = [
  {
    id: 'starfield',
    title: 'Starfield',
    image: gameImages.starfield,
    price: 69.99,
    tags: ['RPG', 'Open World', 'Space', 'Exploration'],
    releaseDate: 'Sep 6, 2023',
    developer: 'Bethesda Game Studios',
    publisher: 'Bethesda Softworks',
    description: 'Starfield is the first new universe in 25 years from Bethesda Game Studios.',
    rating: 85,
    reviews: 234567,
  },
  {
    id: 'baldurs-gate-3',
    title: 'Baldur\'s Gate 3',
    image: gameImages.baldursGate,
    price: 59.99,
    tags: ['RPG', 'Turn-Based', 'Fantasy', 'Story Rich'],
    releaseDate: 'Aug 3, 2023',
    developer: 'Larian Studios',
    publisher: 'Larian Studios',
    description: 'Gather your party and return to the Forgotten Realms.',
    rating: 96,
    reviews: 456789,
  },
];

export const recentlyUpdated: Game[] = [
  {
    id: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    image: gameImages.cyberpunk,
    price: 29.99,
    tags: ['RPG', 'Open World', 'Cyberpunk', 'Story Rich'],
    releaseDate: 'Dec 10, 2020',
    developer: 'CD PROJEKT RED',
    publisher: 'CD PROJEKT RED',
    description: 'Cyberpunk 2077 is an open-world, action-adventure RPG set in Night City.',
    rating: 77,
    reviews: 567890,
  },
  {
    id: 'no-mans-sky',
    title: 'No Man\'s Sky',
    image: gameImages.noMansSky,
    price: 39.99,
    discount: 50,
    originalPrice: 59.99,
    tags: ['Exploration', 'Space', 'Survival', 'Multiplayer'],
    releaseDate: 'Aug 12, 2016',
    developer: 'Hello Games',
    publisher: 'Hello Games',
    description: 'Explore infinite worlds in this sci-fi adventure.',
    rating: 74,
    reviews: 189234,
  },
];

export const topSellers: Game[] = [
  {
    id: 'destiny-2',
    title: 'Destiny 2',
    image: gameImages.destiny,
    price: 0,
    tags: ['FPS', 'MMO', 'Looter Shooter'],
    releaseDate: 'Oct 1, 2019',
    developer: 'Bungie',
    publisher: 'Bungie',
    description: 'Dive into the world of Destiny 2 to explore the mysteries of the solar system.',
    rating: 83,
    reviews: 345678,
  },
  {
    id: 'stellaris',
    title: 'Stellaris',
    image: gameImages.stellaris,
    price: 9.99,
    originalPrice: 39.99,
    discount: 75,
    tags: ['Strategy', '4X', 'Grand Strategy', 'Sci-fi'],
    releaseDate: 'May 9, 2016',
    developer: 'Paradox Development Studio',
    publisher: 'Paradox Interactive',
    description: 'Explore a vast galaxy full of wonder.',
    rating: 88,
    reviews: 78901,
  },
];

export const browseCategories = [
  { id: 'action', name: 'Action', count: 12456 },
  { id: 'adventure', name: 'Adventure', count: 8934 },
  { id: 'rpg', name: 'RPG', count: 5678 },
  { id: 'simulation', name: 'Simulation', count: 4567 },
  { id: 'strategy', name: 'Strategy', count: 3456 },
  { id: 'sports', name: 'Sports & Racing', count: 2345 },
  { id: 'indie', name: 'Indie', count: 15678 },
  { id: 'casual', name: 'Casual', count: 6789 },
];

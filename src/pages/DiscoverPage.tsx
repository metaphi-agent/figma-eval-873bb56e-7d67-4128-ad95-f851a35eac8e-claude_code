import { StoreHeader, Footer } from '../components/blocks';
import { WindowsIcon, MacIcon, LinuxIcon, SteamDeckIcon } from '../components/ui/Icons';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const recommendations = [
  {
    id: 'eldenring',
    title: 'Elden Ring',
    basedOn: 'Dark Souls III',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=250&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=120&fit=crop',
      'https://images.unsplash.com/photo-1552820728-8b83bb6b2b04?w=200&h=120&fit=crop',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=120&fit=crop',
    ],
    tags: ['Souls-like', 'Open World', 'Dark Fantasy', 'Action RPG'],
    releaseDate: 'Feb 25, 2022',
    reviews: { positive: 92, count: '751,919' },
    originalPrice: 59.99,
    price: 41.99,
    discount: 30,
    platforms: ['windows'],
  },
  {
    id: 'nomansky',
    title: "No Man's Sky",
    basedOn: 'Mass Effect: Legendary Edition',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=500&h=250&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=200&h=120&fit=crop',
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&h=120&fit=crop',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=200&h=120&fit=crop',
    ],
    tags: ['Space', 'Open World Survival Craft', 'Exploration', 'Sandbox'],
    releaseDate: '12 Aug 2016',
    reviews: { positive: 78, count: '212,519' },
    originalPrice: 59.99,
    price: 41.99,
    discount: 30,
    platforms: ['windows', 'mac'],
  },
  {
    id: 'bloonstd6',
    title: 'Bloons TD 6',
    basedOn: 'Untitled Goose Game',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&h=250&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&h=120&fit=crop',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=120&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=120&fit=crop',
    ],
    tags: ['Tower Defense', 'Strategy', 'Singleplayer', 'Multiplayer'],
    releaseDate: 'Aug 22, 2023',
    reviews: { positive: 97, count: '195,912' },
    price: 13.99,
    platforms: ['windows', 'mac', 'linux'],
  },
  {
    id: 'projectzomboid',
    title: 'Project Zomboid',
    basedOn: 'Terraria',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b04?w=500&h=250&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1552820728-8b83bb6b2b04?w=200&h=120&fit=crop',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=200&h=120&fit=crop',
      'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=200&h=120&fit=crop',
    ],
    tags: ['Survival', 'Zombies', 'Open World', 'Sandbox'],
    releaseDate: 'Nov 8, 2013',
    reviews: { positive: 95, count: '148,501' },
    price: 19.99,
    platforms: ['windows', 'mac', 'linux'],
  },
  {
    id: 'dmc5',
    title: 'Devil May Cry 5',
    basedOn: 'DmC: Devil May Cry',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=250&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=120&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=120&fit=crop',
      'https://images.unsplash.com/photo-1552820728-8b83bb6b2b04?w=200&h=120&fit=crop',
    ],
    tags: ['Action', 'Hack and Slash', 'Stylish', 'Great Soundtrack'],
    releaseDate: 'Mar 8, 2019',
    reviews: { positive: 94, count: '71,209' },
    price: 29.99,
    platforms: ['windows'],
  },
  {
    id: 'amongus',
    title: 'Among Us',
    basedOn: 'Fall Guys',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&h=250&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=200&h=120&fit=crop',
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&h=120&fit=crop',
      'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=200&h=120&fit=crop',
    ],
    tags: ['Multiplayer', 'Social Deduction', 'Party', 'Casual'],
    releaseDate: 'Nov 16, 2018',
    reviews: { positive: 93, count: '696,512' },
    price: 4.99,
    platforms: ['windows'],
  },
  {
    id: 'beatsaber',
    title: 'Beat Saber',
    basedOn: 'Synth Riders',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&h=250&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&h=120&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=120&fit=crop',
      'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=200&h=120&fit=crop',
    ],
    tags: ['VR Only', 'Rhythm', 'Music', 'Action'],
    releaseDate: 'May 21, 2019',
    reviews: { positive: 96, count: '56,400' },
    price: 29.99,
    platforms: ['windows'],
  },
];

export default function DiscoverPage() {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'windows': return <WindowsIcon className="w-3.5 h-3.5" />;
      case 'mac': return <MacIcon className="w-3.5 h-3.5" />;
      case 'linux': return <LinuxIcon className="w-3.5 h-3.5" />;
      case 'steamdeck': return <SteamDeckIcon className="w-3.5 h-3.5" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-bg-main">
      <StoreHeader />

      <main className="max-w-[1920px] mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary mb-2">Juxtopposed's Discovery Feed</h1>
          <p className="text-sm text-text-dim">
            Recommendations just for you, based on the games you or your friends own and play.
          </p>
        </div>

        {/* Recommendations */}
        <div className="space-y-6">
          {recommendations.map((game) => (
            <div
              key={game.id}
              className="bg-bg-highlight rounded-[--radius-lg] overflow-hidden hover:bg-bg-hover transition-colors"
            >
              <div className="flex">
                {/* Main Image & Screenshots */}
                <div className="w-[500px] flex-shrink-0 p-4">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-56 object-cover rounded-[--radius-md] mb-3"
                    loading="lazy"
                  />
                  <div className="flex gap-2">
                    {game.screenshots.map((ss, i) => (
                      <img
                        key={i}
                        src={ss}
                        alt={`${game.title} screenshot ${i + 1}`}
                        className="w-24 h-14 object-cover rounded-[--radius-sm] opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>

                {/* Game Details */}
                <div className="flex-1 p-4 flex flex-col">
                  <div>
                    <h2 className="text-xl font-bold text-text-main mb-1">{game.title}</h2>
                    <p className="text-xs text-text-dim mb-3">
                      Since you wish for <span className="text-primary">{game.basedOn}</span>
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {game.tags.map((tag) => (
                        <Badge key={tag} variant="default" size="sm">{tag}</Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      {game.platforms.map((p) => (
                        <span key={p} className="text-text-dim">
                          {getPlatformIcon(p)}
                        </span>
                      ))}
                      <span className="text-xs text-text-dim ml-2">{game.releaseDate}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs mb-4">
                      <div className={`flex items-center gap-1 ${game.reviews.positive >= 80 ? 'text-primary' : game.reviews.positive >= 70 ? 'text-accent-yellow' : 'text-accent-red'}`}>
                        <span className="font-medium">{game.reviews.positive}%</span>
                        <div className="w-16 h-1.5 bg-bg-main rounded-full overflow-hidden">
                          <div
                            className={`h-full ${game.reviews.positive >= 80 ? 'bg-primary' : game.reviews.positive >= 70 ? 'bg-accent-yellow' : 'bg-accent-red'}`}
                            style={{ width: `${game.reviews.positive}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-text-dim">{game.reviews.count} User Reviews</span>
                    </div>

                    <a href="#" className="text-xs text-text-dim hover:text-primary transition-colors">
                      Find more like this
                    </a>
                  </div>
                </div>

                {/* Actions */}
                <div className="w-40 p-4 flex flex-col items-end justify-between border-l border-bg-hover">
                  <div className="flex gap-2">
                    <Button variant="secondary" size="sm">Ignore</Button>
                    <Button variant="secondary" size="sm">Wishlist</Button>
                  </div>

                  <div className="text-right">
                    {game.discount && (
                      <div className="flex items-center gap-2 justify-end mb-1">
                        <Badge variant="success" size="sm">-{game.discount}%</Badge>
                        <span className="text-sm text-text-dim line-through">
                          ${game.originalPrice?.toFixed(2)}
                        </span>
                      </div>
                    )}
                    <span className="text-lg font-bold text-text-main">${game.price?.toFixed(2)}</span>
                    <div className="mt-2">
                      <Button variant="ghost" size="sm">Visit Store Page</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

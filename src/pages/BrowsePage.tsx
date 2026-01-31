import { useState } from 'react';
import { StoreHeader, Footer } from '../components/blocks';
import { SearchIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, WindowsIcon, MacIcon, LinuxIcon, SteamDeckIcon } from '../components/ui/Icons';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const categories = [
  { name: 'Action', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b04?w=200&h=120&fit=crop' },
  { name: 'RPG', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=120&fit=crop' },
  { name: 'Free-to-Play', image: 'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=200&h=120&fit=crop' },
  { name: 'Anime', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&h=120&fit=crop' },
  { name: 'Co-Op', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=120&fit=crop' },
  { name: 'Racing', image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=200&h=120&fit=crop' },
];

const tabs = ['All Items', 'New and Trending', 'Top Sellers', 'Top Rated', 'Discounted', 'Popular', 'Coming Soon', 'On Wishlist', 'Upcoming Events'];

const filters = [
  { label: 'FILTERS', items: [] },
  { label: 'Top-Level Genres', items: ['Action', 'Adventure', 'Casual', 'Indie', 'RPG', 'Simulation', 'Sports', 'Strategy'], expanded: true },
  { label: 'Genre', items: ['Early Access', 'Free to Play', 'MMO', 'Racing', 'Sports', 'VR'] },
  { label: 'Games', items: ['Single-player', 'Multi-player', 'Co-op', 'Online Co-op', 'PvP'] },
  { label: 'Sub-genres', items: ['Roguelike', 'Metroidvania', 'JRPG', 'Souls-like', 'Battle Royale'] },
  { label: 'Visuals & Viewpoint', items: ['First-Person', 'Third-Person', '2D', '3D', 'Isometric', 'Pixel Graphics'] },
  { label: 'Themes & Moods', items: ['Sci-Fi', 'Fantasy', 'Horror', 'Historical', 'Anime'] },
  { label: 'Features', items: ['Achievements', 'Trading Cards', 'Workshop', 'Cloud Saves', 'Controller Support'] },
  { label: 'Players', items: ['Single Player', 'Online Multi-Player', 'Local Multi-Player'] },
  { label: 'Platform', items: ['Windows', 'macOS', 'Linux', 'Steam Deck'] },
  { label: 'Language', items: ['English', 'Spanish', 'French', 'German', 'Japanese', 'Korean', 'Chinese'] },
  { label: 'Price', items: ['Free', 'Under $5', 'Under $10', 'Under $20', '$20 and above'] },
  { label: 'Achievements', items: ['Has Achievements', 'No Achievements'] },
  { label: 'Trading Cards', items: ['Has Trading Cards', 'No Trading Cards'] },
  { label: 'Item', items: ['Has Items', 'No Items'] },
];

const browseGames = [
  {
    id: 'fallout4',
    title: 'Fallout 4',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=460&h=215&fit=crop',
    tags: ['Post-Apocalyptic', 'Open World', 'RPG', 'Survival'],
    releaseDate: 'Nov 10, 2015',
    reviews: { positive: 87, count: '185,000' },
    originalPrice: 19.99,
    price: 4.99,
    discount: 75,
    platforms: ['windows'],
  },
  {
    id: 'division2',
    title: "Tom Clancy's The Division® 2",
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b04?w=460&h=215&fit=crop',
    tags: ['Looter Shooter', 'Open World', 'Co-op', 'Third-Person'],
    releaseDate: 'Jul 12, 2023',
    reviews: { positive: 84, count: '8,000' },
    price: 29.99,
    platforms: ['windows'],
  },
  {
    id: 'remnant2',
    title: 'Remnant II',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=460&h=215&fit=crop',
    tags: ['Souls-like', 'Co-op', 'Third-Person Shooter', 'Action'],
    releaseDate: 'Apr 4, 2023',
    reviews: { positive: 92, count: '22,000' },
    price: 49.99,
    platforms: ['windows'],
  },
  {
    id: 'falloutvr',
    title: 'Fallout VR',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=460&h=215&fit=crop',
    tags: ['VR', 'Open World', 'Post-Apocalyptic', 'RPG'],
    releaseDate: 'Dec 12, 2017',
    reviews: { positive: 65, count: '4,500' },
    originalPrice: 59.99,
    price: 14.99,
    discount: 75,
    platforms: ['windows'],
  },
  {
    id: 'skibidi',
    title: 'Skibidi Toilet Hero',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=460&h=215&fit=crop',
    tags: ['Meme', 'Action', 'Comedy', 'Casual'],
    releaseDate: 'Q4 2024',
    reviews: null,
    price: null,
    comingSoon: true,
    platforms: ['windows'],
  },
  {
    id: 'borderlands2',
    title: 'Borderlands 2',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=460&h=215&fit=crop',
    tags: ['Looter Shooter', 'FPS', 'Co-op', 'Comedy'],
    releaseDate: 'Sep 18, 2012',
    reviews: { positive: 96, count: '145,000' },
    price: 19.99,
    platforms: ['windows', 'mac', 'linux'],
  },
  {
    id: 'outerworlds',
    title: 'The Outer Worlds',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=460&h=215&fit=crop',
    tags: ['RPG', 'Sci-Fi', 'Single-player', 'FPS'],
    releaseDate: 'Oct 25, 2020',
    reviews: { positive: 89, count: '28,000' },
    price: 29.99,
    platforms: ['windows'],
  },
];

export default function BrowsePage() {
  const [activeTab, setActiveTab] = useState('All Items');
  const [expandedFilters, setExpandedFilters] = useState<string[]>(['Top-Level Genres']);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleFilter = (label: string) => {
    setExpandedFilters(prev =>
      prev.includes(label) ? prev.filter(f => f !== label) : [...prev, label]
    );
  };

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
        {/* Top Categories */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-text-main mb-4">Top Categories</h2>
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-bg-main/80 rounded-full flex items-center justify-center text-text-main hover:bg-bg-hover transition-colors">
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide px-12">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="relative flex-shrink-0 w-40 h-24 rounded-[--radius-md] overflow-hidden cursor-pointer group"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute bottom-2 left-3 text-sm font-medium text-text-main">
                    {cat.name}
                  </span>
                </div>
              ))}
            </div>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-bg-main/80 rounded-full flex items-center justify-center text-text-main hover:bg-bg-hover transition-colors">
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Browse Steam */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-text-main">Browse Steam</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-text-dim">View</span>
              <button className="p-2 bg-bg-hover text-text-main rounded-[--radius-sm]">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <rect x="1" y="1" width="6" height="6" rx="1"/>
                  <rect x="9" y="1" width="6" height="6" rx="1"/>
                  <rect x="1" y="9" width="6" height="6" rx="1"/>
                  <rect x="9" y="9" width="6" height="6" rx="1"/>
                </svg>
              </button>
              <button className="p-2 text-text-dim hover:text-text-main rounded-[--radius-sm] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <rect x="1" y="2" width="14" height="3" rx="1"/>
                  <rect x="1" y="7" width="14" height="3" rx="1"/>
                  <rect x="1" y="12" width="14" height="3" rx="1"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-[--radius-sm] transition-colors ${
                  activeTab === tab
                    ? 'bg-bg-hover text-text-main'
                    : 'text-text-dim hover:text-text-main'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex gap-6">
            {/* Filters Sidebar */}
            <aside className="w-56 flex-shrink-0">
              <div className="bg-bg-highlight rounded-[--radius-md] p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-text-main">FILTERS</span>
                  <button className="text-text-dim hover:text-text-main">
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4L12 12M12 4L4 12"/>
                    </svg>
                  </button>
                </div>

                <div className="mb-4">
                  <Input
                    placeholder="Search by name or tag"
                    icon={<SearchIcon className="w-4 h-4" />}
                    className="text-xs py-1.5"
                  />
                </div>

                <div className="space-y-2">
                  {filters.slice(1).map((filter) => (
                    <div key={filter.label}>
                      <button
                        onClick={() => toggleFilter(filter.label)}
                        className="w-full flex items-center justify-between py-2 text-sm text-text-main hover:text-primary transition-colors"
                      >
                        <span>{filter.label}</span>
                        <ChevronDownIcon
                          className={`w-4 h-4 transition-transform ${
                            expandedFilters.includes(filter.label) ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {expandedFilters.includes(filter.label) && (
                        <div className="pl-2 space-y-1 mb-2">
                          {filter.items.map((item) => (
                            <label
                              key={item}
                              className="flex items-center gap-2 py-1 text-xs text-text-dim hover:text-text-main cursor-pointer"
                            >
                              <input type="checkbox" className="rounded" />
                              <span>{item}</span>
                              <span className="ml-auto text-text-dim">0</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Game List */}
            <div className="flex-1">
              <div className="space-y-3">
                {browseGames.map((game) => (
                  <div
                    key={game.id}
                    className="flex bg-bg-highlight rounded-[--radius-md] overflow-hidden hover:bg-bg-hover transition-colors cursor-pointer"
                  >
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-64 h-32 object-cover flex-shrink-0"
                      loading="lazy"
                    />
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {game.platforms.map((p) => (
                            <span key={p} className="text-text-dim">
                              {getPlatformIcon(p)}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-lg font-medium text-text-main mb-2">{game.title}</h3>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {game.tags.slice(0, 4).map((tag) => (
                            <Badge key={tag} variant="default" size="sm">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-text-dim">
                        <span>{game.releaseDate}</span>
                        {game.reviews && (
                          <>
                            <span>•</span>
                            <span className={game.reviews.positive >= 80 ? 'text-primary' : 'text-text-dim'}>
                              {game.reviews.positive}% • {game.reviews.count} User Reviews
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-center p-4 gap-2">
                      {game.comingSoon ? (
                        <span className="text-sm text-text-dim">Coming Soon</span>
                      ) : (
                        <>
                          {game.discount && (
                            <div className="flex items-center gap-2">
                              <Badge variant="success" size="sm">-{game.discount}%</Badge>
                              <span className="text-sm text-text-dim line-through">
                                ${game.originalPrice?.toFixed(2)}
                              </span>
                            </div>
                          )}
                          <span className="text-lg font-bold text-text-main">
                            ${game.price?.toFixed(2)}
                          </span>
                          <Button variant="accent" size="sm">Add to Cart</Button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-end gap-2 mt-6">
                <button className="px-3 py-1.5 text-sm bg-bg-highlight text-text-dim rounded-[--radius-sm] hover:bg-bg-hover transition-colors">
                  Prev
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 text-sm rounded-[--radius-sm] transition-colors ${
                      currentPage === page
                        ? 'bg-primary text-bg-main'
                        : 'bg-bg-highlight text-text-dim hover:bg-bg-hover'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <span className="text-text-dim mx-1">...</span>
                <button className="px-3 py-1.5 text-sm bg-bg-highlight text-text-dim rounded-[--radius-sm] hover:bg-bg-hover transition-colors">
                  10
                </button>
                <button className="px-3 py-1.5 text-sm bg-bg-highlight text-text-dim rounded-[--radius-sm] hover:bg-bg-hover transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { useState } from 'react';
import { StoreHeader, Footer } from '../components/blocks';
import { PointsIcon } from '../components/ui/Icons';
import Badge from '../components/ui/Badge';

const categories = [
  {
    title: 'Featured',
    items: ['Featured Items', 'First-Run Games', 'Free Daily and Weekly Items', 'Bundles'],
  },
  {
    title: 'Interface',
    items: ['Keyboard', 'Startup Movies', 'Avatars'],
  },
  {
    title: 'Profile',
    items: ['Avatars', 'Backgrounds', 'Community Awards', 'Seasonal Badges', 'Game Profiles', 'Showcases'],
  },
  {
    title: 'Chat',
    items: ['Animated Stickers', 'Chat Effects', 'Emoticons'],
  },
];

const shopItems = [
  {
    id: 1,
    name: 'Greenhouse of Horror',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=180&fit=crop',
    points: 5000,
    game: 'Dead by Daylight',
    type: 'Profile Background',
  },
  {
    id: 2,
    name: 'Greenhouse of Horror',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b04?w=300&h=180&fit=crop',
    points: 5000,
    game: 'Dead by Daylight',
    type: 'Avatar Frame',
  },
  {
    id: 3,
    name: 'Greenhouse of Horror',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=180&fit=crop',
    points: 5000,
    game: 'Dead by Daylight',
    type: 'Animated Avatar',
  },
  {
    id: 4,
    name: 'Greenhouse of Horror',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=300&h=180&fit=crop',
    points: 5000,
    game: 'Dead by Daylight',
    type: 'Emoticon Pack',
  },
];

const tabs = ['How it works', 'History', 'My Profile'];

export default function PointShopPage() {
  const [activeTab, setActiveTab] = useState('How it works');
  const [selectedCategory, setSelectedCategory] = useState('Featured Items');
  const userPoints = 2500;

  return (
    <div className="min-h-screen bg-bg-main">
      <StoreHeader />

      <main className="max-w-[1920px] mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-text-main mb-2">Buy Games, Earn Points</h1>
            <p className="text-sm text-text-dim">
              Customize your Steam experience with Points Shop items.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm transition-colors ${
                    activeTab === tab
                      ? 'text-text-main'
                      : 'text-text-dim hover:text-text-main'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-2 bg-bg-highlight px-4 py-2 rounded-[--radius-md]">
              <PointsIcon className="w-5 h-5 text-primary" />
              <span className="text-lg font-bold text-text-main">{userPoints.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-56 flex-shrink-0">
            <div className="space-y-6">
              {categories.map((category) => (
                <div key={category.title}>
                  <h3 className="text-xs font-medium text-text-dim uppercase tracking-wider mb-2">
                    {category.title}
                  </h3>
                  <div className="space-y-1">
                    {category.items.map((item) => (
                      <button
                        key={item}
                        onClick={() => setSelectedCategory(item)}
                        className={`w-full text-left px-3 py-2 text-sm rounded-[--radius-sm] transition-colors ${
                          selectedCategory === item
                            ? 'bg-primary text-bg-main'
                            : 'text-text-dim hover:text-text-main hover:bg-bg-hover'
                        }`}
                      >
                        {item}
                        <span className="float-right opacity-50">0</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1">
            {/* Featured Banner */}
            <div className="bg-bg-highlight rounded-[--radius-lg] p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-text-main">Steam Scream 2023 Items</h2>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {shopItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-bg-main rounded-[--radius-md] overflow-hidden hover:bg-bg-hover transition-colors cursor-pointer group"
                  >
                    <div className="relative aspect-video">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-medium text-text-main mb-1 truncate">{item.name}</h3>
                      <p className="text-xs text-text-dim mb-2">{item.game}</p>
                      <div className="flex items-center gap-1">
                        <PointsIcon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-text-main">{item.points.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* More Items */}
            <div>
              <h2 className="text-lg font-semibold text-text-main mb-4">All Items</h2>
              <div className="grid grid-cols-5 gap-4">
                {[...shopItems, ...shopItems, ...shopItems].slice(0, 10).map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    className="bg-bg-highlight rounded-[--radius-md] overflow-hidden hover:bg-bg-hover transition-colors cursor-pointer group"
                  >
                    <div className="relative aspect-video">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <Badge variant="default" size="sm" className="absolute top-2 left-2">
                        {item.type}
                      </Badge>
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-medium text-text-main mb-1 truncate">{item.name}</h3>
                      <div className="flex items-center gap-1">
                        <PointsIcon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-text-main">{item.points.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

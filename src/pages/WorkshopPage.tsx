import { useState } from 'react';
import { CommunityHeader, Footer } from '../components/blocks';
import { SearchIcon, StarIcon } from '../components/ui/Icons';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const tabs = ['Most Recent', 'Alphabetical', 'My Games', 'My Subscriptions'];

const workshopGames = [
  {
    id: 'stellaris',
    name: 'Stellaris',
    items: [
      {
        id: 1,
        name: 'Planetary Diversity',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=120&fit=crop',
        rating: 5,
        subscriptions: '2.5M',
      },
      {
        id: 2,
        name: 'ST: New Horizons',
        image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b04?w=200&h=120&fit=crop',
        rating: 5,
        subscriptions: '1.8M',
      },
      {
        id: 3,
        name: 'UI Overhaul Dynamic',
        image: 'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=200&h=120&fit=crop',
        rating: 5,
        subscriptions: '3.2M',
      },
    ],
    totalItems: 999,
  },
  {
    id: 'tf2',
    name: 'Team Fortress 2',
    items: [
      {
        id: 4,
        name: 'Frosty',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=120&fit=crop',
        rating: 4,
        subscriptions: '890K',
      },
      {
        id: 5,
        name: 'Steambase',
        image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&h=120&fit=crop',
        rating: 4,
        subscriptions: '567K',
      },
      {
        id: 6,
        name: 'Gorge_event',
        image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=200&h=120&fit=crop',
        rating: 4,
        subscriptions: '1.2M',
      },
    ],
    totalItems: 500,
  },
];

export default function WorkshopPage() {
  const [activeTab, setActiveTab] = useState('Most Recent');
  const [currentPage, setCurrentPage] = useState(1);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon
            key={star}
            className={`w-3 h-3 ${star <= rating ? 'text-accent-yellow fill-accent-yellow' : 'text-text-dim'}`}
            filled={star <= rating}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-bg-main">
      <CommunityHeader />

      <main className="max-w-[1920px] mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-text-main mb-2">Welcome to the Steam Workshop</h1>
          <p className="text-sm text-text-dim mb-6">
            Create, discover, and download content for your games.
          </p>
          <Button variant="secondary">Workshop Updates</Button>
        </div>

        {/* Tabs & Search */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
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
          <div className="w-64">
            <Input
              placeholder="Search games..."
              icon={<SearchIcon className="w-4 h-4" />}
              className="text-sm py-1.5"
            />
          </div>
        </div>

        {/* Workshop Games */}
        <div className="space-y-8">
          {workshopGames.map((game) => (
            <section key={game.id} className="bg-bg-highlight rounded-[--radius-lg] p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-text-main">{game.name}</h2>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-text-dim">{game.totalItems} items</span>
                  <Button variant="ghost" size="sm">See All</Button>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {game.items.map((item) => (
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
                      <h3 className="text-sm font-medium text-text-main mb-2 truncate">{item.name}</h3>
                      <div className="flex items-center justify-between">
                        {renderStars(item.rating)}
                        <span className="text-xs text-text-dim">{item.subscriptions}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
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
            20
          </button>
          <button className="px-3 py-1.5 text-sm bg-bg-highlight text-text-dim rounded-[--radius-sm] hover:bg-bg-hover transition-colors">
            Next
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import { useState } from 'react';
import { StoreHeader, Footer } from '../components/blocks';
import { SearchIcon, FilterIcon, GridIcon, ListIcon, TrashIcon, CartIcon } from '../components/ui/Icons';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { featuredGames, specialOffers, newReleases } from '../data/games';

const wishlistGames = [...featuredGames, ...specialOffers, ...newReleases];

export default function WishlistPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [sortBy, setSortBy] = useState('dateAdded');

  return (
    <div className="min-h-screen bg-bg-main">
      <StoreHeader />

      <main className="max-w-[1920px] mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-text-main">Wishlist</h1>
            <p className="text-sm text-text-dim mt-1">{wishlistGames.length} games on your wishlist</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-64">
              <Input
                placeholder="Search wishlist..."
                icon={<SearchIcon className="w-4 h-4" />}
                className="text-sm"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-bg-highlight border border-bg-hover rounded-[--radius-sm] text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="dateAdded">Date Added</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="discount">Discount</option>
            </select>
            <div className="flex items-center gap-1 bg-bg-highlight rounded-[--radius-sm] p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-[--radius-sm] transition-colors ${
                  viewMode === 'grid' ? 'bg-bg-hover text-text-main' : 'text-text-dim hover:text-text-main'
                }`}
              >
                <GridIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-[--radius-sm] transition-colors ${
                  viewMode === 'list' ? 'bg-bg-hover text-text-main' : 'text-text-dim hover:text-text-main'
                }`}
              >
                <ListIcon className="w-4 h-4" />
              </button>
            </div>
            <button className="p-2 bg-bg-highlight border border-bg-hover rounded-[--radius-sm] text-text-dim hover:text-text-main transition-colors">
              <FilterIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Wishlist Items */}
        {viewMode === 'list' ? (
          <div className="space-y-2">
            {wishlistGames.map((game, index) => (
              <div
                key={`${game.id}-${index}`}
                className="flex items-center gap-4 p-4 bg-bg-highlight rounded-[--radius-md] hover:bg-bg-hover transition-colors group"
              >
                <span className="w-6 text-center text-sm text-text-dim">{index + 1}</span>
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-32 h-16 object-cover rounded-[--radius-sm]"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium text-text-main group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {game.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="default" size="sm">{tag}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  {game.discount && (
                    <Badge variant="success" size="md">-{game.discount}%</Badge>
                  )}
                  <div className="text-right min-w-[80px]">
                    {game.originalPrice && (
                      <div className="text-sm text-text-dim line-through">
                        ${game.originalPrice.toFixed(2)}
                      </div>
                    )}
                    <div className="text-lg font-semibold text-text-main">
                      {game.price === 0 ? 'Free' : `$${game.price?.toFixed(2)}`}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="primary" size="sm">
                      <CartIcon className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                    <button className="p-2 text-text-dim hover:text-accent-red transition-colors">
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-4">
            {wishlistGames.map((game, index) => (
              <div
                key={`${game.id}-${index}`}
                className="bg-bg-highlight rounded-[--radius-md] overflow-hidden hover:bg-bg-hover transition-colors group"
              >
                <div className="relative aspect-[16/9]">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute top-2 right-2 p-2 bg-bg-main/80 rounded-full text-text-dim hover:text-accent-red transition-colors opacity-0 group-hover:opacity-100">
                    <TrashIcon className="w-4 h-4" />
                  </button>
                  {game.discount && (
                    <Badge variant="success" className="absolute bottom-2 left-2">
                      -{game.discount}%
                    </Badge>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium text-text-main truncate group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    {game.originalPrice && (
                      <span className="text-xs text-text-dim line-through">
                        ${game.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-sm font-semibold text-text-main">
                      {game.price === 0 ? 'Free' : `$${game.price?.toFixed(2)}`}
                    </span>
                  </div>
                  <Button variant="primary" size="sm" fullWidth className="mt-2">
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

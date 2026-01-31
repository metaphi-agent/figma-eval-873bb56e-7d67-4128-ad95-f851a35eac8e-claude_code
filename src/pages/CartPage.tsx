import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreHeader, Footer, GameCard } from '../components/blocks';
import { TrashIcon } from '../components/ui/Icons';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { featuredGames } from '../data/games';

interface CartItem {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  platform: 'windows' | 'mac' | 'linux';
}

const initialCartItems: CartItem[] = [
  {
    id: 'elden-ring',
    title: 'Elden Ring',
    image: './assets/images/elden-ring.jpg',
    price: 23.09,
    originalPrice: 34.99,
    discount: 34,
    platform: 'windows',
  },
  {
    id: 'elden-ring-dlc',
    title: 'Elden Ring',
    image: './assets/images/elden-ring.jpg',
    price: 34.99,
    platform: 'windows',
  },
  {
    id: 'elden-ring-deluxe',
    title: 'Elden Ring',
    image: './assets/images/elden-ring.jpg',
    price: 15.99,
    originalPrice: 24.99,
    discount: 36,
    platform: 'windows',
  },
];

const suggestedDLCs = featuredGames.slice(0, 2);

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-bg-main">
      <StoreHeader />

      <main className="max-w-[1920px] mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-text-main mb-6">
          Juxtopposed's Shopping Cart
        </h1>

        <div className="grid grid-cols-[1fr_350px] gap-8">
          {/* Cart Items */}
          <div className="space-y-4">
            <div className="bg-bg-highlight rounded-[--radius-lg] overflow-hidden">
              {cartItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center gap-4 p-4 border-b border-bg-hover last:border-0"
                >
                  <Link to={`/store/game/${item.id}`} className="shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-14 object-cover rounded-[--radius-sm]"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/store/game/${item.id}`}
                      className="text-base font-medium text-text-main hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                    <div className="flex items-center gap-2 mt-1">
                      <svg className="w-4 h-4 text-text-dim" viewBox="0 0 16 16" fill="currentColor">
                        <rect x="2" y="2" width="12" height="12" rx="1"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {item.originalPrice && (
                      <span className="text-sm text-text-dim line-through">
                        ${item.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-lg font-semibold text-text-main">
                      ${item.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-text-dim hover:text-accent-red transition-colors"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Total */}
              <div className="flex items-center justify-between p-4 bg-bg-hover">
                <span className="text-base text-text-main">
                  Estimated total<sup className="text-xs text-text-dim ml-1">1</sup>
                </span>
                <span className="text-xl font-bold text-text-main">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <Button variant="secondary" size="lg">
                Continue Shopping
              </Button>
              <Button variant="primary" size="lg">
                Purchase as a Gift
              </Button>
              <Button variant="accent" size="lg">
                Purchase for Myself
              </Button>
            </div>
          </div>

          {/* Sidebar - DLCs suggestion */}
          <div>
            <h2 className="text-lg font-semibold text-text-main mb-4">
              DLCs you might be interested in
            </h2>
            <div className="space-y-4">
              {suggestedDLCs.map((game) => (
                <div key={game.id} className="bg-bg-highlight rounded-[--radius-md] overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    loading="lazy"
                    className="w-full aspect-video object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-base font-medium text-text-main">{game.title}</h3>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        {game.discount && (
                          <Badge variant="success">-{game.discount}%</Badge>
                        )}
                        {game.originalPrice && (
                          <span className="text-sm text-text-dim line-through">
                            ${game.originalPrice.toFixed(2)}
                          </span>
                        )}
                        <span className="text-base font-semibold text-text-main">
                          ${game.price?.toFixed(2)}
                        </span>
                      </div>
                      <button className="p-1 text-text-dim hover:text-accent-red transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17.367 3.842C15.9 2.375 13.5 2.375 12.033 3.842L10 5.875L7.967 3.842C6.5 2.375 4.1 2.375 2.633 3.842C1.167 5.308 1.167 7.708 2.633 9.175L10 16.542L17.367 9.175C18.833 7.708 18.833 5.308 17.367 3.842Z"/>
                        </svg>
                      </button>
                    </div>
                    <Button variant="primary" size="sm" className="w-full mt-3">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

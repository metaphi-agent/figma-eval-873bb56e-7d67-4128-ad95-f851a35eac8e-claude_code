import StoreNav from '../components/blocks/StoreNav'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list')
  const [sortBy, setSortBy] = useState('date-added')

  const wishlistItems = [
    {
      title: 'Elden Ring',
      price: 9.99,
      originalPrice: null,
      discount: null,
      rating: 90,
      reviews: '134,370',
      releaseDate: 'May 16, 2011',
      tags: ['Souls-like', 'Adventure', 'Open-world', 'RPG', 'Dark Fantasy']
    },
    {
      title: 'Grim Dawn',
      price: 24.99,
      originalPrice: null,
      discount: null,
      rating: 90,
      reviews: '72,000',
      releaseDate: 'Feb 25, 2016',
      tags: ['Action RPG', 'Hack and Slash', 'Dark Fantasy', 'RPG']
    },
    {
      title: 'DmC: Devil May Cry',
      price: 7.49,
      originalPrice: 29.99,
      discount: 75,
      rating: 90,
      reviews: '16,000',
      releaseDate: 'Jan 24, 2013',
      tags: ['Action', 'Hack and Slash', 'Great Soundtrack', 'Gore']
    },
    {
      title: 'Elden Ring',
      price: 23.09,
      originalPrice: 34.99,
      discount: 34,
      rating: 90,
      reviews: '634,370',
      releaseDate: '25 Feb 2022',
      tags: ['Souls-like', 'RPG', 'Dark Fantasy', 'Open-world']
    }
  ]

  return (
    <div>
      <StoreNav />

      <div className="bg-gradient-to-b from-[#1b2838] to-[#0e1417] min-h-screen">
        <div className="container mx-auto px-8 py-8">
          <div className="flex gap-8">
            {/* Left Sidebar: Filters */}
            <div className="w-64 shrink-0">
              <div className="bg-[#23262e] rounded-lg p-4 sticky top-24">
                <h2 className="text-lg font-bold mb-4">FILTERS</h2>

                {/* Search */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search by name or tag"
                    className="w-full bg-[#1b2838] text-[--color-text-main] px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                  />
                </div>

                {/* Quick Filters */}
                <div className="space-y-2 mb-4">
                  {['Souls-like', 'Adventure', 'RPG', 'Action'].map((tag) => (
                    <button
                      key={tag}
                      className="w-full text-left px-3 py-2 bg-[#1b2838] text-[--color-text-dim] text-sm rounded hover:bg-[--color-bg-hover] transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                {/* Type Filter */}
                <div className="mb-4">
                  <button className="w-full flex items-center justify-between text-left py-2 text-sm font-medium">
                    <span>Type</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 8l5 5 5-5H5z" />
                    </svg>
                  </button>
                  <div className="pl-4 space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[--color-text-dim]">All Types</span>
                      <span className="text-[--color-text-dim]">20</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[--color-text-dim]">Games</span>
                      <span className="text-[--color-text-dim]">14</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[--color-text-dim]">Software</span>
                      <span className="text-[--color-text-dim]">12</span>
                    </div>
                  </div>
                </div>

                {/* Platform Filter */}
                <div className="mb-4">
                  <button className="w-full flex items-center justify-between text-left py-2 text-sm font-medium">
                    <span>Platform</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 8l5 5 5-5H5z" />
                    </svg>
                  </button>
                </div>

                {/* Price Filter */}
                <div className="mb-4">
                  <button className="w-full flex items-center justify-between text-left py-2 text-sm font-medium">
                    <span>Price</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 8l5 5 5-5H5z" />
                    </svg>
                  </button>
                </div>

                {/* Discount Filter */}
                <div className="mb-4">
                  <button className="w-full flex items-center justify-between text-left py-2 text-sm font-medium">
                    <span>Discount</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 8l5 5 5-5H5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Wishlist Items */}
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">Juxtopposed's Wishlist</h1>
                <Link to="/profile" className="text-[--color-primary] hover:underline text-sm">
                  Steam Profile
                </Link>
              </div>

              {/* View Controls */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[--color-text-dim]">View:</span>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-[--color-bg-highlight]' : 'bg-[#23262e]'}`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4h14M3 8h14M3 12h14M3 16h14" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[--color-bg-highlight]' : 'bg-[#23262e]'}`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <rect x="2" y="2" width="7" height="7" />
                      <rect x="11" y="2" width="7" height="7" />
                      <rect x="2" y="11" width="7" height="7" />
                      <rect x="11" y="11" width="7" height="7" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[--color-text-dim]">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-[#23262e] text-[--color-text-main] px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                    >
                      <option value="date-added">Date added</option>
                      <option value="name">Name</option>
                      <option value="price">Price</option>
                      <option value="discount">Discount</option>
                      <option value="rating">Review Score</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Wishlist Items */}
              <div className="space-y-4">
                {wishlistItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#23262e] rounded-lg p-4 flex gap-4 hover:bg-[#2a323c] transition-all"
                  >
                    <button className="text-[--color-text-dim] hover:text-white shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    <div className="w-48 h-28 bg-[#1b2838] rounded overflow-hidden shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900"></div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <div className="flex items-center gap-4 mb-3 text-sm">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-[--color-primary]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-[--color-primary]">{item.rating}%</span>
                          <span className="text-[--color-text-dim]">{item.reviews} User Reviews</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-[--color-text-dim] mb-3">
                        <span>{item.releaseDate}</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-[#1b2838] text-[--color-text-dim] text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between shrink-0">
                      <button className="text-[--color-text-dim] hover:text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>

                      <div className="text-right">
                        {item.discount && (
                          <>
                            <div className="bg-[--color-accent-green] text-white px-2 py-1 rounded text-sm font-bold inline-block mb-2">
                              -{item.discount}%
                            </div>
                            <div className="text-sm text-[--color-text-dim] line-through">
                              ${item.originalPrice?.toFixed(2)}
                            </div>
                          </>
                        )}
                        <div className="text-xl font-bold text-[--color-accent-green] mb-3">
                          ${item.price.toFixed(2)}
                        </div>

                        <button className="px-6 py-2 bg-[--color-accent-green] text-white font-bold rounded hover:bg-[--color-accent-green-hi] transition-colors whitespace-nowrap">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist

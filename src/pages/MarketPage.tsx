import { useState } from 'react';
import { CommunityHeader, Footer } from '../components/blocks';
import { SearchIcon, ChevronDownIcon, EditIcon } from '../components/ui/Icons';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const myListings = [
  {
    id: 1,
    name: 'Fracture Case',
    game: 'Counter-Strike 2',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=80&h=80&fit=crop',
    listedOn: '21 Aug',
    price: 0.84,
    lastSold: 0.52,
  },
  {
    id: 2,
    name: 'Fracture Case',
    game: 'Counter-Strike 2',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=80&h=80&fit=crop',
    listedOn: '21 Aug',
    price: 0.84,
    lastSold: 0.74,
  },
];

const marketItems = [
  {
    id: 1,
    name: 'Fracture Case',
    game: 'Counter-Strike 2',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=80&h=80&fit=crop',
    quantity: 190000,
    price: 0.84,
    priceChange: 40,
  },
  {
    id: 2,
    name: 'Fracture Case',
    game: 'Counter-Strike 2',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b04?w=80&h=80&fit=crop',
    quantity: 190000,
    price: 0.84,
    priceChange: -40,
  },
  {
    id: 3,
    name: 'Fracture Case',
    game: 'Counter-Strike 2',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=80&h=80&fit=crop',
    quantity: 190000,
    price: 0.84,
    priceChange: 40,
  },
  {
    id: 4,
    name: 'Fracture Case',
    game: 'Counter-Strike 2',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=80&h=80&fit=crop',
    quantity: 190000,
    price: 0.84,
    priceChange: -12,
  },
  {
    id: 5,
    name: 'Fracture Case',
    game: 'Counter-Strike 2',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=80&h=80&fit=crop',
    quantity: 190000,
    price: 0.84,
    priceChange: 40,
  },
  {
    id: 6,
    name: 'Fracture Case',
    game: 'Counter-Strike 2',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=80&h=80&fit=crop',
    quantity: 190000,
    price: 0.84,
    priceChange: 40,
  },
];

const typeFilters = [
  { label: 'All', count: 5000 },
  { label: 'Trading Card', count: 5000 },
  { label: 'Case', count: 5000 },
  { label: 'Key', count: 5000 },
  { label: 'Diplomacy', count: 5000 },
  { label: 'Economy', count: 5000 },
  { label: 'Events', count: 5000 },
];

const myTabs = ['My Active Sell Listings', 'My Active Buy Orders', 'My Market History'];
const marketTabs = ['Popular Items', 'Newly Listed', 'Recently Sold'];

export default function MarketPage() {
  const [activeMyTab, setActiveMyTab] = useState('My Active Sell Listings');
  const [activeMarketTab, setActiveMarketTab] = useState('Popular Items');
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedFilter, setExpandedFilter] = useState(true);

  return (
    <div className="min-h-screen bg-bg-main">
      <CommunityHeader />

      <main className="max-w-[1920px] mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-text-main mb-2">Steam Market</h1>
            <p className="text-sm text-text-dim">
              Buy and sell items with community members for Steam Wallet funds.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="secondary">View Inventory</Button>
            <Button variant="accent">Sell an Item</Button>
          </div>
        </div>

        {/* My Listings Section */}
        <section className="mb-8">
          <div className="bg-bg-highlight rounded-[--radius-lg] overflow-hidden">
            {/* My Tabs */}
            <div className="flex items-center gap-2 p-4 border-b border-bg-hover">
              {myTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveMyTab(tab)}
                  className={`px-4 py-2 text-sm font-medium rounded-[--radius-sm] transition-colors ${
                    activeMyTab === tab
                      ? 'bg-bg-hover text-text-main'
                      : 'text-text-dim hover:text-text-main'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <div className="ml-auto">
                <Input
                  placeholder="Search..."
                  icon={<SearchIcon className="w-4 h-4" />}
                  className="text-sm py-1.5 w-48"
                />
              </div>
            </div>

            {/* My Listings Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-text-dim border-b border-bg-hover">
                    <th className="px-4 py-3 font-medium">Name</th>
                    <th className="px-4 py-3 font-medium">Listed on</th>
                    <th className="px-4 py-3 font-medium">Price</th>
                    <th className="px-4 py-3 font-medium">Last Sold</th>
                    <th className="px-4 py-3 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {myListings.map((item) => (
                    <tr key={item.id} className="border-b border-bg-hover hover:bg-bg-hover transition-colors">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 rounded-[--radius-sm] object-cover"
                          />
                          <div>
                            <div className="text-sm font-medium text-text-main">{item.name}</div>
                            <div className="text-xs text-text-dim">{item.game}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-text-dim">{item.listedOn}</td>
                      <td className="px-4 py-4 text-sm text-text-main">${item.price.toFixed(2)} USD</td>
                      <td className="px-4 py-4 text-sm text-text-main">${item.lastSold.toFixed(2)} USD</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <Button variant="secondary" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm">Cancel</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Browse Market Section */}
        <section>
          <div className="flex gap-6">
            {/* Filters Sidebar */}
            <aside className="w-56 flex-shrink-0">
              <div className="bg-bg-highlight rounded-[--radius-md] p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-text-main">FILTER BY GAME</span>
                  <button className="text-text-dim hover:text-text-main">
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4L12 12M12 4L4 12"/>
                    </svg>
                  </button>
                </div>

                <div className="mb-4">
                  <Input
                    placeholder="Search for a game..."
                    icon={<SearchIcon className="w-4 h-4" />}
                    className="text-xs py-1.5"
                  />
                </div>

                <div>
                  <button
                    onClick={() => setExpandedFilter(!expandedFilter)}
                    className="w-full flex items-center justify-between py-2 text-sm text-text-main hover:text-primary transition-colors"
                  >
                    <span>Type</span>
                    <ChevronDownIcon
                      className={`w-4 h-4 transition-transform ${expandedFilter ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedFilter && (
                    <div className="pl-2 space-y-1 mb-2">
                      {typeFilters.map((filter) => (
                        <label
                          key={filter.label}
                          className="flex items-center gap-2 py-1 text-xs text-text-dim hover:text-text-main cursor-pointer"
                        >
                          <input type="checkbox" className="rounded" defaultChecked={filter.label === 'All'} />
                          <span>{filter.label}</span>
                          <span className="ml-auto text-text-dim">{filter.count.toLocaleString()}</span>
                        </label>
                      ))}
                      <button className="text-xs text-primary hover:underline mt-2">See more</button>
                    </div>
                  )}
                </div>
              </div>
            </aside>

            {/* Market Items */}
            <div className="flex-1">
              <div className="bg-bg-highlight rounded-[--radius-lg] overflow-hidden">
                {/* Market Tabs */}
                <div className="flex items-center gap-2 p-4 border-b border-bg-hover">
                  {marketTabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveMarketTab(tab)}
                      className={`px-4 py-2 text-sm font-medium rounded-[--radius-sm] transition-colors ${
                        activeMarketTab === tab
                          ? 'bg-bg-hover text-text-main'
                          : 'text-text-dim hover:text-text-main'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                  <div className="ml-auto">
                    <Input
                      placeholder="Search items..."
                      icon={<SearchIcon className="w-4 h-4" />}
                      className="text-sm py-1.5 w-48"
                    />
                  </div>
                </div>

                {/* Market Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-xs text-text-dim border-b border-bg-hover">
                        <th className="px-4 py-3 font-medium">Name</th>
                        <th className="px-4 py-3 font-medium">Quantity</th>
                        <th className="px-4 py-3 font-medium">Price</th>
                        <th className="px-4 py-3 font-medium">Price Changes (24h)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketItems.map((item) => (
                        <tr key={item.id} className="border-b border-bg-hover hover:bg-bg-hover transition-colors cursor-pointer">
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 rounded-[--radius-sm] object-cover"
                              />
                              <div>
                                <div className="text-sm font-medium text-text-main">{item.name}</div>
                                <div className="text-xs text-text-dim">{item.game}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-text-dim">{item.quantity.toLocaleString()}</td>
                          <td className="px-4 py-4 text-sm text-text-main">${item.price.toFixed(2)} USD</td>
                          <td className="px-4 py-4">
                            <span className={`text-sm font-medium ${
                              item.priceChange > 0 ? 'text-accent-green' : 'text-accent-red'
                            }`}>
                              {item.priceChange > 0 ? '+' : ''}{item.priceChange}%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-end gap-2 p-4 border-t border-bg-hover">
                  <button className="px-3 py-1.5 text-sm bg-bg-main text-text-dim rounded-[--radius-sm] hover:bg-bg-hover transition-colors">
                    Prev
                  </button>
                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 text-sm rounded-[--radius-sm] transition-colors ${
                        currentPage === page
                          ? 'bg-primary text-bg-main'
                          : 'bg-bg-main text-text-dim hover:bg-bg-hover'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <span className="text-text-dim mx-1">...</span>
                  <button className="px-3 py-1.5 text-sm bg-bg-main text-text-dim rounded-[--radius-sm] hover:bg-bg-hover transition-colors">
                    10
                  </button>
                  <button className="px-3 py-1.5 text-sm bg-bg-main text-text-dim rounded-[--radius-sm] hover:bg-bg-hover transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

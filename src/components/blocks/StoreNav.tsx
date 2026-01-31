import { Link, useLocation } from 'react-router-dom'

const StoreNav = () => {
  const location = useLocation()

  const navItems = [
    { label: 'Home', path: '/store' },
    { label: 'Browse', path: '/browse' },
    { label: 'Discover', path: '/discover' },
    { label: 'Points Shop', path: '/points' },
    { label: 'Curators', path: '/curators' },
    { label: 'Gift Cards', path: '/gift-cards' },
    { label: 'News', path: '/news' }
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-[#1b2838] border-b border-[#23262e]">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-3 text-sm transition-colors ${
                isActive(item.path)
                  ? 'bg-[--color-bg-highlight] text-white'
                  : 'text-[--color-text-main] hover:text-white hover:bg-[--color-bg-hover]'
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="ml-auto flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#23262e] text-[--color-text-main] px-4 py-2 pr-10 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary] w-64"
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[--color-text-dim]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <Link
              to="/wishlist"
              className="px-4 py-2 bg-[--color-primary] text-white rounded text-sm font-medium hover:bg-[#5ab0e4] transition-colors"
            >
              Wishlist
            </Link>

            <Link
              to="/cart"
              className="px-4 py-2 bg-[--color-accent-green] text-white rounded text-sm font-medium hover:bg-[--color-accent-green-hi] transition-colors"
            >
              Cart
            </Link>

            <button className="text-[--color-text-dim] hover:text-white">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <circle cx="10" cy="4" r="1.5"/>
                <circle cx="10" cy="10" r="1.5"/>
                <circle cx="10" cy="16" r="1.5"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default StoreNav

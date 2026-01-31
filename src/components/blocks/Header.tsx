import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const location = useLocation()
  const [showNotifications, setShowNotifications] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)

  const isActive = (path: string) => {
    return location.pathname.startsWith(path)
  }

  const navItems = [
    { label: 'STORE', path: '/store' },
    { label: 'COMMUNITY', path: '/community' },
    { label: 'JUXTOPPOSED', path: '/profile' },
    { label: 'LIBRARY', path: '/library' },
    { label: 'DOWNLOADS', path: '/downloads' }
  ]

  return (
    <header className="bg-[#171a21] text-[--color-text-main] sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 h-12">
        {/* Left: Navigation arrows and logo */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button className="w-6 h-6 flex items-center justify-center hover:bg-[--color-bg-hover] rounded">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </button>
            <button className="w-6 h-6 flex items-center justify-center hover:bg-[--color-bg-hover] rounded">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </button>
          </div>

          <Link to="/" className="flex items-center gap-2 hover:opacity-80">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" fill="currentColor"/>
              <path d="M12 7v10M7 12h10" stroke="#171a21" strokeWidth="2"/>
            </svg>
            <span className="font-bold text-sm tracking-wider">STEAM</span>
          </Link>
        </div>

        {/* Center: Main navigation */}
        <nav className="flex items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-3 text-sm font-medium transition-colors ${
                isActive(item.path)
                  ? 'text-white bg-[--color-bg-highlight]'
                  : 'text-[--color-text-main] hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: User actions */}
        <div className="flex items-center gap-4">
          <button className="relative hover:text-white">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M14 7.5C14 9.985 12 12 10 12C8 12 6 9.985 6 7.5C6 5.015 8 3 10 3C12 3 14 5.015 14 7.5Z"/>
              <path d="M3 17C3 14 6 12 10 12C14 12 17 14 17 17"/>
            </svg>
          </button>

          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative hover:text-white"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 3C7.8 3 6 4.8 6 7V10L4 12V13H16V12L14 10V7C14 4.8 12.2 3 10 3Z"/>
              <path d="M9 16C9 16.5 9.5 17 10 17C10.5 17 11 16.5 11 16"/>
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[--color-accent-blue] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              1
            </span>
          </button>

          <div className="relative">
            <button
              onClick={() => setShowAccountMenu(!showAccountMenu)}
              className="flex items-center gap-2 hover:bg-[--color-bg-hover] px-3 py-1 rounded"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-red-500"></div>
              <span className="text-sm font-medium">Juxtopposed</span>
              <span className="text-xs text-[--color-text-dim]">$5.25</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 8L2 4H10L6 8Z"/>
              </svg>
            </button>

            {showAccountMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-[#23262e] rounded shadow-lg py-2">
                <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-[--color-bg-hover]">
                  View Profile
                </Link>
                <Link to="/settings" className="block px-4 py-2 text-sm hover:bg-[--color-bg-hover]">
                  Settings
                </Link>
                <hr className="my-2 border-[--color-bg-hover]" />
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-[--color-bg-hover]">
                  Logout
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 text-[--color-text-dim]">
            <button className="hover:text-white">Help</button>
            <button className="hover:text-white flex items-center gap-1">
              View
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 8L2 4H10L6 8Z"/>
              </svg>
            </button>
          </div>

          <div className="flex gap-1 ml-2">
            <button className="w-8 h-8 hover:bg-[--color-bg-hover] rounded flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <rect width="14" height="2"/>
              </svg>
            </button>
            <button className="w-8 h-8 hover:bg-[--color-bg-hover] rounded flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <rect width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <button className="w-8 h-8 hover:bg-[--color-bg-hover] rounded flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <path d="M0 0L14 14M14 0L0 14" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

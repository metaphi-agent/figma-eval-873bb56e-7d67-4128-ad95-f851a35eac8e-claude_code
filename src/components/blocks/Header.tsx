import { Link, useLocation } from 'react-router-dom';
import { SteamIcon, BellIcon, ChatIcon, ChevronDownIcon } from '../ui/Icons';

const mainNavItems = [
  { label: 'STORE', path: '/store' },
  { label: 'COMMUNITY', path: '/community' },
  { label: 'JUXTOPPOSED', path: '/profile' },
  { label: 'LIBRARY', path: '/library' },
  { label: 'DOWNLOADS', path: '/downloads' },
];

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/store') {
      return location.pathname === '/' || location.pathname.startsWith('/store');
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-main border-b border-bg-hover">
      {/* Window Controls Row */}
      <div className="flex items-center justify-between px-4 py-1 bg-bg-highlight">
        <div className="flex items-center gap-3">
          <button className="text-text-dim hover:text-text-main transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="text-text-dim hover:text-text-main transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <SteamIcon className="w-5 h-5 text-text-main" />
            <span className="text-sm font-medium text-text-main">STEAM</span>
          </div>
        </div>

        <nav className="flex items-center gap-6">
          {mainNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs font-medium tracking-wider transition-colors ${
                isActive(item.path)
                  ? 'text-text-main'
                  : 'text-text-dim hover:text-text-main'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="relative text-text-dim hover:text-text-main transition-colors">
            <ChatIcon className="w-4 h-4" />
          </button>
          <button className="relative text-text-dim hover:text-text-main transition-colors">
            <BellIcon className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full text-[8px] flex items-center justify-center">3</span>
          </button>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-bg-hover px-2 py-1 rounded transition-colors">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-500 via-blue-500 to-white overflow-hidden">
              <div className="w-full h-full bg-[url('./assets/images/avatar.png')] bg-cover bg-center" />
            </div>
            <span className="text-xs text-text-main">Juxtopposed</span>
            <span className="text-xs text-primary">$5.25</span>
            <ChevronDownIcon className="w-3 h-3 text-text-dim" />
          </div>
          <div className="flex items-center gap-1 text-text-dim">
            <span className="text-xs">Help</span>
            <span className="text-xs">View</span>
          </div>
          <div className="flex items-center gap-2 ml-2">
            <button className="w-5 h-5 text-text-dim hover:text-text-main transition-colors">
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="w-5 h-5 text-text-dim hover:text-text-main transition-colors">
              <svg viewBox="0 0 16 16" fill="none">
                <rect x="3" y="3" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
            <button className="w-5 h-5 text-text-dim hover:text-accent-red hover:bg-accent-red/20 rounded transition-colors">
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

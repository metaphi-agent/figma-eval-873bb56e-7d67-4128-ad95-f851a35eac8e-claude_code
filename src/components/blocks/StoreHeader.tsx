import { Link, useLocation } from 'react-router-dom';
import { SearchIcon, HeartIcon, CartIcon, SettingsIcon } from '../ui/Icons';
import Input from '../ui/Input';

const storeNavItems = [
  { label: 'Home', path: '/store' },
  { label: 'Browse', path: '/browse' },
  { label: 'Discover', path: '/discover' },
  { label: 'Points Shop', path: '/points' },
  { label: 'Curators', path: '/curators' },
  { label: 'Gift Cards', path: '/gift-cards' },
  { label: 'News', path: '/news' },
];

export default function StoreHeader() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/store') {
      return location.pathname === '/store' || location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <div className="bg-bg-tertiary">
      <div className="max-w-[1920px] mx-auto px-6 py-2 flex items-center justify-between">
        {/* Navigation */}
        <nav className="flex items-center gap-1">
          {storeNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 text-sm font-medium rounded-[--radius-sm] transition-colors ${
                isActive(item.path)
                  ? 'bg-primary text-bg-main'
                  : 'text-text-dim hover:text-text-main hover:bg-bg-hover'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Search and Actions */}
        <div className="flex items-center gap-4">
          <div className="w-64">
            <Input
              placeholder="Search..."
              icon={<SearchIcon className="w-4 h-4" />}
              className="text-sm py-1.5"
            />
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/wishlist"
              className="flex items-center gap-2 px-3 py-2 text-sm text-text-dim hover:text-text-main hover:bg-bg-hover rounded-[--radius-sm] transition-colors"
            >
              <HeartIcon className="w-4 h-4" />
              <span>Wishlist</span>
            </Link>
            <Link
              to="/cart"
              className="flex items-center gap-2 px-3 py-2 text-sm bg-bg-hover text-text-main hover:bg-bg-highlight rounded-[--radius-sm] transition-colors"
            >
              <CartIcon className="w-4 h-4" />
              <span>Cart</span>
            </Link>
            <button className="p-2 text-text-dim hover:text-text-main hover:bg-bg-hover rounded-[--radius-sm] transition-colors">
              <SettingsIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link, useLocation } from 'react-router-dom';
import { SearchIcon, ChevronDownIcon } from '../ui/Icons';
import Input from '../ui/Input';

const communityNavItems = [
  { label: 'Home', path: '/community' },
  { label: 'Discussion', path: '/discussions' },
  { label: 'Workshop', path: '/workshop' },
  { label: 'Market', path: '/market' },
  { label: 'Broadcasts', path: '/broadcasts' },
];

export default function CommunityHeader() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/community') {
      return location.pathname === '/community';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="bg-bg-tertiary">
      <div className="max-w-[1920px] mx-auto px-6 py-2 flex items-center justify-between">
        {/* Navigation */}
        <nav className="flex items-center gap-1">
          {communityNavItems.map((item) => (
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

        {/* Search */}
        <div className="flex items-center gap-4">
          <div className="w-64">
            <Input
              placeholder="Search..."
              icon={<SearchIcon className="w-4 h-4" />}
              className="text-sm py-1.5"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-text-dim hover:text-text-main hover:bg-bg-hover rounded-[--radius-sm] transition-colors">
            <span>Community</span>
            <ChevronDownIcon className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SearchIcon, ChevronDownIcon } from '../ui/Icons';
import Input from '../ui/Input';

interface LibraryGame {
  id: string;
  title: string;
  icon?: string;
  installed: boolean;
  lastPlayed?: string;
}

const libraryGames: LibraryGame[] = [
  { id: '1', title: 'Bioshock', installed: true },
  { id: '2', title: 'Bioshock 2', installed: true },
  { id: '3', title: 'Bioshock Infinite', installed: true },
  { id: '4', title: 'Batman: Arkham Origins', installed: false },
  { id: '5', title: 'Batman: Arkham Knight', installed: true },
  { id: '6', title: 'Beneath a Steel Sky', installed: false },
  { id: '7', title: 'Black Mesa', installed: true },
  { id: '8', title: 'Borderlands', installed: true },
  { id: '9', title: 'Borderlands 2', installed: true },
  { id: '10', title: 'Borderlands 3', installed: false },
  { id: '11', title: 'Crysis', installed: false },
  { id: '12', title: 'Deus Ex: GOTY Edition', installed: true },
  { id: '13', title: 'DOOM', installed: true },
  { id: '14', title: 'DOOM Eternal', installed: true },
  { id: '15', title: 'The Elder Scrolls V: Skyrim', installed: true },
  { id: '16', title: 'Fallout 4', installed: true },
  { id: '17', title: 'Garry\'s Mod', installed: true },
  { id: '18', title: 'Grand Theft Auto V', installed: true },
  { id: '19', title: 'Half-Life', installed: true },
  { id: '20', title: 'Halo: The Master Chief Collection', installed: false },
  { id: '21', title: 'Mass Effect 2', installed: true },
  { id: '22', title: 'Starbound', installed: false },
];

const navItems = [
  { label: 'Home', path: '/library' },
  { label: 'Collections', path: '/library/collections' },
];

export default function LibrarySidebar() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>(['all']);

  const filteredGames = libraryGames.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 bg-bg-highlight border-r border-bg-hover flex flex-col h-full">
      {/* Navigation */}
      <div className="p-3 border-b border-bg-hover">
        <nav className="flex gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-1.5 text-sm font-medium rounded-[--radius-sm] transition-colors ${
                isActive(item.path)
                  ? 'bg-primary text-bg-main'
                  : 'text-text-dim hover:text-text-main hover:bg-bg-hover'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Search */}
      <div className="p-3 border-b border-bg-hover">
        <Input
          placeholder="Search..."
          icon={<SearchIcon className="w-4 h-4" />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-sm py-1.5"
        />
      </div>

      {/* Games List */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-2">
          <button
            onClick={() => toggleSection('all')}
            className="flex items-center justify-between w-full px-2 py-1.5 text-sm font-medium text-text-dim hover:text-text-main transition-colors"
          >
            <span>ALL ({filteredGames.length})</span>
            <ChevronDownIcon
              className={`w-4 h-4 transition-transform ${
                expandedSections.includes('all') ? 'rotate-180' : ''
              }`}
            />
          </button>
          {expandedSections.includes('all') && (
            <div className="mt-1 space-y-0.5">
              {filteredGames.map((game) => (
                <Link
                  key={game.id}
                  to={`/library/game/${game.id}`}
                  className={`flex items-center gap-2 px-2 py-1.5 text-sm rounded-[--radius-sm] transition-colors ${
                    location.pathname === `/library/game/${game.id}`
                      ? 'bg-bg-hover text-text-main'
                      : 'text-text-dim hover:text-text-main hover:bg-bg-hover/50'
                  }`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      game.installed ? 'bg-primary' : 'bg-text-dim/30'
                    }`}
                  />
                  <span className="truncate">{game.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

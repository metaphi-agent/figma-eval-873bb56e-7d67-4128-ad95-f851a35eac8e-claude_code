import { useState } from 'react';
import { LibrarySidebar, Footer } from '../components/blocks';
import { SearchIcon, FilterIcon, GridIcon, ListIcon, PlayIcon, ChevronDownIcon } from '../components/ui/Icons';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

interface LibraryGame {
  id: string;
  title: string;
  image: string;
  banner: string;
  installed: boolean;
  lastPlayed?: string;
  playTime?: number;
  achievements?: { unlocked: number; total: number };
  cloudStatus?: 'up-to-date' | 'syncing' | 'error';
}

const libraryGames: LibraryGame[] = [
  {
    id: 'bioshock',
    title: 'Bioshock Remastered',
    image: './assets/images/bioshock.jpg',
    banner: './assets/images/bioshock-banner.jpg',
    installed: true,
    lastPlayed: '21 Aug 2022',
    playTime: 92,
    achievements: { unlocked: 20, total: 95 },
    cloudStatus: 'up-to-date',
  },
  {
    id: 'doom',
    title: 'DOOM',
    image: './assets/images/doom.jpg',
    banner: './assets/images/doom-banner.jpg',
    installed: true,
    lastPlayed: '21 Aug 2023',
    playTime: 68,
    achievements: { unlocked: 15, total: 50 },
    cloudStatus: 'up-to-date',
  },
  {
    id: 'borderlands-2',
    title: 'Borderlands 2',
    image: './assets/images/borderlands2.jpg',
    banner: './assets/images/borderlands2-banner.jpg',
    installed: true,
    playTime: 75,
    achievements: { unlocked: 35, total: 75 },
  },
];

const selectedGame = libraryGames[0];

const navTabs = ['Store Page', 'DLCs', 'Community', 'Discussions', 'Workshop', 'Guides', 'Support'];

export default function LibraryPage() {
  const [viewMode, setViewMode] = useState<'detail' | 'grid'>('detail');

  return (
    <div className="min-h-screen bg-bg-main flex">
      <LibrarySidebar />

      <div className="flex-1 flex flex-col">
        {/* Library Header */}
        <div className="flex items-center justify-between px-6 py-3 bg-bg-highlight border-b border-bg-hover">
          <div className="flex items-center gap-4">
            <span className="text-sm text-text-dim">News and Updates</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-48">
              <Input
                placeholder="Search"
                icon={<SearchIcon className="w-4 h-4" />}
                className="text-sm py-1"
              />
            </div>
            <span className="text-sm text-text-dim">View</span>
            <div className="flex items-center gap-1 bg-bg-main rounded-[--radius-sm] p-1">
              <button
                onClick={() => setViewMode('detail')}
                className={`p-1.5 rounded-[--radius-sm] transition-colors ${
                  viewMode === 'detail' ? 'bg-bg-hover text-text-main' : 'text-text-dim hover:text-text-main'
                }`}
              >
                <ListIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-[--radius-sm] transition-colors ${
                  viewMode === 'grid' ? 'bg-bg-hover text-text-main' : 'text-text-dim hover:text-text-main'
                }`}
              >
                <GridIcon className="w-4 h-4" />
              </button>
            </div>
            <button className="p-2 text-text-dim hover:text-text-main transition-colors">
              <FilterIcon className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm text-text-dim">
            <span>Activate a Product</span>
            <span>Add a non-Steam Game</span>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {/* Hero Banner */}
          <div className="relative h-[350px]">
            <img
              src={selectedGame.banner}
              alt={selectedGame.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = selectedGame.image;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h1 className="text-5xl font-bold text-text-main tracking-wider mb-4">
                {selectedGame.title.toUpperCase().replace('REMASTERED', '')}<br />
                <span className="text-3xl font-light tracking-[0.2em]">REMASTERED</span>
              </h1>
              <div className="flex items-center gap-6 text-sm">
                <Button variant="accent" size="lg">
                  <PlayIcon className="w-5 h-5 mr-2" />
                  Play
                </Button>
                <div>
                  <div className="text-text-dim">LAST PLAYED</div>
                  <div className="text-text-main">{selectedGame.lastPlayed}</div>
                </div>
                <div>
                  <div className="text-text-dim">PLAY TIME</div>
                  <div className="text-text-main">{selectedGame.playTime} hours</div>
                </div>
                <div>
                  <div className="text-text-dim">CLOUD STATUS</div>
                  <div className="text-primary">Up to date</div>
                </div>
                <div>
                  <div className="text-text-dim">ACHIEVEMENTS</div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1.5 bg-bg-hover rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{
                          width: `${(selectedGame.achievements?.unlocked || 0) / (selectedGame.achievements?.total || 1) * 100}%`
                        }}
                      />
                    </div>
                    <span className="text-text-main">
                      {selectedGame.achievements?.unlocked}/{selectedGame.achievements?.total}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="px-6 py-3 border-b border-bg-hover flex items-center justify-between">
            <nav className="flex items-center gap-1">
              {navTabs.map((tab, index) => (
                <button
                  key={tab}
                  className={`px-4 py-2 text-sm font-medium rounded-[--radius-sm] transition-colors ${
                    index === 0
                      ? 'bg-primary text-bg-main'
                      : 'text-text-dim hover:text-text-main hover:bg-bg-hover'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <button className="p-2 text-text-dim hover:text-accent-yellow transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 1L12.39 6.26L18 7.27L14 11.14L14.76 17L10 14.27L5.24 17L6 11.14L2 7.27L7.61 6.26L10 1Z"/>
                </svg>
              </button>
              <button className="p-2 text-text-dim hover:text-text-main transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="10" cy="3" r="1.5"/>
                  <circle cx="10" cy="10" r="1.5"/>
                  <circle cx="10" cy="17" r="1.5"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Game Info */}
          <div className="px-6 py-6 grid grid-cols-[1fr_300px] gap-8">
            <div className="space-y-6">
              {/* Friends Playing */}
              <div>
                <h2 className="text-lg font-semibold text-text-main mb-3">Friends who play this game</h2>
                <div className="flex items-center gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-bg-highlight border-2 border-primary overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-semibold text-text-main">Achievements</h2>
                  <span className="text-sm text-text-dim">Locked Achievements</span>
                </div>
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-16 h-16 rounded-[--radius-sm] bg-bg-highlight overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-amber-600 to-amber-800" />
                    </div>
                  ))}
                  <div className="px-3 py-2 text-sm text-text-dim">+16</div>
                  <div className="w-px h-12 bg-bg-hover mx-2" />
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-16 h-16 rounded-[--radius-sm] bg-bg-hover opacity-50" />
                  ))}
                  <div className="px-3 py-2 text-sm text-text-dim">+41</div>
                </div>
              </div>

              {/* Screenshots */}
              <div>
                <h2 className="text-lg font-semibold text-text-main mb-3">Screenshots</h2>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-video rounded-[--radius-sm] bg-bg-highlight overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-900 to-cyan-700" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Activity Sidebar */}
            <div>
              <h2 className="text-lg font-semibold text-text-main mb-3">Activity</h2>
              <div className="space-y-4">
                <div className="p-4 bg-bg-highlight rounded-[--radius-md]">
                  <div className="text-sm text-text-dim mb-2">Oct 13</div>
                  <div className="flex items-start gap-3">
                    <Badge variant="primary" size="sm">Small Update</Badge>
                    <p className="text-sm text-text-main flex-1">
                      It's just a small but noteworthy update-
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-bg-highlight rounded-[--radius-md]">
                  <div className="text-sm text-text-dim mb-2">Oct 12</div>
                  <div className="flex items-start gap-3">
                    <Badge variant="primary" size="sm">Big Update</Badge>
                    <p className="text-sm text-text-main flex-1">
                      Wow here's a BIG update!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

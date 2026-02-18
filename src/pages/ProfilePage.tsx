import { useState } from 'react';
import { Footer } from '../components/blocks';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

interface ProfileStats {
  gamesOwned: number;
  dlcsOwned: number;
  reviewed: number;
  wishlisted: number;
}

interface Friend {
  id: string;
  name: string;
  status: 'online' | 'away' | 'offline';
  game?: string;
  level: number;
}

interface RecentGame {
  id: string;
  title: string;
  image: string;
  lastPlayed: string;
  playTime: number;
  achievements: { unlocked: number; total: number };
  friends: number;
}

const profileData = {
  username: 'Juxtopposed',
  bio: "I'm Jux, and this is my favorite spot on Steam!",
  level: 60,
  xp: 30000,
  yearsOfService: 6,
  serviceXp: 330,
  status: 'Online' as const,
};

const stats: ProfileStats = {
  gamesOwned: 350,
  dlcsOwned: 600,
  reviewed: 32,
  wishlisted: 120,
};

const friends: Friend[] = [
  { id: '1', name: 'Friend 1', status: 'online', game: 'Counter-Strike 2', level: 72 },
  { id: '2', name: 'Friend 2', status: 'away', level: 45 },
  { id: '3', name: 'Friend 3', status: 'offline', level: 32 },
  { id: '4', name: 'Friend 4', status: 'offline', level: 18 },
];

const recentGames: RecentGame[] = [
  {
    id: '1',
    title: 'Mass Effect: Legendary Edition',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=200&fit=crop&q=80',
    lastPlayed: '3 Oct 2023',
    playTime: 32,
    achievements: { unlocked: 35, total: 127 },
    friends: 30,
  },
  {
    id: '2',
    title: 'Doom',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop&q=80',
    lastPlayed: '21 Aug 2023',
    playTime: 68,
    achievements: { unlocked: 30, total: 57 },
    friends: 30,
  },
  {
    id: '3',
    title: 'Borderlands 2',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=200&fit=crop&q=80',
    lastPlayed: '15 Jul 2023',
    playTime: 15,
    achievements: { unlocked: 35, total: 75 },
    friends: 30,
  },
];

const showcaseGames = [
  { id: '1', title: 'Mass Effect', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=200&h=300&fit=crop&q=80' },
  { id: '2', title: 'DOOM', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=300&fit=crop&q=80' },
  { id: '3', title: 'Borderlands 2', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=200&h=300&fit=crop&q=80' },
  { id: '4', title: 'Crysis', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=200&h=300&fit=crop&q=80' },
  { id: '5', title: 'Skyrim', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=200&h=300&fit=crop&q=80' },
  { id: '6', title: "Garry's Mod", image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=300&fit=crop&q=80' },
  { id: '7', title: 'Fallout 4', image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=200&h=300&fit=crop&q=80' },
];

const sidebarStats = [
  { label: 'Badges', value: 84 },
  { label: 'Games', value: 350 },
  { label: 'Wishlist', value: 120 },
  { label: 'Inventory', value: '-' },
  { label: 'Screenshots', value: 40 },
  { label: 'Videos', value: 2 },
  { label: 'Workshop Items', value: 3 },
  { label: 'Reviews', value: 32 },
  { label: 'Guides', value: 1 },
  { label: 'Artworks', value: 13 },
];

export default function ProfilePage() {
  const [showAllFriends, setShowAllFriends] = useState(false);

  return (
    <div className="min-h-screen bg-bg-main">
      <main className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Profile Header */}
        <div className="flex gap-6 mb-8">
          {/* Avatar */}
          <div className="shrink-0">
            <div className="w-40 h-40 rounded-lg bg-gradient-to-br from-red-500 via-blue-500 to-white border-4 border-bg-highlight overflow-hidden">
              <div className="w-full h-full" />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-text-main flex items-center gap-2">
                  {profileData.username}
                  <svg className="w-4 h-4 text-text-dim" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M4 6l4 4 4-4"/>
                  </svg>
                </h1>
                <p className="text-sm text-text-dim mt-1">{profileData.bio}</p>
              </div>
              <Button variant="secondary" size="sm">Edit Profile</Button>
            </div>
          </div>

          {/* Level Badge */}
          <div className="text-center">
            <div className="w-20 h-20 rounded-lg bg-bg-highlight border-2 border-primary flex items-center justify-center mb-2">
              <span className="text-3xl font-bold text-primary">{profileData.level}</span>
            </div>
            <div className="text-xs text-text-dim">
              Level<br />
              {profileData.xp.toLocaleString()} XP
            </div>
          </div>

          {/* Years of Service */}
          <div className="text-center">
            <div className="w-20 h-20 rounded-lg bg-bg-highlight border-2 border-text-dim flex items-center justify-center mb-2">
              <span className="text-3xl font-bold text-text-main">{profileData.yearsOfService}</span>
            </div>
            <div className="text-xs text-text-dim">
              Years of Service<br />
              {profileData.serviceXp} XP
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_250px] gap-8">
          {/* Main Content */}
          <div className="space-y-6">
            {/* Game Collector Showcase */}
            <div className="bg-bg-highlight rounded-[--radius-lg] p-6">
              <h2 className="text-sm text-text-dim mb-4">Game Collector</h2>
              <div className="grid grid-cols-5 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-text-main">{stats.gamesOwned}</div>
                  <div className="text-xs text-text-dim">Games owned</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-text-main">{stats.dlcsOwned}</div>
                  <div className="text-xs text-text-dim">DLCs owned</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-text-main">{stats.reviewed}</div>
                  <div className="text-xs text-text-dim">Reviewed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-text-main">{stats.wishlisted}</div>
                  <div className="text-xs text-text-dim">Wishlisted</div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {showcaseGames.map((game) => (
                  <div key={game.id} className="aspect-[2/3] rounded-[--radius-sm] bg-bg-hover overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                      <span className="text-[8px] text-text-dim text-center px-1">{game.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-bg-highlight rounded-[--radius-lg] p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-text-main">Recent Activity</h2>
                <span className="text-sm text-text-dim">15h past 2 weeks</span>
              </div>
              <div className="space-y-4">
                {recentGames.map((game) => (
                  <div key={game.id} className="flex items-center gap-4 p-3 bg-bg-main rounded-[--radius-md]">
                    <div className="w-32 h-16 rounded-[--radius-sm] bg-bg-hover overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-medium text-text-main">{game.title}</h3>
                      <div className="flex items-center gap-4 mt-1 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1 bg-bg-hover rounded-full overflow-hidden">
                            <div
                              className="h-full bg-accent-green"
                              style={{ width: `${(game.achievements.unlocked / game.achievements.total) * 100}%` }}
                            />
                          </div>
                          <span className="text-text-dim">
                            {game.achievements.unlocked}/{game.achievements.total}
                          </span>
                        </div>
                        <div className="flex items-center -space-x-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="w-5 h-5 rounded-full bg-bg-hover border border-bg-highlight" />
                          ))}
                          <span className="text-text-dim ml-2">+{game.friends}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-sm">
                      <div className="text-text-dim">{game.lastPlayed}</div>
                      <div className="text-text-main">{game.playTime} hours</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comments */}
            <div className="bg-bg-highlight rounded-[--radius-lg] p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-text-main">Comments</h2>
                <span className="text-sm text-text-dim">No comments yet</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-blue-500" />
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 bg-bg-main border border-bg-hover rounded-[--radius-sm] px-4 py-2 text-sm text-text-main placeholder:text-text-dim focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Status */}
            <div className="bg-bg-highlight rounded-[--radius-lg] p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-dim">Status</span>
                <span className="text-primary">{profileData.status}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-bg-highlight rounded-[--radius-lg] p-4 space-y-3">
              {sidebarStats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between text-sm">
                  <span className="text-text-dim">{stat.label}</span>
                  <span className="text-text-main">{stat.value}</span>
                </div>
              ))}
            </div>

            {/* Friends */}
            <div className="bg-bg-highlight rounded-[--radius-lg] p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-text-main">Friends ({friends.length})</h3>
                <button className="p-1 text-text-dim hover:text-text-main transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="8" cy="8" r="6"/>
                    <path d="M8 5v6M5 8h6"/>
                  </svg>
                </button>
              </div>
              <div className="space-y-3">
                {friends.map((friend) => (
                  <div key={friend.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-600 to-slate-800" />
                        <div
                          className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-bg-highlight ${
                            friend.status === 'online' ? 'bg-accent-green' :
                            friend.status === 'away' ? 'bg-accent-yellow' : 'bg-text-dim'
                          }`}
                        />
                      </div>
                      <div>
                        <div className="text-sm text-primary">{friend.name}</div>
                        <div className="text-xs text-text-dim">
                          {friend.game || friend.status.charAt(0).toUpperCase() + friend.status.slice(1)}
                        </div>
                      </div>
                    </div>
                    <Badge variant="default" size="sm">{friend.level}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

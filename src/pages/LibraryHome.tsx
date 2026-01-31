import { useState } from 'react'

const LibraryHome = () => {
  const [selectedGame, setSelectedGame] = useState('bioshock')
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list')

  const games = [
    { id: 'bioshock', name: 'Bioshock', playtime: '92 hours' },
    { id: 'bioshock-2', name: 'Bioshock 2', playtime: '45 hours' },
    { id: 'bioshock-infinite', name: 'Bioshock Infinite', playtime: '78 hours' },
    { id: 'dishonored', name: 'Dishonored', playtime: '120 hours' },
    { id: 'batman', name: 'Batman: Arkham Knight', playtime: '65 hours' },
    { id: 'borderlands', name: 'Borderlands 2', playtime: '89 hours' },
    { id: 'fallout4', name: 'Fallout 4', playtime: '156 hours' },
    { id: 'csgo', name: 'CS:GO', playtime: '234 hours' },
    { id: 'dota2', name: 'Dota 2', playtime: '567 hours' },
    { id: 'portal', name: 'Portal 2', playtime: '43 hours' },
    { id: 'half-life', name: 'Half-Life 2', playtime: '38 hours' },
    { id: 'gmod', name: "Garry's Mod", playtime: '234 hours' },
    { id: 'left4dead', name: 'Left 4 Dead 2', playtime: '123 hours' },
    { id: 'skyrim', name: 'The Elder Scrolls V: Skyrim', playtime: '345 hours' },
    { id: 'witcher3', name: 'The Witcher 3', playtime: '234 hours' },
    { id: 'gtav', name: 'Grand Theft Auto V', playtime: '187 hours' },
    { id: 'masseffect', name: 'Mass Effect 2', playtime: '98 hours' },
    { id: 'tf2', name: 'Team Fortress 2', playtime: '456 hours' },
    { id: 'dying', name: 'Dying Light', playtime: '76 hours' },
    { id: 'halo', name: 'Halo: The Master Chief Collection', playtime: '134 hours' }
  ]

  return (
    <div className="flex h-screen bg-[--color-bg-main]">
      {/* Left Sidebar: Game List */}
      <div className="w-80 bg-[#171a21] flex flex-col border-r border-[#23262e]">
        {/* Library Header */}
        <div className="p-4 border-b border-[#23262e]">
          <div className="flex items-center gap-4 mb-4">
            <button className="px-4 py-2 bg-[--color-primary] text-white rounded font-medium hover:bg-[#5ab0e4] transition-colors">
              Home
            </button>
            <button className="px-4 py-2 text-[--color-text-dim] hover:text-white transition-colors">
              Collections
            </button>
            <button className="px-4 py-2 text-[--color-text-dim] hover:text-white transition-colors">
              News and Updates
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#23262e] text-[--color-text-main] px-4 py-2 pr-10 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
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
        </div>

        {/* Game List */}
        <div className="flex-1 overflow-y-auto">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => setSelectedGame(game.id)}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                selectedGame === game.id
                  ? 'bg-[--color-bg-highlight] text-white'
                  : 'text-[--color-text-dim] hover:bg-[#23262e] hover:text-white'
              }`}
            >
              <div className="w-8 h-8 bg-[#23262e] rounded"></div>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{game.name}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-[#23262e] space-y-2">
          <button className="w-full py-2 bg-[--color-accent-green] text-white font-bold rounded hover:bg-[--color-accent-green-hi] transition-colors">
            Activate a Product
          </button>
          <button className="w-full py-2 bg-transparent text-[--color-text-main] border border-[--color-text-dim] rounded hover:border-white hover:text-white transition-colors">
            Add a non-Steam Game
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Top Bar */}
        <div className="bg-[#171a21] px-6 py-4 border-b border-[#23262e] sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-[#23262e] rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              <button className="p-2 hover:bg-[#23262e] rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="p-2 hover:bg-[#23262e] rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#23262e] rounded hover:bg-[--color-bg-hover] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4h14M3 8h14M3 12h14" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
                <span className="text-sm">View:</span>
              </button>

              <button className="p-2 hover:bg-[#23262e] rounded">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4h14M3 10h14M3 16h14" />
                </svg>
              </button>
              <button className="p-2 hover:bg-[#23262e] rounded">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <rect x="2" y="2" width="6" height="6" />
                  <rect x="12" y="2" width="6" height="6" />
                  <rect x="2" y="12" width="6" height="6" />
                  <rect x="12" y="12" width="6" height="6" />
                </svg>
              </button>
              <button className="p-2 hover:bg-[#23262e] rounded">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4A2 2 0 015 2h10a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <img
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/8850/library_hero.jpg"
            alt="Bioshock Remastered"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[--color-bg-main] via-transparent to-transparent"></div>

          <div className="absolute bottom-8 left-8">
            <h1 className="text-5xl font-bold mb-4">Bioshock Remastered</h1>
            <button className="px-8 py-3 bg-[--color-accent-green] text-white font-bold rounded-lg text-lg hover:bg-[--color-accent-green-hi] transition-colors flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              Play
            </button>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="border-b border-[#23262e]">
          <div className="flex gap-8 px-8">
            {['Store Page', 'DLCs', 'Community', 'Screenshots', 'Workshop', 'Guides', 'Support'].map((tab) => (
              <button
                key={tab}
                className="px-4 py-3 text-sm font-medium text-[--color-text-dim] hover:text-white border-b-2 border-transparent hover:border-[--color-primary] transition-colors"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          <div className="grid grid-cols-3 gap-8 mb-12">
            {/* Left: Play Info */}
            <div className="col-span-2">
              {/* Last Played */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Friends who play this game</h2>
                </div>

                <div className="flex gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Achievements</h2>
                  <button className="text-[--color-primary] hover:underline text-sm">
                    Locked Achievements
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-[#23262e] rounded-lg p-3 hover:bg-[#2a323c] transition-colors cursor-pointer">
                      <div className="w-16 h-16 mx-auto bg-[#1b2838] rounded-lg mb-2"></div>
                      <div className="text-xs text-center text-[--color-text-dim]">Achievement {i}</div>
                    </div>
                  ))}
                </div>

                <button className="mt-4 text-[--color-primary] hover:underline text-sm">+ 36</button>
              </div>

              {/* Screenshots */}
              <div>
                <h2 className="text-xl font-bold mb-4">Screenshots</h2>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-video bg-[#23262e] rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                      <div className="w-full h-full bg-gradient-to-br from-orange-900 to-blue-900"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Activity Feed */}
            <div>
              <h2 className="text-xl font-bold mb-4">Activity</h2>

              <div className="space-y-4">
                {[
                  { date: 'Oct 13', user: 'Juxt', action: 'Small update', detail: "It's just a small but noteworthy update~" },
                  { date: 'Oct 05', user: 'Wow', action: "Wow, that's a BIG update!", detail: '' }
                ].map((item, index) => (
                  <div key={index} className="bg-[#23262e] rounded-lg p-4">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-red-500 shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm">{item.user}</span>
                          <span className="text-xs text-[--color-text-dim]">{item.date}</span>
                        </div>
                        <p className="text-sm text-[--color-text-main]">{item.action}</p>
                        {item.detail && <p className="text-sm text-[--color-text-dim] mt-1">{item.detail}</p>}
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

export default LibraryHome

import StoreNav from '../components/blocks/StoreNav'

const StorePage = () => {
  return (
    <div>
      <StoreNav />

      <div className="bg-gradient-to-b from-[#1b2838] to-[#0e1417]">
        {/* Hero Section */}
        <div className="container mx-auto px-8 py-8">
          <div className="grid grid-cols-3 gap-8">
            {/* Left: Media Gallery */}
            <div className="col-span-2">
              <div className="bg-black rounded-lg overflow-hidden mb-4">
                <img
                  src="https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_668dafe477743f8fc284e99902b8b6835f9c116f.jpg"
                  alt="Elden Ring"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>

              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <button
                    key={i}
                    className="aspect-video bg-[#23262e] rounded overflow-hidden hover:ring-2 ring-[--color-primary] transition-all"
                  >
                    <img
                      src={`https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_${i}.jpg`}
                      alt={`Screenshot ${i}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Game Info */}
            <div>
              <img
                src="https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg"
                alt="Elden Ring Logo"
                className="w-full h-auto mb-4 rounded"
                loading="eager"
              />

              <p className="text-[--color-text-dim] text-sm mb-4 leading-relaxed">
                THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[--color-text-dim]">Recent Reviews:</span>
                  <span className="text-[--color-accent-blue]">Very Positive</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[--color-text-dim]">All Reviews:</span>
                  <span className="text-[--color-accent-blue]">Very Positive</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[--color-text-dim]">Release Date:</span>
                  <span>Feb 25, 2022</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[--color-text-dim]">Developer:</span>
                  <span className="text-[--color-primary] hover:underline cursor-pointer">FromSoftware</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[--color-text-dim]">Publisher:</span>
                  <span className="text-[--color-primary] hover:underline cursor-pointer">BANDAI NAMCO</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Action', 'RPG', 'Dark Fantasy', 'Open-world', 'Souls-like'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#23262e] text-[--color-text-dim] text-xs rounded hover:bg-[--color-bg-hover] cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Pricing */}
              <div className="bg-[#23262e] rounded p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-[--color-text-dim]">Special Offer</span>
                  <span className="text-xs text-[--color-text-dim]">Offer ends in 3 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="bg-[--color-accent-green] text-white px-2 py-1 text-sm font-bold">-20%</span>
                    <div>
                      <div className="text-xs text-[--color-text-dim] line-through">$59.99</div>
                      <div className="text-2xl font-bold text-[--color-accent-green]">$47.99</div>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full py-3 bg-[--color-accent-green] text-white font-bold rounded hover:bg-[--color-accent-green-hi] transition-colors mb-2">
                Add to Cart
              </button>

              <button className="w-full py-3 bg-transparent border-2 border-[--color-primary] text-[--color-primary] font-medium rounded hover:bg-[--color-primary] hover:text-white transition-colors">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="container mx-auto px-8 py-12">
          <h2 className="text-2xl font-bold mb-4">About This Game</h2>
          <div className="bg-[#23262e] rounded-lg p-6 mb-8">
            <p className="text-[--color-text-main] leading-relaxed mb-4">
              THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.
            </p>
            <p className="text-[--color-text-dim] leading-relaxed mb-4">
              A vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected. As you explore, the joy of discovering unknown and overwhelming threats await you, leading to a high sense of accomplishment.
            </p>
            <p className="text-[--color-text-dim] leading-relaxed">
              Create your own character to suit your play style. Try out various weapons and magic spells found throughout the world, or engage in long-range combat with bows. In addition to multiplayer, where you can directly connect with other players and travel together, the game supports a unique asynchronous online element that allows you to feel the presence of others.
            </p>
          </div>

          {/* System Requirements */}
          <h2 className="text-2xl font-bold mb-4">System Requirements</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#23262e] rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Minimum:</h3>
              <div className="space-y-2 text-sm">
                <div><span className="text-[--color-text-dim]">OS:</span> Windows 10</div>
                <div><span className="text-[--color-text-dim]">Processor:</span> Intel Core i5-8400 / AMD Ryzen 3 3300X</div>
                <div><span className="text-[--color-text-dim]">Memory:</span> 12 GB RAM</div>
                <div><span className="text-[--color-text-dim]">Graphics:</span> NVIDIA GTX 1060 / AMD RX 580</div>
                <div><span className="text-[--color-text-dim]">DirectX:</span> Version 12</div>
                <div><span className="text-[--color-text-dim]">Storage:</span> 60 GB available space</div>
              </div>
            </div>

            <div className="bg-[#23262e] rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Recommended:</h3>
              <div className="space-y-2 text-sm">
                <div><span className="text-[--color-text-dim]">OS:</span> Windows 10/11</div>
                <div><span className="text-[--color-text-dim]">Processor:</span> Intel Core i7-8700K / AMD Ryzen 5 3600X</div>
                <div><span className="text-[--color-text-dim]">Memory:</span> 16 GB RAM</div>
                <div><span className="text-[--color-text-dim]">Graphics:</span> NVIDIA GTX 1070 / AMD RX Vega 56</div>
                <div><span className="text-[--color-text-dim]">DirectX:</span> Version 12</div>
                <div><span className="text-[--color-text-dim]">Storage:</span> 60 GB available space</div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Titles */}
        <div className="container mx-auto px-8 py-12">
          <h2 className="text-2xl font-bold mb-6">Similar Titles</h2>
          <div className="grid grid-cols-3 gap-6">
            {['Dark Souls III', 'Bloodborne', 'Sekiro'].map((title) => (
              <div key={title} className="bg-[#23262e] rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                <div className="aspect-video bg-[#1b2838]"></div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">{title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[--color-primary]">90% Positive</span>
                    <span className="text-lg font-bold text-[--color-accent-green]">$39.99</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StorePage

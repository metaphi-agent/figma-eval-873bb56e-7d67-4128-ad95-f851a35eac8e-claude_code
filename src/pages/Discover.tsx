import StoreNav from '../components/blocks/StoreNav'

const Discover = () => {
  const games = [
    { title: 'Elden Ring', price: '$59.99', discount: '20%', rating: '90%', image: 'elden-ring' },
    { title: "No Man's Sky", price: '$29.99', discount: '50%', rating: '85%', image: 'nms' },
    { title: 'Hollow Knight', price: '$14.99', discount: '33%', rating: '95%', image: 'hollow-knight' },
    { title: 'Project Zomboid', price: '$19.99', discount: '15%', rating: '92%', image: 'pz' },
    { title: 'Devil May Cry 5', price: '$29.99', discount: '25%', rating: '88%', image: 'dmc5' },
    { title: 'Among Us', price: '$4.99', discount: '0%', rating: '82%', image: 'among-us' },
    { title: 'Beat Saber', price: '$29.99', discount: '10%', rating: '94%', image: 'beat-saber' }
  ]

  return (
    <div>
      <StoreNav />

      <div className="bg-gradient-to-b from-[#1b2838] to-[#0e1417] min-h-screen">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b2838] via-transparent to-[#1b2838]"></div>
          <img
            src="https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg"
            alt="Featured"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-8">
              <h1 className="text-5xl font-bold mb-4">Juxtopposed's Discovery Feed</h1>
              <p className="text-xl text-[--color-text-dim] max-w-2xl">
                Personalized recommendations based on your play style and preferences
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-8 py-12">
          {/* Featured Game Cards */}
          <div className="space-y-6">
            {games.map((game, index) => (
              <div
                key={index}
                className="bg-[#23262e] rounded-lg overflow-hidden hover:bg-[#2a323c] transition-all cursor-pointer"
              >
                <div className="flex gap-6 p-6">
                  {/* Left: Image Gallery */}
                  <div className="w-1/3">
                    <div className="aspect-video bg-[#1b2838] rounded-lg overflow-hidden mb-3">
                      <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900"></div>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-video bg-[#1b2838] rounded"></div>
                      ))}
                    </div>
                  </div>

                  {/* Middle: Game Info */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{game.title}</h2>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-4 h-4 text-[--color-primary]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-[--color-primary]">{game.rating} Positive</span>
                        <span className="text-xs text-[--color-text-dim]">560,000 User Reviews</span>
                      </div>
                    </div>

                    <p className="text-[--color-text-dim] text-sm mb-4 leading-relaxed">
                      An epic adventure awaits in this critically acclaimed title. Experience breathtaking visuals, engaging gameplay, and an unforgettable story that will keep you hooked for hours.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Open-world', 'RPG', 'Dark Fantasy', 'Soulslike', 'Difficult'].map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-[#1b2838] text-[--color-text-dim] text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-[--color-text-dim]">
                      <span>Feb 25, 2022</span>
                      <span>•</span>
                      <span>Windows</span>
                      <span>•</span>
                      <span>Single-player</span>
                    </div>
                  </div>

                  {/* Right: Pricing */}
                  <div className="w-64 flex flex-col justify-between">
                    <div>
                      {parseInt(game.discount) > 0 && (
                        <div className="bg-[--color-accent-green] text-white px-2 py-1 rounded text-sm font-bold inline-block mb-2">
                          -{game.discount}
                        </div>
                      )}
                    </div>

                    <div>
                      {parseInt(game.discount) > 0 && (
                        <div className="text-sm text-[--color-text-dim] line-through mb-1">
                          ${(parseFloat(game.price.replace('$', '')) / (1 - parseInt(game.discount) / 100)).toFixed(2)}
                        </div>
                      )}
                      <div className="text-2xl font-bold text-[--color-accent-green] mb-4">
                        {game.price}
                      </div>

                      <button className="w-full py-3 bg-[--color-accent-green] text-white font-bold rounded hover:bg-[--color-accent-green-hi] transition-colors mb-2">
                        Add to Cart
                      </button>

                      <button className="w-full py-2 bg-transparent border border-[--color-text-dim] text-[--color-text-main] rounded hover:border-white hover:text-white transition-colors">
                        Wishlist
                      </button>
                    </div>
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

export default Discover

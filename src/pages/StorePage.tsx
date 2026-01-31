import { GameCard, StoreHeader, Footer } from '../components/blocks';
import { featuredGames, specialOffers, newReleases, recentlyUpdated, topSellers } from '../data/games';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

export default function StorePage() {
  const mainFeatured = featuredGames[0];

  return (
    <div className="min-h-screen bg-bg-main">
      <StoreHeader />

      <main className="max-w-[1920px] mx-auto">
        {/* Hero Banner */}
        <section className="relative h-[400px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${mainFeatured.banner || mainFeatured.image})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent" />
          <div className="relative z-10 h-full flex items-end px-6 pb-8">
            <div className="max-w-lg">
              <Badge variant="primary" className="mb-2">Featured</Badge>
              <h1 className="text-4xl font-bold text-text-main mb-2">{mainFeatured.title}</h1>
              <p className="text-sm text-text-dim mb-4 line-clamp-2">{mainFeatured.description}</p>
              <div className="flex items-center gap-4">
                {mainFeatured.discount && (
                  <Badge variant="success" size="md">-{mainFeatured.discount}%</Badge>
                )}
                {mainFeatured.originalPrice && (
                  <span className="text-lg text-text-dim line-through">${mainFeatured.originalPrice.toFixed(2)}</span>
                )}
                <span className="text-2xl font-bold text-text-main">${mainFeatured.price?.toFixed(2)}</span>
                <Button variant="accent" size="lg">Buy Now</Button>
              </div>
            </div>
          </div>
        </section>

        <div className="px-6 py-8 space-y-12">
          {/* Featured Game Highlight */}
          <section className="bg-bg-highlight rounded-[--radius-lg] overflow-hidden">
            <div className="grid grid-cols-[1fr_400px]">
              <div className="relative aspect-video">
                <img
                  src={mainFeatured.image}
                  alt={mainFeatured.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col">
                <h2 className="text-2xl font-bold text-text-main mb-2">{mainFeatured.title}</h2>
                <p className="text-sm text-text-dim flex-1">{mainFeatured.description}</p>
                <div className="flex flex-wrap gap-1 my-3">
                  {mainFeatured.tags.map((tag) => (
                    <Badge key={tag} variant="default">{tag}</Badge>
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="flex-1">
                    <div className="text-xs text-text-dim">OVERALL REVIEWS:</div>
                    <div className="text-sm text-primary">
                      Very Positive ({mainFeatured.reviews.toLocaleString()})
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-text-dim">RELEASE DATE:</div>
                    <div className="text-sm text-text-main">{mainFeatured.releaseDate}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-bg-hover">
                  {mainFeatured.discount && (
                    <Badge variant="success" size="md">-{mainFeatured.discount}%</Badge>
                  )}
                  {mainFeatured.originalPrice && (
                    <span className="text-text-dim line-through">${mainFeatured.originalPrice.toFixed(2)}</span>
                  )}
                  <span className="text-xl font-bold text-text-main">${mainFeatured.price?.toFixed(2)}</span>
                  <Button variant="accent" className="ml-auto">Add to Cart</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Special Offers */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-text-main">Special Offers</h2>
              <Button variant="ghost" size="sm">See All</Button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...specialOffers, ...topSellers].slice(0, 4).map((game) => (
                <GameCard
                  key={game.id}
                  id={game.id}
                  title={game.title}
                  image={game.image}
                  price={game.price}
                  originalPrice={game.originalPrice}
                  discount={game.discount}
                  tags={game.tags}
                />
              ))}
            </div>
          </section>

          {/* Browse Sections */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-text-main">Play for Free</h2>
              <Button variant="ghost" size="sm">See All</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {topSellers.slice(0, 2).map((game) => (
                <GameCard
                  key={game.id}
                  id={game.id}
                  title={game.title}
                  image={game.image}
                  price={game.price}
                  tags={game.tags}
                />
              ))}
            </div>
          </section>

          {/* Recently Updated */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-text-main">Recently Updated</h2>
              <Button variant="ghost" size="sm">See All</Button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...recentlyUpdated, ...newReleases].map((game) => (
                <GameCard
                  key={game.id}
                  id={game.id}
                  title={game.title}
                  image={game.image}
                  price={game.price}
                  originalPrice={game.originalPrice}
                  discount={game.discount}
                  tags={game.tags}
                  variant="compact"
                />
              ))}
            </div>
          </section>

          {/* Now Trending */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-text-main">Now Trending</h2>
              <Button variant="ghost" size="sm">See All</Button>
            </div>
            <div className="space-y-2">
              {featuredGames.map((game) => (
                <GameCard
                  key={game.id}
                  id={game.id}
                  title={game.title}
                  image={game.image}
                  price={game.price}
                  originalPrice={game.originalPrice}
                  discount={game.discount}
                  tags={game.tags}
                  variant="horizontal"
                />
              ))}
            </div>
          </section>

          {/* Top Sellers */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-text-main">Top Sellers</h2>
              <Button variant="ghost" size="sm">See All</Button>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {[...topSellers, ...specialOffers, ...newReleases].slice(0, 5).map((game) => (
                <GameCard
                  key={game.id}
                  id={game.id}
                  title={game.title}
                  image={game.image}
                  price={game.price}
                  originalPrice={game.originalPrice}
                  discount={game.discount}
                  variant="compact"
                />
              ))}
            </div>
          </section>

          {/* Under $10 */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-text-main">Under $10</h2>
              <Button variant="ghost" size="sm">See All</Button>
            </div>
            <div className="grid grid-cols-6 gap-3">
              {[...topSellers, ...specialOffers].filter(g => (g.price || 0) < 15).slice(0, 6).map((game) => (
                <GameCard
                  key={game.id}
                  id={game.id}
                  title={game.title}
                  image={game.image}
                  price={game.price}
                  originalPrice={game.originalPrice}
                  discount={game.discount}
                  variant="compact"
                  showWishlist={false}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

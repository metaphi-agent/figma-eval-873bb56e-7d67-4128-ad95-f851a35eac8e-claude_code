import StoreNav from '../components/blocks/StoreNav'

const Browse = () => {
  return (
    <div>
      <StoreNav />
      <div className="min-h-screen bg-gradient-to-b from-[#1b2838] to-[#0e1417] p-8">
        <h1 className="text-4xl font-bold mb-4">Browse</h1>
        <p className="text-[--color-text-dim]">Explore games by category</p>
      </div>
    </div>
  )
}

export default Browse

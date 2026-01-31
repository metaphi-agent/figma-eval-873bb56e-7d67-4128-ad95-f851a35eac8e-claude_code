import StoreNav from '../components/blocks/StoreNav'

const PointShop = () => {
  return (
    <div>
      <StoreNav />
      <div className="min-h-screen bg-gradient-to-b from-[#1b2838] to-[#0e1417] p-8">
        <h1 className="text-4xl font-bold mb-4">Points Shop</h1>
        <p className="text-[--color-text-dim]">Redeem your Steam Points for exclusive items</p>
      </div>
    </div>
  )
}

export default PointShop

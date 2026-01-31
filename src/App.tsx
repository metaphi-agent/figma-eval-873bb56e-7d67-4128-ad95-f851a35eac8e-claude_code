import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/blocks/Layout'

// Lazy load pages for better performance
import { lazy, Suspense } from 'react'

const StorePage = lazy(() => import('./pages/StorePage'))
const ClientStore = lazy(() => import('./pages/ClientStore'))
const Discover = lazy(() => import('./pages/Discover'))
const Browse = lazy(() => import('./pages/Browse'))
const PointShop = lazy(() => import('./pages/PointShop'))
const Wishlist = lazy(() => import('./pages/Wishlist'))
const Cart = lazy(() => import('./pages/Cart'))
const LibraryHome = lazy(() => import('./pages/LibraryHome'))
const LibraryCollections = lazy(() => import('./pages/LibraryCollections'))
const Downloads = lazy(() => import('./pages/Downloads'))
const CommunityHome = lazy(() => import('./pages/CommunityHome'))
const GameCommunityHub = lazy(() => import('./pages/GameCommunityHub'))
const Discussions = lazy(() => import('./pages/Discussions'))
const Discussion = lazy(() => import('./pages/Discussion'))
const Forum = lazy(() => import('./pages/Forum'))
const Workshop = lazy(() => import('./pages/Workshop'))
const Market = lazy(() => import('./pages/Market'))
const Profile = lazy(() => import('./pages/Profile'))
const ProfileGames = lazy(() => import('./pages/ProfileGames'))
const ProfileScreenshots = lazy(() => import('./pages/ProfileScreenshots'))
const Settings = lazy(() => import('./pages/Settings'))

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-12 h-12 border-4 border-[--color-primary] border-t-transparent rounded-full animate-spin"></div>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/store" replace />} />

            {/* Store Routes */}
            <Route path="store" element={<StorePage />} />
            <Route path="store/client" element={<ClientStore />} />
            <Route path="discover" element={<Discover />} />
            <Route path="browse" element={<Browse />} />
            <Route path="points" element={<PointShop />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="cart" element={<Cart />} />

            {/* Library Routes */}
            <Route path="library" element={<LibraryHome />} />
            <Route path="library/collections" element={<LibraryCollections />} />

            {/* Downloads */}
            <Route path="downloads" element={<Downloads />} />

            {/* Community Routes */}
            <Route path="community" element={<CommunityHome />} />
            <Route path="community/game/:id" element={<GameCommunityHub />} />
            <Route path="community/discussions" element={<Discussions />} />
            <Route path="community/discussion/:id" element={<Discussion />} />
            <Route path="community/forum" element={<Forum />} />
            <Route path="community/workshop" element={<Workshop />} />
            <Route path="community/market" element={<Market />} />

            {/* Profile Routes */}
            <Route path="profile" element={<Profile />} />
            <Route path="profile/games" element={<ProfileGames />} />
            <Route path="profile/screenshots" element={<ProfileScreenshots />} />

            {/* Settings */}
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

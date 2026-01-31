import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/blocks';

// Lazy load pages for better performance
const StorePage = lazy(() => import('./pages/StorePage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const WishlistPage = lazy(() => import('./pages/WishlistPage'));
const LibraryPage = lazy(() => import('./pages/LibraryPage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const DownloadsPage = lazy(() => import('./pages/DownloadsPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-bg-main flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-text-dim">Loading...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg-main">
        <Header />
        <div className="pt-[33px]">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              {/* Store Routes */}
              <Route path="/" element={<StorePage />} />
              <Route path="/store" element={<StorePage />} />
              <Route path="/store/game/:id" element={<StorePage />} />
              <Route path="/browse" element={<StorePage />} />
              <Route path="/discover" element={<StorePage />} />
              <Route path="/points" element={<StorePage />} />
              <Route path="/curators" element={<StorePage />} />
              <Route path="/gift-cards" element={<StorePage />} />
              <Route path="/news" element={<StorePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />

              {/* Library Routes */}
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/library/collections" element={<LibraryPage />} />
              <Route path="/library/game/:id" element={<LibraryPage />} />

              {/* Community Routes */}
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/discussions" element={<CommunityPage />} />
              <Route path="/discussions/:id" element={<CommunityPage />} />
              <Route path="/workshop" element={<CommunityPage />} />
              <Route path="/market" element={<CommunityPage />} />
              <Route path="/broadcasts" element={<CommunityPage />} />

              {/* Profile Routes */}
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/profile/:id" element={<ProfilePage />} />
              <Route path="/profile/:id/games" element={<ProfilePage />} />
              <Route path="/profile/:id/screenshots" element={<ProfilePage />} />

              {/* Downloads */}
              <Route path="/downloads" element={<DownloadsPage />} />

              {/* Settings Routes */}
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/settings/privacy" element={<SettingsPage />} />
              <Route path="/settings/profile" element={<SettingsPage />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;

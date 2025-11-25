import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarNav from "./navbar";
import { WishlistProvider } from "./context/wishlistcontext";
import MainContent from "./maincontent";
import CategoryContent from "./category";
import BundlesContent from "./bundle";
import WishlistPage from "./wishlist";
import DownloadsPage from "./donwload";

import "./App.css";

function App() {
  return (
    <WishlistProvider>
      <Router>
        <div className="flex overflow-y-auto scrollbar-hide">
          <SidebarNav />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/category" element={<CategoryContent />} />
            <Route path="/bundle" element={<BundlesContent />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
          </Routes>
        </div>
      </Router>
    </WishlistProvider>
  );
}

export default App;

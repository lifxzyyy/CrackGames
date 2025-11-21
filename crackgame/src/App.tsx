import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarNav from "./navbar";
import MainContent from "./maincontent";
import CategoryContent from "./category";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex overflow-y-auto scrollbar-hide">
        <SidebarNav />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/category" element={<CategoryContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

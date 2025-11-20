import React from "react";
import { LayoutGrid, Layers, Database, Heart, Download, User, CircleAlert, Settings } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";


interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const MenuIcons = {
    home: <LayoutGrid className="w-5 h-5" />,
    category: <Layers className="w-5 h-5" />,
    bundle: <Database className="w-5 h-5" />,
    wishlist: <Heart className="w-5 h-5" />,
    downloads: <Download className="w-5 h-5" />,
    contact: <User className="w-5 h-5" />,
  };
    

  const menuItems = [
    { id: "home", label: "Home", icon: MenuIcons.home, path: "/" },
    { id: "category", label: "Category", icon: MenuIcons.category, path: "/category" },
    { id: "bundle", label: "Bundle", icon: MenuIcons.bundle, path: "/bundle" },
    { id: "wishlist", label: "Wishlist", icon: MenuIcons.wishlist, path: "/wishlist" },
    { id: "downloads", label: "Downloads", icon: MenuIcons.downloads, path: "/downloads" },
    { id: "contact", label: "Contact", icon: MenuIcons.contact, path: "/contact" },
  ];

  const handleItemClick = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div
      className={`fixed overflow-y-auto w-40 bg-gray-900 text-white min-h-screen ${className}`}
    >
      {/* Logo */}
      <div className="p-6 border-gray-700">
        <img
          className="w-[130px] h-auto mx-auto"
          src={new URL("./image/logo.png", import.meta.url).href}
          alt="Logo"
        />
      </div>

      <div className="px-4 ">
        <div className="border-t border-gray-700"></div>
      </div>

      {/* Mwenu isi */}
      <nav className="p-2">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleItemClick(item.path)}
                className={`w-full text-[13px] font-medium text-left px-4 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-3 group ${
                  isActive(item.path)
                    ? "bg-[#323F52] text-[#D9D9D9]"
                    : "text-[#747474] hover:bg-gray-800 hover:text-[#D9D9D9]"
                }`}
              >
                <span
                  className={`${
                    isActive(item.path)
                      ? "text-[#D9D9D9]"
                      : "text-[#747474] group-hover:text-[#D9D9D9]"
                  }`}
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Pembatas */}
      <div className="px-4 mt-20">
        <div className="border-t border-gray-700 my-2"></div>
      </div>

      {/* Informasi bawah */}
      <div className="p-2 mt-3">
        <h3 className="text-[#747474] font-[Poppins,sans-serif] text-[13px] font-medium px-4 mb-4">
          <CircleAlert className="w-5 h-5 inline-block mr-2" />
          Information
        </h3>
        <h3 className="text-[#747474] font-[Poppins,sans-serif] text-[13px] font-medium px-4">
          <Settings className="w-5 h-5 inline-block mr-2" />
          Settings
        </h3>
      </div>
    </div>
  );
};

export default SidebarNav;

// SidebarNav.tsx
import React, { useState } from "react";
import { LayoutGrid, Layers, Database, Heart, Download, User } from "lucide-react";

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className = "" }) => {
  const [activeItem, setActiveItem] = useState<string>("Home");

  const MenuIcons = {
    home: <LayoutGrid className="w-5 h-5" />,
    category: <Layers className="w-5 h-5" />,
    bundle: <Database className="w-5 h-5" />,
    wishlist: <Heart className="w-5 h-5" />,
    downloads: <Download className="w-5 h-5" />,
    contact: <User className="w-5 h-5" />,
  };
    

  const menuItems = [
    { id: "home", label: "Home", icon: MenuIcons.home },
    { id: "category", label: "Category", icon: MenuIcons.category },
    { id: "bundle", label: "Bundle", icon: MenuIcons.bundle },
    { id: "wishlist", label: "Wishlist", icon: MenuIcons.wishlist },
    { id: "downloads", label: "Downloads", icon: MenuIcons.downloads },
    { id: "contact", label: "Contact", icon: MenuIcons.contact },
  ];

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    };

  return (
    <div className={`w-40 bg-gray-900 text-white min-h-screen ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <img
          className="w-[130px] h-auto mx-auto"
          src={new URL("./image/logo.png", import.meta.url).href}
          alt="Logo"
        />
      </div>

      {/* Navigation Menu */}
      <nav className="p-2">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleItemClick(item.id)}
                className={`w-full text-sm font-medium text-left px-4 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-3 group ${
                  activeItem === item.id
                    ? "bg-[#323F52] text-[#D9D9D9]"
                    : "text-[#747474] hover:bg-gray-800 hover:text-[#D9D9D9]"
                }`}
              >
                <span
                  className={`${
                    activeItem === item.id ? "text-[#D9D9D9]" : "text-[#747474] group-hover:text-[#D9D9D9]"
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

      {/* Divider */}
      <div className="px-4 mt-23">
        <div className="border-t border-gray-700 my-2"></div>
      </div>

      {/* Information Settings Section */}
      <div className="p-2 mt-3">
        <h3 className="text-[#747474] font-[Poppins,sans-serif] text-sm font-medium px-4 mb-4">
          Information
        </h3>
        <h3 className="text-[#747474] font-[Poppins,sans-serif] text-sm font-medium px-4">
          Settings
        </h3>
        {/* Add additional settings items here if needed */}
      </div>
    </div>
  );
};

export default SidebarNav;

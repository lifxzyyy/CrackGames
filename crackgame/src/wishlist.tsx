// pages/WishlistPage.tsx
import React from "react";
import { useWishlist } from "./context/wishlistcontext";
import SearchBar from "./searchbar";
import { Heart } from "lucide-react";

const WishlistPage: React.FC = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();

  // Categories data

  return (
    <div className="ml-40 flex-1 p-8 bg-[#111315] min-h-screen">
      {/* Search Bar */}
      <div className="mb-4 max-w-4xl">
        <SearchBar />
      </div>

      {/* Wishlist Items Section */}
      <div className="mt-8 flex flex-col items-start mb-6">
        <span className="text-[25px] font-[Poppins,sans-serif] text-[#F4F5F9] font-medium">
          My Wishlist
        </span>
        <span className="text-[15px] text-[#D9D9D9] font-[200] mb-4 font-[Poppins,sans-serif]">
          {wishlistItems.length} games in your wishlist
        </span>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-12"></div>
      ) : (
        <>
          {/* Wishlist Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#1E1F23] rounded-lg hover:shadow-lg transition-shadow duration-200"
              >
                {/* Game Image */}
                <div>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full p-2 h-50 object-cover rounded-xl"
                  />
                </div>

                {/* Game Title */}
                <h3 className="text-[20px] px-3 font-[Montserrat,sans-serif] font-medium text-[#F4F5F9] mb-1">
                  {item.title}
                </h3>

                {/* Game Description */}
                <p className="text-[#A1A3A7] px-3 font-[Poppins,sans-serif] text-[9px] mb-3 leading-relaxed">
                  {item.description}
                </p>

                {item.games && item.games.length > 0 && (
                  <ul className="space-y-2 mb-4">
                    {item.games.map((game, index) => (
                      <li
                        key={index}
                        className="flex px-4 text-[10px] items-center text-[#D9D9D9] font-[Poppins,sans-serif]"
                      >
                        <span className="w-1.5 h-1.5 bg-[#FF0000] rounded-full mr-2"></span>
                        {game}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Price and Actions */}
                <div className="flex px-3 pb-6 items-center justify-between">
                  <span className="text-[15px] px-2 font-[Poppins,sans-serif] py-1 rounded-sm bg-[#434547] font-medium text-[#D3D3D3]">
                    {item.price}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="bg-[#434547] p-1.5 px-2 rounded-sm transition-colors duration-200 group"
                    >
                      <Heart
                        className="w-5 h-5 text-[#C62D2D] group-hover:text-[#747474] fill-current"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Clear All Button */}
          {wishlistItems.length > 0 && (
            <div className="mt-8 flex justify-end">
              <button
                onClick={clearWishlist}
                className="bg-[#C62D2D] hover:bg-red-700 text-white px-6 py-2 rounded font-[Poppins,sans-serif] font-medium transition-colors duration-200"
              >
                Clear All Wishlist
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default WishlistPage;

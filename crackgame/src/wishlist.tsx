// pages/WishlistPage.tsx
import React from "react";
import { useWishlist } from "./context/wishlistcontext";
import SearchBar from "./searchbar";
import { Heart } from "lucide-react";

const WishlistPage: React.FC = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#1E1F23] rounded-lg hover:shadow-lg transition-shadow duration-200 flex flex-col relative"
              >
                {item.games && item.games.length > 0 && (
                  <div className="absolute top-0 left-0 z-10">
                    <div className="flex items-center">
                      <div className="bg-red-600 [clip-path:polygon(0_71%,59%_71%,80%_0,0_0)] rounded-t-lg pl-4 pr-14 pb-6 pt-2 text-white text-[15px] font-[Montserrat,sans-serif] font-semibold">
                        Promo
                      </div>
                    </div>
                  </div>
                )}
                <div>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full p-2 h-50 object-cover rounded-xl"
                  />
                </div>

                <h3 className="text-[20px] px-3 font-[Montserrat,sans-serif] font-medium text-[#F4F5F9] mb-1">
                  {item.title}
                </h3>

                {/* Content section dengan height yang konsisten */}
                <div className="flex-1 px-3 min-h-[85px]">
                  <p className="text-[#A1A3A7] font-[Poppins,sans-serif] text-[9px]  leading-relaxed min-h-[10px]">
                    {item.description}
                  </p>

                  {item.games && item.games.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {item.games.map((game, index) => (
                        <li
                          key={index}
                          className="flex text-[10px] items-center text-[#D9D9D9] font-[Poppins,sans-serif]"
                        >
                          <span className="w-1.5 h-1.5 bg-[#FF0000] rounded-full mr-2 flex-shrink-0"></span>
                          {game}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Price and Actions - selalu di bottom */}
                <div className="flex px-3 pb-4 items-center justify-between mt-auto">
                  <span className="text-[15px] px-2 font-[Poppins,sans-serif] py-1 rounded-sm bg-[#434547] font-medium text-[#D3D3D3]">
                    {item.price}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="bg-[#434547] hover:bg-[#747474] p-1.5 px-2 rounded-sm transition-colors duration-200 group"
                    >
                      <Heart
                        className="w-5 h-5 text-[#C62D2D] fill-current"
                        fill="currentColor"
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

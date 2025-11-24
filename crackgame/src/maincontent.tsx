import React from "react";
import SearchBar from "./searchbar";
import WishlistButton from "./component/wishlistbutton";
import { Heart, ChevronRight, ChevronLeft } from "lucide-react";

const MainContent: React.FC = () => {
  const trendingGames = [
    {
      id: 13,
      icon: "./src/image/game.png",
      title: "Death Stranding 2",
      description:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
      price: "Rp. 5.000,00",
    },
    {
      id: 14,
      icon: "./src/image/game.png",
      title: "Death Stranding 2",
      description:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
      price: "Rp. 5.000,00",
    },
    {
      id: 15,
      icon: "./src/image/game.png",
      title: "Death Stranding 2",
      description:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
      price: "Rp. 5.000,00",
    },
    {
      id: 16,
      icon: "./src/image/game.png",
      title: "Death Stranding 2",
      description:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
      price: "Rp. 5.000,00",
    },
  ];


  return (
    <div className=" ml-40 flex-1 p-8 bg-[#111315] min-h-screen">
      <div className="mb-4 max-w-4xl">
        <SearchBar />
      </div>
      <div className="text-[25px] font-[Poppins,sans-serif] font-medium text-white mb-4">
        New's
      </div>
      <div className="w-auto h-[372px] bg-[url(./src/image/banner.png)] bg-contain rounded-lg shadow-md p-6 pt-3 mb-20">
        <div className="flex flex-wrap font-[Poppins,sans-serif] gap-3 mb-45">
          <span className="bg-black/15 backdrop-blur-lg text-[#D3D3D3] px-7 py-[6px] rounded-lg text-sm font-medium">
            Action
          </span>
          <span className="bg-black/15 backdrop-blur-lg text-[#D3D3D3] px-7 py-[6px] rounded-lg text-sm font-medium">
            Open World
          </span>
          <span className="bg-black/15 backdrop-blur-lg text-[#D3D3D3] px-7 py-[6px] rounded-lg text-sm font-medium">
            Adventure
          </span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">PEAK</h2>
        {/* Iklan Awal */}
        <div className=" flex items-center justify-between">
          <p className="text-[#D3D3D3]  font-[Poppins,sans-serif] leading-relaxed">
            PEAK adalah game panjat tebing kooperatif
            <br />
            dengan konsekuensi kesalahan sekecil apa
            <br />
            pun bisa berakibat fatal.
          </p>
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="flex items-center space-x-4 bg-[#C62D2D] hover:bg-[#A31212] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer">
              <span className="text-white text-medium font-[Poppins,sans-serif] text-[17px]">
                Buy Now
              </span>
              <div className="w-px h-[25px] bg-[#A31212]"></div>
              <span className="text-white font-[Poppins,sans-serif] font-medium text-[17px]">
                Rp. 5.000,00
              </span>
            </div>

            <div className="border bg-[#1F2123] border-[#C62D2D] hover:bg-[#C62D2D] text-[#C62D2D] hover:text-white p-3 rounded-lg transition-colors duration-200 cursor-pointer">
              <Heart className="w-6 h-6 text-[#B9B9B9]" />
            </div>
          </div>
        </div>
      </div>

      {/* tren Now */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-[Poppins,sans-serif] font-bold text-[#F4F5F9] mb-1">
              Trending now
            </h2>
            <p className="text-[#D9D9D9] font-[Poppins,sans-serif]">
              Temukan Game Favoritmu Di xxstore
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <ChevronLeft className="w-11 h-11 rounded-sm p-2 bg-[#1F2123] text-[#D9D9D9] cursor-pointer hover:bg-[#2A2B30] transition-colors duration-200" />
            <ChevronRight className="w-11 h-11 rounded-sm p-2 bg-[#1F2123] text-[#D9D9D9] cursor-pointer hover:bg-[#2A2B30] transition-colors duration-200" />
          </div>
        </div>
      </div>

      {/* Trending Gamenya */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trendingGames.map((game) => (
          <div
            key={game.id}
            className="bg-[#1E1F23] rounded-lg hover:shadow-lg transition-shadow duration-200"
          >
            <div>
              <img
                src={game.icon}
                alt={game.title}
                className="w-full p-2 h-50 object-cover rounded-xl"
              />
            </div>
            <h3 className="text-[20px] px-4 font-[Montserrat,sans-serif] font-medium text-[#F4F5F9] mb-1">
              {game.title}
            </h3>
            <p className="text-[#A1A3A7] px-4 font-[Poppins,sans-serif] text-[9px] mb-4 leading-relaxed">
              {game.description}
            </p>
            <div className="flex px-4 pb-4 items-center justify-between">
              <span className="text-[15px] px-2 font-[Poppins,sans-serif] py-1 rounded-sm bg-[#434547] font-medium text-[#D3D3D3]">
                {game.price}
              </span>
              <WishlistButton game={game} size="sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;

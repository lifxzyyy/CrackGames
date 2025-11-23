import React from "react";
import SearchBar from "./searchbar";
import { Heart } from "lucide-react";
const BundlesContent: React.FC = () => {
  const bundlesGames = [
    {
      id: 1,
      icon: "./src/image/bundle.png",
      title: "Promo 3 Games",
      games: ["Raft 2", "Raft 2", "Raft 2"],
      price: "Rp. 10.000,00",
      discount: "50% OFF",
    },
    {
      id: 2,
      icon: "./src/image/bundle.png",
      title: "Promo 3 Games",
      games: ["Raft 2", "Raft 2", "Raft 2"],
      price: "Rp. 10.000,00",
      discount: "50% OFF",
    },
    {
      id: 3,
      icon: "./src/image/bundle.png",
      title: "Promo 3 Games",
      games: ["Raft 2", "Raft 2", "Raft 2"],
      price: "Rp. 10.000,00",
      discount: "50% OFF",
    },
    {
      id: 4,
      icon: "./src/image/bundle.png",
      title: "Promo 3 Games",
      games: ["Raft 2", "Raft 2", "Raft 2"],
      price: "Rp. 10.000,00",
      discount: "50% OFF",
    },
  ];
  return (
    <div className="ml-40 flex-1 p-8 bg-[#111315] min-h-screen">
      <div className="mb-4 max-w-4xl">
        <SearchBar />
      </div>
      <div className="text-[25px] font-[Poppins,sans-serif] font-medium text-white mb-4">
        Promotional news
      </div>
      <div className="w-auto h-[200px] bg-[url(./src/image/promotional.png)] bg-cover rounded-lg shadow-md p-6 pt-3 mb-10"></div>
      <div className="flex flex-col">
        <span className="text-[25px] font-[Poppins,sans-serif] font-medium text-[#F4F5F9]">
          Promo The Game
        </span>
        <span className="text-[16px] font-[Poppins,sans-serif] mb-6 text-[#D9D9D9] font-light">
          Paket Game Murah
        </span>
      </div>

      {/* Promo Bundles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bundlesGames.map((game) => (
          <div
            key={game.id}
            className="bg-[#1E1F23] rounded-lg hover:shadow-lg transition-shadow duration-200 relative"
          >
            {/* Promo Badge */}
            <div className="absolute top-0 left-0 z-10">
              <div className="flex items-center">
                <div
                  className="bg-red-600
    [clip-path:polygon(0_71%,59%_71%,80%_0,0_0)] rounded-t-lg pl-4 pr-14 pb-6 pt-2 text-white text-[15px] font-[Montserrat,sans-serif] font-semibold"
                >
                  Promo
                </div>
              </div>
            </div>

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
            <ul className="space-y-2 mb-4">
              {game.games.map((game, index) => (
                <li
                  key={index}
                  className="flex px-4 text-[10px] items-center text-[#D9D9D9] font-[Poppins,sans-serif]"
                >
                  <span className="w-1.5 h-1.5 bg-[#FF0000] rounded-full mr-2"></span>
                  {game}
                </li>
              ))}
            </ul>
            <div className="flex px-4 pb-4 items-center justify-between">
              <span className="text-[15px] px-2 font-[Poppins,sans-serif] py-1 rounded-sm bg-[#434547] font-medium text-[#D3D3D3]">
                {game.price}
              </span>
              <div className="bg-[#434547] hover:bg-[#747474] p-1.5 px-2 rounded-sm transition-colors duration-200 cursor-pointer group">
                <Heart className="w-5 h-5 text-[#747474] fill-current hover:text-[#C62D2D] group-hover:text-[#C62D2D]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BundlesContent;

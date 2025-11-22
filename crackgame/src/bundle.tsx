import React from "react";
import SearchBar from "./searchbar";
const BundlesContent: React.FC = () => {
  const bundlesGames = [
    {
      id: 1,
      title: "Promo 3 Games",
      games: ["Raft 2", "Raft 2", "Raft 2"],
      price: "Rp. 10.000,00",
      discount: "50% OFF",
    },
    {
      id: 2,
      title: "Promo 3 Games",
      games: ["Raft 2", "Raft 2", "Raft 2"],
      price: "Rp. 10.000,00",
      discount: "50% OFF",
    },
    {
      id: 3,
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
        <span className="text-[25px] font-[Poppins,sans-serif] font-medium text-[#F4F5F9] mb-1">
          Promo The Game
        </span>
        <span className="text-[16px] font-[Poppins,sans-serif] text-[#D9D9D9] font-light">
          Paket Game Murah
        </span>
      </div>
      {/* Promo Bundles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bundlesGames.map((bundle) => (
          <div
            key={bundle.id}
            className="bg-[#1A1A1A] rounded-lg p-6 border border-[#2A2A2A] hover:border-[#3A3A3A] transition-colors duration-200"
          >
            {/* Discount Badge */}
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-[Poppins,sans-serif] font-bold text-white">
                {bundle.title}
              </h3>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {bundle.discount}
              </span>
            </div>

            {/* Games List */}
            <div className="mb-4">
              <ul className="space-y-2">
                {bundle.games.map((game, index) => (
                  <li
                    key={index}
                    className="flex items-center text-[#D9D9D9] font-[Poppins,sans-serif]"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {game}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price and Buy Button */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#D9D9D9] font-[Poppins,sans-serif] text-sm">
                  Total Price
                </p>
                <p className="text-white font-[Poppins,sans-serif] font-bold text-xl">
                  {bundle.price}
                </p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-[Poppins,sans-serif] font-semibold transition-colors duration-200">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BundlesContent;

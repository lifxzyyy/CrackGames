import React from "react";
import SearchBar from "./searchbar";
import { Heart } from "lucide-react";

const CategoryContent: React.FC = () => {
  const categoryGames = [
    {
      id: 1,
      icon: "./src/image/game.png",
      title: "Death Stranding 2",
      description:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
      price: "Rp. 5.000,00",
    },
    {
      id: 2,
      icon: "./src/image/game.png",
      title: "Death Stranding 2",
      description:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
      price: "Rp. 5.000,00",
    },
    {
      id: 3,
      icon: "./src/image/game.png",
      title: "Death Stranding 2",
      description:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
      price: "Rp. 5.000,00",
    },
    {
      id: 4,
      icon: "./src/image/game.png",
      title: "Death Stranding 2",
      description:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
      price: "Rp. 5.000,00",
    },
    {
      id: 5,
      icon: "./src/image/game.png",
      title: "Death Stranding 2",
      description:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
      price: "Rp. 5.000,00",
    },
    {
      id: 6,
      icon: "./src/image/game.png",
      title: "Death Stranding 2",
      description:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
      price: "Rp. 5.000,00",
    },
    {
      id: 7,
      icon: "./src/image/game.png",
      title: "Death Stranding 2",
      description:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
      price: "Rp. 5.000,00",
    },
    {
      id: 8,
      icon: "./src/image/game.png",
      title: "Death Stranding 2",
      description:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
      price: "Rp. 5.000,00",
    },
  ];

  const categories = [
    // Baris 1
    [
      { name: "Action" },
      { name: "RPG" },
      { name: "Strategy" },
      { name: "Racing" },
      { name: "Shooter" },
      { name: "Survival" },
      { name: "Puzzle" },
      { name: "Casual" },
      { name: "Indie" },
      { name: "Adventure" },
      { name: "Simulation" },
      { name: "Sports" },
      { name: "Fighting" },
      { name: "Horror" },
      { name: "Open World" },
      { name: "Platformer" },
      { name: "MMO/Online" },
      { name: "Sandbox" },
    ],
  ];

  return (
    <div className="ml-40 flex-1 p-8 bg-[#111315] min-h-screen">
      <div className="mb-4 max-w-4xl">
        <SearchBar />
      </div>
      <div className="text-[25px] font-[Poppins,sans-serif] font-medium text-white mb-4">
        Categories
      </div>
      <div className=" ">
        {categories.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-3">
            {row.map((category, index) => (
              <button
                key={index}
                className={`
                 py-3 text-[13px] rounded-lg font-[Poppins,sans-serif] font-medium text-white
                  transition-all duration-200 hover:scale-105 hover:shadow-lg
                  bg-[#1B1F24] hover:brightness-110
                  min-w-[106.6px] text-center
                `}
              >
                {category.name}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-start">
        <span className="text-[25px] font-[Poppins,sans-serif] text-[#F4F5F9] font-medium">
          Play The Game
        </span>
        <span className="text-[15px] text-[#D9D9D9] font-[200] mb-4 font-[Poppins,sans-serif]">
          Temukan Game Favoritmu Di xxstore
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10">
        {categoryGames.map((game) => (
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
            <h3 className="text-[20px] px-3 font-[Montserrat,sans-serif] font-medium text-[#F4F5F9] mb-1">
              {game.title}
            </h3>
            <p className="text-[#A1A3A7] px-3 font-[Poppins,sans-serif] text-[9px] mb-3 leading-relaxed">
              {game.description}
            </p>
            <div className="flex px-3 pb-6 items-center justify-between">
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

export default CategoryContent;

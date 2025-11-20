import React from "react";
import SearchBar from "./searchbar";

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
  ];

  return (
    <div className=" ml-40 flex-1 p-8 bg-[#111315] min-h-screen">
      <div className="mb-4 max-w-4xl">
        <SearchBar />
      </div>
    </div>
  );
};

export default CategoryContent;

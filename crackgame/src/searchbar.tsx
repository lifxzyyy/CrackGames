import React from "react";
import { Search, Mail } from "lucide-react";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      {/* Isi */}
      <div className="flex items-center flex-1 bg-[#1B1F24] border border-[#C62D2D] rounded-lg px-2 py-[2px] shadow-sm">
        <div className="flex items-center space-x-2">
          <Search className="w-[22px] h-[22px] text-white" />
          <div className="w-px h-[25px] bg-[#C62D2D]"></div>
        </div>

        <input
          type="text"
          placeholder="search for the name of the game"
          className="flex-1 mx-3 py-1 min-w-[800px] text-[15px] text-medium text-white font-[Poppins,sans-serif] placeholder-[#414850] bg-transparent border-none outline-none"
        />
      </div>
      <div className="ml-4 px-4 py-[6px] bg-[#1B1F24] border border-[#C62D2D] rounded-lg shadow-sm cursor-pointer">
        <Mail className="w-6 h-6 text-[#C62D2D]" />
      </div>
      <div>
        <button className="ml-4 text-[#C62D2D] text-[14px] font-[Poppins,sans-serif] text-semibold px-6 py-2 bg-[#1B1F24] border border-[#C62D2D] rounded-lg shadow-sm cursor-pointer">
          Masuk
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

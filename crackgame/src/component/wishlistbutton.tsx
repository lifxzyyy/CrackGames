// components/WishlistButton.tsx
import React from "react";
import { useWishlist } from "../context/wishlistcontext";
import type { Game } from "../context/wishlistcontext";
import { Heart } from "lucide-react";

interface WishlistButtonProps {
  game: Game;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({
  game,
  size = "md",
  className = "",
}) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const isWishlisted = isInWishlist(game.id);

  const handleWishlistClick = () => {
    if (isWishlisted) {
      removeFromWishlist(game.id);
    } else {
      addToWishlist(game);
    }
  };

  const sizeClasses = {
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  return (
    <div
      onClick={handleWishlistClick}
      className={`
        bg-[#434547] hover:bg-[#747474] p-1.5 px-2 rounded-sm 
        transition-colors duration-200 cursor-pointer group
        ${className}
      `}
    >
      <Heart
        className={`${
          sizeClasses[size]
        } text-[#747474] fill-current group-hover:text-[#C62D2D] ${
          isWishlisted ? "text-[#C62D2D]" : "group-hover:text-[#C62D2D]"
        }`}
        fill={isWishlisted ? "currentColor" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
      />
        
    </div>
  );
};

export default WishlistButton;

// contexts/WishlistContext.tsx
import React, { createContext, useContext, useState,  type ReactNode } from "react";

export interface Game {
  id: number;
  title: string;
  description: string;
  price: string;
  icon?: string;
  games?: string[]; 
  discount?: string;
}

interface WishlistContextType {
  wishlistItems: Game[];
  addToWishlist: (game: Game) => void;
  removeFromWishlist: (gameId: number) => void;
  isInWishlist: (gameId: number) => boolean;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [wishlistItems, setWishlistItems] = useState<Game[]>([]);

  const addToWishlist = (game: Game) => {
    setWishlistItems((prev) => {
      if (prev.find((item) => item.id === game.id)) {
        return prev; // Already in wishlist
      }
      return [...prev, game];
    });
  };

  const removeFromWishlist = (gameId: number) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== gameId));
  };

  const isInWishlist = (gameId: number) => {
    return wishlistItems.some((item) => item.id === gameId);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

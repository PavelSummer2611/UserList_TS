import { createContext } from "react";
import type { FavoritesContextType } from "../types/types";

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
	undefined
);

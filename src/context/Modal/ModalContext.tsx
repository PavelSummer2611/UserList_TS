import { createContext } from "react";
import type { User } from "../../types/types";

type ModalContextType = {
	openModal: (user: User | null) => void;
};

export const ModalContext = createContext<ModalContextType>({
	openModal: () => {},
});

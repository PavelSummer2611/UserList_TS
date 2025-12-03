import { useState, type ReactNode } from "react";
import type { User } from "../../types/types";
import { ModalContext } from "./ModalContext";
import NewUserModal from "../../components/NewUserModal/NewUserModal";

export function ModalProvider({ children }: { children: ReactNode }) {
	const [modalUser, setModalUser] = useState<User | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (user: User | null) => {
		setIsModalOpen(true);
		setModalUser(user);
	};
	const closeModal = () => {
		setIsModalOpen(false);
		setModalUser(null);
	};

	return (
		<ModalContext.Provider value={{ openModal }}>
			{children}
			{isModalOpen && (
				<NewUserModal
					user={modalUser}
					onClose={closeModal}
				/>
			)}
		</ModalContext.Provider>
	);
}

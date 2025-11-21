import React from "react";

type ModalProps = {
	onClose: () => void;
	children: React.ReactNode;
};

export function Modal({ onClose, children }: ModalProps) {
	return (
		<div className="fixed inset-0 flex items-center justify-center z-50">
			<div
				className="absolute inset-0 bg-black opacity-50"
				onClick={onClose}
			></div>
			<div className="relative bg-black border mx-5 rounded-2xl shadow-lg w-full max-w-md p-6 z-10">
				<button
					className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold cursor-pointer"
					onClick={onClose}
				>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
}

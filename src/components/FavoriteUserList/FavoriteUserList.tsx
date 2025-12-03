import React from "react";
import type { FavoriteUserList } from "../../types/types";
import UserCard from "../UserCard/UserCard";
import UserCardButton from "../UserCard/UserCardButton";

function FavoriteUserList({
	users,
	onEdit,
	onDelete,
}: FavoriteUserList) {
   console.log('FavoriteUserList rendered');

	return (
		<div className="flex flex-wrap justify-center gap-4">
			{users.map((user) => (
				<UserCard
					key={user.login.uuid}
					{...user}
				>
					<UserCardButton
						label="Удалить из избранного"
						onClick={() => onDelete(user.login.uuid)}
						className="bg-yellow-900 hover:bg-yellow-700"
					/>
					<UserCardButton
						label="Изменить"
						onClick={() => onEdit(user)}
						className="bg-gray-800 rounded hover:bg-gray-500"
					/>
				</UserCard>
			))}
		</div>
	);
}

export default React.memo(FavoriteUserList);


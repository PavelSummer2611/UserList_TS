import type { User } from "../../types/types";
import { UserAvatar } from "./UserAvatar";
import { UserInfo } from "./UserInfo";

type UserCardProps = User & {
	children?: React.ReactNode;
};

export default function UserCard({ children, ...user }: UserCardProps) {
	return (
		<div
			className=" flex flex-col   gap-1 p-2 m-2 border 
			rounded shadow-sm shadow-gray-300 
			transition transform 
			duration-200 ease-in-out 
			hover:shadow-lg hover:-translate-y-1 max-w-50"
		>
			<UserAvatar src={user.picture.large} />

			<UserInfo
				name={user.name}
				dob={user.dob}
			/>
			{children}
		</div>
	);
}

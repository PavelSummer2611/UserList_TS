import type { User } from "../../types/types";

export function UserInfo({ name, dob }: Pick<User, "name" | "dob">) {
	return (
		<div className="flex flex-col gap-1 mt-auto">
			<div>
				{name.first} {name.last}
			</div>
			<div className="text-sm">возраст: {dob.age}</div>
		</div>
	);
}

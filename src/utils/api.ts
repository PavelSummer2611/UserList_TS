import type { User } from "../types/types";

export async function fetchUsers(count = 10): Promise<User[]> {
	const response = await fetch(`https://randomuser.me/api/?results=${count}`);
	if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
	const data: { results: User[] } = await response.json();

	return data.results.map((u) => ({
		login: { uuid: u.login.uuid },
		name: { first: u.name.first, last: u.name.last },
		dob: { age: u.dob.age },
		picture: { large: u.picture.large },
	}));
}

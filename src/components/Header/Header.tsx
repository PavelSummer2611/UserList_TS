import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="flex justify-between p-3 md:p-10 items-center">
			<Link to="/">
				<div
					className="transform cursor-pointer text-2xl transition duration-200 
            ease-in-out hover:-translate-y-1 hover:shadow-lg"
				>
					UserList
				</div>
			</Link>

			<nav>
				<Link to="/">
					<button className="cursor-pointer px-2 hover:text-amber-500">Главная</button>
				</Link>
				<Link to="/favorite">
					<button className="cursor-pointer px-2  hover:text-amber-500">Избранное</button>
				</Link>
			</nav>
		</header>
	);
}

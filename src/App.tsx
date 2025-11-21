import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Layout from "./components/Layout/Layout";
import { FavoritesProvider } from "./context/FavoritesProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<FavoritesProvider>
					<Router>
						<Routes>
							<Route element={<Layout />}>
								<Route
									path="/"
									element={<Home />}
								/>
								<Route
									path="/favorite"
									element={<Favorite />}
								/>
							</Route>
						</Routes>
					</Router>
				</FavoritesProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;

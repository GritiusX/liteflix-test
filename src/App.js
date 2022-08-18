import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import NotFound from "./Pages/NotFound/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LiteflixContext from "./Components/LiteflixContext/LiteflixContext";

export default function App() {
	return (
		<LiteflixContext>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/movies" element={<Movies />} />
					<Route exact path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</LiteflixContext>
	);
}

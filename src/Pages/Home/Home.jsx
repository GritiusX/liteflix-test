import React from "react";
import { useContext } from "react";
import LButton from "../../Components/LButton/LButton";
import LDropdown from "../../Components/LDropdown/LDropdown";
import { Context } from "../../Components/LiteflixContext/LiteflixContext";
import { FiPlay } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import "./Home.scss";
import LMovie from "../../Components/LMovie/LMovie";

export default function Home() {
	const { newMovie } = useContext(Context);

	return (
		/* en main-container tengo que poner el background url */
		<main className="main-container">
			<article className="main-section">
				<h4 className="subtitle">
					Original de <span className="bold">Liteflix</span>
				</h4>
				<h1 className="title">La casa de papel</h1>
				<div className="main-buttons-container">
					<LButton>
						<FiPlay />
						Reproducir
					</LButton>
					<LButton className="bordered">
						<AiOutlinePlus />
						Mi lista
					</LButton>
				</div>
			</article>
			{/* hacer un map aqui con cada item */}
			<article className="popular-section">
				<LDropdown />
				<div className="movies-wrapper">
					<LMovie />
					<LMovie />
					<LMovie />
					<LMovie />
				</div>
			</article>
		</main>
	);
}

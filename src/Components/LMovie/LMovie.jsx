import React, { useState } from "react";
import { useToggle } from "../../Hooks/Animation Hooks/useToggle";
import { VscPlayCircle } from "react-icons/vsc";
import "./LMovie.scss";

export default function LMovie({ data }) {
	const [clicked, setClicked] = useState(false);
	/* const [toggleDirection, toggleOn] = useToggle(0, 20); */
	return (
		<div className="movie-container">
			<div
				className={`movie ${clicked ? "test" : ""}`}
				onClick={() => setClicked(!clicked)}
			>
				<VscPlayCircle className="icon-size" />
				<p className="movie-text">text</p>
			</div>
		</div>
	);
}

import React, { useState } from "react";
import { BsChevronDown, BsCheck2 } from "react-icons/bs";
import Select from "react-select";
import "./LDropdown.scss";

export default function LDropdown({ children }) {
	const [open, setOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("Populares");

	return (
		<>
			<section
				className="dropdown-container"
				onClick={() => {
					setOpen(!open);
					console.log(open);
				}}
			>
				{!open && (
					<div className="dropdown-header">
						<h3 className="text see">Ver:</h3>
						<h3 className="text dropdown">{selectedOption}</h3>
						<BsChevronDown />
					</div>
				)}
				{open && (
					<ul className="dropdown-sidebar">
						<li
							className="sidebar-li"
							onClick={() => {
								setSelectedOption("Populares");
							}}
						>
							<p className="text li">Populares</p>
							{selectedOption === "Populares" && <BsCheck2 />}
						</li>
						<li
							className="sidebar-li"
							onClick={() => {
								setSelectedOption("Mis Peliculas");
							}}
						>
							<p className="text li">Mis Peliculas</p>
							{selectedOption === "Mis Peliculas" && <BsCheck2 />}
						</li>
					</ul>
				)}
			</section>
		</>
	);
}

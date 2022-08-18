import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiMenuAltRight, BiBell } from "react-icons/bi";
import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import "./Navbar.scss";

export default function Navbar() {
	const [clicked, setClicked] = useState(false);

	return (
		<>
			<nav className="navbar-container">
				<ul className="navbar">
					<li>
						<Link className="home-nav" to="/">
							<span className="bold">LITE</span>FLIX
						</Link>
					</li>
					<li>
						<Link className="movie-nav" to="/movies">
							<AiOutlinePlus className="icon-plus" />
							Agregar película
						</Link>
					</li>
				</ul>
				{clicked && (
					<article className="sidebar">
						<section className="position-container">
							<div className="buttons-container">
								<GrFormClose
									className="close-side"
									onClick={() => {
										setClicked(!clicked);
										console.log("menu clicked", clicked);
									}}
								/>
								<Link className="mobile-home-nav" to="/">
									<span className="bold">LITE</span>FLIX
								</Link>
								<BiBell className="bell-side" />
								<div className="img-side"></div>
							</div>
							<ul className="sidebar-links">
								<Link className="home-link" to="/">
									Inicio
								</Link>
								<li>Series</li>
								<li>Películas</li>
								<li>Agregadas recientemente</li>
								<li>Populares</li>
								<li>Mis peliculas</li>
								<li>Mi lista</li>
								<Link className="add-movie" to="/movies">
									<AiOutlinePlus className="icon-plus" />
									Agregar película
								</Link>
								<li>Cerrar sesión</li>
							</ul>
						</section>
					</article>
				)}
				{!clicked && (
					<>
						<BiMenuAltRight
							className="menu-nav"
							onClick={() => {
								setClicked(!clicked);
								console.log("menu clicked", clicked);
							}}
						/>
						<BiBell className="bell-nav" />
						<div className="img-nav"></div>
					</>
				)}
			</nav>
		</>
	);
}

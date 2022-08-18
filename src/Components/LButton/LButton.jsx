import React from "react";
import "./LButton.scss";

export default function Button({ children, className }) {
	return (
		<span className={`btn ${className ? className : ""}`}>{children}</span>
	);
}

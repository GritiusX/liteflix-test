import React, { useState } from "react";
export const Context = React.createContext({});

export default function LiteflixContext({ children }) {
	const [newMovie, setNewMovie] = useState();
	return (
		<Context.Provider value={{ newMovie, setNewMovie }}>
			{children}
		</Context.Provider>
	);
}

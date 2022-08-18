import { useState } from "react";

export const useToggle = (inicialValue, spacingValue) => {
	const [toggleDirection, setToggleDirection] = useState(inicialValue);
	const toggleOn = () => {
		setToggleDirection(
			toggleDirection === inicialValue ? spacingValue : inicialValue
		);
	};
	return [toggleDirection, toggleOn];
};

import React, { useState } from "react";
import ButtonList from "./ButtonList";

function MagicButton () {
	const [count, setCount] = useState(0);

	const handleMagicClick = () => {
		setCount(count + 1);
	};

	const generateButtonStyle = (index) => {
		return index % 2 === 0 ? "lightButton" : "darkButton";
	};

	return (
		<div className="magicButtonContainer">
			<button onClick={handleMagicClick}>
				Click to Magic Button
			</button>
			<ButtonList
				count={count}
				generateButtonStyle={generateButtonStyle}
			/>
		</div>
	);
};

export default MagicButton;
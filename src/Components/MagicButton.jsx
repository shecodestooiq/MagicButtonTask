import React, { useState } from "react";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const MagicButton = ({ color }) => {
  return (
    <button style={{ backgroundColor: color }}>
      My Background Color is {color}
    </button>
  );
};

const ParentButton = () => {
  const [buttons, setButtons] = useState([]);

  const handleCreateButton = () => {
    const newColor = getRandomColor();
    const newButton = <MagicButton color={newColor} />;
    setButtons([...buttons, newButton]);
  };

  return (
    <div className="Container">
      <button onClick={() => handleCreateButton()} className="btnTextSize">
        Create Magic Button
      </button>
      <div className="btnContainer">
        {React.Children.map(buttons, (button, index) => (
          <div key={index}>
            {React.cloneElement(button, {
              onClick: () => handleCreateButton(button.props.color),
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ParentButton;

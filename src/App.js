import React, { useState } from "react";

import randomColor from 'randomcolor';

const getRandomColor = () => {
  return randomColor();
};

const MagicButton = ({ randomColor }) => {
  return (
    <button style={{ backgroundColor: randomColor}}>
      hiiii
    </button>
  );
};

const App = () => {
  const [buttons, setButtons] = useState([]);

  const handleCreateButton = () => {
    const newColor = getRandomColor();
    const newButton = <MagicButton randomColor={newColor} />;
    setButtons([...buttons, newButton]);
  };

  return (
    <div className="Container">
      <button onClick={() => handleCreateButton()} className="btnTextSize">
       click mee
      </button>
      <div className="btnContainer">
        {React.Children.map(buttons, (button, index) => (
          <div key={index}>
            {React.cloneElement(button, {
              onClick: () => handleCreateButton(button.props.randomColor),
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
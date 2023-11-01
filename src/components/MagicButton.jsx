import React, { useState, cloneElement } from 'react';
import '../index.css'
function MagicButton({ children }) {
  const [buttons, setButtons] = useState([]);

  const addNewButton = () => {
    const newButton = cloneElement(children, {
      style: {
        ...children.props.style,
        backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        borderRadius: `${Math.floor(Math.random() * 50)}%`,
      },

    });
    setButtons([...buttons, newButton]);
  };

  return (
    <div className="btn-holder" >
      <button onClick={addNewButton} className="btn">Magic Button</button>
      <div className="button-list">{buttons}</div>
    </div>
  );
}

export default MagicButton;
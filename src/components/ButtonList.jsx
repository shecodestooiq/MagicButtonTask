import React from 'react';
import "../index.css"
function ButtonList({ children }) {
  return (
    <div>
      
      <div className="button-list">
        {React.Children.map(children, (child, index) => (
          <div key={index}>{child}</div>
        ))}
      </div>
    </div>
  );
}

export default ButtonList;
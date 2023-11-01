import React, { useState } from 'react';
import MagicButton from './MagicButton';
import ButtonList from './ButtonList';

function SamplePage() {
  const [buttonCounter, setButtonCounter] = useState(0);

  const incrementButtonCounter = () => {
    setButtonCounter(buttonCounter + 1);
  };

  return (
    <div>
      <h1>Magic Button Demo</h1>
      <MagicButton onClick={incrementButtonCounter}>
        <button style={{ padding: '8px', border: 'none', cursor: 'pointer' }}>
          New Button {buttonCounter + 1}
        </button>
      </MagicButton>
      <ButtonList>
        {Array.from({ length: buttonCounter }, (_, index) => (
          <button style={{ backgroundColor: 'lightblue' }} key={index}>
            Button {index + 1}
          </button>
        ))}
      </ButtonList>
    </div>
  );
}

export default SamplePage;

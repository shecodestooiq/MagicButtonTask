import React,{ useState } from 'react';


let counter=0;

const getNum = () => {
  counter =counter +1;
  return counter
};

const MagicButton = ({ Num }) => {
  return (
    <button onClick={getNum} style={{
      backgroundColor:'lightblue',
      border:'none',
      outline:'none',
      padding:'20px 15px',
      marginTop:'20px',
      color:'black'
      }}>
      Button number {Num}
    </button>
  );
};

const App = () => {
  const [buttons, setButtons] = useState([]);

  const handleCreateButton = () => {
    
    if(buttons.length >=10){
      alert('That is Enough Buttons For you!')
      return
    }else{
      let newNum = getNum();
      const newButton = <MagicButton Num={newNum} />;
      setButtons([...buttons, newButton]);
    }
  };

  return (
    <div>
      <button onClick={() => handleCreateButton()} style={{
    backgroundColor:'lightblue',
    marginLeft:'45%',
    border:'none',
    outline:'none',
    padding:'20px 15px',
    marginTop:'20px',
    color:'black'
    }}>
       click here to clone me!
      </button>
      <div style={{display:'flex'
      ,alignItems:'center',
      justifyContent:'center'
      ,flexWrap:'wrap',
      flexDirection:'row',
      columnGap:'10px'
      }}>
        {React.Children.map(buttons, (button, index) => (
          <div key={index}>
            {React.cloneElement(button, {
              onClick: () => handleCreateButton(button.props.newNum),
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
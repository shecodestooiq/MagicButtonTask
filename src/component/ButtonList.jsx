import React from 'react'

function ButtonList({ count, generateButtonStyle }) {
    
    return (
        <div className='buttoncontainer'>
            <h2>MagicButton</h2>
            <ul>
                {React.Children.map(
                    Array.from({ length: count }),
                    (_, index) => (
                        <li key={index}>
                            {React.cloneElement(
                                <button>
                                    Button {index + 1}
                                </button>,
                                { className: generateButtonStyle(index) }
                            )}
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};
    export default ButtonList;

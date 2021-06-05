import React from 'react';
const BigButton = (props) => {

   
    return (
        <button style={{ width: '14rem', padding: '.5rem', backgroundColor: 'transparent', color: `red`, border: '10px solid', margin: '1rem' }}><h3>{ props.title}</h3></button>
    )
}

export default BigButton;
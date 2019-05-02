import React from 'react';
import './card.css';

function Card(props) {
    return (
        <div className='Card'>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )

}

export default Card; 
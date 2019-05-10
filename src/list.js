import React from 'react';
import Card from './card.js';
import './list.css';

function List(props){
    return(
        <section className='List'>
            <header>
                <h2>{props.header}</h2>
            </header>
            <button onClick= {()=> props.onAddRandom(props.id)}>Add Random Card</button>
            <div className='List-cards'>
                {props.cards.map( (card) =>
                <Card 
                    key = {card.id}
                    id = {card.id}
                    title = {card.title}
                    content = {card.content}
                    onDeleteCard = {props.onDeleteCard}
               />)}
            </div>
        </section>
    )
}

export default List;
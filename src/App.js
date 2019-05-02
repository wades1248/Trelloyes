import React from 'react';
import List from './list.js';
import './App.css';


function App(props) {
  return (
    <main className='App'>
      <header className='App-Header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {props.store.lists.map(list=>(
          <List 
           key={list.id} 
           header={list.header} 
           cards={list.cardIds.map( i => props.store.allCards[i])}
          />)
        )}
      </div>
    </main>
  );
}

export default App;

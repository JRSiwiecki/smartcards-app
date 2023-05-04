import React, { useState, useEffect } from "react";
import './App.css'

type TDeck = {
  _id: string,
  title: string;
}

function App() {

  const [decks, setDecks] = useState<TDeck[]>([]);
  const [title, setTitle] = useState("");

  async function createNewDeck(e: React.FormEvent)
  {
    
    // Prevent refreshing on submit
    e.preventDefault(); 
    
    // Send data to DB
    const response = await fetch("http://localhost:3000/decks", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deck = await response.json();
    
    // Get old array and append new deck
    setDecks([...decks, deck]);
    
    // Clear title input after a new deck is created
    setTitle("");

  }

  async function handleDeleteDeck(deckId: string)
  {
    await fetch(`http://localhost:3000/decks/${deckId}`, {
      method: "DELETE"
    });

    // Remove deck from UI if it is the one we just deleted from the DB
    setDecks(decks.filter(deck => deck._id !== deckId));

  }

  // useEffect allows you to synchronize a component with an
  // external system
  useEffect( () => {
    
    async function fetchDecks() {
      
      const response = await fetch("http://localhost:3000/decks");
      const newDecks = await response.json();
      setDecks(newDecks);
    }
    
    fetchDecks();
  }, []);

  return (
      <div className="App">

        <ul className="decks">
          {
            decks.map( (deck) => (
              <li key={deck._id}>{deck.title}
                <button onClick={ () => handleDeleteDeck(deck._id)}>X</button>
              </li>
            ))
          }
        </ul>

        <form onSubmit={createNewDeck}>
          <label htmlFor="deck-title">Deck Title</label>
          <input id="deck-title" type="text" value={title}
            onChange={ (e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
              }}
          />
          <button>Create New Deck</button>
        </form>
      </div>
  );
}

export default App

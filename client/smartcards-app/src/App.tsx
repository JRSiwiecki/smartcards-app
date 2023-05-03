import React, { useState } from "react";
import './App.css'

function App() {

  const [title, setTitle] = useState("");

  async function createNewDeck(e: React.FormEvent)
  {
    
    // Prevent refreshing on submit
    e.preventDefault(); 
    
    // Send data to DB
    await fetch("http://localhost:3000/decks", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Clear title input after a new deck is created
    setTitle("");

  }

  return (
      <div className="App">
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

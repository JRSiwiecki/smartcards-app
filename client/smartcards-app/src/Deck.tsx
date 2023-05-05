import React, { useState, useEffect } from "react";
import "./App.css";
import { useParams } from "react-router-dom";
import { TDeck } from "./api/getDecks";
import { createCard } from "./api/createCard";
import { getDeck } from "./api/getDeck";

export default function Deck() {
  const [deck, setDeck] = useState<TDeck | undefined>();
  const [cards, setCards] = useState<string[]>([]);
  const [text, setText] = useState("");
  const { deckId } = useParams();

  async function handleCreateCard(e: React.FormEvent) {
    // Prevent refreshing on submit
    e.preventDefault();
    const { cards: serverCards } = await createCard(deckId!, text);
    setCards(serverCards);

    // Clear title input after a new deck is created
    setText("");
  }

  // async function handleDeleteDeck(deckId: string) {
  //   deleteDeck(deckId);
  //   // Remove deck from UI if it is the one we just deleted from the DB
  //   setDecks(decks.filter((deck) => deck._id !== deckId));
  // }

  // useEffect allows you to synchronize a component with an
  // external system
  useEffect(() => {
    async function fetchDeck() {
      if (!deckId) {
        return;
      }

      const newDeck = await getDeck(deckId);
      setDeck(newDeck);
      setCards(newDeck.cards);
    }

    fetchDeck();
  }, [deckId]);

  return (
    <div className="App">
      <ul className="cards">
        {cards.map((card) => (
          <li key={card}>
            {/* <button onClick={() => handleDeleteDeck(deck._id)}>X</button> */}
            {card}
          </li>
        ))}
      </ul>

      <form onSubmit={handleCreateCard}>
        <label htmlFor="card-text">Card Text</label>
        <input
          id="card-text"
          type="text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
        <button>Create Card</button>
      </form>
    </div>
  );
}

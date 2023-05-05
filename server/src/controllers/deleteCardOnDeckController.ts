// Module Imports
import { Request, Response } from "express";

// Model Imports
import Deck from "../models/Deck";

export async function deleteCardOnDeckController(req: Request, res: Response) {
  const deckId = req.params.deckId;
  const cardIndex = req.params.index;

  const deck = await Deck.findById(deckId);

  if (!deck) {
    return res.status(400).send("No Deck ID exists");
  }

  deck.cards.splice(parseInt(cardIndex), 1);
  await deck.save();
  res.json(deck);
}

// Module Imports
import { Request, Response } from "express";

// Model Imports
import Deck from "../models/Deck";

export async function createCardForDeckController(req: Request, res: Response) {
  const deckId = req.params.deckId;
  const deck = await Deck.findById(deckId);

  if (!deck) {
    return res.status(400).send("No Deck ID exists");
  }

  const { text } = req.body;
  deck.cards.push(text);
  await deck.save();

  res.json(deck);
}

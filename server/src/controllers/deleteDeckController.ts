// Module Imports
import { Request, Response } from "express";

// Model Imports
import Deck from "../models/Deck";

export async function deleteDecksController(req: Request, res: Response) {
  const deckId = req.params.deckId;
  const deletedDeck = await Deck.findByIdAndDelete(deckId);
  res.json(deletedDeck);
}

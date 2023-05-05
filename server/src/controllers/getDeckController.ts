// Module Imports
import { Request, Response } from "express";

// Model Imports
import Deck from "../models/Deck";

export async function getDeckController(req: Request, res: Response) {
  // .find() gets all data from collection
  const { deckId } = req.params;
  const deck = await Deck.findById(deckId);
  res.json(deck);
}

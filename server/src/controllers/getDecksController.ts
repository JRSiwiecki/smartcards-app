// Module Imports
import { Request, Response } from "express";

// Model Imports
import Deck from "../models/Deck";

export async function getDecksController(req: Request, res: Response) {
  // .find() gets all data from collection
  const decks = await Deck.find();
  res.json(decks);
}

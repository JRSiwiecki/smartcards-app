import { API_URL } from "./config";

// Send data to DB
export async function createDeck(title: string) {
  const response = await fetch(`${API_URL}/decks`, {
    method: "POST",
    body: JSON.stringify({
      title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

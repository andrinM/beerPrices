/* This file handles talking to the backend */

const API_URL = 'http://localhost:5000/api';

export const beerService = {
  // GET all beers
  async fetchBeers() {
    const response = await fetch(`${API_URL}/beers`);
    if (!response.ok) throw new Error('Failed to fetch');
    return response.json();
  },

  // POST a new beer
  async addBeer(beerData, token) {
    const response = await fetch(`${API_URL}/beers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(beerData)
    });
    if (!response.ok) throw new Error('Failed to add beer');
    return response.json();
  }
};
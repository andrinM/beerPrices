/* This file handles talking to the backend */

const API_URL = 'http://localhost:5000/api';

export const barService = {
    // GET all bars
    async fetchBars() {
        const response = await fetch(`${API_URL}/bars`);
        if (!response.ok) throw new Error('Failed to fetch');
        return response.json();
    },
};
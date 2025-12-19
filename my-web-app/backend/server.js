const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to the database
const db = mysql.createConnection({
    host: 'database', // This matches the service name in docker-compose.yml
    user: 'root',
    password: 'password123',
    database: 'my_db'
});

app.get('/api/beers', (req, res) => {
    db.query('SELECT * FROM beers', (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend running on http://0.0.0.0:${PORT}`);
});
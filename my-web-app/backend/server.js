const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_super_secret_key_123'; // In production, move this to .env

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

// The "Security Guard" Middleware
const authenticateAdmin = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Get token from "Bearer TOKEN"

    if (!token) return res.status(401).json({ message: "No token, authorization denied" });

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err || decoded.role !== 'admin') {
            return res.status(403).json({ message: "Token is not valid or you are not an admin" });
        }
        req.user = decoded;
        next(); // Permission granted! Move to the next function.
    });
};

// Protected Add beer
app.post('/api/beers', authenticateAdmin, (req, res) => {
    const { name, price } = req.body;

    const query = 'INSERT INTO beers (name, price) VALUES (?, ?)';
    db.query(query, [name, price], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Beer added successfully!", id: result.insertId });
    });
});

// Public Beer List
app.get('/api/beers', (req, res) => {
    db.query('SELECT * FROM beers', (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Public Bar List
app.get('/api/bars', (req, res) => {
    db.query('SELECT * FROM bars', (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    })
})

const path = require('path');

// This makes the folder accessible via http://localhost:5000/logos/filename.svg
app.use('/logos', express.static(path.join(__dirname, 'uploads/logos')));

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
        if (err || results.length === 0) return res.status(401).json({ message: "User not found" });

        const user = results[0];

        // Check password (In this step, we compare plain text for your 'admin123' placeholder)
        // Later we will use bcrypt.compare()
        if (password !== user.password_hash) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Create the "Wristband" (Token)
        const token = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ token, role: user.role });
    });
});

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend running on http://0.0.0.0:${PORT}`);
});
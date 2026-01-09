const express = require('express');
const mysql = require('mysql2/promise'); // /promise makes the result of db.execute() an Array
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_super_secret_key_123'; // In production, move this to .env
const app = express();
app.use(cors());
app.use(express.json());

// 1. Create the Pool (This does not open connections immediately)
const pool = mysql.createPool({
    host: 'database',
    user: 'root',
    password: 'password123',
    database: 'my_db',
    waitForConnections: true,
    connectionLimit: 10, // Adjust based on your needs
    queueLimit: 0
});

// 2. GET route (Simplified and Stable)
app.get('/api/images', async (req, res) => {
    try {
        // 'pool.execute' automatically gets a connection and releases it
        const [rows] = await pool.execute('SELECT public_id, title FROM images ORDER BY created_at DESC');
        res.json(rows);
    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({ error: "Database query failed" });
    }
});

// 3. POST route (Using await)
app.post('/api/images', async (req, res) => {
    const { public_id, title } = req.body;
    try {
        const [result] = await pool.execute(
            'INSERT INTO images (public_id, title) VALUES (?, ?)',
            [public_id, title]
        );
        res.status(201).json({ message: "Saved!", id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 4. Login route (Refactored to Async/Await)
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const [results] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);

        if (results.length === 0) {
            return res.status(401).json({ message: "User not found" });
        }

        const user = results[0];
        // Note: Using bcrypt.compare() is better, but keeping your current logic:
        if (password !== user.password_hash) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ token, role: user.role });
    } catch (err) {
        res.status(500).json({ error: "Server error during login" });
    }
});

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});

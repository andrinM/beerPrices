import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function Login({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST', // Tells the server we are SENDING data, not just asking for it
                headers: { 'Content-Type': 'application/json' }, // Tells the server "I am speaking JSON"
                body: JSON.stringify({ username, password }), // The actual envelope containing the credentials
            });

            const data = await response.json();

            if (response.ok) {
                // Save token to browser memory
                localStorage.setItem('token', data.token);
                onLoginSuccess(data); // Tell App.jsx we are in!
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError("Server connection failed");
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '2rem', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3>Admin Login</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">Login</Button>
            </Form>
        </div>
    );
}

export default Login;
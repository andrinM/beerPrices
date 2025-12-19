import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" className="mb-4 p-3 shadow-sm">
            < Container fluid>
                <Navbar.Brand href="#home">
                    🍺 <span className="ms-2">Beer Prices Switzerland</span>
                </Navbar.Brand>
                <Navbar.Text>
                    Track your favorite brews
                </Navbar.Text>
            </ Container>
        </Navbar>
    );
}

// This allows us to "import" it into App.jsx
export default Header;
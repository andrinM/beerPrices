import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import Logo from './Logo';

function MenuOverlay({ navbarOpen, setNavbarOpen, topOffset }) {

    return (
        <div className={`overlay-menu ${navbarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} style={{ display: navbarOpen ? 'block' : 'none' }}>
            {/* This container handles the vertical scrolling for everything inside */}
            < Container className="flex top-0 left-0 d-flex flex-column" style={{ maxWidth: '1000px', paddingTop: `${topOffset}px` }}>
                {/* CONTENT (Links) */}
                < main className="flex-grow-1 d-flex align-items-center justify-content-center pb-5" >
                    <Nav className="flex-column text-center">
                        <Nav.Link href="/" onClick={() => {
                            setNavbarOpen(false);
                        }} className="menu-item">HOME</Nav.Link>
                        <Nav.Link href="/lineup" onClick={() => {
                            setNavbarOpen(false);
                        }} className="menu-item">LINEUP</Nav.Link>
                        <Nav.Link href="/tickets" onClick={() => {
                            setNavbarOpen(false);
                        }} className="menu-item">TICKETS</Nav.Link>
                        <Nav.Link href="/info" onClick={() => {
                            setNavbarOpen(false);
                        }} className="menu-item">INFO</Nav.Link>
                        <Nav.Link href="/faq" onClick={() => {
                            setNavbarOpen(false);
                        }} className="menu-item">FAQ</Nav.Link>
                        <Nav.Link href="/contact" onClick={() => {
                            setNavbarOpen(false);
                        }} className="menu-item">CONTACT</Nav.Link>
                        <Nav.Link href="/contact" onClick={() => {
                            setNavbarOpen(false);
                        }} className="menu-item">CONTACT</Nav.Link>
                        <Nav.Link href="/contact" onClick={() => {
                            setNavbarOpen(false);
                        }} className="menu-item">CONTACT</Nav.Link>
                        <Nav.Link href="/contact" onClick={() => {
                            setNavbarOpen(false);
                        }} className="menu-item">CONTACT</Nav.Link>
                    </Nav>
                </main >

            </Container >
        </div >
    );
}

export default MenuOverlay;
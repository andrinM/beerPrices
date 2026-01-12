import React, { useState, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav, Container, Button, Offcanvas, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from './Logo';
import MenuOverlay from './MenuOverlay';

const Header = forwardRef(({ navbarOpen, setNavbarOpen, isVisible }, ref) => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <>
            <Navbar ref={ref} className={`w-full top-0 left-0 flex z-2 ${isVisible ? "header-visible" : "header-hidden"} ${navbarOpen ? "bg-secondary" : "bg-primary"}`}>
                <Container className="d-flex flex-column align-items-center" style={{ maxWidth: '1000px' }}>
                    <Button onClick={() => setNavbarOpen(!navbarOpen)} className="align-self-end mb-5">
                        Icon will go here
                    </Button>
                    <Logo color={navbarOpen ? "#ffedb3" : "#6d4ce5"} style={{ maxWidth: '800px', width: '100%' }} />
                </Container>
            </Navbar >
        </>
    );
});
export default Header;
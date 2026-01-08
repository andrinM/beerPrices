import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logoText from '../../assets/logo_text.svg';

function Navigation() {

    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }


    return (
        <Navbar bg="none" sticky="top" className="py-3">
            <Container fluid className="d-flex justify-content-between align-items-center">

                {/* <div className="nav-col-left d-flex align-items-center" style={{ flex: 1 }}>
                    <Button variant="outline-light" size="sm" onClick={() => changeLanguage('de')} className="me-1">DE</Button>
                    <Button variant="outline-light" size="sm" onClick={() => changeLanguage('en')}>EN</Button>
                </div> */}

                <LinkContainer to="/" className="mx-auto">
                    <Navbar.Brand className="m-0 p-0">
                        <img
                            src={logoText}
                            alt="Festival Logo"
                            style={{
                                height: 'clamp(50px, 8vw, 100px)', // Large responsive height
                                width: 'auto'
                            }}
                        />
                    </Navbar.Brand>
                </LinkContainer>

                <div className="d-flex justify-content-end" style={{ flex: 1 }}>
                    <Navbar.Toggle aria-controls="main-nav" />

                    <Navbar.Collapse id="main-nav">
                        <Nav className="ms-auto text-end">
                            <Nav.Link href="/lineup">Lineup</Nav.Link>
                            <Nav.Link href="/tickets">Tickets</Nav.Link>
                            <Nav.Link href="/archive">Archive</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>

                {/* <div className="nav-col-right d-flex justify-content-end" style={{ flex: 1 }}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/lineup"><Nav.Link>Lineup</Nav.Link></LinkContainer>
                            <LinkContainer to="/tickets"><Nav.Link>Tickets</Nav.Link></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </div> */}

            </Container>
        </Navbar>
    );
}

export default Navigation;
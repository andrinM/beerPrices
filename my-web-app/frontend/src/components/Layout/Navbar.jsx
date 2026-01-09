import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav, Container, Button, Offcanvas, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from './Logo';

function Navigation() {

    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <Navbar bg="none" className="py-5">
            <Container
                fluid
                className="d-flex flex-column justify-content-center align-items-center position-relative"
                style={{
                    marginLeft: 0,
                    marginRight: 0,
                    paddingLeft: '1rem',
                    paddingRight: '1rem'
                }}
            >
                <Button class="navbar-toggler align-self-end mb-5" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </Button>
                <Logo
                    // color={"green"}
                    style={{
                        maxWidth: '800px'
                    }}
                />
            </Container>
        </Navbar>
    );
}

export default Navigation;
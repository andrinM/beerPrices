import React, { useState } from 'react';
import { Container, Button, Collapse } from 'react-bootstrap'
import DropdownIcon from '../icons/DropdownIcon'

const InfoDropDown = ({ title, text }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    function toggleDropdown() {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <Container id="info-container" className="mb-5">
            <div id="info-box-title">
                <div className="d-flex align-items-center justify-content-between px-md-5 py-md-5 px-4 py-2 ">
                    <h3>{title}</h3>
                    <Button onClick={toggleDropdown} className={`btn-icon-only ${dropdownOpen ? "dropdown-open" : "dropdown-closed"}`} variant="none">
                        <DropdownIcon />
                    </Button>
                </div>
            </div>
            <Collapse in={dropdownOpen}>
                <div id="info-collapse-text">
                    <div className="px-md-5 py-md-5 px-4 py-2">
                        <div className="mt-3 text-muted">
                            {text}
                        </div>
                    </div>
                </div>
            </Collapse>
        </Container>
    )

}

export default InfoDropDown;
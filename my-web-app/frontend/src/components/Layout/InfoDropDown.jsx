import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap'
import DropdownIcon from '../icons/DropdownIcon'

const InfoDropDown = ({ title, text }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    function toggleDropdown() {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <Container>
            <div className="info-box-title mt-5">
                <div className="d-flex align-items-center justify-content-between">
                    <h3>{title}</h3>
                    <Button onClick={toggleDropdown} className={`btn-icon-only ${dropdownOpen ? "dropdown-open" : "dropdown-closed"}`} variant="none">
                        <DropdownIcon />
                    </Button>
                </div>
            </div>
            <span>{text}</span>

        </Container>
    )

}

export default InfoDropDown;
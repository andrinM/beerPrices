import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function BarProfile({ bar, show, onClose }) {
    if (!bar) {
        return
    }

    return (
        <Modal show={show} onHide={onClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>
                    <img
                        src={`/logos/${bar.logo_path}`}
                        alt=""
                        style={{
                            height: '40px',
                            width: '40px',
                            objectFit: 'contain',
                            marginRight: '15px'
                        }}
                        onError={(e) => { e.target.style.display = 'none'; }} // Hide if missing
                    />
                    {bar.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default BarProfile;
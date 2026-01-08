import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function AddBeerForm({ onAdd }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !price) return;
        onAdd(name, price);
        setName(''); // Clear fields
        setPrice('');
    };

    return (
        <Form onSubmit={handleSubmit} className="mb-4 p-3 border rounded bg-light">
            <h5>Add New Beer</h5>
            <Row>
                <Col md={6}>
                    <Form.Control
                        placeholder="Beer Name (e.g. Quöllfrisch)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Col>
                <Col md={4}>
                    <Form.Control
                        type="number"
                        step="0.05"
                        placeholder="Price (CHF)"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Col>
                <Col md={2}>
                    <Button type="submit" variant="success" className="w-100">Add</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default AddBeerForm;
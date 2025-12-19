import React from 'react';
import { Card, Button } from 'react-bootstrap';

function BarProfile({ bar }) {
    if (!bar) {
        return <div className="p-4 text-muted border rounded">Select a bar to see details</div>
    }

    return (
        <Card className="shadow-sm">
            <Card.Body>
                <Card.Title>{bar.name}</Card.Title>
                <Card.Subtitle>{bar.location}</Card.Subtitle>
                <Card.Text>
                    Opening Hours: {bar.hours || "not available"}
                    House Beet: {bar.houseBeer || "not available"}
                </Card.Text>
                <Button>Visit Website</Button>
            </Card.Body>

        </Card>
    )
}

export default BarProfile;
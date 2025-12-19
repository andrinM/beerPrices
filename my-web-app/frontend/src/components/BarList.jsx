import React from 'react';
import { ListGroup } from 'react-bootstrap';

function BarList({ bars, onSelectBar, selectedBarId }) {
    return (
        <ListGroup>
            {bars.map((bar) => (
                <ListGroup.Item
                    key={bar.id}
                    action
                    active={selectedBarId === bar.id}
                    onClick={() => onSelectBar(bar)}
                    style={{ cursonr: 'pointer' }}>
                    {bar.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default BarList;
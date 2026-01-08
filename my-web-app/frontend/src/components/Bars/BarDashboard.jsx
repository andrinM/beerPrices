import React, { useState } from 'react';
import BarList from './BarList';
import BarMap from './BarMap';
import BarProfile from './BarProfile';
import ViewMode from './ViewMode'

import { Table, Container, Navbar, Row, Col, Button } from 'react-bootstrap';


const VIEWS = {
    MAP: "map",
    LIST: "list",
};

function BarDashboard({ bars }) {
    const [selectedBar, setSelectedBar] = useState(null);
    const [viewMode, setViewMode] = useState(VIEWS.MAP);
    const handleCloseProfile = () => setSelectedBar(null);

    return (
        <Row>
            <Col md={12}>
                <h3>Local Bars</h3>
                <ViewMode changeViewMode={setViewMode} />
                {viewMode === VIEWS.MAP ?
                    <BarMap
                        bars={bars}
                        onSelectBar={setSelectedBar} // We give the BarList the set function. This function will be executed onClick in the BarList
                        selectedBarId={selectedBar?.id}
                    />
                    :
                    <BarList
                        bars={bars}
                        onSelectBar={setSelectedBar} // We give the BarList the set function. This function will be executed onClick in the BarList
                        selectedBarId={selectedBar?.id}
                    />}

            </Col>
            <Col>
                <BarProfile
                    bar={selectedBar}
                    show={selectedBar !== null}
                    onClose={handleCloseProfile} />
            </Col>
        </Row>
    )
}

export default BarDashboard
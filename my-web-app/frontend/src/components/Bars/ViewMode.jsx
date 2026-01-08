import { ButtonGroup, Button } from 'react-bootstrap';



function ViewMode({ changeViewMode }) {
    return (
        <div>
            <ButtonGroup>
                <Button onClick={() => changeViewMode('map')}>Map</Button>
                <Button onClick={() => changeViewMode('list')}>List</Button>
            </ButtonGroup>
        </div>
    )
}

export default ViewMode;
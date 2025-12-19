import React, { useEffect, useState } from 'react';
import { Table, Container, Navbar, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import BarList from './components/BarList';
import BarProfile from './components/BarProfile';

function App() {
  const [beers, setBeers] = useState([]); // beers holds the data, setBeers is the function to update the data (only function allowed to)
  const [bars] = useState([
    { id: 1, name: "The Old Crow", location: "Zürich", houseBeer: "TurbinenBräu" },
    { id: 2, name: "Bierwerk Züri", location: "Zürich", houseBeer: "Pale Ale" },
    { id: 3, name: "Eldorado", location: "Zürich", houseBeer: "Chopfab" }
  ]);

  const [selectedBar, setSelectedBar] = useState(null);

  useEffect(() => {
    // Fetch the data from our Backend container
    fetch('http://localhost:5000/api/beers') // Sends the request to the backend
      .then(response => {
        console.log("1. Raw Response Object:", response);
        return response.json();
      }) // Response object "envelope", not the actual data
      .then(data => {
        console.log("2. The actual Beer Array:", data);
        setBeers(data);
      }) // Actual data and setting it to the state
      .catch(err => console.error("Error fetching beers:", err));
  }, []); // the [] is for only running once, when the page loaded

  return (
    <div>
      {/* 2. Use the component like a custom HTML tag */}
      <Header />

      <Container>
        <h3>Current Price List</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Beer Name</th>
              <th>Price (CHF)</th>
            </tr>
          </thead>
          <tbody>
            {beers.map((beer, index) => (
              <tr key={index}>
                <td>{beer.name}</td>
                <td>{Number(beer.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Container fluid className="px-4">
        <Row>
          {/* Left Side: List (Takes 4 out of 12 columns) */}
          <Col md={4}>
            <h3>Local Bars</h3>
            <BarList
              bars={bars}
              onSelectBar={setSelectedBar}
              selectedBarId={selectedBar?.id}
            />
          </Col>

          {/* Right Side: Profile (Takes 8 out of 12 columns) */}
          <Col md={8}>
            <h3>Details</h3>
            <BarProfile bar={selectedBar} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
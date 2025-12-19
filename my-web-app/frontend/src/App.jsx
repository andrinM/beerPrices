import React, { useEffect, useState } from 'react';
import { Table, Container, Navbar } from 'react-bootstrap';

function App() {
  const [beers, setBeers] = useState([]); // beers holds the data, setBeers is the function to update the data (only function allowed to)

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
    <Container className="mt-5">
      <Navbar bg="dark" variant="dark" className="mb-4 p-3 rounded">
        <Navbar.Brand href="#home">🍺 Beer Prices Switzerland</Navbar.Brand>
      </Navbar>

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
  );
}

export default App;
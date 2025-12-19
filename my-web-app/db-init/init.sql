CREATE TABLE IF NOT EXISTS beers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO beers (name, price) VALUES 
('Quöllfrisch', 5.50),
('Feldschlösschen', 4.80),
('Calanda', 5.20),
('Chopfab', 6.00);
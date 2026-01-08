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

CREATE TABLE IF NOT EXISTS bars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    latitude DECIMAL(18, 15) NOT NULL,
    longitude DECIMAL(18, 15) NOT NULL,
    logo_path VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO bars (name, latitude, longitude, logo_path ) VALUES 
('Waldmeier Bar & Diner', 47.39195644820395, 8.045033722144789, 'waldmeier.svg'),
('Tuchlaube Cafe Bar', 47.39392421638161, 8.04371665564907, 'tuchlaube.svg'),
('Mad Cat', 47.39300290375433, 8.042796837604294, 'madcat.svg');


-- Users
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Let's add you as a placeholder admin (Password: 'admin123' - we will hash this later)
INSERT INTO users (username, password_hash, role) 
VALUES ('admin_user', 'admin123', 'admin');
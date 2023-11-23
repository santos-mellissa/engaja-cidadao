require('dotenv').config();
const connection = require('./connection');
const colors = require('../../utils/colors');

const DATABASE = process.env.MYSQL_DATABASE;
const query = `
    DROP DATABASE IF EXISTS ${DATABASE};
    CREATE SCHEMA IF NOT EXISTS ${DATABASE} DEFAULT CHARACTER SET utf8;
    USE ${DATABASE};
        
    CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(45),
    document_number VARCHAR(11),
    phone VARCHAR(45),
    email VARCHAR(45),
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    street VARCHAR(45) NOT NULL,
    number VARCHAR(6) NOT NULL,
    neighborhood VARCHAR(45) NOT NULL,
    city VARCHAR(45) NOT NULL,
    zip_code VARCHAR(8),
    state VARCHAR(2) NOT NULL,
    complement VARCHAR(45),
    report MEDIUMTEXT,
    report_type VARCHAR(45) NOT NULL,
    resident BOOLEAN NOT NULL,
    image VARCHAR(255),
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES urban_reports.users (id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
    );
        
    INSERT INTO users (full_name, document_number, phone, email)
    VALUES
    ('Anônimo', ${null}, ${null}, ${null}),
    ('João Silva', '12345678901', '555-1234', 'joao.silva@example.com'),
    ('Maria Santos', '98765432101', '555-5678', 'maria.santos@example.com'),
    ('Carlos Oliveira', '55566677788', '555-9876', 'carlos.oliveira@example.com');

    INSERT INTO reports (user_id, street, number, neighborhood, city, zip_code, state, complement, report, report_type, resident, image)
    VALUES
    (2, 'Rua B', '456', 'Bairro X', 'Cidade B', '87654321', 'RJ', 'Casa Verde', 'Problema de iluminação', 'Iluminação', FALSE, '/images/report2.jpg'),
    (3, 'Rua C', '789', 'Bairro Y', 'Cidade C', '45678901', 'MG', 'Fundos', 'Calçada danificada', 'Infraestrutura', TRUE, '/images/report3.jpg'),
    (4, 'Rua A', '123', 'Centro', 'Cidade A', '12345678', 'SP', 'Apto 101', 'Buraco na via', 'Infraestrutura', TRUE, '/images/report1.jpg');
`;

async function createDatabase() {
    await connection.query(query);
    connection.end();
}

try {
    createDatabase().then(() => console.info(`➜  MySQL: ${colors.green}seeds successfully created!${colors.reset}\n`));
} catch(error) {
    console.error(`➜  MySQL: ${colors.red}Error while trying to seed.${colors.reset}\n`);
}
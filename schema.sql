CREATE DATABASE IF NOT EXISTS dns;
USE dns;

CREATE TABLE IF NOT EXISTS dns_records (
  id INT AUTO_INCREMENT PRIMARY KEY,
  domain VARCHAR(255) NOT NULL,
  type ENUM('A', 'CNAME', 'MX') NOT NULL,
  value VARCHAR(255) NOT NULL,
  ttl INT DEFAULT 3600
);

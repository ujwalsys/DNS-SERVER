require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const mysql   = require('mysql2/promise');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL pool
const db = mysql.createPool({
  host:     process.env.DB_HOST,
  user:     process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port:     process.env.DB_PORT
});

// Health check or friendly landing
app.get('/', (_req, res) => res.send('DNS API is running 🚀'));

// Add record
app.post('/dns', async (req, res) => {
  const { domain, type, value, ttl = 3600 } = req.body;
  if (!domain || !type || !value) return res.status(400).json({ error: 'Missing fields' });

  await db.query(
    'INSERT INTO dns_records (domain, type, value, ttl) VALUES (?,?,?,?)',
    [domain, type, value, ttl]
  );
  res.json({ message: 'Record added' });
});

// Fetch records for one domain
app.get('/dns/:domain', async (req, res) => {
  const [rows] = await db.query(
    'SELECT * FROM dns_records WHERE domain = ?', [req.params.domain]
  );
  res.json(rows);
});

// start API
app.listen(3000, () => console.log('🌐 REST API → http://localhost:3000'));

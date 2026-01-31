const mysql = require('mysql2/promise');

export default async function handler(req, res) {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      ssl: {
        rejectUnauthorized: true
      }
    });

    const [rows] = await connection.execute(
      'SELECT id, name, email FROM users'
    );

    await connection.end();

    res.status(200).json(rows);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

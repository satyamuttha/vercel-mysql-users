const mysql = require('mysql2/promise');

export default async function handler(req, res) {
  let connection;

  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      ssl: {
        rejectUnauthorized: true
      }
    });

    const [rows] = await connection.query(
      'SELECT id, name, email FROM users'
    );

    res.status(200).json(rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });

  } finally {
    if (connection) await connection.end();
  }
}

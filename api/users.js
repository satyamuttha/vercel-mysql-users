export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "Test User", email: "test@gmail.com" }
  ]);
}

/*
import mysql from 'mysql2/promise';

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
        rejectUnauthorized: false
      }
    });

    const [rows] = await connection.execute(
      'SELECT id, name, email FROM users'
    );

    res.status(200).json(rows);

  } catch (error) {
    console.error('DB ERROR:', error);
    res.status(500).json({
      message: 'Database connection failed',
      error: error.message
    });

  } finally {
    if (connection) await connection.end();
  }
}
*/
import { Pool } from 'pg';

let pool;

export const connectToDatabase = async () => {
  if (pool) {
    console.log("=> using existing database connection");
    return pool;
  }

  try {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    });

    // Test connection
    const client = await pool.connect();
    const res = await client.query('SELECT NOW()');
    console.log(res.rows);
    await client.release();

    console.log("=> using new database connection");
    return pool;
  } catch (error) {
    console.error('Failed to establish a new connection to the database', error);
    throw error;
  }
};
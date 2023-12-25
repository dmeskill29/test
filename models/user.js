// models/User.js
import {connectToDatabase} from '../utils/database.js';

const createUserTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      username VARCHAR(255) UNIQUE NOT NULL,
      image TEXT
    );
  `;

  await connectToDatabase.query(query);
};

export default createUserTable;
import 'dotenv/config';
const Environment = {
  database: {
    host: process.env.API_PORT || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    password: process.env.DB_PASSWORD || '',
    user: process.env.DB_USER || '',
    name: process.env.DB_NAME || '',
    synchronize: Boolean(process.env.DB_SYNCHRONIZE) || false,
    logging: Boolean(process.env.DB_SYNCHRONIZE) || true,
  },
  api: {
    port: Number(process.env.API_PORT) || 3030,
    env: process.env.NODE_ENV || '',
  },
};

export default Environment;

require("dotenv").config();

module.exports = {
  development: {
    // url: process.env.DEV_DATABASE_URL,
    // dialect: 'postgres',
    // password: process.env.DATABASE_PASSWORD,
    // logging: false,
    username: "postgres",
    password: "chemistryis1",
    database: "searchphoto",
    // host: process.env.DB_HOST,
    dialect: "postgres",
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: "pg",
    password: process.env.DATABASE_PASSWORD,
    logging: false,
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};

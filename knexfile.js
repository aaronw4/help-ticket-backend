// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DB_URL,
    migrations: {
      directory: "./data/migration"
    },
    seeds: {
      directory: "./data/seed"
    }
  },

  production: {
    client: "pg",
    connection: process.env.DB_URL,
    migrations: {
      directory: "./data/migration"
    },
    seeds: {
      directory: "./data/seed"
    }
  }
};

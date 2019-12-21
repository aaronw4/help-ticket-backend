// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/devdesk.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migration"
    },
    seeds: {
      directory: "./data/seed"
    },
    pool: {
      afterCreate: function(connection, done) {
        connection.run("PRAGMA foreign_keys = ON", done);
      }
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migration"
    },
    seeds: {
      directory: "./data/seed"
    }
  }
};

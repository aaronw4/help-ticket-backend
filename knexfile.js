require("dotenv").config();
const pg = require("pg");

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
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    },
    useNullAsDefault: true
  },
  test: {
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
  }
};

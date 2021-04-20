// Update with your config settings.

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

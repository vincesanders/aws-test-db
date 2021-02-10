// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/aws-test-db.db3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'data/migrations',
    },
    seeds: {
      directory: 'data/seeds',
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      port: process.env.DATABASE_PORT,
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_ACCESS_KEY,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: 'data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: 'data/seeds',
    }
  }

};

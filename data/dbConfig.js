const knex = require('knex');

const knexConfig = require('../knexfile.js');

//switch to production when deploying
module.exports = knex(knexConfig[process.env.DB_ENV]);
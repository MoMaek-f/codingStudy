const config = require('./config')

var knex = require('knex')({
  client: 'mysql',
  connection : {
    port: config.mysql.port,
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.pass,
    database: config.mysql.database
  }
})

module.exports = { mysql : knex}

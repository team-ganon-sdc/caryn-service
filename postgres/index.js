const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'apppreview',
  password: 'root',
})

pool.connect();
module.exports = pool;

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

// const client = new Client({
//   user: 'root',
//   host: 'localhost',
//   database: 'apppreview',
//   password: 'root',
//   port: 3000
// })
// client.connect()

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })
// const pool = new Pool();
// await pool.connect();

// const res_pl = await pool.query('SELECT NOW()');
// await pool.end();

// const client = new Client()
// await client.connect()

// const res_cl = await client.query('SELECT NOW()')
// await client.end()
const { Pool, Client } = require('pg').Pool;


const pool = new Pool({
  user: 'caryn',
  host: 'localhost'
})

pool.query("CREATE TABLE apppreview (id INT, description VARCHAR(8000), additionalText VARCHAR(8000), images VARCHAR(8000))", (err, res) => {
  console.log(err, res)
  pool.end()
})



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
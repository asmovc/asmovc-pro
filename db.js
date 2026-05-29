const { Pool } = require("pg");

const pool = new Pool({

  user: "postgres",
  host: "localhost",
  database: "asmovc_pro",

  password: "SADIKI1990",

  port: 5432,

});

module.exports = pool;
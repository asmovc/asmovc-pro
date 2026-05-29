const pool = require("./db");

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Erreur connexion PostgreSQL :", err);
  } else {
    console.log("PostgreSQL connecté !");
    console.log(res.rows);
  }
  pool.end();
});
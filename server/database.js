const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "1185",
  host: "localhost",
  port: 5432,
  database: "login_project",
});

module.exports = pool;

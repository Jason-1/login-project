const express = require("express");
const cors = require("cors");
const pool = require("./database");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/adduser", (req, res) => {
  const username = req.body["username"];
  const password = req.body["password"];

  console.log("Username: ", username);
  console.log("Password: ", password);

  const insertQuery = `INSERT INTO accounts (username, password) VALUES ('${username}', '${password}');`;

  pool
    .query(insertQuery)
    .then((response) => {
      console.log("User added successfully");
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(4000, () => console.log("Server is running on port 4000"));

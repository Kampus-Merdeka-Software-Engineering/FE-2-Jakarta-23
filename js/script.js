const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Konfigurasi koneksi MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "your_database_name",
});

// Terhubung ke MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }
  console.log("Connected to MySQL as id " + connection.threadId);
});

// Endpoint signup untuk$(document).ready(function() {
  // Hide all products initially
  $(".product").hide();

  // Show the default product (kopi-hitam)
  $("#1").show();

  // Handle click events on the links
  $("a").on("click", function(event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the target ID from the href attribute
    var targetId = $(this).attr("href");

    // Hide all products
    $(".product").hide();

    // Show the clicked product
    $(targetId).show();
  });
});
 MySQL
app.post("/api/signup", (req, res) => {
  const { username, password } = req.body;

  const sql = "INSERT INTO accounts (username, password) VALUES (?, ?)";
  connection.query(sql, [username, password], (error, results) => {
    if (error) {
      console.error("Error executing query: " + error.stack);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    res.json({ message: "Signup successful" });
  });
});

// Endpoint signin untuk MySQL
app.post("/api/signin", (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM accounts WHERE username = ? AND password = ?";
  connection.query(sql, [username, password], (error, results) => {
    if (error) {
      console.error("Error executing query: " + error.stack);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    res.json({ message: "Signin successful" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

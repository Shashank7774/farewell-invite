const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(__dirname)); // 👈 IMPORTANT

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "main.html"));
});

app.get("/card", (req, res) => {
  res.sendFile(path.join(__dirname, "invcard.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
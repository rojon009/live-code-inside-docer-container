const express = require("express");

const PORT = 5000;

const app = express();

app.get("/", (req, res) => {
  const outputText = "Hello Rojon";

  res.send(`<h1>${outputText}</h1>`);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server is running on port ", PORT);
});

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, "..", "/public")));
app.use(express.json());

app.listen(PORT, () => {
  console.log("Listening on Port", PORT);
});

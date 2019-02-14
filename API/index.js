import express from "express";
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  return res.send("Welcome, to a wonderful application!");
});

app.listen(PORT, () => {
  console.log("Server is runnung on PORT ${PORT}");
});

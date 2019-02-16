import express from "express";
import bodyParser from "body-parser";

import mealRoutes from "./routes/mealRoutes";
import menuRoutes from "./routes/menuRoutes";

const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("Welcome, to a wonderful application!");
});

app.use("/api/v1/meals", mealRoutes);
app.use("/api/v1/menu", menuRoutes);

app.listen(PORT, () => {
  console.log(` Server is runnung on PORT: ${PORT}`);
});

import express from "express";
import bodyParser from "body-parser";

import mealRoutes from "./routes/mealRoutes";
import menuRoutes from "./routes/menuRoutes";
import orderRoutes from "./routes/orderRoutes";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("Welcome, to the Meal Booking Application!");
});

app.use("/api/v1/meals", mealRoutes);
app.use("/api/v1/menu", menuRoutes);
app.use("/api/v1/order", orderRoutes);

app.all("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "The endpoint you have requested does not exist on this server"
  });
});

export default app;
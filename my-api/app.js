const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

const foodData = [
  {
    dishType: "non-veg",
    dishName: "Chicken Tikka",
    dishPrice: "350",
  },
  {
    dishType: "veg",
    dishName: "Paneer Tikka",
    dishPrice: "250",
  },
  {
    dishType: "non-veg",
    dishName: "Chicken Masala",
    dishPrice: "300",
  },
  {
    dishType: "veg",
    dishName: "Paneer Butter Masala",
    dishPrice: "200",
  },
];

const drinksData = [
  {
    drinkType: "cocktail",
    drinkName: "Bloody Mary",
    drinkPrice: "450",
  },
  {
    drinkType: "mocktail",
    drinkName: "Mojito",
    drinkPrice: "550",
  },
];

const allData = [foodData, drinksData];
app.get("/data", (req, res) => {
  res.json(allData);
});

app.get("*", (req, res) => {
  res.send("404 Error");
});

app.listen("5001", () => console.log("Server Started at Port 5001"));

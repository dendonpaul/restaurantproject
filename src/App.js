import "./App.css";
import DrinkItem from "./components/DrinkItem";
import FoodItem from "./components/FoodItem.js";
import Orderform from "./components/OrderForm";

const foodData = [
  {
    dishType: "Non-veg",
    dishName: "Chicken Tikka",
    dishPrice: "350",
  },
  {
    dishType: "Veg",
    dishName: "Paneer Tikka",
    dishPrice: "250",
  },
  {
    dishType: "Non-veg",
    dishName: "Chicken Masala",
    dishPrice: "300",
  },
  {
    dishType: "Veg",
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

function App() {
  return (
    <div className="App">
      <Orderform />
      <hr />
      <h1>Food Menu</h1>
      {foodData.map((food) => (
        <FoodItem
          dishType={food.dishType}
          dishName={food.dishName}
          dishPrice={food.dishPrice}
        />
      ))}

      <hr />
      <h1>Drinks Menu</h1>
      {drinksData.map((drink) => (
        <DrinkItem
          dType={drink.drinkType}
          dName={drink.drinkName}
          dPrice={drink.drinkPrice}
        />
      ))}
    </div>
  );
}

export default App;

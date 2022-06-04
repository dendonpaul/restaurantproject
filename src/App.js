import "./App.css";
import DrinksContainer from "./components/drinkComponent/DrinksContainer";
import Form from "./components/form/CustomerForm";
import Header from "./components/header/Header";
import MainCourse from "./components/mainCourse/MainCourse";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <MainCourse />
      <DrinksContainer />
    </div>
  );
}

export default App;

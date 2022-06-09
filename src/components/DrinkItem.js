import "./fooditem.css";

function DrinkItem(props) {
  return (
    <div className="main-food-item">
      <div className="food-items">
        {props.dType === "mocktail" ? (
          <span className="item-padding mocktails">{props.dType}</span>
        ) : (
          <span className="item-padding cocktails">{props.dType}</span>
        )}

        <strong>{props.dName}</strong>
      </div>

      <button className="food-items">{props.dPrice}</button>
    </div>
  );
}
export default DrinkItem;

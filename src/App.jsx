import "./App.css";

function MenuItem({ name, price, calories, protein, carbs, fats }) {
  return (
    <div className="menu-item">
      <p>{name}</p>
      <p>{price}</p>
      <div className="nutrition-container">
        <p>Calories: {calories}kcal</p>
        <p>Protein: {protein}g</p>
        <p>Carbs: {carbs}g</p>
        <p>Fats: {fats}g</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="menu-container">
        <h1>Uncle Jack&#39;s</h1>
        <h1>Fried Chicken</h1>
        <div className="category-container">
          <h4>Chicken</h4>
          <div className="menu-item-container">
            <MenuItem
              name="Special Fried Chicken"
              price="RM 26.00"
              calories="446"
              protein="38"
              carbs="18"
              fats="24"
            />
            <MenuItem
              name="6pc Spicy Nuggets"
              price="RM 12.00"
              calories="281"
              protein="15"
              carbs="15"
              fats="18"
            />
          </div>
        </div>
        <div className="category-container">
          <h4>Desserts</h4>
          <div className="menu-item-container">
            <MenuItem
              name="Blueberry Snow Cone"
              price="RM 10.00"
              calories="254"
              protein="48"
              carbs="7"
              fats="11"
            />
            <MenuItem
              name="Caramel Apple Pie"
              price="RM 16.00"
              calories="233"
              protein="2"
              carbs="26"
              fats="16"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

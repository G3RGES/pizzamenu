import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />

      <Menu />

      <Footer />
    </div>
  );
}

const Header = () => {
  const styles = {};
  // const styles = {
  //   color: "red",
  //   fontSize: "40px",
  //   textDecoration: "underline",
  //   textTransform: "uppercase",
  // };

  return (
    <header className="header">
      <h1 style={styles}>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  const numPizza = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizza > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza
                key={pizza.name}
                name={pizza.name}
                price={pizza.price}
                photoName={pizza.photoName}
                soldOut={pizza.soldOut}
                ingredients={pizza.ingredients}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
    </main>
  );
};

const Pizza = ({ name, price, photoName, soldOut, ingredients }) => {
  //* CANNOT USE SHORT CIRCUITING IN A CLASSNAME ATTRIBUTE
  // e.g <li className={`pizza ${soldOut && "sold-out"}`}>
  //* IT WILL RETURN A FALSE INSIDE THE CLASSNAME

  return (
    // <li className={soldOut ? "sold-out pizza" : "pizza"}>
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div className="">
        <h3>{name}</h3>
        <p>{ingredients}</p>
        {/* <span>{soldOut ? "SOLD OUT" : "available"}</span> */}
        {/* {soldOut ? <span>SOLD OUT</span> : <span>{+price}$</span>} */}
        <span>{soldOut ? "SOLD OUT" : +price + "$"}</span>
      </div>
    </li>
  );
};

const Footer = () => {
  // return React.createElement("footer", null, "We're open 7 days a week");

  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  const fullHour = new Date().toLocaleTimeString();

  // isOpen ? alert("We're open 🍕") : alert("Sorry we're closed 🥲");

  return (
    <footer className="footer">
      Time now is {fullHour}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p style={{ color: "red", fontSize: "2rem" }}>Sorry we're closed 🥲</p>
      )}
    </footer>
  );
};

const Order = ({ closeHour, openHour }) => {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React, { useState } from "react";
import Collections from "./components/Collections";
import Navigation from "./components/Navigation";
import "react-toastify/dist/ReactToastify.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const addToCart = () => {
    setCart(count);
  };

  return (
    <div>
      <Navigation cart={cart} />
      <Collections
        count={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onAdd={addToCart}
      />
    </div>
  );
}

export default App;

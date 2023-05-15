import { useState } from "react";
import "./App.css";
import Shoe from "./Component/shoe";
import Cart from "./Component/Cart";

function App(props) {
  const [cart, setCart] = useState(false);
  // const event = useRef();

  const showCart = () => {
    setCart(true);
  };
  const closeCart = () => {
    setCart(false);
  };

  return (
    <>
      {cart && <Cart closeCart={closeCart} />}
      <Shoe showCart={showCart} />
    </>
  );
}

export default App;

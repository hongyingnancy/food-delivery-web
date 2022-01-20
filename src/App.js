import { useState, useEffect} from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);


  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const [aboutIsShow, setShowAbout] = useState(true);
  const [menuIsShow, setShowMenu] = useState(false);
  const [contactIsShow, setShowContact] = useState(false);

  const showAbout = () => {
    setShowAbout(true);
    setShowMenu(false);
    setShowContact(false);
  };

  const showMenu = () => {
    setShowMenu(true);
    setShowAbout(false);
    setShowContact(false);
  };

  const showContact = () => {
    setShowContact(true);
    setShowMenu(false);
    setShowAbout(false);
  };

  useEffect(() => {
    console.log("effect")
  }, [aboutIsShow, menuIsShow, contactIsShow]);

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header
        onShowCart={showCartHandler}
        onshowAbout={showAbout}
        onshowContact={showContact}
        onshowMenu={showMenu}
      />
      <main>
        <Meals
          showAbout={aboutIsShow}
          showMenu={menuIsShow}
          showContact={contactIsShow}
        />
      </main>
    </CartProvider>
  );
}

export default App;

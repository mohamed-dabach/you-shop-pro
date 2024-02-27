import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import CardSide from "../Components/CardSide";
import { useState } from "react";


import store from "../reducers/store";
import { Provider } from "react-redux";
import Footer from "../Components/footer";

const Layout = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prevState) => !prevState);
    console.log(toggle);
  };

  // const store = createStore(reducer);
  // const store =configureStore({

  // })

  return (
    <>
      <Provider store={store}>
        <NavBar handleClick={handleClick} />
        <CardSide toggle={toggle} />
        <Outlet />
        <Footer />
      </Provider>

    </>
  );
};

export default Layout;

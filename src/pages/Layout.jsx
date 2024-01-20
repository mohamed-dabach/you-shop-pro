import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import CardSide from "../Components/CardSide";
import { useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "../reducers/commandReducer";



const Layout = () => {

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prevState) => !prevState);
    console.log(toggle)
  };

  
  const store = createStore(reducer)

  return (
    <>
    <Provider store={store}> 
        <NavBar handleClick={handleClick}/>
        <CardSide toggle={toggle} />
        <h1>Layout</h1>
        <Outlet />
    </Provider>
     
    </>
  );
};

export default Layout;

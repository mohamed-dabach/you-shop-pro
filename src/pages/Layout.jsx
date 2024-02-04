import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import CardSide from "../Components/CardSide";
import { useState, useEffect, useCallback } from "react";
import { Provider, useDispatch } from "react-redux";
import Footer from "../Components/footer";
import { ENDPINT } from "../reducers/constant";
const Layout = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch()
  const handleClick = () => {
    setToggle((prevState) => !prevState);
    console.log(toggle);
  };
  const fetchdata = useCallback(async () => {
    try {
      const response = await fetch(`${ENDPINT}/products`);
      console.log(response.status, response.statusText);
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: "FETCH_DATA",
          payload: data,
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      console.log("finally");
    }
  }, [dispatch]);
  const fetchcategory = useCallback(async () => {
    try {
      const response = await fetch(`${ENDPINT}/categories`);
      console.log(response.status, response.statusText);
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: "FETCH_CATEG",
          payload: data,
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      console.log("finally");
    }
  }, [dispatch]);

  useEffect(() => {
    fetchdata()
  }, [fetchdata]) 
  useEffect(() => {
    fetchcategory()
  }, [fetchcategory])
  return (
    <>
      <NavBar handleClick={handleClick} />
      <CardSide toggle={toggle} />
      <Outlet />
      <Footer />

    </>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import CardSide from "../Components/CardSide";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/footer";
import { toggleCard } from "../redux/reducers/cardReducer";
import { toggleSideCard } from "../redux/selectors";

const Layout = () => {
  const dispatch = useDispatch();
  const showSideCard = useSelector(toggleSideCard);
  // console.log(showSideCard);
  const handleClick = () => {
    dispatch(toggleCard());
  };

  return (
    <>
      <NavBar handleClick={handleClick} />
      {showSideCard && <CardSide />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

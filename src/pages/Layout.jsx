import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import CardSide from "../Components/CardSide";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/footer";
import { toggleCard } from "../redux/reducers/cardReducer";

const Layout = () => {
  const dispatch = useDispatch();
  const showSideCard = useSelector((state) => state.showCard);

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

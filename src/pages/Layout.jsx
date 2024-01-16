import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";


const Layout = () => {
  return (
    <>
       <NavBar/>
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;

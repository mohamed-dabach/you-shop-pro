import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";


const Layout = () => {
  return (
    <>
       <NavBar/>
      <h1>Layout</h1>
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;

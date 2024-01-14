import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";


const Layout = () => {
  return (
    <>
       <NavBar/>
      <h1>Layout</h1>
      <Outlet />
    </>
  );
};

export default Layout;

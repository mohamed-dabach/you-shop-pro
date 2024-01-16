import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/about";
import Products from "./pages/products";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="products" element={<Products />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<>check your link</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

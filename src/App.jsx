import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/about";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import ProductPageLayout from "./pages/productPageLayout";
import CategoryPageHeader from "./Components/categoryPageHeader";
import ProductDetails from "./Components/ProductDetails";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducers/commandReducer";

function App() {
  const store = createStore(reducer);
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<ProductPageLayout />}>
                <Route
                  path="category/:category"
                  element={<CategoryPageHeader />}
                />
              </Route>
              <Route path="/product/:id" element={<>  <ProductDetails /> </>} />
              <Route path="rooms" element={<Rooms />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<>check your link 404 route</>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
export default App;

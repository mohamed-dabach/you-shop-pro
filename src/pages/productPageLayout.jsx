import { Outlet } from "react-router-dom";
import ProductList from "../Components/ProductList";
import SideProductFilters from "../Components/SideProductFilter";
import { useState } from "react";
const Products = () => {
  const [showFilters, setShowFilters] = useState(false);
  const list = [
    {
      id: 1928,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/kitchen-island-set-300x300.png",
      name: "White Kitchen Island",
      price: "5,350.75",
      category: "Kitchen",
    },
    {
      id: 2002,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/working-chair-with-armrest-300x300.png",
      name: "Beige Working Chair With Armrest",
      price: "784.00",
      category: "Home Office",
    },
    {
      id: 3229,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/king-size-master-bedroom-300x300.png",
      name: "King Size Master Bedroom",
      price: "14,500.50",
      category: "Bedroom",
    },
    {
      id: 9735,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/cream-ceramic-oval-bathtub-300x300.png",
      name: "Ceramic Oval Bathtub",
      price: "11,200.00",
      category: "Bathroom",
    },
    {
      id: 9927,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/bathroom-wooden-table-300x300.png",
      name: "Bathroom Wooden Table",
      price: "550.00",
      category: "Bathroom",
    },
    {
      id: 6021,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/wooden-stool-300x300.png",
      name: "Wooden Bath Room Stool",
      price: "220.50",
      category: "Bathroom",
    },
    {
      id: 7098,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/living-room-green-sofa-300x300.png",
      name: "Green Living Room Sofa",
      price: "1,840.00",
      category: "Living Room",
    },
    {
      id: 8982,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/bathroom-circle-mirror-300x300.png",
      name: "Bathroom Golden Ring Mirror",
      price: "124.25",
      category: "Bathroom",
    },
    {
      id: 9227,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/bedroom-single-chair-300x300.png",
      name: "Bedroom Single Chair",
      price: "504.00",
      category: "Bedroom",
    },
    {
      id: 1038,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/kitchen-furniture-cabinet-300x300.png",
      name: "Kitchen Cabinet",
      price: "1,150.25",
      category: "Cabinet",
    },
    {
      id: 1101,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/brown-wooden-stool-300x300.png",
      name: "Brown Circle Stool",
      price: "224.00",
      category: "Kitchen",
    },
    {
      id: 1022,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/single-blue-fabric-chair-1-300x300.png",
      name: "Blue Comfy Fabric Chair",
      price: "580.50",
      category: "Bedroom",
    },
  ];
  function handleToggleFilters() {
    setShowFilters((prev) => !prev);
  }
  return (
    <>
      {showFilters && (
        <SideProductFilters handleToggleFilters={handleToggleFilters} />
      )}
      <div className="bg-semi-white">
        <div className=" container m-auto w-full my-5  px-10 bg-white ">
          <Outlet />
          <div className="w-full flex justify-between py-5 max-sm:flex-col">
            <div className=" flex max-md:flex-col ">
              <button
                onClick={handleToggleFilters}
                className="flex  items-center justify-center gap-2 me-3 bg-primary px-2 py-1"
              >
                <span className="w-4 h-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"></path>
                  </svg>
                </span>
                <span className=" uppercase">Options</span>
              </button>
              <p className=" my-2">Showing 1–12 of 18 results</p>
            </div>
            <div className="">
              <form className="">
                <select className=" border px-2 py-1" defaultValue={""}>
                  <option value="">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="date">Sort by latest</option>
                  <option value="price">Sort by price: low to high</option>
                  <option value="price-desc">Sort by price: high to low</option>
                </select>
              </form>
            </div>
          </div>
          <ProductList list={list} />

          <p className="text-center px-3 py-1 w-fit m-auto my-5 border-semi-gray border">
            No more products to show
          </p>
        </div>
      </div>
    </>
  );
};

export default Products;

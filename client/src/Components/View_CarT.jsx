import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateOrder } from "../redux/reducers/cardReducer";
export default function ViewCarT() {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  console.log("from view cart", orders);
  return (
    <>
      <section className="w-full p-5 xl:p-10 lg:p-10 bg-gray-100 flex flex-col justify-center items-center">
        <div className="w-full p-6 bg-white ">
          <div className=" w-auto py-4">
            <h1 className="font-semibold text-[1.9rem] text-black">Cart</h1>
          </div>
          <div className=" flex flex-wrap justify-between">
            <div className=" w-full lg:w-8/12 xl:w-8/12 md:w-8/12  ">
              {orders ? (
                orders.map((order) => {
                  return (
                    <div
                      key={order.id}
                      className=" w-full flex flex-wrap justify-between"
                    >
                      <div className="w-full">
                        <div className="">
                          <div>
                            <div className=" flex-col lg:hidden xl:hidden justify-center items-center w-full">
                              <div className="border w-full p-4 flex justify-end items-center ">
                                <div className=" w-1/12">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#dbdada"
                                    className="w-6 h-6"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div className=" border w-full flex justify-center items-center p-4">
                                <div className=" w-3/12 ">
                                  <img src="#" alt="img" />
                                </div>
                              </div>
                              {/* this img just for respo */}
                            </div>
                            <div className=" py-3 w-full flex-none lg:flex xl:flex md:flex justify-between  ">
                              <div className="border-b w-full lg:w-4/12 xl:w-4/12 flex lg:flex xl:flex md:flex justify-between p-3">
                                <div className="flex lg:hidden xl:hidden font-medium ">
                                  {" "}
                                  Product:
                                </div>
                                <div className="hidden lg:flex xl:flex ">
                                  <img src="#" alt="img" />
                                </div>
                                <div className=" ms-3 font-medium ">
                                  {order.title}
                                </div>
                              </div>
                              <div className=" border-b w-full lg:w-2/12 xl:w-2/12 flex justify-between p-3">
                                <div className="flex lg:hidden xl:hidden font-medium">
                                  price:
                                </div>
                                <div>DH {order.price}</div>
                              </div>
                              <div className="  border-b w-full xl:w-3/12 lg:w-3/12 flex justify-between p-2">
                                <div className="flex lg:hidden xl:hidden w-3/12 font-medium">
                                  Quantity:
                                </div>
                                <div className=" flex  lg:justify-start xl:justify-start justify-end w-4/12 xl:w-8/12 lg:w-8/12">
                                  <button
                                    onClick={() => {
                                      dispatch(
                                        updateOrder({
                                          id: order.id,
                                          type: "dec",
                                        })
                                      );
                                    }}
                                    className="border bg-gray-100  w-4/12 px-6 py-1 lg:px-4 lg:py-1 xl:px-4 xl:py-1"
                                  >
                                    -
                                  </button>
                                  <button className=" w-3/12 px-4 py-2">
                                    {order.count}
                                  </button>
                                  <button
                                    onClick={() => {
                                      dispatch(
                                        updateOrder({
                                          id: order.id,
                                          type: "inc",
                                        })
                                      );
                                    }}
                                    className="border bg-gray-100 w-4/12 px-6 py-1 lg:px-4 lg:py-1 xl:px-4 xl:py-1"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                              <div className=" border-b w-full xl:w-2/12 lg:w-2/12 flex justify-between p-3">
                                <div className="flex lg:hidden xl:hidden font-medium">
                                  Subtotal:
                                </div>
                                <div> DH {order.price}</div>
                              </div>
                              <div className=" border-b w-1/12 hidden lg:flex xl:flex md:flex justify-center items-center ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="#dbdada"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>
                  <div
                    className="w-full flex items-center p-4 mb-4 text-sm text-blue-400 border border-blue-300 rounded-lg bg-blue-50  "
                    role="alert"
                  >
                    <svg
                      className="flex-shrink-0 inline w-4 h-4 me-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="blue"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only text-blue-600">Info</span>
                    <div className="text-blue-400">
                      <span className="font-medium text-blue-700">
                        Info alert!
                      </span>{" "}
                      No product in Cart, please check the product page.
                    </div>
                  </div>
                  <div>
                    <button className="w-8/12 lg:w-3/12 xl:w-3/12 p-3 text-[.8rem] font-semibold text-black bg-primary tracking-widest hover:text-white hover:duration-700 ">
                      <Link to={"/products"}>RETURN TO SHOP</Link>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

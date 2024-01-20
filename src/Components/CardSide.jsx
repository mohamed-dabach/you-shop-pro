import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleAdd, handleMinus, handleRemove } from "./commandReducer";

export default function CardSide({ toggle }) {
  const dispatch = useDispatch();
  const command = useSelector((state) => state.command);

  const [isToggle, setIsToggle] = useState();

  useEffect(() => {
    setIsToggle(toggle);
  }, [toggle]);

  const CloseCart = () => {
    setIsToggle(false);
  };

  if (isToggle) {
    return (
      <>
        <div className="bg-white z-20 shadow-md h-screen w-full lg:w-5/12 xl:w-5/12 md:w-8/12 fixed top-0 right-0">
          <div className="w-full h-16 flex justify-between items-center px-6 border-b">
            <div className="text-semi-black font-medium">Shopping Cart</div>

            <div onClick={CloseCart} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="black"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>

          <div className="w-full h-[78vh] flex flex-col items-center overflow-x-auto py-6 px-3 relative">
            {command > 0 ? (
              <div className="p-2 mb-2 border w-full h-auto flex justify-between items-center shadow-lg">
                <div className="w-2/12 h-20 flex justify-center items-center bg-slate-100 mr-1">
                  {/* product's img */}
                  <img src="" alt="img" />
                </div>

                <div className="w-10/12 flex flex-col justify-between items-center">
                  <div className=" w-full px-2 flex justify-between mb-2">
                    <div className="font-bold text-gray-700">
                      {/* product's title */}
                      Bathroom Golden Ring Mirror
                    </div>
                    <div
                      onClick={() => {
                        dispatch(handleRemove());
                      }}
                      className="cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="gray"
                        className="w-6 h-6"
                      >
                        <path d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <div className="w-4/12 flex font-semibold text-semi-gray ">
                      {/* here we can get the command number for each product */}
                      <button
                        className="px-3 py-2 border"
                        onClick={() => {
                          dispatch(handleMinus());
                        }}
                      >
                        -
                      </button>
                      <span className="px-3 py-2 border border-black">
                        {command}
                      </span>
                      <button
                        className="px-3 py-2 border"
                        onClick={() => {
                          dispatch(handleAdd());
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div className="w-5/12 text-right text-semi-gray px-2 font-semibold">
                      {/* product's price */}
                      $248.50
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <span className="text-gray-400 font-medium absolute left-32 top-52 ">
                No products in the cart
              </span>
            )}
          </div>

          {!command ? (
            <button className=" absolute left-6 bottom-4 right-6 bg-primary flex justify-center p-3 text-sm font-semibold tracking-widest hover:bg-semi-gray hover:text-white hover:translate-x-2 hover:duration-500 hover:rotate-1">
              <Link to={"/products"}>CONTINUE SHOPPING</Link>
            </button>
          ) : (
            <div>
              <div className="absolute bottom-36 w-full py-4 px-5 flex justify-between border-t border-b">
                {/* here will be a state that calculats the total price of all products the client commanded */}
                <span className="font-bold text-gray-600">Subtotal:</span>
                <span className="font-medium text-semi-gray">$248.50</span>
              </div>
              <div className="  absolute left-5 bottom-4 right-5 flex flex-col justify-center items-center">
                <button className="w-full mb-4 bg-primary text-semi-black flex justify-center p-3 text-sm font-semibold tracking-widest hover:bg-semi-gray hover:text-white hover:translate-x-2 hover:duration-500 hover:rotate-1">
                  <Link to={"/"}>VIEW CART</Link>
                </button>
                <button className="w-full bg-primary text-semi-black flex justify-center p-3 text-sm font-semibold tracking-widest hover:bg-semi-gray hover:text-white hover:translate-x-2 hover:duration-500 hover:rotate-1">
                  <Link to={"/"}></Link>CHECKOUT
                </button>
              </div>
            </div>
          )}
        </div>

        <div
          onClick={CloseCart}
          className="bg-semi-black bg-opacity-60 fixed top-0 left-0 bottom-0 right-0 h-screen w-full cursor-pointer z-10">
          {/* {" "} */}
        </div>
      </>
    );
  } else {
    ''
  }
}

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateOrder } from "../redux/reducers/cardReducer";
import { orders } from "../redux/selectors";
export default function ViewCarT() {
  const orderss = useSelector(orders);
  const dispatch = useDispatch();

  return (
    <>
      <section className="w-full p-5 xl:p-10 lg:p-10 bg-gray-100 flex flex-col justify-center items-center">
        <div className="w-full p-6 bg-white ">
          <div className=" w-auto py-4">
            <h1 className="font-semibold text-[1.9rem] text-black">Cart</h1>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1fr_300px]">
            <div className=" w-full flex justify-between  ">
              <table className="border w-full border-collapse">
                <thead className="border  max-md:hidden w-full bg-gray-100">
                  <tr>
                    <td className="border px-2 py-1"></td>
                    <td className="border px-2 py-1">Product</td>
                    <td className="border px-2 py-1">Price</td>
                    <td className="border px-2 py-1">Quantity</td>
                    <td className="border px-2 py-1">Subtotal</td>
                  </tr>
                </thead>
                <tbody className="">
                  {orderss ? (
                    orderss.map((order) => {
                      return <OrderItem order={order} key={order.id} />;
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
                </tbody>
              </table>
            </div>
            <TotalTable />
          </div>
        </div>
      </section>
    </>
  );
}

const OrderItem = ({ order }) => {
  return (
    <>
      <tr className=" relative max-md:flex flex-col w-full mb-[20px] border ">
        <td className="border flex items-center justify-center px-2 py-1">
          <img className="max-h-[100px]" src={order.img} alt={order.name} />
        </td>
        <td className="px-2 py-1 font-bold max-md:flex justify-between items-center  before:md:hidden before:font-bold before:content-['Product:_'] ">
          {order.name}
        </td>
        <td className=" px-2 py-1 max-md:flex justify-between items-center  before:md:hidden before:font-bold before:content-['Price:_'] ">
          ${order.price}
        </td>
        <td className="px-2 py-1  max-md:flex justify-between items-center before:md:hidden before:font-bold before:content-['Quantity:_']  ">
          <UpdateQuantity />
        </td>
        <td className="px-2 py-1 max-md:flex justify-between items-center before:md:hidden before:font-bold before:content-['Subtotal:_']  ">
          <span> ${order.price * order.quantity}</span>
        </td>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#dbdada"
          className="w-6 h-6 absolute top-[20px] md:top-[50%] translate-y-[-50%] right-[10px] cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </tr>
    </>
  );
};

const UpdateQuantity = () => {
  return (
    <div className=" ">
      <button className="hover:bg-primary border w-[40px] h-[40px] " name="-">
        -
      </button>

      <span>
        <input
          className="w-[40px] h-[42px] text-center border focus:border-dashed  outline-none"
          type="text"
          name="quantity"
          id="quantity"
          value={2}
        />
      </span>
      <button className="hover:bg-primary border w-[40px] h-[40px]" name="+">
        +
      </button>
    </div>
  );
};

const TotalTable = () => {
  return (
    <div className="  w-full ">
      <div className="border  ">
        <div className="bg-gray-100 p-4">
          <h1 className="font-bold text-[1.4rem] text-black tracking-wide">
            Cart totals
          </h1>
        </div>
        <div className="flex justify-between p-4 border-b">
          <div>
            <h1 className="text-xl font-medium">Subtotal:</h1>
          </div>
          <div>
            <h1>MAD 309</h1>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div>
            <h1 className="text-xl font-medium">Total:</h1>
          </div>
          <div>
            <h1>MAD 309</h1>
          </div>
        </div>
      </div>
      <div className="px-4 py-8 border-s border-e">have you coupon?</div>
      <div className="w-fullflex justify-center border-s border-e border-b p-4">
        <button className="w-11/12 p-4 font-semibold text-xl bg-primary tracking-widest hover:text-white hover:duration-700 ">
          <Link to={"/"}>CHECKOUT</Link>
        </button>
      </div>
    </div>
  );
};

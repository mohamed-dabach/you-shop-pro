import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Checkout() {
  const orders = useSelector(state => state.orders);
  const [somme, setSomme] = useState(0)
  const calculateTotal = () => {
    let total = 0;
    orders.forEach((order) => {
      total += Number(order.price) * order.count;
    });
    setSomme(total);
  };
  useEffect(() => {
    calculateTotal();
  }, [orders]);
  return (
    <div>
      <div className="bg-gray-50 container lg:px-40 lg:py-8 lg:pb-20 px-8 py-8">
        <div className="bg-white  lg:grid grid-cols-2  ">
          <div className="  col-span-1 ">
            <div className="p-8  ">
              <h3 className="pb-4">Customer information</h3>
              <input
                type="text"
                className="bg-white border border-slate-700 rounded-md text-gray-900 w-full focus:border-slate-700 px-3 py-3 "
                placeholder="Username or Email Address"
              />
            </div>
            <div className="p-8">
              <h3>Billing details</h3>
              <div className=" flex-wrap grid gap-4 grid-cols-2 ">
                <input
                  type="text"
                  className=" bg-white border border-slate-700 rounded-md text-gray-900 px-3 py-3"
                  placeholder="First name"
                />
                <input
                  type="text"
                  className=" bg-white border border-slate-700 rounded-md text-gray-900 px-3 py-3"
                  placeholder="Last name"
                />
                <input
                  type="text"
                  className=" col-span-2 bg-white border border-slate-700 rounded-md text-gray-900 px-3 py-3"
                  placeholder="Company name"
                />
                <select
                  name=""
                  id=""
                  className=" col-span-2 bg-white border border-slate-700 rounded-md text-gray-900 px-3 py-3"
                >
                  <option value="">United States (US)</option>
                </select>
                <input
                  type="text"
                  className=" bg-white border border-slate-700 rounded-md text-gray-900 px-3 py-3"
                  placeholder="House number and Street name"
                />
                <input
                  type="text"
                  className=" bg-white border border-slate-700 rounded-md text-gray-900 px-3 py-3"
                  placeholder="Apartment,suite,unit,ect.(optional)"
                />
              </div>
              <div className=" flex-wrap grid gap-4 py-4 grid-cols-3 ">
                <input
                  type="text"
                  className=" bg-white border border-slate-700 rounded-md text-gray-900 px-3 py-3"
                  placeholder="Town/City"
                />
                <select
                  name=""
                  id=""
                  className=" bg-white border border-slate-700 rounded-md text-gray-900 px-3 py-3"
                >
                  <option value="">California</option>
                </select>
                <input
                  type="text"
                  className=" bg-white border border-slate-700 rounded-md text-gray-900 px-3 py-3"
                  placeholder="ZIP Code"
                />
              </div>
              <input
                type="text"
                className="w-full  bg-white border border-slate-700 rounded-md text-gray-900 px-3 py-3"
                placeholder="Phone"
              />
            </div>

            <div className="p-8 ">
              <h3>Additional information</h3>
              <textarea
                className="  p-1  w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300"
                placeholder="Notes about your order,e.g. speacial notes for delivery"
                rows="2"
              ></textarea>
              <p>Have a coupon?</p>
            </div>
          </div>

          <div className=" bg-white px-6 py-8  ">
            <h3 className="pb-4">Your order</h3>
            <table className="w-5/6 text-sm text-left border rounded-t-lg">
              <thead className="text-md font-medium text-gray-400 ">
                <tr>
                  <th className="px-6 py-3">Product</th>
                  <th className="px-6 py-3">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {
                  orders.map((order) => {
                    return (
                      <tr key={order.id} className="border">
                        <th className="px-6 py-4 font-medium text-gray-600 ">
                          {order.title} × {order.count}
                        </th>
                        <td className="px-6 py-4">MAD {order.price * order.count}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
              <tfoot>
                <tr className="border">
                  <th className="px-6 py-4 font-medium text-gray-500 ">
                    Subtotal
                  </th>
                  <td className="px-6 py-4">
                    MAD  {somme}
                  </td>
                </tr>
                <tr className="border">
                  <th className="px-6 py-4 text-xl font-bold text-gray-500 ">
                    Total
                  </th>
                  <td className="px-6 py-4 text-xl font-bold text-gray-500">
                    MAD {somme + 1000}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="p-8 pb-16 ">
            <h3 className="pb-16">Payment</h3>
            <button className="flex items-center justify-center bg-primary  w-full   px-10 py-2 text-black hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                  clipRule="evenodd"
                />
              </svg>
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-semi-black  py-4 lg:grid grid-cols-2 ">
        <div className=" text-center text-white mb-4 l p-[30px] ">
          Copyright © 2024 Online Furniture Store
        </div>
        <div className=" text-center text-white p-[30px]">
          Powered by Online Furniture Store
        </div>
      </footer>
    </div>
  );
}
export default Checkout;

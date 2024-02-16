// const initialValue = {
//   orders: [
//     { id: 123, title: "wooden stool", price: 50, count: 3 },
//     // { id: 122, title: "green bedroom swof ", price: 100, count: 1 },
//   ],
// };

// export const reducer = (state = initialValue, action) => {
//   switch (action.type) {
//     case "update_product": {
//       const updatedCmmands = state.orders.map((order) => {
//         if (order.id === action.payload.id) {
//           if (action.payload.type === "inc") {
//             return { ...order, count: ++order.count };
//           } else if (action.payload.type === "dec") {
//             return { ...order, count: --order.count };
//           }
//         } else {
//           return order;
//         }
//         console.log(updatedCmmands);
//       });
//       return { ...state, orders: updatedCmmands };
//     }
//     default:
//       return state;
//   }
// };

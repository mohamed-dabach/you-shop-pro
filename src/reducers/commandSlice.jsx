import { createSlice } from "@reduxjs/toolkit";





const initialState = {
  commend: [],
};

const commandSlice=createSlice({
  name:'commend',
  initialState,
  reducers:{
    
    IncCommands:{
      prepare(order){
        return{
           payload:{order}
        }
      },
      reducer(state, action) {
        const updatedCommands = state.commend.map((order) => {
          if (order.id === action.payload.order.id) {
            const newCount = order.count + 1;
            return { ...order, count: newCount };
          }
          
          return order;
        });
        return { ...state, commend: updatedCommands };
      },
    },
    DecCommands:{
      prepare(order){
        return{
           payload:{order}
        }
      },
      reducer(state, action) {
        const updatedCommands = state.commend.map((order) => {
          if (order.id === action.payload.order.id) {
            const newCount = Math.max(0, order.count - 1);
            return { ...order, count: newCount };
          }
          return order;
        });
        return { ...state, commend: updatedCommands };
      },
    },
    
    deleteCommands(state,action){
        state.commend=state.commend.filter((order)=>
           order.id !== action.payload
        )
    },
    
    addToCart(state, action) {
      const productList = state.commend.find((order) => order.id === action.payload.id);

      if (productList) {
        state.commend = state.commend.map((order) =>
          order.id === action.payload.id ? { ...order, count: ++order.count } : order
        );
      } else {
        state.commend = [...state.commend, { ...action.payload, count: 1 }];
      }
    },
    //

 
   
  }
})

export const {IncCommands,DecCommands,deleteCommands,addToCart}=commandSlice.actions

export default commandSlice.reducer

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

import { createSlice } from "@reduxjs/toolkit";





const initialState = {
  commend: [
    { id: 123, title: "wooden stool", price: 50, count: 3 },
    { id: 122, title: "green bedroom swof ", price: 100, count: 1 },
  ],
};

const commandSlice=createSlice({
  name:'commend',
  initialState,
  reducers:{
    updateCommands:{
      prepare(id,type,price,count){
        return{
           payload:{id,type,price,count}
        }
      },
      reducer(state,action){
        const updatedCmmands = state.commend.map((order)=>{
          if(order.id === action.payload.id){
            if(action.payload.type === 'inc'){
              return {...order,count:++order.count}
            }else if(action.payload.type === 'dec'){
              return{...order,count:--order.count}
            }else{
              return order;
            }
          }
        })
        return {...state,orders:updatedCmmands}
      }
    }
  },

  addCommands(state,action){
     
  },
  deleteCommands(){

  }
})

export const {updateCommands}=commandSlice.actions

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

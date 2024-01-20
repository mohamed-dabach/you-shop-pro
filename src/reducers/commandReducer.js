const initialValue = {
    commands: [
      { id: 123, title: "abdo gey product", count: 3 },
      { id: 122, title: "abdo product gey ", count: 1 },
    ],
  };
  
  export const reducer = (state = initialValue, action) => {
    switch (action.type) {

      case "update_product": {
        const updatedCmmands = state.commands.map((command) => {
          if (command.id === action.payload.id) {
            if (action.payload.type === "inc") {
              return { ...command, count: ++command.count };
            } else if (action.payload.type === "dec") {
              return { ...command, count: --command.count };
            }
          } else {
            return command;
          }
          console.log(updatedCmmands);
        });
        return { ...state, commands: updatedCmmands };
      }
      // case "add_product": {
      //   return {
      //     ...state,
      //     commands: [...state.commands, action.payload.product],
      //   };
      // }
      default:
        return state;
    }
  };



//   dispatch({
//     type:"add_product",
//     payload:{ id: 122, title: "product title", count: 1 }
// });



// // const initialValue = {
// //     command:0
// // }

// const initialValue = {
//     commands: [
//       {  ID: 123, title: "abdo gey product", count: 3 },
//       {  ID: 1223, title: "abdo product gey ", count: 1 },
//     ],
//   };

// export const reducer = (state = initialValue , action) =>{

//     switch(action.type){
//         case "ADD":
//           return {...state, count: state.count + 1};
//         case "MINUSE":
//             return {...state, count : state.count - 1};
//         case "RESET":
//             return {...state, count : 0};
//         default:
//             return state;
//     }
// }

// export const handleAdd = () => {
//     return {
//         type:"ADD"
//     }
// }

// export const handleMinus = () => {
//     return {
//         type:"MINUSE"
//     }
// }

// export const handleRemove = () => {
//     return {
//         type:"RESET"
//     }
// }
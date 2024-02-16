import { ADDTOCART,  DECRIMENT, INCREMENT, REMOVE_ORDER } from "./ActionsOr";

const initialValues = {
   orders: [
    {
    id:123,
    img:"",
    name:"wood raise",
    price:400,
    category:"bathroom",
    count:0
   },
   {
    id:143,
    img:"",
    name:"wood blue",
    price:100,
    category:"living room",
    count:0
   }
]
};

export const OrderReducer = (state=initialValues, action) => {
    switch(action.type){
    case ADDTOCART : 
        return {...state, 
                  id:action.payload.id,
                  img:action.payload.img,
                  name:action.payload.name,
                  category:action.payload.category
    };

    case INCREMENT:
      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === action.payload.id
            ? { ...order, count: order.count + 1 }
            : order
        )
      };

    case DECRIMENT:
      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === action.payload.id
            ? { ...order, count: order.count - 1 }
            : order
        )
      };

      case REMOVE_ORDER:
      return {
        ...state,
        // orders: state.orders.map() 
    };

    default:
        return state;

    }  
}



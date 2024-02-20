import { ADDTOCART,  DECRIMENT, INCREMENT, REMOVE_ORDER } from "./ActionsOr";

const initialValues = {
  orders: []
};

export const OrderReducer = (state = initialValues, action) => {
  switch (action.type) {
      case ADDTOCART:
          return {
              ...state,
              orders: [
                  ...state.orders,
                  {
                      id: action.payload.id,
                      img: action.payload.img,
                      name: action.payload.name,
                      price: action.payload.price,
                      category: action.payload.category,
                      count: action.payload.count
                  }
              ]
          };

      case INCREMENT:
          return {
              ...state,
              orders: state.orders.map(order =>
                  order.id === action.payload.id ? { ...order, count: order.count + 1 } : order
              )
          };

      case DECRIMENT:
          return {
              ...state,
              orders: state.orders.map(order =>
                  order.id === action.payload.id ? { ...order, count: order.count - 1 } : order
              )
          };

      case REMOVE_ORDER:
          return {
              ...state,
              // Logic to remove the specified order
          };

      default:
          return state;
  }
};



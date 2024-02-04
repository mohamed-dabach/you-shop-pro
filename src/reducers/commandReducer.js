const initialValue = {
  products: [],
  categories: [],
  orders: [
    {
      id: 123,
      img: "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/cream-ceramic-oval-bathtub-300x300.png",
      title: "abdo gey product",
      price: 50,
      count: 3
    }
  ],
};

export const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case "update_product": {
      const updatedCmmands = state.orders.map((order) => {
        if (order.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return { ...order, count: ++order.count };
          } else if (action.payload.type === "dec") {
            return { ...order, count: --order.count };
          }
        } else {
          return order;
        }
        console.log(updatedCmmands);
      });
      return { ...state, orders: updatedCmmands };
    }
    case "FETCH_DATA": return {
      ...state, products: action.payload
    }
    case "FETCH_CATEG": return {
      ...state,
      categories: action.payload
    }
    case "ADD_TO_CART":
      const { id, title, img, price, count } = action.payload
      console.log(id, title, img, price, count)
      return {
        ...state,
        orders: [
          ...state.orders, {
            id: id,
            img: img,
            title: title,
            price: price,
            count: count
          }
        ]
      }
    default:
      return state;
  }
};

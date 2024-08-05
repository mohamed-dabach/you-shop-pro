import { createStore, combineReducers } from "redux";
import cardRedcure from "./reducers/cardReducer";
import productReducer from "./reducers/productReducer";

//combine all reducers
const rootReducer = combineReducers({
  card: cardRedcure,
  products: productReducer,
});
//create store
const store = createStore(rootReducer);
export default store;

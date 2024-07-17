import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReduser } from "./Authontication/Reducer";
import { thunk } from "redux-thunk";
import restaurantReducer from "./Restaurant/RestaurantReducer";
import menuItemReducer from "./Menu/MenuReduser";
import cartReducer from "./Cart/CartReducer";
import { orderReducer } from "./Order/OrderReducer";

const rooteReduser=combineReducers({
    auth:authReduser,
    restaurant: restaurantReducer,
    menu: menuItemReducer,
    cart: cartReducer,
    order: orderReducer
})

export const store = legacy_createStore(rooteReduser, applyMiddleware(thunk));

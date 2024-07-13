import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReduser } from "./Authontication/Reducer";
import { thunk } from "redux-thunk";

const rooteReduser=combineReducers({
    auth:authReduser,
})

export const store = legacy_createStore(rooteReduser, applyMiddleware(thunk));

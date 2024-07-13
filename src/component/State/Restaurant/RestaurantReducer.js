import { error } from "yupp/util/logger"
import * as ActionTypes from "./RestaurantActionTypes"

const initialState = {
    restaurants: [],
    usersRestaurant: null,
    restaurant: null,
    loading: false,
    error: null,
    events: [],
    restaurantsEvents: [],
    categories: [],
};


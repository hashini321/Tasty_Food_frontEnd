import { CREATE_CATEGORY_FAITURE, 
    CREATE_CATEGORY_REQUEST, 
    CREATE_CATEGORY_SUCCESS, 
    CREATE_EVENTS_FAITURE, 
    CREATE_EVENTS_REQUEST, 
    CREATE_EVENTS_SUCCESS, 
    CREATE_RESTAURANTS_FAITURE, 
    CREATE_RESTAURANTS_REQUEST, 
    CREATE_RESTAURANTS_SUCCESS, 
    DELETE_EVENTS_FAITURE, 
    DELETE_EVENTS_REQUEST, 
    DELETE_EVENTS_SUCCESS, 
    DELETE_RESTAURANTS_FAITURE, 
    DELETE_RESTAURANTS_REQUEST, 
    DELETE_RESTAURANTS_SUCCESS, 
    GET_ALL_EVENTS_FAITURE, 
    GET_ALL_EVENTS_REQUEST, 
    GET_ALL_EVENTS_SUCCESS, 
    GET_ALL_RESTAURANTS_FAITURE, 
    GET_ALL_RESTAURANTS_REQUEST, 
    GET_ALL_RESTAURANTS_SUCCESS, 
    GET_RESTAURANTS_BY_ID_FAITURE, 
    GET_RESTAURANTS_BY_ID_REQUEST, 
    GET_RESTAURANTS_BY_ID_SUCCESS, 
    GET_RESTAURANTS_BY_USER_ID_REQUEST, 
    GET_RESTAURANTS_BY_USER_ID_SUCCESS, 
    GET_RESTAURANTS_CATEGORY_FAITURE, 
    GET_RESTAURANTS_CATEGORY_REQUEST, 
    GET_RESTAURANTS_CATEGORY_SUCCESS, 
    GET_RESTAURANTS_EVENTS_FAITURE, 
    GET_RESTAURANTS_EVENTS_REQUEST, 
    GET_RESTAURANTS_EVENTS_SUCCESS, 
    UPDATE_RESTAURANTS_FAITURE, 
    UPDATE_RESTAURANTS_REQUEST, 
    UPDATE_RESTAURANTS_STATUS_FAITURE, 
    UPDATE_RESTAURANTS_STATUS_REQUEST, 
    UPDATE_RESTAURANTS_STATUS_SUCCESS, 
    UPDATE_RESTAURANTS_SUCCESS } from './RestaurantActionTypes';
import { api } from '../../Config/api';

export const getAllRestaurantsAction = (token) => {
  return async(dispatch) =>{
    dispatch({type:GET_ALL_RESTAURANTS_REQUEST})
    try {
        const {data} = await api.get(`/api/restaurants`,{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        });
        dispatch({type:GET_ALL_RESTAURANTS_SUCCESS, payload: data});
        console.log("all restaurant ", data);
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:GET_ALL_RESTAURANTS_FAITURE,payload:error})
        
    }   
}
}

export const getRestaurantById = (reqData) => {
    return async(dispatch) =>{
      dispatch({type:GET_RESTAURANTS_BY_ID_REQUEST})
      try {
          const response= await api.get(`/api/restaurants/${reqData.restaurantId}`,{
              headers:{
                  Authorization:`Bearer ${reqData.jwt}`,
              },
          });
          dispatch({type:GET_RESTAURANTS_BY_ID_SUCCESS,payload:response.data});
          console.log("all restaurant ", response.data);
      } catch (error) {
          console.log("catch error",error)
          dispatch({type:GET_RESTAURANTS_BY_ID_FAITURE,payload:error})
          
      }   
  }
}

export const getRestaurantByUserId = (jwt) => {
return async(dispatch) =>{
    dispatch({type:GET_RESTAURANTS_BY_USER_ID_REQUEST})
    try {
        const response= await api.get(`/api/admin/restaurants/user`,{
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
        });
        dispatch({type:GET_RESTAURANTS_BY_USER_ID_SUCCESS,payload:response.data});
        console.log("all restaurant by user id ", response.data);
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:GET_RESTAURANTS_BY_ID_FAITURE,payload:error.message})
        
    }   
}
}

export const createRestaurant = (reqData) => {
    console.log("token.........",reqData.token);
    return async(dispatch) =>{
      dispatch({type:CREATE_RESTAURANTS_REQUEST})
      try {
          const {data}= await api.post(`/api/admin/restaurants`, reqData.data,{
              headers:{
                  Authorization:`Bearer ${reqData.token}`,
              },
          });
          dispatch({type:CREATE_RESTAURANTS_SUCCESS,payload:data});
          console.log("create restaurant ", data);
      } catch (error) {
          console.log("catch error",error)
          dispatch({type:CREATE_RESTAURANTS_FAITURE,payload:error})
          
      }   
  }
}

export const updateRestaurant = ({restaurantId ,restaurantData, jwt}) => {
return async(dispatch) =>{
    dispatch({type:UPDATE_RESTAURANTS_REQUEST})
    try {
        const res= await api.put(`api/admin/restaurant/${restaurantId}`, restaurantData,{
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
        });
        dispatch({type:UPDATE_RESTAURANTS_SUCCESS,payload:res.data});
        
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:UPDATE_RESTAURANTS_FAITURE,payload:error})
        
    }   
}
}

export const deleteRestaurant = ({restaurantId , jwt}) => {
    return async(dispatch) =>{
        dispatch({type:DELETE_RESTAURANTS_REQUEST})
        try {
            const res= await api.delete(`/api/admin/restaurant/${restaurantId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            dispatch({type:DELETE_RESTAURANTS_SUCCESS,payload:restaurantId});
            console.log("delete restaurant",res.data)
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:DELETE_RESTAURANTS_FAITURE,payload:error})
            
        }   
    }
}

export const updateRestaurantStatus = ({restaurantId , jwt}) => {
    return async(dispatch) =>{
        dispatch({type:UPDATE_RESTAURANTS_STATUS_REQUEST})
        try {
            const res= await api.put(`api/admin/restaurants/${restaurantId}/status`, {},{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            dispatch({type:UPDATE_RESTAURANTS_STATUS_SUCCESS,payload:res.data});
            console.log("resss",res.data)
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:UPDATE_RESTAURANTS_STATUS_FAITURE,payload:error})
            
        }   
    }
}

export const createEvent = ({data,jwt,restaurantId}) => {
    return async(dispatch) =>{
        dispatch({type:CREATE_EVENTS_REQUEST})
        try {
            const res= await api.post(`api/admin/events/restaurants/${restaurantId}`, data,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            dispatch({type:CREATE_EVENTS_SUCCESS,payload:res.data});
            console.log("create event",res.data)
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:CREATE_EVENTS_FAITURE,payload:error})
            
        }   
    }
}

export const getAllEvents = ({jwt}) => {
    return async(dispatch) =>{
        dispatch({type:GET_ALL_EVENTS_REQUEST})
        try {
            const res= await api.get(`api/events`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("get all event",res.data)
            dispatch({type:GET_ALL_EVENTS_SUCCESS,payload:res.data});
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:GET_ALL_EVENTS_FAITURE,payload:error})
            
        }   
    }
}

export const deleteEventAction = ({eventId,jwt}) => {
    return async(dispatch) =>{
        dispatch({type:DELETE_EVENTS_REQUEST})
        try {
            const res= await api.get(`api/admin/events/${eventId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("delete event",res.data)
            dispatch({type:DELETE_EVENTS_SUCCESS,payload:eventId});
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:DELETE_EVENTS_FAITURE,payload:error})
            
        }   
    }
}

export const getRestaurantEvents = ({restaurantId,jwt}) => {
    return async(dispatch) =>{
        dispatch({type:GET_RESTAURANTS_EVENTS_REQUEST})
        try {
            const res= await api.get(`api/admin/events/restaurant/${restaurantId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("get restaurant events",res.data)
            dispatch({type:GET_RESTAURANTS_EVENTS_SUCCESS,payload:res.data});
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:GET_RESTAURANTS_EVENTS_FAITURE,payload:error})
            
        }   
    }
}

export const createCategoryAction = ({reqData,jwt}) => {
    return async(dispatch) =>{
        dispatch({type:CREATE_CATEGORY_REQUEST})
        try {
            const res= await api.post(`api/admin/category`, reqData,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("create category",res.data)
            dispatch({type:CREATE_CATEGORY_SUCCESS,payload:res.data});
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:CREATE_CATEGORY_FAITURE,payload:error})
            
        }   
    }
}

export const getRestaurantsCategory = ({jwt, restaurantId}) => {
    return async(dispatch) =>{
        dispatch({type:GET_RESTAURANTS_CATEGORY_REQUEST})
        try {
            const res= await api.get(`/api/category/restaurant/${restaurantId}`, {
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("get restaurant category",res.data)
            dispatch({type:GET_RESTAURANTS_CATEGORY_SUCCESS,payload:res.data});
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:GET_RESTAURANTS_CATEGORY_FAITURE,payload:error})
            
        }   
    }
}
import axios from "axios";
const URL="http://localhost:8080";
import * as actionTypes from './constants/cardConstents'

export const addToCard=(id,quantity)=>async(dispatch)=>{
    try{
        const {data}=await axios.get(`${URL}/products/${id}`);
        dispatch({type:actionTypes.ADD_TO_CART_SUCCESS,payload:{...data,quantity}});

    }catch(e){
        dispatch({type:actionTypes.ADD_TO_CART_FAIL,payload:e.message})
    }
}

export const removeFromCart=(id)=>async(dispatch)=>{
    try{
        dispatch({type:actionTypes.REMOVE_FROM_CART_SUCCESS,payload:id});

    }catch(e){
        dispatch({type:actionTypes.REMOVE_FROM_CART_FAIL,payload:e.message})
    }
}
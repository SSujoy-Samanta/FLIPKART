import axios from "axios";
const URL="http://localhost:8080";

import * as actionTypes from "./constants/productConstants"

export const getProducts=()=>async(dispatch)=>{
    try{
        const {data}=await axios.get(`${URL}/products`);
        dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS,payload:data});
    }catch(e){
        dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:e.message})
    }
}

export const getProductDetials=(id)=>async(dispatch)=>{
    try{
        dispatch({type:actionTypes.GET_PRODUCTS_DETAILS_REQUEST})
        const {data}=await axios.get(`${URL}/products/${id}`);
        dispatch({type:actionTypes.GET_PRODUCTS_DETAILS_SUCCESS,payload:data});
    }catch(e){
        dispatch({type:actionTypes.GET_PRODUCTS_DETAILS_FAIL,payload:e.message})
    }
}
import * as actionType from '../constants/productConstants'


export const getProductsReducer=(state={products:[]},action)=>{
    switch(action.type){
        case actionType.GET_PRODUCTS_SUCCESS: return {products:action.payload};

        case actionType.GET_PRODUCTS_FAIL: return {error: action.payload};

        default: return state;
    }
}
export const getProductDetialsReducer=(state={product:{}},action)=>{
    switch(action.type){
        case actionType.GET_PRODUCTS_DETAILS_REQUEST: return {loding:true};

        case actionType.GET_PRODUCTS_DETAILS_SUCCESS: return {loding:false,product:action.payload};

        case actionType.GET_PRODUCTS_DETAILS_FAIL: return {loding:false,error: action.payload};

        case actionType.GET_PRODUCTS_DETAILS_RESET: return {product:{}}

        default: return state;
    }
}
import * as actionType from '../constants/cardConstents'


export const cartReducer=(state={cartItems:[]},action)=>{
    switch(action.type){
        case actionType.ADD_TO_CART_SUCCESS: 
            const item=action.payload;
            const exit=state.cartItems.find(product=>product.id==item.id);
            if(exit){
                return {...state,cartItems:state.cartItems.map(data=>data.product===exit.product ? item :data)}
            }else{
                return {...state,cartItems:[...state.cartItems,item]}
            }

        case actionType.ADD_TO_CART_FAIL: return {error: action.payload};

        case actionType.REMOVE_FROM_CART_SUCCESS: 
            return{...state,cartItems:state.cartItems.filter(product=>product.id !=action.payload)};

        case actionType.REMOVE_FROM_CART_FAIL: return {error: action.payload}

        default: return state;
    }
}
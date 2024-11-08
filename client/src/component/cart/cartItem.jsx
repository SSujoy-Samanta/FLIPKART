import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React from 'react'
import { addEllipsis } from '../../utils/common-utills'
import GroupButton from './buttonGroup'
import { removeFromCart } from '../../redux/actions/cardAction'
import {useDispatch} from 'react-redux'

const Remove=styled(Button)`
  margin-top:2.1rem;
  color:whire;
  font-weight:bold;
  font-size:1rem;
  width:6rem;
`
const currentDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);
const CartItem = ({item}) => {
  const dispatch=useDispatch();
  const removeCart=(id)=>{
    dispatch(removeFromCart(id))
  }

  return (
    <div className='CartItem'>
        <div className="cartImage">
            <img src={item.url} alt="cart image" width={80} height={90} />
            <div className="quantity">
                <GroupButton item={item}/>
            </div>
        </div>
        <div className="cartDetals">
          <div style={{display:"flex",alignItems:'center'}}>
            <p>{addEllipsis(item.title.longTitle)}</p>
            <p style={{fontSize:'1rem',marginLeft:'3rem'}}>Delivery By- {currentDate.toDateString()} | <span style={{color:"green"}}>Free</span></p>
          </div>
          
          {
            item.shoeSize &&
                  <p style={{color:'#e0dede'}}>Size : {item.shoeSize}</p>
          }
          {
            item.shirtSize  &&
                  <p style={{color:'#e0dede'}}>Size : {item.shirtSize}</p>
          }
          <p style={{color:'gray'}}>Seller : Sujoy Samanta</p>
          <div className="price">
              <p style={{fontSize:"1rem",textDecoration:'line-through'}}>&#8377;{item.price.cost.toLocaleString("en-IN")}</p>
              <p style={{fontSize:"1.2rem",fontWeight:'bolder'}}>&#8377;{item.price.mrp.toLocaleString("en-IN")}</p>
              <b style={{fontSize:"1rem",color:'green'}}>{item.price.discount}<span style={{color:"green",fontSize:'1.2rem',marginLeft:'.2rem'}}>off</span></b>
          </div>
          <Remove variant='contained' onClick={()=>removeCart(item.id)}>REMOVE</Remove>
        </div>
    </div>
  )
}

export default CartItem
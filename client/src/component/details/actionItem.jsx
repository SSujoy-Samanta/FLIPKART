import React from 'react'
import { Button,Box } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { addToCard } from '../../redux/actions/cardAction';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';


const Image=styled(Box)`
    display:flex;
    justify-content:center;
    aling-item:center;
    flex-direction:column;
    width:100%;
    background-color:white;
    padding:1rem;
    margin:1rem;
    border-radius:.5rem;
    row-gap:1rem;
`
const ActionItem = ({product}) => {
  const {id}=product;
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const [quantity,setQuantity]=useState(1);
  const addItemCart=()=>{
    dispatch(addToCard(id,quantity));
    navigate('/cart');
  }
  const buyNow=()=>{
    let response=payUsingPaytm({amount:10,email:"sujoysamanta1718@gmail.com"});
    let information={
      action:'https://securegw-stage.paytm.in/order/process',
      params:response,
    }
    post(information);
  }

 
  return (
    <Image>
        <img src={product.detailUrl} alt="product image" style={{objectFit:'contain'}}/>
        <div className="btn-cart">
            <Button variant='contaier' style={{backgroundColor:"orange"}} onClick={()=>addItemCart()}     ><ShoppingCartIcon/>ADD TO CART</Button>
            <Button variant='contaier' style={{backgroundColor:"rgb(255, 57, 57)"}} onClick={()=>buyNow()}><ElectricBoltIcon/>BUY NOW</Button>
        </div>
       
    </Image>
  )
}

export default ActionItem
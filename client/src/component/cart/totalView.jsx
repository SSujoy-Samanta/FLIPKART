import styled from '@emotion/styled';
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react';
const TotalProce=styled(Box)`
  padding:1rem;
  font-size:1.3rrem;
  border-bottom:2px solid #eae8e8;
  color:blue;
`
const Elements=styled(Box)`
  display: flex;
  aling-items:center;
  justify-content:space-between;
  padding:.5rem;
  
`
const ContentPrice=styled(Box)`
  display: flex;
  flex-direction:column;
  aling-items:center;
  justify-content:center;
  row-gap:1rem;
  font-size:1.2rem;
  padding:.2rem;
  color:grey;
`
const TotalView = ({cartItems}) => {
  const [total,setTotal]=useState(0);
  const [discount,setDiscount]=useState(0);
  const [delivery,setDelivery]=useState(40);

  useEffect(()=>{
    totalPrice();
  },[cartItems])

  const totalPrice=()=>{
    let Price=0;
    let Discount=0;
    cartItems.map((item)=>{
        Price+=item.price.mrp;
        Discount+=(item.price.mrp-item.price.cost);
    })
    setTotal(Price);
    setDiscount(Discount);
  }
  
  return (
    <div className='TotalView'>
        <TotalProce>
          <b>PRICE DETAILS</b>
        </TotalProce>
        <Box>
          <ContentPrice>
            <Elements>
              <p>Price({cartItems?.length} items)</p>
              <p>&#8377;{total.toLocaleString("en-IN")}</p>
            </Elements>
            <Elements>
              <p>Discount</p>
              <p>&#8377;{discount.toLocaleString("en-IN")}</p>
            </Elements>
            <Elements>
              <p>Delivery Charges</p>
              <p style={{display:'flex',alignItems:'center',gap:'3px'}}><p style={{fontSize:"1.2rem",textDecoration:'line-through'}}>&#8377;{delivery.toLocaleString("en-IN")} </p><span style={{color:'green'}}>Free</span></p>
            </Elements>
            <Elements style={{borderTop:'2px solid #eae8e8',borderBottom:'2px solid #eae8e8',height:'3rem',alignItems:'center',color:'black'}}>
              <p colSpan={2}><b>Total Amount</b></p>
              <p colSpan={2}>&#8377;<b>{(total-discount).toLocaleString("en-IN")}</b></p>
            </Elements>
          </ContentPrice>
        </Box>
        <Box style={{padding:"1rem",fontSize:'1rem',color:'green'}}><b>You will save &#8377;{(discount).toLocaleString("en-IN")} on this order</b></Box>
    </div>
  )
}

export default TotalView
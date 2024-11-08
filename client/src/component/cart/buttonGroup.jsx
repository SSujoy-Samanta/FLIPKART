import styled from '@emotion/styled'
import { ButtonGroup,Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'


const component=styled(ButtonGroup)`
    margin-top:30px;
`

const GroupButton = ({item}) => {
  const [quantity,setQuantity]=useState(1);
  const Quantity=quantity;
  const addCart=()=>{
    setQuantity(quantity+1)
  }
  const removeCart=()=>{
    setQuantity(quantity-1)
  }
  console.log('Q-',Quantity)
  console.log('q-',quantity);
  return (
    <ButtonGroup>
        {
          quantity==1?
            <Button onClick={removeCart} disabled>-</Button>
          :
            <Button onClick={removeCart}>-</Button>
        }
        <Button>{quantity}</Button>
        <Button onClick={addCart}>+</Button>
    </ButtonGroup>
  )
  
}

export default GroupButton;




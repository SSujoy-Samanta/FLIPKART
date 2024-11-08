import { Grid, Typography ,Box, Button} from '@mui/material';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './cartItem';
import TotalView from './totalView';
import styled from '@emotion/styled';
import EmptyCart from './emptycart';

const Container=styled(Grid)`
    padding:30px 135px;
    
`
const Header=styled(Box)`
    padding:15px 24px;
    border-bottom:.7rem solid #b0b0b026;
`
const PlaceOrder=styled(Box)`
    box-shadow:0 -2px 10px 0 rgb(0 0 0 /10%);
    border-top:2px solid #f0f0f0;
    padding:1rem; 
`


const Cart = () => {
   
    const {cartItems}=useSelector(state=>state.cart);
    
   
    
  return (
    <>
        {
            cartItems.length ?
                <Container container>
                    <Grid item lg={9} md={12} sm={12} xs={12} style={{backgroundColor:'white'}}>
                        <Header >
                            <Typography ><b>My Cart ( </b>{cartItems.length}<b> )</b></Typography>
                        </Header>
                        <Header >
                            <Typography style={{display:'flex',alignItems:'center',justifyContent:"space-between"}}><b>Delivery To -</b><Button>Location</Button></Typography>
                        </Header>
                        {
                            cartItems.map(item=>
                                <CartItem item={item}/>
                            )
                        }
                        <PlaceOrder>
                            <button className='placeOrderBtn'>PLACE ORDER</button>
                        </PlaceOrder>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <TotalView cartItems={cartItems}/>
                    </Grid>
                </Container>
            :
                <div className='emptyCart'>
                    <EmptyCart/>
                </div>

        }
    </>
  )
}

export default Cart
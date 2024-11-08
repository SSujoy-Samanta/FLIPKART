import React from 'react'
import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetials } from '../../redux/actions/productAction';
import { Box, Button } from '@mui/material';
import ActionItem from './actionItem';
import styled from '@emotion/styled';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Delivery from './delivery';
import SizeChat from './sizeChat';

const Detials=styled(Box)`
    position:absolute;
    left:30%;
    display:flex;
    aling-item:center;
    flex-direction:column;
    width:60%;
    background-color:white;
    padding:1rem;
    margin:1rem;
    margin-left:5rem;
    border-radius:.5rem;
    padding:1rem;
    row-gap:.5rem;
`
const ReviewButton=styled(Button) `
    background-color:green;
    border-radius:1rem;
    color:white;
    width:.2rem;
    height:2rem;
`

const DetailsPage = () => {
    const dispatch=useDispatch();
    const {loding,product}=useSelector(state=>state.getProductDetials);
    const {id}=useParams();  
    useEffect(()=>{
        if(product && product.id!=id){
            dispatch(getProductDetials(id));
        }
    },[dispatch,id,loding,product]);
    const URLIMG="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90";
  return (
    <div className='OneProduct'>
        {
            product && Object.keys(product).length && 
                    <div className="displayProduct">
                        <Box style={{position:"fixed"}}>
                            <ActionItem product={product}/>
                        </Box>
                            
                        <Detials>
                            <p style={{fontSize:"1.2rem",color:"GrayText"}}>{product.title.shortTitle }</p>
                            <b style={{fontSize:"1.5rem"}}>{product.title.longTitle}</b>
                            <b style={{fontSize:"1.2rem",color:"Green"}}>Special Price</b>
                            <div className="price">
                                <p style={{fontSize:"1.7rem",fontWeight:'bolder'}}>&#8377;{product.price.mrp.toLocaleString("en-IN")}</p>
                                <p style={{fontSize:"1.2rem",textDecoration:'line-through'}}>&#8377;{product.price.cost.toLocaleString("en-IN")}</p>
                                <b style={{fontSize:"1.3rem"}}>{product.price.discount}<span style={{color:"green",fontSize:'1.2rem',marginLeft:'.2rem'}}>off</span></b>
                            </div>
                            <p style={{display:"flex",alignItems:'center'}}><ReviewButton variant='contained' color='success'><StarBorderIcon/>4.3</ReviewButton>
                            <span style={{fontSize:'1.2rem',marginLeft:"1rem",fontWeight:'800',color:'GrayText'}}>400 ratings and 54 reviews</span></p>
                            <div className="offers">
                                <p style={{fontSize:"1.2rem",fontWeight:"bold",marginTop:"1.2rem",marginBottom:".7rem"}}>Avaliable Offers</p>
                                <p style={{display:"flex",alignItems:'center',fontSize:'1rem',gap:'.5rem'}}><img src={URLIMG} style={{width:"1.2rem",margin:".2rem"}}/><b>Bank Offer</b>&nbsp;Get ₹25* instant discount for the 1st Flipkart Order using Flipkart UPI <a href="/" style={{textDecoration:"none",color:'blue',fontWeight:'bolder'}}>&nbsp;T&C</a></p>
                                <p style={{display:"flex",alignItems:'center',fontSize:'1rem',gap:'.5rem'}}><img src={URLIMG} style={{width:"1.2rem",margin:".2rem"}}/><b>Bank Offer</b>&nbsp;5% Cashback on Flipkart Axis Bank Card<a href="/" style={{textDecoration:"none",color:'blue',fontWeight:'bolder'}}>&nbsp;T&C</a></p>
                                <p style={{display:"flex",alignItems:'center',fontSize:'1rem',gap:'.5rem'}}><img src={URLIMG} style={{width:"1.2rem",margin:".2rem"}}/><b>Special Price</b>&nbsp;Get extra 23% off (price inclusive of cashback/coupon) <a href="/" style={{textDecoration:"none",color:'blue',fontWeight:'bolder'}}>&nbsp;T&C</a></p>
                                <p style={{display:"flex",alignItems:'center',fontSize:'1rem',gap:'.5rem'}}><img src={URLIMG} style={{width:"1.2rem",margin:".2rem"}}/><b>Partner Offer</b>&nbsp;Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000* <a href="/" style={{textDecoration:"none",color:'blue',fontWeight:'bolder'}}>&nbsp;know more</a></p>
                            </div>
                           <Delivery/>
                           <SizeChat product={product}/>
                           
                        </Detials>
                        
                    </div>
        }
    </div>
  )
}

export default DetailsPage;
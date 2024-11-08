import { Button } from '@mui/material';
import React from 'react'

const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    
const EmptyCart = () => {
  return (
    <div className='EmptyCart'>
        <div>
            <img src={imgurl} alt="Empty cart" style={{width:'300px'}}/>
        </div>
        <div className='EmptyMessage'>
            <p>Missing Cart items?</p>
            <p>Login to see the items you added previously</p>
            <Button style={{backgroundColor:'orange',color:'white'}}>LOG IN</Button>
        </div>
    </div>
  )
}

export default EmptyCart
import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import React from 'react';
import Countdown from 'react-countdown';

const DealTimer=({title,timer})=>{
    const StyledButton=styled(Button)`
        margin-left:auto;
    `
    const renderer=({hours,minutes,seconds})=>{
        return (<Box variant={"span"} ><span style={{color:"red"}}>{hours}:{minutes}:{seconds}</span> Left</Box>);
    }
    return (
        <div className="dealTimer">
            <p>{title}</p>
            {
                timer && 
                        <>
                            <img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg' alt="timerImage" width={25} style={{marginLeft:".5rem",marginRight:".5rem"}} />
                            <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
                        </>       
            }
            <StyledButton variant="contained" color='primary'>VIEW ALL</StyledButton>
            
        </div>
        
    );
}

export default DealTimer;
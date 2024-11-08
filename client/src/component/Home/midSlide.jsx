import { Box } from "@mui/material";
import Slide from "./slide";
import styled from "@emotion/styled";

const MidSlide=({products,title,timer})=>{
    const Componenet=styled(Box)`
        display:flex;
        justify-content:space-between;

    `
    const LeftComponenet=styled(Box)`
        width:85%;

    `
    const RightComponenet=styled(Box)`
        margin-top:1rem;
        padding:.5rem;
        background-color:white;
        border-radius: .5rem;
        cursor: pointer;
        height:230px;

    `
    const addURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return(
        <Componenet>
            <LeftComponenet>
                <Slide products ={products} title={title} timer={timer}/>
            </LeftComponenet>
            < RightComponenet>
                <img src={addURL} alt="Add image" width={200} height={225} style={{objectFit:"fill"}}/>

            </ RightComponenet>
        </Componenet>
    );
}
export default MidSlide
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ErrorIcon from '@mui/icons-material/Error';
const currentDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);
const Delivery=()=>{
    return(
        <>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'1rem',color:'GrayText'}}>
            <div  style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <LocationOnIcon style={{color:"blue"}}/>
                <p>Delivery To</p>
            </div>
            <p>Services</p>
            <p style={{display:'flex',alignItems:'center',gap:'.5rem'}}>&#8377;Cash on Delivery available<ErrorIcon style={{cursor:'pointer'}}/></p>
            
            </div>
            <div className="delivery">
                <div style={{display:"flex",alignItems:'center',gap:".2rem"}}><b>Delivery By- {currentDate.toDateString()}</b> | <b style={{color:"green"}}>Free</b><p style={{textDecoration:"line-through",fontSize:"1rem"}}>&#8377;40</p><ErrorIcon style={{cursor:"pointer"}}/></div>
                <div>if ordered before 11:59 AM</div>
            </div>
        </>
        
        
    )
}

export default Delivery;
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Loginpage from './login/loginpage';
import { useState,useContext } from 'react';
import { DataContext } from '../context/dataProvider';
import Profile from './header/profile';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
const HeaderComponent = () => {
  const {cartItems}=useSelector(state=>state.cart);
  const [open,setOpen]=useState(false);
  const openLogin=()=>{
      setOpen(true);
  }
  const {acc,setAcc}=useContext(DataContext);
  return (
    <div className="headerContent">
      {
        acc?<Profile account={acc} setAccount={setAcc}/>:
                <button className="login" onClick={()=>openLogin()}><AccountCircleIcon/>Login</button>
      }
      <Link to='/cart' style={{textDecoration:'none',color:'inherit'}}>
        <div className="Cart"><Badge badgeContent={cartItems?.length} color='primary'><AddShoppingCartIcon/></Badge><p>Cart</p></div>
      </Link>
      
      <div className='Seller'><StorefrontIcon/><p>Beacome a Seller</p></div>
      <Loginpage open={open} setOpen={setOpen}/>
    </div>
  )
}

export default HeaderComponent
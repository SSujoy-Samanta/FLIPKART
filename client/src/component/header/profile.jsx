import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Menu ,MenuItem} from '@mui/material';
import { useState } from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Profile=({account,setAccount})=>{
    const [open,setOpen]=useState(false);
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };
    const handleClose = () => {
        setOpen(false);
    }
    const LogOut=()=>{
        setAccount("");
    }
    return(
        <div className="profile">
            <div className="account" onClick={handleClick}><AccountCircleIcon/>{account}<KeyboardArrowDownIcon/></div>
            <Menu
                id="basic-menu"
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem> */}
                <MenuItem onClick={()=>{handleClose(),LogOut()}}><PowerSettingsNewIcon color='primary'/> Logout</MenuItem>
            </Menu>
        </div>
        
        
    )
}
export default Profile;
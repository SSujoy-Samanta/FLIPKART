import React from 'react'
import {AppBar,Toolbar,styled,Box, colors} from '@mui/material'
import Search from '../search'
import HeaderComponent from '../headerComponent'
import { Link } from 'react-router-dom'

const Header = () => {
    const HeaderSt=styled(AppBar)`
        background:white;
        height:4.5rem;
        justify-content:center ;
        box-shadow:none;
        position:fixed;
    `
    
  return (
    <HeaderSt>
        <Toolbar>
            <Link to={'/'} className='link'>
                <Box>
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="FlipKart Icon" />
                </Box>
            </Link>
            
             <Search/>
            <HeaderComponent/>
        </Toolbar>
       
       
    </HeaderSt>
  )
}

export default Header
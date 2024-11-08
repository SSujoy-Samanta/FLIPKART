import React from 'react'
import { Box } from '@mui/material'
import { navData } from '../../container/data'
import { v4 as uuidv4 } from 'uuid';

const NavHome = () => {
  return (
    <Box className="navContainer">
        {
            navData.map(data=>
                <Box className='navComponent' key={uuidv4()}>
                    <img src={data.url} alt="nav Image" height={80}/>
                    <p style={{cursor:"pointer"}}>{data.text}</p>
                </Box>
            )
        }
    </Box>
  )
}

export default NavHome
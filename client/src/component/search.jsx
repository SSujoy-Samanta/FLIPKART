import React, { useEffect } from 'react'
import { InputBase,styled ,Box, ListItem,List} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getProducts } from '../redux/actions/productAction';
import { Link } from 'react-router-dom';

const ListWrapper=styled(List)`
  position:absolute;
  background-color:rgb(243, 243, 243);
  top:2.5rem;
  border-bottom: 2px solid rgb(201, 198, 198);
  border-left: 2px solid rgb(201, 198, 198);
  border-right: 2px solid rgb(201, 198, 198);
  width:100%;
  
`
const Search = () => {
  const {products}=useSelector(state=>state.getProducts);
  const [text,setText]=useState('');
  const getText=(text)=>{
    setText(text);
  }
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch]);

  return (
    <>
      <Box className="Search">
       <InputBase className='inputField' placeholder='Search For Product ,Brands And More' onChange={(e)=>getText(e.target.value)} value={text}/>
       <SearchIcon style={{fontSize:35,cursor:"pointer"}}/>
       {
        text &&
              <ListWrapper>
                {
                  products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>
                    <Link to={`/products/${product.id}`} style={{textDecoration:"none",color:"black"}} onClick={()=>setText('')}>
                      <ListItem>
                        {product.title.longTitle}
                      </ListItem>
                    </Link>
                    
                  )
                }
              </ListWrapper>
       }
      </Box>
    </>
  )
}

export default Search
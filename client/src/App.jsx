import { useState } from 'react'
import './App.css'
import Header from './component/header/header'
import Home from './component/Home/home'
import DataProvider from './context/dataProvider'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DetailsPage from './component/details/detailsPage'
import { Box } from '@mui/material'
import Cart from './component/cart/cart'
function App() {
  return (
   <DataProvider>
    <BrowserRouter>
      <Header/>
      <Box style={{marginTop:"80px"}}>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/products/:id' element={<DetailsPage/>}/>
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </Box>
      
      
    </BrowserRouter>
    
   </DataProvider>
  )
}

export default App

import React from 'react'
import NavHome from './navHome'
import Banner from './banner'
import { useEffect } from 'react'
import { getProducts } from '../../redux/actions/productAction'
import { useDispatch,useSelector } from 'react-redux'
import Slide from './slide'
import MidSlide from './midSlide'
const Home = () => {
  const{products}=useSelector(state=>state.getProducts)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch])
  return (
    <div className='Home'>
       <NavHome/>
       <div className="banner">
            <Banner/> 
            <MidSlide products={products} title="Deal Of The Day" timer={true}/>
            <Slide products={products} title="Discount For Yoy" timer={false}/>
            <Slide products={products} title="Suggesting Items" timer={false}/>
            <Slide products={products} title="Top Selections" timer={false}/>
            <Slide products={products} title="Recomended Items" timer={false}/>
            <Slide products={products} title="Trending Offers" timer={false}/>
            <Slide products={products} title="Season's Top Picks " timer={false}/>
       </div>
      
       
    </div>
  )
}

export default Home
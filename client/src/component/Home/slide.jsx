import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DealTimer from './dealTimer';
import Product from './product';
import { Link } from 'react-router-dom';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
};
const Slide=({products,title,timer})=>{
    
    return(
            <div className="productsView">
                <DealTimer title={title} timer={timer} />
                <Carousel
                  responsive={responsive}
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  infinite={false}
                  autoPlaySpeed={1000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                  centerMode={true}
                  className='productSlider'
              >
                  {
                      products.map(product=>
                        <Link to={`products/${product.id}`} className='link'>
                          <Product product={product}/>
                        </Link>
                          
                      )
                  }
              </Carousel >
            </div>

           
        
    );
}
export default Slide;
import React from 'react'
import Carousel from 'react-multi-carousel'
import { bannerData } from '../../container/data';
import "react-multi-carousel/lib/styles.css";
import { styled } from '@mui/material';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};
const Banner = () => {
    const BannerImg=styled('img')`
        height:280px;
    `
  return (
   <>
     <Carousel 
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
    >
        {
            bannerData.map(data=>
                <BannerImg src={data.url} key={data.id} alt="banner image"  />
            )
        }
    </Carousel>
   </>
  )
}

export default Banner
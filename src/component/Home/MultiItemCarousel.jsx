import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import CarouseItem from './CarouseItem';
import { topMeels } from './TopMeet';

const MultiItemCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
     // slidesToShow: window.innerWidth >= 800 ? 5 : 2, // Adjust based on viewport width
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:2000,
      arrows:false
    };
  return (
    <div>
        <Slider {...settings}>
            {topMeels.map((item)=><CarouseItem
            image={item.image}
            title={item.title}/>)}
        </Slider>
    </div>
  )
}

export default MultiItemCarousel
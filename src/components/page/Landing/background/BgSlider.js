import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React, { Component } from 'react'
// import Slider from 'react-slick'

// import backImg1 from '../Img/LandingImg01.jpg'
// import backImg2 from '../Img/LandingImg02.jpg'
// import backImg3 from '../Img/LandingImg03.jpg'
// import backImg4 from '../Img/LandingImg04.jpeg'

import Slider from 'react-slick'
import styled from 'styled-components'
import { Back01 } from './Background01'
import { Back02 } from './Background02'
import { Back03 } from './Background03'
import { Back04 } from './Background04'

const BgSlider = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 20000,
    cssEase: 'linear',
  }

  const data = [{ id: 1, bg: <Back01>{children}</Back01> }]

  return (
    <div>
      <Slider {...settings}>
        <Back01>{children}</Back01>
      </Slider>
    </div>
  )
}

const ImageContainer = styled.div`
  margin: 0 16px;
`

const SliderBox = styled.div`
  dispaly: plex;
  flex-direction: row;
`

export default BgSlider

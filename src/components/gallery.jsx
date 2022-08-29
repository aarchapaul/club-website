import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
{/*
import React from 'react';
import Carousel from "react-bootstrap/Carousel";
*/}

export class Gallery extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      slidesToScroll: 1,
      arrows: true
    };
    return (
      <div id='portfolio' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2>Gallery</h2>
            <p>Photographs of Club Inaguration Ceremony</p>
          </div>
          <Slider {...settings}>
            <div>
              {/*<p className="portfolio-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
              <img src="https://i.ibb.co/zfSNx3S/about.jpg" alt="Loading" />
            </div>
            <div>
              <img src="https://i.ibb.co/zhdYWHW/about2.jpg" alt="Loading"/>
            </div>
            <div>
              <img src="https://i.ibb.co/HXfJLMd/about3.jpg" alt="Loading" />
            </div>
            <div>
              <img src="https://i.ibb.co/KqCbT4p/portfolio-4.jpg" alt="Loading"/>
            </div>
            <div>
              <img src="https://i.ibb.co/GnT1NCY/portfolio-5.jpg" alt="Loading"/>
            </div>
            <div>
              <img src="https://i.ibb.co/tQZJPsd/portfolio-6.jpg" alt="Loading"/>
            </div>
            <div>
              <img src="https://i.ibb.co/W0fYcHg/portfolio-7.jpg" alt="Loading"/>
            </div>
            <div>
              <img src="https://i.ibb.co/zWd7Z0p/portfolio-8.jpg" alt="Loading"/>
            </div>
            <div>
              {/*<p className="portfolio-para">Rerum soluta corporis nostrum labore minima doloremque alias voluptate quos architecto debitis!</p>*/}
              <img src="https://i.ibb.co/ypTBzWx/portfolio-9.jpg" alt="Loading"/>
            </div>
            <div>
              {/*<p className="portfolio-para">Rerum soluta corporis nostrum labore minima doloremque alias voluptate quos architecto debitis!</p>*/}
              <img src="https://i.ibb.co/zX9ZSkb/portfolio-10.jpg" alt="Loading"/>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
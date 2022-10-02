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
            {/*<p>Photographs of Club Inaguration Ceremony</p>*/}
          </div>
          <Slider {...settings}>
            <div>
              <img src="https://i.ibb.co/zfSNx3S/about.jpg" alt="Inaguration" />
            </div>
            <div>
              <img src="https://i.ibb.co/zhdYWHW/about2.jpg" alt="Inaguration"/>
            </div>
            <div>
              <img src="https://i.ibb.co/HXfJLMd/about3.jpg" alt="Inaguration" />
            </div>
            <div>
              <img src="https://i.ibb.co/QnTS9T9/portfolio-4.jpg" alt="Inaguration"/>
            </div> 
            {/*<div>
              <img src="https://i.ibb.co/GnT1NCY/portfolio-5.jpg" alt="Inaguration"/>
            </div>
            <div>
              <img src="https://i.ibb.co/tQZJPsd/portfolio-6.jpg" alt="Inaguration"/>
            </div>
            <div>
              <img src="https://i.ibb.co/W0fYcHg/portfolio-7.jpg" alt="Inaguration"/>
            </div>
            <div>
              <img src="https://i.ibb.co/zWd7Z0p/portfolio-8.jpg" alt="Inaguration"/>
            </div>
    */}
            <div>
              {/*<p className="portfolio-para">Rerum soluta corporis nostrum labore minima doloremque alias voluptate quos architecto debitis!</p>*/}
              <img src="https://i.ibb.co/ypTBzWx/portfolio-9.jpg" alt="Inaguration"/>
            </div>
            <div>
              <img src="https://i.ibb.co/zX9ZSkb/portfolio-10.jpg" alt="Inaguration"/>
            </div>
            
            <div>
              <img src="https://i.ibb.co/ZxbWzfF/Whats-App-Image-resized.jpg" alt="Onam Celebration" />
            </div>
            <div>
              <img src="https://i.ibb.co/sgkNGKH/Whats-App-Image-2022-09-27-at-5-20-39-PM.jpg" alt="Onam Celebration 2022"/>
            </div>
            <div>
              <img src="https://i.ibb.co/hM5PPyD/Whats-App-Image-2022-09-27-at-5-20-39-PM-1.jpg" alt="Onam Celebration 2022"/>
            </div>
            <div>
              <img src="https://i.ibb.co/xMNL4jD/Whats-App-Image-2022-09-27-at-5-20-40-PM-1.jpg" alt="Onam Celebration 2022"/>
            </div>
            <div>
              <img src="https://i.ibb.co/MCNT1jW/Whats-App-Image-2022-09-27-at-5-20-43-PM-2.jpg" alt="Onam Celebration 2022"/>
            </div>
            <div>
              <img src="https://i.ibb.co/H7dpWbp/Whats-App-Image-2022-09-27-at-5-20-44-PM-1.jpg" alt="Onam Celebration 2022"/>
            </div>
            <div>
              <img src="https://i.ibb.co/YXTBtPL/Whats-App-Image-2022-09-27-at-5-20-44-PM-2.jpg" alt="Onam Celebration 2022"/>
            </div>
            <div>
              <img src="https://i.ibb.co/k3grN1D/Whats-App-Image-2022-09-27-at-5-20-46-PM.jpg" alt="Onam Celebration 2022"/>
            </div>
          </Slider>
          {/*
const JSON = {
  Lillian: {
    type: 'The Guardian',
    portfolioImage: './img/TheGuardian/Lillian.png'
  },
  Annalise: {
    type: 'TheGuardian',
    portfolioImage: './img/TheGuardian/Annalise.png'
  },
  Raven: { type: 'DCComics', portfolioImage: './img/TheGuardian/Raven.png' }
};

class Example extends React.Component {
  render() {
    return (
      <div>
        {Object.keys(JSON).map(key => (
          <div>
            {JSON[key].type}
            <img src={JSON[key].portfolioImage} key={key} />
          </div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('root')); 
          */}
        </div>
      </div>
    );
  }
}
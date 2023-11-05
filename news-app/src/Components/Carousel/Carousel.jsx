import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import treanding from '../../data/tranding.json';
function TrendingCarousel() {   
        return (
                <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={4000}>
                  {treanding.map((news, index) => (
                    <div key={index}>
                      <p className='mt-2'>{news}</p>
                    </div>
                  ))}
                </Carousel>
              );

}

export default TrendingCarousel;

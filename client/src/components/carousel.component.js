import React from "react";
import { Carousel } from 'react-responsive-carousel';
import seed_data from '../../../database/seed_data.js';
// import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function CarouselComponent() {
  return (
      <div className="carousel-wrapper">
          <Carousel>
              <div>
                  <img src={seed_data[1].images[0]} />
              </div>
              <div>
                  <img src={seed_data[1].images[1]} />
              </div>
              <div>
                  <img src={seed_data[1].images[2]} />
              </div>
          </Carousel>
      </div>
  );
}
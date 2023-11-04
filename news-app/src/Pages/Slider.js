import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from './img/news-800x500-1.jpg';
import img2 from './img/news-800x500-2.jpg';
import img3 from './img/news-800x500-3.jpg';
import img4 from './img/news-700x435-1.jpg';
import img5 from './img/news-700x435-2.jpg';
import img6 from './img/news-700x435-3.jpg';
import img7 from './img/news-700x435-4.jpg';
import img8 from './img/news-700x435-5.jpg';
import News from './News';
import BreakingNews from '../Pages/BreakingNews';

const ImageCarousel = () => {
  const imageUrls = [img1, img2, img3, img4];
  const carouselItems = [];
  for (let i = 0; i < imageUrls.length; i++) {
    const imageUrl = imageUrls[i];
    carouselItems.push(
      <div key={i}>
        <div className="position-relative overflow-hidden" style={{ height: '500px' }}>
          <img className="img-fluid w-100" src={imageUrl} alt="text1" style={{ objectFit: 'cover' }} />
          <div className="overlay">
            <div className="mb-2">
              <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="/">
                Business
              </a>
              <a className="text-white" href="/">
                Jan 01, 2045
              </a>
            </div>
            <a className="h2 m-0 text-white text-uppercase font-weight-bold" href="/" >
              Lorem ipsum dolor sit amet elit. Proin vitae porta diam...
            </a>
          </div>
        </div>
      </div>
    );
  }

  const ImgCarousel = () => {
    const imgs = [img4, img5, img6, img7, img8];
    const carouselsItem = [];

    for (let i = 0; i < imgs.length; i++) {
      const img = imgs[i];
      carouselsItem.push(
        <div key={i}>
          <div className="position-relative carousel-item-4 position-relative overflow-hidden" style={{ height: "300px" }}>
            <img className="img-fluid h-100" src={img} alt='text' style={{ "object-fit": "cover" }} />
            <div className="overlay">
              <div className="mb-2">
                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="/">Business</a>
                <a className="text-white" href="/"><small>Jan 01, 2045</small></a>
              </div>
              <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="/">Lorem ipsum dolor sit amet elit...</a>
            </div>
          </div>
        </div>
      );
    }
    return carouselsItem;
  };

  return (
        <>
    <div>
      <div className="container px-0">
        <div className="row">
          <div className="col-lg-7 px-0">
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
              {carouselItems}
            </Carousel>
          </div>
          <div className="col-lg-5 px-0">
            <div className="row mx-0">
              <div className="col-md-6 px-0">
                <div className="position-relative overflow-hidden" style={{ height: "250px" }}>
                  <img className="img-fluid w-100 h-100" src={img4} alt="text" style={{ objectFit: "cover" }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="/">Business</a>
                      <a className="text-white" href="/"><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="/">Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-0">
                <div className="position-relative overflow-hidden" style={{ height: "250px" }}>
                  <img className="img-fluid w-100 h-100" alt="text" src={img5} style={{ objectFit: "cover" }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="/">Business</a>
                      <a className="text-white" href="/"><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="/">Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-0">
                <div className="position-relative overflow-hidden" style={{ height: "240px" }}>
                  <img className="img-fluid w-100 h-100" src={img6} alt="text" style={{ objectFit: "cover" }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="/">Business</a>
                      <a className="text-white" href="/"><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="/">Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-0">
                <div className="position-relative overflow-hidden" style={{ height: "240px" }}>
                  <img className="img-fluid w-100 h-100" src={img7} alt="text" style={{ objectFit: "cover" }} />
                  <div className="overlay">
                    <div className="mb-2">
                      <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="/">Business</a>
                      <a className="text-white" href="/" ><small style={{ color: 'black' }}>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-light text-uppercase font-weight-semi-bold" href="/">Lorem ipsum dolor sit amet elit...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breaking News Start */}
      {/* Breaking News Ends */}
    </div>

    {/* Featured news started */}
    <div className="container-fluid pt-5 mb-3">
      <div className="container">
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
          {ImgCarousel()}
        </Carousel>
      </div>
    </div>
    <News/>
  </>
  );
};

export default ImageCarousel;

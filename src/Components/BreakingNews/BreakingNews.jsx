import React from 'react'

function BreakingNewsCarousel() {
  return (
    <div className='carousel slide' id='breaking-news-carousel' data-ride='carousel'>
      <ol className='carousel-indicators'>
        <li data-target='#breaking-news-carousel' data-slide-to='0' className='active'></li>
        <li data-target='#breaking-news-carousel' data-slide-to='1'></li>
      </ol>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <a className='text-white text-uppercase font-weight-semi-bold px-4' href='/'>
            Your first breaking news here
          </a>
        </div>
        <div className='carousel-item'>
          <a className='text-white text-uppercase font-weight-semi-bold' href='/'>
            Your second breaking news here
          </a>
        </div>
      </div>
    </div>
  )
}

export default BreakingNewsCarousel

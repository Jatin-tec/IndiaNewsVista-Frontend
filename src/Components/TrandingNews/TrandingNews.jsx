import React from 'react'
import Carousel from '../Carousel/Carousel.jsx'
function TrandingNews() {
  return (
    <>
      <div className='section-title  justify-content-between' style={{ width: '180px' }}>
        <h4 className='text-uppercase font-weight-bold text-bg-warning p-2 text-center'>Tranding</h4>
      </div>
      <div className='container-fluid mt-2 mb-3 pt-3'>
        <div className='d-flex justify-content-between text-bg-warning text-center'>
          <Carousel />
        </div>
      </div>
    </>
  )
}

export default TrandingNews

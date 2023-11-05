import React from 'react'
import Carousel from '../Carousel/Carousel.jsx';
function TrandingNews() {
  return (
    <>
      

        <div className="container-fluid mt-2 mb-3 pt-3">
                <div className="container">
                        <div className="row align-items-center">
                                <div className="col-12">
                                <div className="d-flex justify-content-between text-bg-warning ">
                                        <div className="section-title border-right-0 mb-0" style={{ width: '180px' }}>
                                        <h4 className="m-0 text-uppercase font-weight-bold text-bg-warning p-2">Tranding</h4>
                                        </div>
                                        <Carousel/>
                                </div>
                                </div>
                        </div>
                </div>
        </div>
    </>
  )
}

export default TrandingNews;

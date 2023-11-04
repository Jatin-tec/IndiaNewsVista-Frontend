import React from 'react'
import img1 from './img/news-700x435-1.jpg';
import img2 from './img/news-700x435-2.jpg';
import img3 from './img/news-700x435-3.jpg';
import img4 from './img/news-700x435-4.jpg';
import img5 from './img/news-700x435-5.jpg';
function Home() {
  return (
    <>
     <div class="col-lg-5 px-0">
                <div class="row mx-0">
                    <div class="col-md-6 px-0">
                        <div class="position-relative overflow-hidden" style={{"height": "250px"}}>
                            <img class="img-fluid w-100 h-100" src={img1} alt='img1' style={{"object-fit": "cover"}}/>
                            <div class="overlay">
                                <div class="mb-2">
                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                        href="/">Business</a>
                                    <a class="text-white" href="/"><small>Jan 01, 2045</small></a>
                                </div>
                                <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="/">Lorem ipsum dolor sit amet elit...</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 px-0">
                        <div class="position-relative overflow-hidden" style={{"height": "250px"}}>
                            <img class="img-fluid w-100 h-100" src={img2}  alt='img2' style={{"object-fit": "cover"}}/>
                            <div class="overlay">
                                <div class="mb-2">
                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                        href="/">Business</a>
                                    <a class="text-white" href="/"><small>Jan 01, 2045</small></a>
                                </div>
                                <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="/">Lorem ipsum dolor sit amet elit...</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 px-0">
                        <div class="position-relative overflow-hidden" style={{"height": "250px"}}>
                            <img class="img-fluid w-100 h-100" src={img3} alt='img3' style={{"object-fit": "cover"}}/>
                            <div class="overlay">
                                <div class="mb-2">
                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                        href="/">Business</a>
                                    <a class="text-white" href="/"><small>Jan 01, 2045</small></a>
                                </div>
                                <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="/">Lorem ipsum dolor sit amet elit...</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 px-0">
                        <div class="position-relative overflow-hidden" style={{"height": "250px"}}>
                            <img class="img-fluid w-100 h-100" src={img4} alt='img4' style={{"object-fit": "cover"}}/>
                            <div class="overlay">
                                <div class="mb-2">
                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                        href="/">Business</a>
                                    <a class="text-white" href="/"><small>Jan 01, 2045</small></a>
                                </div>
                                <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="/">Lorem ipsum dolor sit amet elit...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            {/*Breaking News Start*/}
            <div class="container-fluid bg-dark py-3 mb-3">
        <div class="container">
            <div class="row align-items-center bg-dark">
                <div class="col-12">
                    <div class="d-flex justify-content-between">
                        <div class="bg-warning text-dark text-center font-weight-medium py-2 px-2" style={{"width": "180"}}>Breaking News</div>
                        <div class="owl-carousel tranding-carousel position-relative d-inline-flex align-items-center ml-3" style={{"width": "calc(100% - 170px)" ,"padding-right": "90px"}}>
                        <div class="text-truncate"><a class="text-white text-uppercase font-weight-semi-bold" href="/">Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales</a></div>
                        <div class="text-truncate"><a class="text-white text-uppercase font-weight-semi-bold" href="/">Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*Breaking News End*/}


    {/*Featured News Slider Start*/}

    <div class="container-fluid pt-5 mb-3">
        <div class="container">
            <div class="section-title">
                <h4 class="m-0 text-uppercase font-weight-bold">Featured News</h4>
            </div>
            <div class="owl-carousel news-carousel carousel-item-4 position-relative">
                <div class="position-relative overflow-hidden" style={{"height": "300px"}}>
                    <img class="img-fluid h-100" src={img1} alt='imag1' style={{"object-fit": "cover"}}/>
                    <div class="overlay">
                        <div class="mb-2">
                            <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="/">Business</a>
                            <a class="text-white" href="/"><small>Jan 01, 2045</small></a>
                        </div>
                        <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="/">Lorem ipsum dolor sit amet elit...</a>
                    </div>
                </div>
                <div class="position-relative overflow-hidden" style={{"height": "300px"}}>
                    <img class="img-fluid h-100" src={img2} alt='imag2' style={{"object-fit": "cover"}}/>
                    <div class="overlay">
                        <div class="mb-2">
                            <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="/">Business</a>
                            <a class="text-white" href="/"><small>Jan 01, 2045</small></a>
                        </div>
                        <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="/">Lorem ipsum dolor sit amet elit...</a>
                    </div>
                </div>
                <div class="position-relative overflow-hidden" style={{"height": "300px"}}>
                    <img class="img-fluid h-100" src={img3} alt='img3' style={{"object-fit": "cover"}}/>
                    <div class="overlay">
                        <div class="mb-2">
                            <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="/">Business</a>
                            <a class="text-white" href="/"><small>Jan 01, 2045</small></a>
                        </div>
                        <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="/">Lorem ipsum dolor sit amet elit...</a>
                    </div>
                </div>
                <div class="position-relative overflow-hidden" style={{"height": "300px"}}>
                    <img class="img-fluid h-100" src={img4} alt='img4' style={{"object-fit": "cover"}}/>
                    <div class="overlay">
                        <div class="mb-2">
                            <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="/">Business</a>
                            <a class="text-white" href="/"><small>Jan 01, 2045</small></a>
                        </div>
                        <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="/">Lorem ipsum dolor sit amet elit...</a>
                    </div>
                </div>
                <div class="position-relative overflow-hidden" style={{"height": "300px"}}>
                    <img class="img-fluid h-100" src={img5} alt='img5' style={{"object-fit": "cover"}}/>
                    <div class="overlay">
                        <div class="mb-2">
                            <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="/">Business</a>
                            <a class="text-white" href="/"><small>Jan 01, 2045</small></a>
                        </div>
                        <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="/">Lorem ipsum dolor sit amet elit...</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Home


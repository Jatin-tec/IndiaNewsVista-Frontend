import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faTwitter, faInstagram, faYoutube, faVimeo } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Follow from '../../Components/Follow/Follow'
import ad2 from '../../Pages/img/news-800x500-2.jpg'
import Footer from '../../Components/Footer/Footer'

function Contact() {
  return (
    <>
      <div className='container-fluid mt-5 pt-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='section-title mb-0'>
                <h4 className='m-0 text-uppercase text-bg-warning p-3 font-weight-bold'>Contact Us For Any Queries</h4>
              </div>
              <div className='bg-white border border-top-0 p-4 mb-0 mt-4'>
                <div className='mb-4'>
                  <h5 className='text-uppercase font-weight-bold'>Contact Info</h5>
                  <p className='mb-4 font-weight-4px'>
                    The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just
                    copy and paste the files, add a little code and you &apos re done
                    <a className='text-warning' href='https://htmlcodex.com/contact-form'>
                      Download Now
                    </a>
                    .
                  </p>
                  <div className='mb-0'>
                    <div className='d-flex align-items-center mb-2'>
                      <FontAwesomeIcon icon={faMapMarkerAlt} className='px-2 text-warning' size='1x' />
                      <h5 className='font-weight-bold mb-0'>Our Office</h5>
                    </div>
                    <p className='m-0 pb-5'>123 Street, New York, USA</p>
                  </div>
                  <div className='mb-0'>
                    <div className='d-flex align-items-center mb-2'>
                      <FontAwesomeIcon icon={faEnvelope} className='px-2 text-warning' size='1x' />
                      <h5 className='font-weight-bold  mb-0'>Email Us</h5>
                    </div>
                    <p className='m-0 pb-5'>info@example.com</p>
                  </div>
                  <div className='mb-0'>
                    <div className='d-flex align-items-center mb-2'>
                      <FontAwesomeIcon icon={faPhone} className='px-2 text-warning' size='1x' />
                      <h5 className='font-weight-bold mb-0'>Call Us</h5>
                    </div>
                    <p className='m-0 pb-5'>+012 345 6789</p>

                    <h5 className='text-uppercase font-weight-bold  mb-0'>Contact Us</h5>
                    <form>
                      <div className='form-row'>
                        <div className='col-md-6 mb-4'>
                          <div className='form-group mt-2'>
                            <input type='text' className='form-control p-4' placeholder='Your Name' required='required' />
                          </div>
                        </div>
                        <div className='col-md-6 mb-0'>
                          <div className='form-group'>
                            <input type='email' className='form-control p-4' placeholder='Your Email' required='required' />
                          </div>
                        </div>
                      </div>
                      <div className='form-group mb-4 mt-4'>
                        <input type='text' className='form-control p-4' placeholder='Subject' required='required' />
                      </div>
                      <div className='form-group mb-5'>
                        <textarea className='form-control' rows='7' placeholder='Message' required='required'></textarea>
                        <button className='btn bg-warning font-weight-semi-bold mt-3 px-4 mt-0' style={{ height: '50px' }} type='submit'>
                          Send Message
                        </button>
                      </div>
                      <div></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*Follow Component */}
            <div className='col-lg-4'>
              <div className='mb-3'>
                <div className='section-title mb-0'>
                  <h4 className='m-0 text-uppercase text-bg-warning p-3 font-weight-bold'>Follow Us</h4>
                </div>
                <div className='bg-white border border-top-0 p-3'>
                  <Follow style={{ background: '#39569E', height: '64px' }} icon={faFacebook} name='12,345 Fans'></Follow>
                  <Follow style={{ background: '#52AAF4', height: '64px' }} icon={faTwitter} name='12,345 Followers'></Follow>
                  <Follow style={{ background: '#0185AE', height: '64px' }} icon={faLinkedin} name='12,345 Connects'></Follow>
                  <Follow style={{ background: '#C8359D', height: '64px' }} icon={faInstagram} name='12,345 Followers'></Follow>
                  <Follow style={{ background: '#DC472E', height: '64px' }} icon={faYoutube} name='12,345 Subscribers'></Follow>
                  <Follow style={{ background: '#055570', height: '64px' }} icon={faVimeo} name='12,345 Followers'></Follow>
                </div>
              </div>

              {/* Advertisement */}
              <div className='mb-3'>
                <div className='section-title mb-0 bg-warning p-3'>
                  <h4 className='m-0 text-uppercase font-weight-bold'>Advertisement</h4>
                </div>
                <div className='bg-white text-center border border-top-0 p-3'>
                  <a href='/'>
                    <img className='img-fluid' src={ad2} alt='' />
                  </a>
                </div>
              </div>
              {/*Newsletter Start*/}
              <div className='mb-3'>
                <div className='section-title mb-0 bg-warning p-3'>
                  <h4 className='m-0 text-uppercase font-weight-bold'>Newsletter</h4>
                </div>
                <div className='bg-white text-center border border-top-0 p-3'>
                  <p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
                  <div className='input-group mb-2' style={{ width: '100%', height: '40px' }}>
                    <input type='text' className='form-control form-control-lg' placeholder='Your Email' style={{ height: '40px' }} />
                    <div className='ml-2'>
                      <button className='btn btn-warning font-weight-bold px-4 mt-1 ' style={{ height: '40px' }}>
                        Sign Up
                      </button>
                    </div>
                  </div>
                  <small>Lorem ipsum dolor sit amet elit</small>
                </div>
              </div>
              {/*Newsletter End*/}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact

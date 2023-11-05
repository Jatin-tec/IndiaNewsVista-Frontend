import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import img1 from '../../Pages/img/news-110x110-1.jpg';
import img2 from '../../Pages/img/news-110x110-2.jpg';
import img3 from '../../Pages/img/news-110x110-3.jpg';
import img4 from '../../Pages/img/news-110x110-4.jpg';
import img5 from '../../Pages/img/news-110x110-5.jpg';

function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark pt-5 px-sm-3 px-md-5 mt-5">
        <div className="row py-4">
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="mb-4 text-light text-uppercase font-weight-bold">Get In Touch</h5>
            <p className="font-weight-medium text-light">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" /> 123 Street, New York, USA
            </p>
            <p className="font-weight-medium text-light">
              <FontAwesomeIcon icon={faPhone} size="1x" /> +012 345 67890
            </p>
            <p className="font-weight-medium text-light">
              <FontAwesomeIcon icon={faEnvelope} size="1x" /> info@example.com
            </p>
            <h5 className="mt-4 mb-3 text-light text-uppercase font-weight-bold">Follow Us</h5>
            <div className="d-flex justify-content-start">
              <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="/">
                <FontAwesomeIcon className="fab fa-twitter" icon={faTwitter} size="1x"/>
              </a>
              <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="/">
                <FontAwesomeIcon className="fab fa-facebook" icon={faFacebook} size="1x"/>
              </a>
              <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="/">
                <FontAwesomeIcon className="fab fa-linkedin-in" icon={faLinkedin} size="1x"/>
              </a>
              <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="/">
                <FontAwesomeIcon className="fab fa-instagram" icon={faInstagram} size="1x"/>
              </a>
              <a className="btn btn-lg btn-secondary btn-lg-square" href="/">
                <FontAwesomeIcon className="fab fa-youtube" icon={faYoutube} size="1x"/>
              </a>
            </div>
          </div>
          {/* Popular News */}
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="mb-4 text-light text-uppercase font-weight-bold">Popular News</h5>
            <Treanding/>
            <Treanding/>
            <Treanding/>
            {/* Add your Popular News content here */}
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
          <h5 className="mb-4 text-white text-uppercase font-weight-bold">Categories</h5>
          <div class="m-n1">
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Politics</a>
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Business</a>
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Corporate</a>
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Business</a>
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Health</a>
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Education</a>
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Science</a>
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Business</a>
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Foods</a>
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Entertainment</a>
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Travel</a>
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Lifestyle</a>
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Politics</a>
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Business</a>
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Corporate</a>
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Business</a>
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Health</a>
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Education</a>
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Science</a>
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Business</a>
                    <a href="/" class="btn btn-sm btn-secondary m-2 p-1">Foods</a>
                </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5">
                <h5 class="mb-4 text-white text-uppercase font-weight-bold">Flickr Photos</h5>
                <div class="row">
                    <div class="col-4 mb-3">
                        <a href="/"><img class="w-100" src={img1} alt=""/></a>
                    </div>
                    <div class="col-4 mb-3">
                        <a href="/"><img class="w-100" src={img2}alt=""/></a>
                    </div>
                    <div class="col-4 mb-3">
                        <a href="/"><img class="w-100" src={img3} alt=""/></a>
                    </div>
                    <div class="col-4 mb-3">
                        <a href="/"><img class="w-100" src={img4} alt=""/></a>
                    </div>
                    <div class="col-4 mb-3">
                        <a href="/"><img class="w-100" src={img5}alt=""/></a>
                    </div>
                    <div class="col-4 mb-3">
                        <a href="/"><img class="w-100" src={img1} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <style>
        {`
          /* Custom margins for the social media icons */
          .btn-lg-square {
            margin-right: 10px; /* You can adjust this value to control the spacing */
          }
        `}
      </style>
    </>
  );


}

const Treanding = () => {
        const [isUnderlined,setIsUnderlined] = useState(false);
    const [isHeading, setIsHeadingUnderlined] = useState(false);

    {/*Function For Date*/}
    const handleMouseEnter=()=>{
        setIsUnderlined(true);
        console.log("handleMouseEnter")
};
const handleMouseLeave=()=>{
        setIsUnderlined(false);
}
const textStyle={
        textDecoration: isUnderlined? 'underline' : 'none',
        cursor : 'pointer',
}
{/*Function For Headline*/}

const handleHeadingMouseEnter = ()=>{
    setIsHeadingUnderlined(true);
};
const handleHeadingMouseLeave=()=>{
    setIsHeadingUnderlined(false);
}
const headingStyle={
    textDecoration: isHeading?'underline' : 'none',
    cursor : 'pointer',
}

  return (
    <div className="mb-3">
      <div className="mb-2">
        <a className="text-bg-warning p-2 text-uppercase font-weight-semi-bold p-1 mr-1" href="/" style={{ fontSize: 'small',textDecoration:"none" }}>
          Business
        </a>
        <a className="text-light px-2" href="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  style={{"text-decoration" : "none", ...textStyle}}>
          <small className="text-light">Jan 01, 2045</small>
        </a>
      </div>
      <a
        className="small text-body text-uppercase font-weight-medium text-bg-secondary"
        href="/"
        onMouseEnter={handleHeadingMouseEnter} onMouseLeave={handleHeadingMouseLeave}  style={{"text-decoration" : "none" , ...headingStyle}}
      >
        Lorem ipsum dolor sit amet elit. Proin vitae porta diam...
      </a>
    </div>
  );
};

      

export default Footer;

import React,{useState} from 'react'

import img1 from './img/news-700x435-1.jpg';
import img5 from './img/news-700x435-5.jpg';
import ad from './img/ads-728x90.png';
import ad2 from './img/news-800x500-2.jpg';
import img7 from './img/news-110x110-2.jpg';
import img8 from './img/news-110x110-3.jpg';
import user from './img/user.jpg';
import NewsBlock from '../Components/NewsBlock/NewsBlock';
import news from '../data/news.json'
import shortNews from '../data/shortNews.json'
import Follow from '../Components/Follow/Follow';
import ShortNews from '../Components/ShortNews/ShortNews'
import PopularNews from '../Components/PopularNews/PopularNews'
import popular from '../data/popularNews.json';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin,faFacebook, faTwitter, faInstagram,faYoutube,faVimeo} from '@fortawesome/free-brands-svg-icons';
import { faEye, faComment } from '@fortawesome/free-regular-svg-icons';
function Category() {
        const [isUnderlined,setIsUnderlined] = useState(false);
        const [isHeading, setIsHeadingUnderlined] = useState(false);
        const [isDescriptionUnderlined, setIsDescriptionUnderlined] = useState(false);

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

        {/*Function For Description*/}
        const handleDescriptionMouseEnter = () => {
            setIsDescriptionUnderlined(true);
          };
        
          const handleDescriptionMouseLeave = () => {
            setIsDescriptionUnderlined(false);
          };

          const descriptionTextStyle = {
            textDecoration: isDescriptionUnderlined ? 'underline' : 'none',
            cursor: 'pointer',
          };
  return (
    <>
      <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title mb-2 bg-warning p-3 btn-lg-square">
                                <h4 className="m-0 text-uppercase font-weight-bold">CATEGORY: BUSINESS</h4>
                                
                            </div>
                        </div>
                        {news && news.map((value, key) => { 
                            return <>
                            <NewsBlock  news={value} image={img1} image2={user} eventOn={handleMouseEnter} eventOff={handleMouseLeave} style={textStyle} />
                            {(key+1) / 2 === 1 ? <div className="col-lg-12 mb-3">
                                <a href="/"><img className="img-fluid w-100" src={ad} alt=""/></a>
                                </div> : ""}
                            
                            </>
                        })}
                        {shortNews && shortNews.map((value) => {
                            return <>
                            <div className='col-lg-6'>
                                <ShortNews category={value.category}  date = {value.date} description={value.description} image={img7}></ShortNews>
                            </div>
                            </>
                                })}

                        <div className="col-lg-12 mb-3">
                            <a href="/"><img className="img-fluid w-100" src={ad} alt=""/></a>
                        </div>
                        <div className="col-lg-12">
                            <div className="row news-lg mx-0 mb-3">
                                <div className="col-md-6 h-100 px-0">
                                    <img className="img-fluid h-100" src={img5} alt='' style={{"objectFit": "cover"}}/>
                                </div>
                                <div className="col-md-6 d-flex flex-column border bg-white h-100 px-0">
                                    <div className="mt-auto p-4">
                                        <div className="mb-2">
                                            <a className="text-bg-warning text-uppercase font-weight-semi-bold p-2 mr-2"
                                                href="/" style={{"text-decoration" : "none"}}>Business</a>
                                            <a className="text-body" href="/" style={{"text-decoration" : "none"}}><small onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={textStyle} className='px-2'>Jan 01, 2045</small></a>
                                        </div>
                                        <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="/" onMouseEnter={handleHeadingMouseEnter} onMouseLeave={handleHeadingMouseLeave}  style={{"text-decoration" : "none" , ...headingStyle}}>Lorem ipsum dolor sit amet elit...</a>
                                        <p className="m-0" onMouseEnter={handleDescriptionMouseEnter}
            onMouseLeave={handleDescriptionMouseLeave}
            style={{ "text-decoration": "none", ...descriptionTextStyle }}>Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                            rebum clita rebum dolor stet amet justo</p>
                                    </div>
                                    <div className="d-flex justify-content-between bg-white border-top mt-auto p-4">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle mr-2" src={user} width="25" height="25" alt=""/>
                                            <small className='px-2'>John Doe</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <small className="ml-3 px-2"><FontAwesomeIcon className="far fa-eye mr-2 " icon={faEye}/> 1234</small>
                                            
                                            <small className="ml-3 px-2"><FontAwesomeIcon  className="far fa-comment mr-2 " icon={faComment}/>123</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {shortNews && shortNews.map((value) => {
                            return <>
                            <div className='col-lg-6'>
                                <ShortNews category={value.category}  date = {value.date} description={value.description} image={img7}></ShortNews>
                            </div>
                            </>
                                })}
                    </div>
                </div>
                <div className="col-lg-4">
                        {/* Social Follow Start*/}
                    <div className="mb-4 btn-lg-square">
                        <div className="section-title mb-0 bg-warning p-3">
                            <h4 className="m-0 text-uppercase font-weight-bold">Follow Us</h4>
                        </div>
                        <div className="bg-white border border-top-0 p-3 ">
                            <Follow style = {{"background": "#39569E" , "height" : "64px"}}  icon={faFacebook} name ="12,345 Fans"></Follow>
                            <Follow style={{"background": "#52AAF4","height":"64px"}}  icon={faTwitter} name="12,345 Followers"></Follow>
                            <Follow style={{"background": "#0185AE","height":"64px"}} icon={faLinkedin} name="12,345 Connects"></Follow>
                            <Follow style={{"background": "#C8359D","height":"64px"}} icon={faInstagram} name="12,345 Followers"></Follow>
                            <Follow style={{"background": "#DC472E","height":"64px"}} icon={faYoutube} name="12,345 Subscribers"></Follow> 
                            <Follow style={{"background": "#055570","height":"64px"}} icon={faVimeo} name="12,345 Followers"></Follow>
                        </div>
                    </div>
            
                        {/* Social Follow End */}
                    {/*Ads Start*/}
                    <div className="mb-3">
                        <div className="section-title mb-0 bg-warning p-3">
                            <h4 className="m-0 text-uppercase font-weight-bold">Advertisement</h4>
                        </div>
                        <div className="bg-white text-center border border-top-0 p-3">
                            <a href="/"><img className="img-fluid" src={ad2} alt=""/></a>
                        </div>
                    </div>
                   {/*Ads End*/}
                  {/*Popular/Treanding News Start*/}
                    <div className="mb-3">
                        <div className="section-title mb-0 bg-warning p-3">
                            <h4 className="m-0 text-uppercase font-weight-bold">Tranding News</h4>
                        </div>
                        <div className="bg-white border border-top-0 p-3">
                            {popular && popular.map((value)=>{
                                return<>
                                <PopularNews image={img8} category={value.category} date={value.date} description={value.description}/>
                                </>
                            })}
                            
                        </div>
                    </div>
                        {/*Popular News End*/}
                  {/*Newsletter Start*/}
                    <div className="mb-3">
                        <div className="section-title mb-0 bg-warning p-3">
                            <h4 className="m-0 text-uppercase font-weight-bold">Newsletter</h4>
                        </div>
                        <div className="bg-white text-center border border-top-0 p-3">
                            <p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
                            <div className="input-group mb-2" style={{"width": "100%","height":"40px"}}>
                                <input type="text" className="form-control form-control-lg" placeholder="Your Email" style={{"height": "40px"}} />
                                <div className='ml-2'>
                                <button className="btn btn-warning font-weight-bold px-4 mt-1 " style={{"height": "40px"}}>Sign Up</button>
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
    <Footer/>
    <style>
        {`
          /* Custom margins for the social media icons */
          .btn-lg-square {
            margin-top: 50px; /* You can adjust this value to control the spacing */
          }
        `}
      </style>
    </>
  )
}

export default Category

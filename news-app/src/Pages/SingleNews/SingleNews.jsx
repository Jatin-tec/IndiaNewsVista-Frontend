import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin,faFacebook, faTwitter, faInstagram,faYoutube,faVimeo} from '@fortawesome/free-brands-svg-icons';
import { faEye, faComment } from '@fortawesome/free-regular-svg-icons';

import TrandingNews from '../../Components/TrandingNews/TrandingNews';
import Follow from '../../Components/Follow/Follow';
import Footer from '../../Components/Footer/Footer.jsx';

import popular from '../../data/popularNews.json';

import PopularNews from '../../Components/PopularNews/PopularNews.jsx';

import img1 from '../../Pages/img/news-700x435-1.jpg';
import img2 from '../../Pages/img/news-800x500-1.jpg';
import img3 from '../../Pages/img/news-800x500-2.jpg';
import img4 from '../../Pages/img/user.jpg';
import img5 from '../../Pages/img/news-110x110-3.jpg';
import ad2 from '../../Pages/img/news-800x500-2.jpg';

function SingleNews() {
  return (
    <>
      <TrandingNews/>

      <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                <div className="position-relative mb-3">
                        <img className="img-fluid w-100" src={img1} alt='text' style={{"object-fit": "cover"}}/>
                        <div className="bg-white border border-top-0 p-4">
                            <div className="mb-3">
                                <a className="badge badge-primary text-uppercase text-bg-warning p-3 font-weight-semi-bold p-2 mr-2"
                                    href="/">Business</a>
                                <a className="text-body p-3" href="/" style={{"textDecoration":"none"}}>Jan 01, 2045</a>
                            </div>
                            <h1 className="mb-3 text-secondary text-uppercase font-weight-bold">Lorem ipsum dolor sit amet elit vitae porta diam...</h1>
                            <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
                                magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
                                amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                                sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                                aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
                                sit stet no diam kasd vero.</p>
                            <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
                                vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
                                nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
                                ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
                                clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
                                justo dolore sit invidunt.</p>
                            <h3 className="text-uppercase font-weight-bold mb-3">Lorem ipsum dolor sit amet elit</h3>
                            <img className="img-fluid w-50 float-left mr-4 mb-2"  alt='text' src={img2}/>
                            <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                duo tempor sea kasd clita ipsum et.</p>
                            <h5 className="text-uppercase font-weight-bold mb-3">Lorem ipsum dolor sit amet elit</h5>
                            <img className="img-fluid w-50 float-right mr-4 mb-2" alt='text' src={img3}/>
                            <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat
                                aliquyam et ut.</p>
                        </div>
                        <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle mr-2" src={img4} width="25" height="25" alt=""/>
                                <span  className='px-2'>John Doe</span>
                            </div>
                            <div className="d-flex align-items-center">
                                            <small className="ml-3 px-2"><FontAwesomeIcon className="far fa-eye mr-2 " icon={faEye}/> 1234</small>
                                            
                                            <small className="ml-3 px-2"><FontAwesomeIcon  className="far fa-comment mr-2 " icon={faComment}/>123</small>
                                        </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="section-title mb-0">
                            <h4 className="m-0 text-uppercase text-bg-warning p-3 font-weight-bold">3 Comments</h4>
                        </div>
                        <div className="bg-white border border-top-0 p-4">
                            <div className="media mb-4">
                                <img src={img4} alt="text" className="img-fluid mr-3 mt-2 mb-2" style={{"width": "45px"}}/>
                                <div className="media-body">
                                    <h6><a className="text-secondary font-weight-bold mt-2" href="/" style={{"textDecoration":"none"}}>John Doe</a> <small className='px-2'><i>01 Jan 2045</i></small></h6>
                                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                        accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                    <button className="btn btn-sm btn-outline-secondary">Reply</button>
                                </div>
                            </div>
                            <div className="media">
                                <img src={img4} alt="text" className="img-fluid mr-3 mt-2 mb-2" style={{"width": "45px"}}/>
                                <div className="media-body">
                                    <h6><a className="text-secondary font-weight-bold" href="/" style={{"textDecoration":"none"}}>John Doe</a> <small className='px-2'><i>01 Jan 2045</i></small></h6>
                                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                        accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                    <button className="btn btn-sm btn-outline-secondary">Reply</button>
                                    <div className="media mt-4">
                                        <img src={img4} alt="text" className="img-fluid mr-3 mt-2 mb-2"
                                            style={{"width": "45px"}}/>
                                        <div className="media-body">
                                            <h6><a className="text-secondary font-weight-bold" href="/" style={{"textDecoration":"none"}}>John Doe</a> <small className='px-2'><i>01 Jan 2045</i></small></h6>
                                            <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor
                                                labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed
                                                eirmod ipsum.</p>
                                            <button className="btn btn-sm btn-outline-secondary">Reply</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Comment Form started*/}
                <div className="mb-3">
                        <div className="section-title mb-0">
                            <h4 className="m-0 text-uppercase text-bg-warning p-3 font-weight-bold">Leave a comment</h4>
                        </div>
                        <div className="bg-white border border-top-0 p-4">
                            <form>
                                <div className="form-row">
                                    <div className="col-sm-6">
                                        <div className="form-group mb-2">
                                            <label for="name" className='mb-2 p-2' style={{"color":"#838383","fontWeight":"bold","fontSize":"22px"}}>Name *</label>
                                            <input type="text" className="form-control" id="name"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label for="email" className='mb-2 p-1' style={{"color":"#838383","fontWeight":"bold","fontSize":"22px"}}>Email *</label>
                                            <input type="email" className="form-control p-2" id="email"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="website" className=' mt-2 mb-2 p-1' style={{"color":"#838383","fontWeight":"bold","fontSize":"22px"}}>Website</label>
                                    <input type="url" className="form-control" id="website"/>
                                </div>

                                <div className="form-group">
                                    <label for="message" className='mt-2 mb-2 p-1' style={{"color":"#838383","fontWeight":"bold","fontSize":"22px"}}>Message *</label>
                                    <textarea id="message" cols="30" rows="8" className="form-control"></textarea>
                                </div>
                                <div className="form-group mb-0">
                                    <input type="submit"  value="Leave a comment"
                                        className="btn bg-warning font-weight-semi-bold py-2 px-3 mt-3"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/*Follow Component */}
                <div class="col-lg-4">
                        <div class="mb-3">
                                <div class="section-title mb-0">
                                        <h4 class="m-0 text-uppercase text-bg-warning p-3 font-weight-bold">Follow Us</h4>
                                </div>
                                <div className='bg-white border border-top-0 p-3'>
                                <Follow style = {{"background": "#39569E" , "height" : "64px"}}  icon={faFacebook} name ="12,345 Fans"></Follow>
                            <Follow style={{"background": "#52AAF4","height":"64px"}}  icon={faTwitter} name="12,345 Followers"></Follow>
                            <Follow style={{"background": "#0185AE","height":"64px"}} icon={faLinkedin} name="12,345 Connects"></Follow>
                            <Follow style={{"background": "#C8359D","height":"64px"}} icon={faInstagram} name="12,345 Followers"></Follow>
                            <Follow style={{"background": "#DC472E","height":"64px"}} icon={faYoutube} name="12,345 Subscribers"></Follow> 
                            <Follow style={{"background": "#055570","height":"64px"}} icon={faVimeo} name="12,345 Followers"></Follow>
                                </div>
                        </div>

                        {/* Advertisement */}
                        <div className="mb-3">
                        <div className="section-title mb-0 bg-warning p-3">
                            <h4 className="m-0 text-uppercase font-weight-bold">Advertisement</h4>
                        </div>
                        <div className="bg-white text-center border border-top-0 p-3">
                            <a href="/"><img className="img-fluid" src={ad2} alt=""/></a>
                        </div>
                    </div>

                    {/*Popular/Treanding News Start*/}
                    <div className="mb-3">
                        <div className="section-title mb-0 bg-warning p-3">
                            <h4 className="m-0 text-uppercase font-weight-bold">Tranding News</h4>
                        </div>
                        <div className="bg-white border border-top-0 p-3">
                            {popular && popular.map((value)=>{
                                return<>
                                <PopularNews image={img5} category={value.category} date={value.date} description={value.description}/>
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
    </>
  )
}

export default SingleNews;

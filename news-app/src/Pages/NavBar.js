import React from 'react'
import './navBar.css'
import img1 from './img/ads-728x90.png'
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function NavBar() {
  return (
    <>
    {/*Topbar Start*/}
    <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center bg-dark px-lg-5">
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-sm text-light  p-0">
                    <ul className="navbar-nav ml-n2">
                        <li className="nav-item border-right border-secondary">
                            <Link className="nav-link text-body text-light small" href="/">Monday, January 1, 2045</Link>
                        </li>
                        <li className="nav-item border-right border-secondary">
                            <Link className="nav-link text-body small" href="/">Advertise</Link>
                        </li>
                        <li className="nav-item border-right border-secondary">
                            <Link className="nav-link text-body small" href="/">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-body small" href="/">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="col-lg-3 text-right d-none d-md-block">
                <nav className="navbar navbar-expand-sm bg-dark p-0">
                    <ul className="navbar-nav ml-auto mr-n2">
                        <li className="nav-item">
                            <Link className="nav-link text-body" href="/"><small className="fab fa-twitter"></small></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-body" href="/"><small className="fab fa-facebook-f"></small></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-body" href="/"><small className="fab fa-linkedin-in"></small></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-body" href="/"><small className="fab fa-instagram"></small></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-body" href="/"><small className="fab fa-google-plus-g"></small></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-body" href="/"><small className="fab fa-youtube"></small></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="row align-items-center bg-white py-3 px-lg-5">
            <div className="col-lg-4">
                <Link href="index.html" className="navbar-brand p-0 d-none d-lg-block">
                    <h1 className="m-0 display-4 text-uppercase text-primary">
                    <span className="text-warning font-weight-normal">Biz</span>
                        <span className="text-dark font-weight-normal">News</span></h1>
                </Link>
            </div>
            <div className="col-lg-8 text-center text-lg-right">
                <Link href="https://htmlcodex.com"><img className="img-fluid" src={img1} alt=""/></Link>
            </div>
        </div>
    </div>
    {/*NavBar Start*/}
    <nav className="navbar navbar-expand-lg bg-dark text-light p-3">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light font-weight-bold px-4" aria-current="page"  href="/Home" style={{"font-size": "22px"}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light font-weight-bold px-4" href="/Category" style={{"font-size": "22px"}}>Category</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light font-weight-bold px-4" href="/" style={{"font-size": "22px"}}>Single News</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light font-weight-bold px-4" href="/Contact" style={{"font-size": "22px"}}>Contact</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{/*NavBar End!*/}

    </>
  )
}

export default NavBar

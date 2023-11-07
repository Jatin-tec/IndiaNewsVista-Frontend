import React, { useEffect, useState } from 'react'
import './navBar.css'
import img1 from '../../Pages/img/ads-728x90.png'
import { Link } from 'react-router-dom'
import category from '../../data/category.json'
import axios from 'axios'
import { LanguageSelector } from '../LanguageSelector/LanguageSelector'

function NavBar() {
  const [category, setCategory] = useState([])

  useEffect(() => {
    ;(async () => {
      const response = await axios.get('http://localhost:8000/news/get-categories')

      let categories = []

      for (let category of response.data) {
        categories.push({
          title: category.name,
          value: category.value,
          id: category.id
        })
      }

      setCategory(categories)
      console.log(response)
    })()
  }, [])

  return (
    <>
      {/*Topbar Start*/}
      <div className='container-fluid d-none d-lg-block'>
        <div className='row align-items-center bg-dark px-lg-5'>
          <div className='col-lg-9'>
            <nav className='navbar navbar-expand-sm text-light  p-0'>
              <ul className='navbar-nav ml-n2'>
                <li className='nav-item border-right border-secondary'>
                  <Link className='nav-link text-body text-light small' to='/'>
                    Monday, January 1, 2045
                  </Link>
                </li>
                <li className='nav-item border-right border-secondary'>
                  <Link className='nav-link text-body small' to='/'>
                    Advertise
                  </Link>
                </li>
                <li className='nav-item border-right border-secondary'>
                  <Link className='nav-link text-body small' to='/'>
                    Contact
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link text-body small' to='/'>
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='col-lg-3 text-right d-none d-md-block'>
            <nav className='navbar navbar-expand-sm bg-dark p-0'>
              <ul className='navbar-nav ml-auto mr-n2'>
                <li className='nav-item'>
                  <Link className='nav-link text-body' to='/'>
                    <small className='fab fa-twitter'></small>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link text-body' to='/'>
                    <small className='fab fa-facebook-f'></small>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link text-body' to='/'>
                    <small className='fab fa-linkedin-in'></small>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link text-body' to='/'>
                    <small className='fab fa-instagram'></small>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link text-body' to='/'>
                    <small className='fab fa-google-plus-g'></small>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link text-body' to='/'>
                    <small className='fab fa-youtube'></small>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='row align-items-center bg-white py-3 px-lg-5'>
          <div className='col-lg-4'>
            <Link to='index.html' className='navbar-brand p-0 d-none d-lg-block'>
              <h1 className='m-0 display-4 text-uppercase text-primary'>
                <span className='text-warning font-weight-normal'>IndiaNews</span>
                <span className='text-dark font-weight-normal'>Vista</span>
              </h1>
            </Link>
          </div>
          <div className='col-lg-8 text-center text-lg-right'>
            <Link to='https://htmlcodex.com'>
              <img className='img-fluid' src={img1} alt='' />
            </Link>
          </div>
        </div>
      </div>
      {/*NavBar Start*/}
      <nav className='navbar navbar-expand-lg bg-dark text-light p-3'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse ' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active text-light font-weight-bold px-4' aria-current='page' to='/' style={{ fontSize: '22px' }}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <div className='nav-link text-light font-weight-bold px-4 dropdown' style={{ fontSize: '22px' }}>
                  <div className='dropdown-toggle' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>
                    Category
                  </div>
                  <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                    {category &&
                      category.map((item, index) => {
                        return (
                          <li>
                            <Link className='dropdown-item' key={index} to={`/category/${item.title}`}>
                              {item.title}
                            </Link>
                          </li>
                        )
                      })}
                  </ul>
                </div>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-light font-weight-bold px-4' to='/singleNews' style={{ 'font-size': '22px' }}>
                  Single News
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-light font-weight-bold px-4' to='/contact' style={{ 'font-size': '22px' }}>
                  Contact
                </Link>
              </li>
              <li className='nav-item'>
                <div className='nav-link text-light font-weight-bold px-4' style={{ 'font-size': '22px' }}>
                  <LanguageSelector />
                </div>
              </li>
            </ul>
            <form className='d-flex' role='search'>
              <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/*NavBar End!*/}
    </>
  )
}

export default NavBar

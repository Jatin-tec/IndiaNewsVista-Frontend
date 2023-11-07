import React, { useState } from 'react'

function PopularNews(props) {
  const [isUnderlined, setIsUnderlined] = useState(false)
  const [isDescriptionUnderlined, setIsDescriptionUnderlined] = useState(false)

  /*Function For Date*/

  const handleMouseEnter = () => {
    setIsUnderlined(true)
    console.log('handleMouseEnter')
  }
  const handleMouseLeave = () => {
    setIsUnderlined(false)
  }
  const textStyle = {
    textDecoration: isUnderlined ? 'underline' : 'none',
    cursor: 'pointer'
  }

  /*Function For Description*/

  const handleDescriptionMouseEnter = () => {
    setIsDescriptionUnderlined(true)
  }

  const handleDescriptionMouseLeave = () => {
    setIsDescriptionUnderlined(false)
  }

  const descriptionTextStyle = {
    textDecoration: isDescriptionUnderlined ? 'underline' : 'none',
    cursor: 'pointer'
  }
  return (
    <>
      <div className='d-flex align-items-center bg-white mb-3' style={{ height: '110px' }}>
        <img className='img-fluid' src={props.image} alt='' />
        <div className='w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0'>
          <div className='mb-2'>
            <a
              className='badge text-bg-warning p-2 text-uppercase font-weight-semi-bold p-1 mr-2'
              href='/'
              style={{ 'text-decoration': 'none' }}
            >
              {props.category}
            </a>
            <a
              className='text-body px-2'
              href='/'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ 'text-decoration': 'none', ...textStyle }}
            >
              <small>{props.date}</small>
            </a>
          </div>
          <a
            className='h6 m-0 text-secondary text-uppercase font-weight-bold '
            href='/'
            onMouseEnter={handleDescriptionMouseEnter}
            onMouseLeave={handleDescriptionMouseLeave}
            style={{ 'text-decoration': 'none', ...descriptionTextStyle }}
          >
            {props.description}
          </a>
        </div>
      </div>
    </>
  )
}

export default PopularNews

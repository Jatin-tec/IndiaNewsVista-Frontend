import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

function Follow(props) {
  return (
    <>
      <a href='/' className=' d-block w-100 text-white text-decoration-none mb-4 align-items-center' style={props.style}>
        <FontAwesomeIcon
          icon={props.icon}
          className='facebook-icon text-center py-4 mr-3'
          style={{ width: '65px', background: 'rgba(0, 0, 0, .2)' }}
        />
        <i className='fab fa-facebook-f text-center  mr-3 py-4' style={{ width: '65px', background: 'rgba(0, 0, 0, .2)' }}></i>
        <span className='font-weight-medium px-3  m-2 mt-2 align-items-center '>{props.name}</span>
      </a>
    </>
  )
}

export default Follow

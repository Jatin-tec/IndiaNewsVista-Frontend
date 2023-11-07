import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faComment } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const NewsBlock = (props) => {
  const [isUnderlined, setIsUnderlined] = useState(false)
  const [isDescriptionUnderlined, setIsDescriptionUnderlined] = useState(false)
  const [isHeading, setIsHeadingUnderlined] = useState(false)
  const navigate = useNavigate()

  const handleClick = (news) => {
    navigate(`/${news.id}`, { state: { news } })
  }

  const { t } = useTranslation('common')

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

  /*Function For Headline*/

  const handleHeadingMouseEnter = () => {
    setIsHeadingUnderlined(true)
  }
  const handleHeadingMouseLeave = () => {
    setIsHeadingUnderlined(false)
  }
  const headingStyle = {
    textDecoration: isHeading ? 'underline' : 'none',
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
    <div className='col-lg-6' onClick={() => handleClick(props.news)}>
      <div className='position-relative mb-3'>
        <img
          className='img-fluid w-100'
          src={
            props.news.image_url === 'Unknown'
              ? 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png'
              : props.news.image_url
          }
          alt=''
          style={{ 'object-fit': 'cover' }}
        />
        <div className='bg-white border border-top-0 p-4'>
          <div className='mb-2'>
            <a className=' text-uppercase text-bg-warning font-weight-semi-bold p-2 mr-2' href='/' style={{ 'text-decoration': 'none' }}>
              {t(props.news.category)}
            </a>
            <a
              className='text-body'
              href='/'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ 'text-decoration': 'none', ...textStyle }}
            >
              <small className='px-2'>{props.news.published_at}</small>
            </a>
          </div>
          <a
            className='h4 d-block mb-3 text-secondary text-uppercase font-weight-bold'
            href='/'
            onMouseEnter={handleHeadingMouseEnter}
            onMouseLeave={handleHeadingMouseLeave}
            style={{ 'text-decoration': 'none', ...headingStyle }}
          >
            {props.news.title}
          </a>
          <p
            className='m-0'
            onMouseEnter={handleDescriptionMouseEnter}
            onMouseLeave={handleDescriptionMouseLeave}
            style={{ 'text-decoration': 'none', ...descriptionTextStyle }}
          >
            {props.news.description}
          </p>
        </div>
        <div className='d-flex justify-content-between bg-white border border-top-0 p-4'>
          <div className='d-flex align-items-center'>
            <img className='rounded-circle mr-2' src={props.image2} width='25' height='25' alt='' />
            <small className='px-2'>{props.news.author_name}</small>
          </div>
          <div className='d-flex align-items-center'>
            <small className='ml-3'>
              <FontAwesomeIcon className='far fa-eye mr-2' icon={faEye} />
              {props.news.views}
            </small>
            <small className=' px-2 ml-3'>
              <FontAwesomeIcon className='far fa-comment mr-2 ' icon={faComment} />
              {props.news.comment}
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

// props validation
NewsBlock.propTypes = {
  news: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author_name: PropTypes.string.isRequired,
    published_at: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    comment: PropTypes.number.isRequired
  }).isRequired,
  image2: PropTypes.string.isRequired
}

export default NewsBlock

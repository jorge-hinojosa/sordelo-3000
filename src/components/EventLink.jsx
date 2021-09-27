import React from 'react'
import '../App.css';

const EventLink = ({link, date, event}) => {
  return (
    <div className='link-card-text'>
      <p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {date} {event}
        </a>
      </p>
    </div>
  )
}

export default EventLink;

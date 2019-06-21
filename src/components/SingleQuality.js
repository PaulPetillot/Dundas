import React from 'react'

const SingleQuality = props => {
    return (
        <div className="single-qual">
        <img src={props.image} alt="quality" />
        <p className="italic">{props.title}</p>
        <p className="description">
          {props.description}
        </p>
      </div>
    )
}

export default SingleQuality

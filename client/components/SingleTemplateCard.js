import React from 'react'
import {Link} from 'react-router-dom'

const SingleTemplateCard = props => {
  return (
    <div>
      <div className="templateCard">
        <img
          className="singleTemplateImage"
          src={props.template.frontImageURL}
        />
        <Link to={`/templates/${props.template.id}`}>
          {props.template.name}
        </Link>
      </div>
    </div>
  )
}

export default SingleTemplateCard

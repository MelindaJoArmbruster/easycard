import React from 'react'
import {Link} from 'react-router-dom'

const SingleTemplateCard = props => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="250"
          src={props.template.frontImageURL}
          aria-label="Placeholder: Thumbnail"
          focusable="false"
          style={{
            objectFit: 'none',
            objectPosition: 'center',
            width: '100%',
            maxHeight: '250px',
            marginBottom: '1rem'
          }}
        />

        <div className="card-body">
          <h5 className="card-title">{props.template.name}</h5>
          <p className="card-text">{props.template.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link to={`/templates/${props.template.id}`}>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                >
                  View
                </button>
              </Link>
            </div>
            <small className="text-muted">$2.99</small>
          </div>
        </div>
      </div>
    </div>
  )

  // return (
  //   <div>
  //     <div className="templateCard">
  //       <img
  //         className="singleTemplateImage"
  //         src={props.template.frontImageURL}
  //       />
  //       <Link to={`/templates/${props.template.id}`}>
  //         {props.template.name}
  //       </Link>
  //     </div>
  //   </div>
  // )
}

export default SingleTemplateCard

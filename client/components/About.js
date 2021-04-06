import React from 'react'

const About = () => {
  localStorage.clear()

  return (
    <div className="container">
      <h3 className="mt-5">SPA for Sending Postcards Using Direct Mail API</h3>
      <hr className="mb-5" />
      <p className="h4 mb-3">
        Easycard is my mobile-first single page application for sending
        postcards via direct mail and payment APIs. I am the sole developer and
        continue to enhance it for commercial release.
      </p>
      <ul className="list-group list-group-flush mb-5">
        <li className="list-group-item border-secondary">
          A complete application connecting front-end to back-end to 3rd party
          APIs
        </li>
        <li className="list-group-item border-secondary">
          Responsive React/Redux/Bootstrap UI for postcard customization and
          commerce
        </li>
        <li className="list-group-item border-secondary">
          Integrated with Lob for direct mail and Stripe for credit card payment
        </li>
        <li className="list-group-item border-secondary">
          Technologies: JavaScript, Node, Express, Sequelize, Postgres, OAuth,
          Stripe, React, Redux, Bootstrap
        </li>
      </ul>

      <img className="img-fluid" src="/images/stackathonWhiteBoard.png" />

      <hr className="my-5" />
      <h5 className="mt-5">Work In Progress</h5>
      <ul className="mb-5">
        <li>Implementing user address book.</li>
        <li>Expanding number of postcard templates.</li>
        <li>Virtual option to send by email.</li>
        <li>User scheduling for sending postcards.</li>
        <li>Affiliate links for sending gifts, flowers, etc.</li>
        <li>Serving up an API for others to use app as an affilate.</li>
      </ul>
    </div>
  )
}

export default About

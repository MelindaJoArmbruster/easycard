import React from 'react'

const About = () => {
  localStorage.clear()

  return (
    <div className="container">
      <h3 className="mt-5">SPA for Sending Postcards Using Direct Mail API</h3>
      <hr className="mb-5" />
      <h4 className="mb-3">Phase 1: (Async Week)</h4>

      <img className="img-fluid" src="/images/asyncWhiteBoard.png" />
      <h5 className="mt-5">Learning Goals</h5>
      <ul className="list-group">
        <li className="list-group-item">
          3rd Party API usage and coding considerations.
        </li>
        <li className="list-group-item">
          First fullstack app from scratch (i.e. no starting point).
        </li>
        <li className="list-group-item">
          Test homemade boilerplate created during workshop.
        </li>
        <li className="list-group-item">
          Further practice with React and Redux.
        </li>
        <li className="list-group-item">
          Ongoing CSS practice (no 3rd party framework).
        </li>
      </ul>
      <h5 className="mt-5">Challenges Overcome</h5>
      <ul className="list-group">
        <li className="list-group-item">
          Troubleshooting app crash with vague error message. Took hours to
          research. Fix required adding <br />
          "plugins": ["@babel/plugin-transform-runtime"] <br />
          to .babelrc in boilerplate.
        </li>
        <li className="list-group-item">
          Understanding how to format data for use with the 3rd party API.
        </li>
        <li className="list-group-item">
          Express routes to date invoved calls to own DB, but in this app,
          Express routes needed to enrich request data with data from own DB and
          then submit an API call to 3rd party, process it's response, update
          own DB and then send along the response to the client. (i.e. A lot
          going on in the Express route handler.)
        </li>
        <li className="list-group-item">
          The 3rd party API provided receipt image URLS in its response, but
          these URLS take up to 10 seconds before they are resovable, returning
          404 codes in the interim. Addressed this by untilizing setTimeout and
          clearTimeout to test the URLs every second using axios.get(URL).status
          until resolvable; in the interim displaying placeholder images.
        </li>
        <li className="list-group-item">CSS flexbox - nuff said!</li>
      </ul>
      <hr className="my-5" />
      <h4 className="mt-4 mb-3">Phase 2: (Stackathon)</h4>
      <img className="img-fluid" src="/images/stackathonWhiteBoard.png" />
      <h5 className="mt-5">Learning Goals</h5>
      <ul className="mb-5 list-group">
        <li className="list-group-item">Local user login and experience.</li>
        <li className="list-group-item">OAuth integration with Google.</li>
        <li className="list-group-item">Payment integration using Stripe.</li>
        <li className="list-group-item">
          Responsive and professional design using Bootstrap.
        </li>
        <li className="list-group-item">Customer journey.</li>
      </ul>
      <h5 className="mt-5">Challenges Overcome</h5>
      <ul className="list-group">
        <li className="list-group-item">
          Stripe integration for payment was the biggest challenge. Original
          customer journey did not consider payment. Versioning issues. Not
          intuitive. Leveraged online tutorials and YouTube walk-throughs.
        </li>
        <li className="list-group-item">
          Maintaining continuity in the UX when the user switched from anonymous
          to logged-in required special consideration. Used the localStorage
          object to deal with this as well as a special React component used
          only for intelligently routing the callback from Google OAuth.
        </li>
        <li className="list-group-item">
          It was a heavier lift than expected to migrate from my phase 1 codeset
          based on my homemade boilerplate to use the FSA Boilermaker. I wanted
          to leverage the additional capabilities within and be working off of a
          consistent skeleton relative to other assignments.
        </li>
        <li className="list-group-item">
          Using Bootstrap demonstrated some great benefits in the professional
          appearance and responsive design, but seems it could only get me 95%
          of the way there. I needed to research a few items on YouTube to
          resolve some nuances with JSX specific syntax and Bootstrap
          shortcomings.
        </li>
      </ul>
      <hr className="my-5" />
      <h5 className="mt-5">Further Development Possibilities</h5>
      <ul className="mb-5">
        <li>User address book.</li>
        <li>Expand number of postcard templates.</li>
        <li>View past orders.</li>
        <li>Virtual option to send by email.</li>
        <li>User scheduling for sending postcards.</li>
        <li>Affiliate links for sending gifts, flowers, etc.</li>
        <li>Serve up an API for others to use app as an affilate.</li>
      </ul>
    </div>
  )
}

export default About

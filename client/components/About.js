import React from 'react'

const About = () => {
  return (
    <div>
      <h2>FSA Async Week Independent Study Project</h2>
      <h3>SPA for Sending Postcards Using Direct Mail API</h3>
      <img src="/images/asyncWhiteBoard.png" />
      <h3>Learning Goals</h3>
      <ul>
        <li>3rd Party API usage and coding considerations.</li>
        <li>First fullstack app from scratch (i.e. no starting point).</li>
        <li>Test boilerplate created during workshop.</li>
        <li>Further practice with React and Redux.</li>
        <li>Ongoing CSS practice.</li>
      </ul>
      <h3>Challenges Overcome</h3>
      <ul>
        <li>
          Troubleshooting app crash with vague error message. Took hours to
          research. Fix required adding <br />
          "plugins": ["@babel/plugin-transform-runtime"] <br />
          to .babelrc in boilerplate.
        </li>
        <li>
          Understanding how to format data for use with the 3rd party API.
        </li>
        <li>
          Express routes to date invoved calls to own DB, but in this app,
          Express routes needed to enrich request data with data from own DB and
          then submit an API call to 3rd party, process it's response, update
          own DB and then send along the response to the client. (i.e. A lot
          going on in the Express route handler.)
        </li>
        <li>
          The 3rd party API provided receipt image URLS in its response, but
          these URLS take up to 10 seconds before they are resovable, returning
          404 codes in the interim. Addressed this by untilizing setTimeout and
          clearTimeout to test the URLs every second using axios.get(URL).status
          until resolvable; in the interim displaying placeholder images.
        </li>
        <li>CSS flexbox - nuff said!</li>
      </ul>
      <h3>Further Development Possibilities</h3>
      <ul>
        <li>User login and authentication.</li>
        <li>OAuth.</li>
        <li>Payment integration.</li>
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

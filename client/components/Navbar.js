import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">
          <strong>Easycard</strong>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {isLoggedIn ? (
              <>
                {/* The navbar will show these links after you log in */}
                <Link className="nav-item nav-link mx-2" to="/">
                  Home
                </Link>
                <Link className="nav-item nav-link mx-2" to="/templates">
                  Browse Cards
                </Link>
                <a
                  className="nav-item nav-link mx-2"
                  href="#"
                  onClick={handleClick}
                >
                  Logout
                </a>
                <Link className="nav-item nav-link mx-2" to="/about">
                  About
                </Link>
              </>
            ) : (
              <>
                {/* The navbar will show these links before you log in */}
                <Link className="nav-item nav-link mx-2" to="/">
                  Home
                </Link>
                <Link className="nav-item nav-link mx-2" to="/templates">
                  Browse Cards
                </Link>
                <Link className="nav-item nav-link mx-2" to="/login">
                  Login
                </Link>
                <Link className="nav-item nav-link mx-2" to="/signup">
                  Sign Up
                </Link>
                <Link className="nav-item nav-link mx-2" to="/about">
                  About
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  </>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

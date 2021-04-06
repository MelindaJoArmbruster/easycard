import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <>
      <div className="container-fluid login-bg text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3">
            <form
              className="login-form-container"
              onSubmit={handleSubmit}
              name={name}
            >
              <div className="text-center mb-5">
                <h3>Easycard {displayName}</h3>
              </div>
              <div className="mb-5">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email (try demo@demo.com)"
                />
              </div>
              <div className="mb-5">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password ('123' for demo)"
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary mb-3">
                  {displayName}
                </button>
              </div>
              {error &&
                error.response && (
                  <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    {' '}
                    {error.response.data}{' '}
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    />{' '}
                  </div>
                )}
              <a href="/auth/google">{displayName} with Google</a>
              <div className="mt-3">
                {displayName === 'Login' ? (
                  <span>
                    Not registered? <Link to="/signup">Sign Up</Link>
                  </span>
                ) : (
                  <span>
                    Already registered? <Link to="/login">Login</Link>
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <form onSubmit={handleSubmit} name={name}>
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input name="email" type="text" placeholder="Email" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input name="password" type="password" placeholder="Password" />
              </div>
              <div>
                <button type="submit">{displayName}</button>
              </div>
              {error && error.response && (<div className="alert alert-danger" role="alert"> {error.response.data} </div>)}
            </form>
            <a href="/auth/google">{displayName} with Google</a>
          </div>
        </div>
      </div> */}
    </>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}

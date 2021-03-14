import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from '.'
import {me} from '../store'
import Landing from './Landing'
import About from './About'
import AllTemplates from './AllTemplates'
import SingleTemplateView from './SingleTemplateView'
import OrderForm from './OrderForm'
import Confirmation from './Confirmation'
import GoogleSuccess from './GoogleSuccess'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/templates" component={AllTemplates} />

        <Route
          exact
          path="/templates/:templateId"
          component={SingleTemplateView}
        />
        <Route exact path="/order" component={OrderForm} />
        <Route exact path="/confirmation" component={Confirmation} />
        <Route exact path="/googlesuccess" component={GoogleSuccess} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
            {/* <Route path="/payment" component={CheckoutForm} /> */}
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

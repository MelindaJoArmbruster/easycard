import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchSingleTemplate} from '../store/singleTemplateReducer'

class SingleTemplateView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.loadSingleTemplate(this.props.match.params.templateId)
  }

  render() {
    return (
      <div className="container text-center">
        <div>
          <img
            className="py-2 mt-4"
            src={this.props.singleTemplate.frontImageURL}
            style={{
              objectPosition: 'center',
              maxWidth: '100%'
            }}
          />
        </div>
        <div>
          <img
            className="py-2"
            src={this.props.singleTemplate.backImageURL}
            style={{
              objectPosition: 'center',
              maxWidth: '100%'
            }}
          />
        </div>
        <div className="linkDiv">
          {this.props.isLoggedIn ? (
            <Link
              to={{
                pathname: '/order',
                templateId: this.props.singleTemplate.id
              }}
            >
              <button className="btn btn-sm btn-primary m-3">
                Personalize This Card
              </button>
            </Link>
          ) : (
            <Link
              to={{
                pathname: '/login'
              }}
            >
              <button className="btn btn-sm btn-primary m-3">
                Log In to Personalize
              </button>
            </Link>
          )}
          <Link to={{pathname: '/templates'}}>
            <button className="btn btn-sm btn-outline-primary m-3">
              Back to All Templates
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    singleTemplate: state.singleTemplateSlice.singleTemplate,
    loading: state.singleTemplateSlice.loading,
    isLoggedIn: !!state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadSingleTemplate: id => dispatch(fetchSingleTemplate(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleTemplateView)

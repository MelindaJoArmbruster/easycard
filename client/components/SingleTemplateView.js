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
      <div>
        <div>
          <img
            className="singleTemplateImage"
            src={this.props.singleTemplate.frontImageURL}
          />
        </div>
        <div>
          <img
            className="singleTemplateImage"
            src={this.props.singleTemplate.backImageURL}
          />
        </div>
        <div className="linkDiv">
          <Link
            to={{
              pathname: '/order',
              templateId: this.props.singleTemplate.id
            }}
          >
            <button id="personalize">Personalize This Card</button>
          </Link>
          <Link to={{pathname: '/templates'}}>
            <button className="button">Back to All Templates</button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    singleTemplate: state.singleTemplateSlice.singleTemplate,
    loading: state.singleTemplateSlice.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadSingleTemplate: id => dispatch(fetchSingleTemplate(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleTemplateView)

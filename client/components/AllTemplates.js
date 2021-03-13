import React from 'react'
import {connect} from 'react-redux'
import {fetchTemplates} from '../store/templatesReducer'
import SingleTemplateCard from './SingleTemplateCard'

class AllTemplates extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchTemplates()
  }

  render() {
    if (this.props.templateArray.loading) {
      return <div>Loading...</div>
    }
    // const templatesArray = this.props.templates;
    return (
      <div className="allTemplates">
        <h2>Choose a card name to display more details</h2>

        <div className="allTemplatesList">
          {this.props.templateArray.map(template => (
            <SingleTemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    templateArray: state.templatesSlice.templates,
    loading: state.templatesSlice.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTemplates: () => dispatch(fetchTemplates())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTemplates)

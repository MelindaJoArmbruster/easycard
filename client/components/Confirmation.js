import React from 'react'
import {connect} from 'react-redux'
import {addOrder} from '../store/orderReducer'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Confirmation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      frontImageURL: '/images/default-front.png',
      backImageURL: '/images/default-back.png'
    }
    this.checkBackImage = this.checkBackImage.bind(this)
    this.checkFrontImage = this.checkFrontImage.bind(this)
  }

  componentDidMount() {
    this.props.submitOrder(this.props.location.order)
    this.backInterval = setInterval(() => this.checkBackImage(), 1000)
    this.frontInterval = setInterval(() => this.checkFrontImage(), 1000)
  }

  async checkBackImage() {
    console.log('axios called')
    try {
      if (
        (await axios.get(this.props.confirmation.lobBackPngURL)).status === 200
      ) {
        this.setState({backImageURL: this.props.confirmation.lobBackPngURL})
        clearInterval(this.backInterval)
      }
    } catch (err) {
      console.log(err)
    }
  }

  async checkFrontImage() {
    console.log('axios called')
    try {
      if (
        (await axios.get(this.props.confirmation.lobFrontPngURL)).status === 200
      ) {
        this.setState({
          frontImageURL: this.props.confirmation.lobFrontPngURL
        })
        clearInterval(this.frontInterval)
      }
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    if (this.props.processessing) {
      return <div>Processing...</div>
    }

    return (
      <div>
        <div>
          Estimated Delivery Date:{' '}
          {this.props.confirmation.lobExpectedDeliveryDate}
          <br />
          Direct mail id number: {this.props.confirmation.lobId}
        </div>
        <div>
          The confirmation images below will take 5-10 seconds to load...
        </div>
        <br />
        <div>
          <img className="singleTemplateImage" src={this.state.backImageURL} />
        </div>
        <br />
        <div>
          <img className="singleTemplateImage" src={this.state.frontImageURL} />
        </div>
        <br />
        <div>
          <Link to={{pathname: '/templates'}}>
            <button className="button">Choose another card</button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    confirmation: state.orderSlice.order,
    processing: state.orderSlice.processing
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitOrder: order => dispatch(addOrder(order))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation)

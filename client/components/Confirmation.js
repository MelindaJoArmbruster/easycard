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
      backImageURL: '/images/default-back.png',
      showFrontWaiting: true,
      showBackWaiting: true
    }
    this.checkBackImage = this.checkBackImage.bind(this)
    this.checkFrontImage = this.checkFrontImage.bind(this)
  }

  componentDidMount() {
    localStorage.clear()
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
        this.setState({showBackWaiting: false})
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
        this.setState({showFrontWaiting: false})
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
      <div className="container text-center">
        <p className="mt-4 text-start lead alert alert-success" role="alert">
          Estimated Delivery Date:{' '}
          {this.props.confirmation.lobExpectedDeliveryDate}
        </p>
        <p className="mt-4 text-start lead alert alert-success" role="alert">
          Direct mail id number: {this.props.confirmation.lobId}
        </p>
        {this.state.showBackWaiting || this.state.showFrontWaiting ? (
          <p className="mt-4 text-start lead alert alert-info" role="alert">
            Confirmation images will load in 5-10 seconds...
          </p>
        ) : (
          ''
        )}
        <Link to={{pathname: '/templates'}}>
          <button className="btn btn-sm btn-primary mt-3 text-start">
            Send Another Card
          </button>
        </Link>
        <br />

        <img
          className="py-2 mt-2"
          src={this.state.backImageURL}
          style={{
            objectPosition: 'center',
            maxWidth: '100%'
          }}
        />
        <br />
        <img
          className="py-2 mb-5"
          src={this.state.frontImageURL}
          style={{
            objectPosition: 'center',
            maxWidth: '100%'
          }}
        />
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

import React from 'react'
import {connect} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import history from '../history'

class OrderForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      to_name: '',
      to_address_line1: '',
      to_address_line2: '',
      to_address_city: '',
      to_address_state: '',
      to_address_zip: '',
      from_name: '',
      from_address_line1: '',
      from_address_line2: '',
      from_address_city: '',
      from_address_state: '',
      from_address_zip: '',
      merge_variables_greeting: '',
      merge_variables_message: '',
      merge_variables_salutation: '',
      merge_variables_fromName: '',
      templateId: this.props.location.templateId
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    localStorage.clear()
    this.setState({
      from_name: this.props.user.name,
      from_address_line1: this.props.user.address,
      from_address_city: this.props.user.city,
      from_address_state: this.props.user.state,
      from_address_zip: this.props.user.zip
    })
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  onToken = token => {
    const body = {
      token,
      product: {name: 'Postcard', price: 2.99, productBy: 'Easycard'}
    }
    const headers = {
      'Content-Type': 'application/json'
    }

    return fetch(`/api/payment`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
      .then(response => {
        console.log('RESPONSE ', response)
        const {status} = response
        console.log('STATUS ', status)
        status === 200
          ? history.push({pathname: '/confirmation', order: {...this.state}})
          : alert('Payment failed.')
      })
      .catch(error => {
        console.log(error)
        alert(`Payment Error: ${error}`)
      })
  }

  render() {
    return (
      <div className="container">
        <form className="row g-3 my-3">
          <h2>To mail a postcard, complete the following fields:</h2>

          <h4>Recipient Details</h4>
          <div className="col-md-12 m-1 ">
            <input
              name="to_name"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.to_name}
              placeholder="Name"
            />
          </div>
          <div className="col-md-12 m-1 ">
            <input
              name="to_address_line1"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.to_address_line1}
              placeholder="Street Address"
            />
          </div>
          <div className="row  mx-1 px-1">
            <div className="col-md-6 m-0 p-1">
              <input
                name="to_address_city"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.to_address_city}
                placeholder="City"
              />
            </div>
            <div className="col-md-3 m-0 p-1">
              <input
                name="to_address_state"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.to_address_state}
                placeholder="State"
              />
            </div>
            <div className="col-md-3 m-0 p-1">
              <input
                name="to_address_zip"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.to_address_zip}
                placeholder="Zip"
              />
            </div>
          </div>
          <div className="col-md-12 m-1">
            <input
              name="merge_variables_greeting"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.merge_variables_greeting}
              placeholder="Greeting (i.e. Dear Jim,)"
            />
          </div>
          <div className="col-md-12 m-1">
            <textarea
              name="merge_variables_message"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.merge_variables_message}
              placeholder="Type your personal message here"
            />
          </div>
          <div className="col-md-12 m-1">
            <input
              name="merge_variables_salutation"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.merge_variables_salutation}
              placeholder="Salutation (i.e. Sincerely,)"
            />
          </div>
          <div className="col-md-12 m-1">
            <input
              name="merge_variables_fromName"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.merge_variables_fromName}
              placeholder="Sender Name"
            />
          </div>

          <h4>Sender Details</h4>

          <div className="col-md-12 m-1">
            <input
              name="from_name"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.from_name}
              placeholder="Name"
            />
          </div>
          <div className="col-md-12 m-1">
            <input
              name="from_address_line1"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.from_address_line1}
              placeholder="Street Address"
            />
          </div>
          <div className="row  mx-1 px-1">
            <div className="col-md-6 m-0 p-1">
              <input
                name="from_address_city"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.from_address_city}
                placeholder="City"
              />
            </div>
            <div className="col-md-3 m-0 p-1">
              <input
                name="from_address_state"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.from_address_state}
                placeholder="State"
              />
            </div>
            <div className="col-md-3 m-0 p-1">
              <input
                name="from_address_zip"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.from_address_zip}
                placeholder="Zip"
              />
            </div>
          </div>
        </form>
        <StripeCheckout
          name="Easycard"
          email={this.props.user.email}
          description="Postcards On Demand"
          allowRememberMe={false}
          currency="USD"
          amount={299}
          token={this.onToken}
          stripeKey="pk_test_51ITC4REclLCTO1i8Ii7KMFc5Hhh7q8L9goymmiQkkiibIR2qUqh8OdM8ATmRoNC4NCGa7G4MBs3ZKN7lPqRQ7lFR00MRhDCusb"
        >
          <button type="button" className="btn btn-sm btn-primary my-3 mx-1">
            Checkout and Send Card
          </button>
        </StripeCheckout>
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState, null)(OrderForm)

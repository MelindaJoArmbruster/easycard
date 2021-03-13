import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addOrder} from '../store/orderReducer'

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

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <form className="row g-3">
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
          {/* <input
              name='merge_variables_message'
              className='inputFullTall'
              onChange={this.handleChange}
              value={this.state.merge_variables_message}
              placeholder='Type your personal message here'
            /> */}
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
        <Link
          className="sendCard"
          to={{pathname: '/confirmation', order: {...this.state}}}
        >
          <button className="btn btn-sm btn-outline-secondary my-3 mx-1">
            Checkout and Send Card
          </button>
        </Link>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     submitOrder: (order) => dispatch(addOrder(order)),
//   };
// };

// export default connect(null, mapDispatchToProps)(OrderForm);
export default OrderForm

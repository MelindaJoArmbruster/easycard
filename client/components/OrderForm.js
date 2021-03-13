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
      <form>
        <h2>To mail a postcard, complete the following fields:</h2>
        <div className="orderContainer">
          <fieldset className="fieldset">
            <legend>Recipient Details</legend>
            <input
              name="to_name"
              className="inputFull"
              onChange={this.handleChange}
              value={this.state.to_name}
              placeholder="Name"
            />

            <input
              name="to_address_line1"
              className="inputFull"
              onChange={this.handleChange}
              value={this.state.to_address_line1}
              placeholder="Street Address"
            />
            <div className="addressRow">
              <input
                name="to_address_city"
                className="inputHalf"
                onChange={this.handleChange}
                value={this.state.to_address_city}
                placeholder="City"
              />

              <input
                name="to_address_state"
                className="inputQuarter"
                onChange={this.handleChange}
                value={this.state.to_address_state}
                placeholder="State"
              />

              <input
                name="to_address_zip"
                className="inputQuarter"
                onChange={this.handleChange}
                value={this.state.to_address_zip}
                placeholder="Zip"
              />
            </div>

            <input
              name="merge_variables_greeting"
              className="inputFull"
              onChange={this.handleChange}
              value={this.state.merge_variables_greeting}
              placeholder="Greeting (i.e. Dear Jim,)"
            />

            {/* <input
              name='merge_variables_message'
              className='inputFullTall'
              onChange={this.handleChange}
              value={this.state.merge_variables_message}
              placeholder='Type your personal message here'
            /> */}

            <textarea
              name="merge_variables_message"
              className="inputFullTall"
              onChange={this.handleChange}
              value={this.state.merge_variables_message}
              placeholder="Type your personal message here"
            />

            <input
              name="merge_variables_salutation"
              className="inputFull"
              onChange={this.handleChange}
              value={this.state.merge_variables_salutation}
              placeholder="Salutation (i.e. Sincerely,)"
            />

            <input
              name="merge_variables_fromName"
              className="inputFull"
              onChange={this.handleChange}
              value={this.state.merge_variables_fromName}
              placeholder="Sender Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend>Sender Details</legend>
            <div className="senderDetails">
              <div className="fromAddress">
                <input
                  name="from_name"
                  className="inputFull"
                  onChange={this.handleChange}
                  value={this.state.from_name}
                  placeholder="Name"
                />

                <input
                  name="from_address_line1"
                  className="inputFull"
                  onChange={this.handleChange}
                  value={this.state.from_address_line1}
                  placeholder="Street Address"
                />
                <div className="addressRow">
                  <input
                    name="from_address_city"
                    className="inputHalf"
                    onChange={this.handleChange}
                    value={this.state.from_address_city}
                    placeholder="City"
                  />

                  <input
                    name="from_address_state"
                    className="inputQuarter"
                    onChange={this.handleChange}
                    value={this.state.from_address_state}
                    placeholder="State"
                  />

                  <input
                    name="from_address_zip"
                    className="inputQuarter"
                    onChange={this.handleChange}
                    value={this.state.from_address_zip}
                    placeholder="Zip"
                  />
                </div>
              </div>
              <div className="orderSubmit">
                <Link
                  className="sendCard"
                  to={{pathname: '/confirmation', order: {...this.state}}}
                >
                  <button className="button">Send Card</button>
                </Link>
              </div>
            </div>
          </fieldset>
        </div>
      </form>
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

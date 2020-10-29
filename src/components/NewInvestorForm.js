import React from 'react'
import { connect } from 'react-redux'
import { updateNewInvestorForm } from '../actions/newInvestorForm.js'

class NewInvestorForm extends React.Component {

  state = {
    formData : {
      name: this.props.formData.name,
      fee: this.props.formData.fee
    }
   }

  handleChange=(event)=> {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
   formData: {
     ...this.state.formData,
     [name]: value
      }
    });
    updateNewInvestorForm(name,value);
  }

  handleInvSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.formData);
  }

  render() {
    // console.log("this.state.formData", this.state.formData)
  return (
      <form onSubmit={this.handleInvSubmit}>
        <br></br>
        <input
          placeholder="Investor Name"
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.formData.name}
        /><br/>
        <input
          placeholder="Investor Fee"
          type="integer"
          name="fee"
          onChange={this.handleChange}
          value={this.state.formData.fee}
        /><br/>
        <input
          type="submit"
          value="Enter"
        /><br/>
      </form>
  )
 }
}

  const mapStateToProps = state => {
    return {
      formData: state.newInvestorForm,
      investors: state.investors,
      pools: state.myPools
    }
  }

export default connect(mapStateToProps,{ updateNewInvestorForm })(NewInvestorForm);

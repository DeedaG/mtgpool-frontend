import React from 'react'
import { connect } from 'react-redux'
import { updateNewInvestorForm } from '../actions/newInvestorForm.js'
import InvestorAlert from './InvestorAlert.js'

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
    // if (this.state.formData.name === "")
    // this.props.show();
    // else
    event.preventDefault();
    this.props.handleSubmit(this.state.formData);
  }

  render() {
    // debugger
    console.log("this.state.formData", this.state.formData)
  return (
      <form onSubmit={this.handleInvSubmit}>
        <br></br>
        <input
          required
          placeholder={this.props.editMode ? this.props.formData.name : "Investor Name"}
          type="text"
          name="name"
          onChange={this.handleChange}
          defaultValue={this.props.editMode ? this.state.formData.name : this.props.formData.name}
        /><br/>
        <input
          required
          placeholder={this.props.editMode ?  this.props.formData.fee : "Investor Fee"}
          type="integer"
          name="fee"
          onChange={this.handleChange}
          defaultValue={this.props.editMode ? this.state.formData.fee : this.props.formData.fee}
        /><br/>
        <input
          className={this.props.editMode ? "button3" : "button2"}
          type="submit"
          value={this.props.editMode ? "Update Investor" : "Create Investor"}
        />
        <br/>
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

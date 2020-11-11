import React from 'react'
import { connect } from 'react-redux'
import { updateNewLoanForm } from '../actions/newLoanForm.js'

class AddLoans extends React.Component {

  state = {
    formData : {
      borrower: this.props.formData.borrower,
      term: this.props.formData.term,
      amount: this.props.formData.amount,
      rate: this.props.formData.rate,
      pool_id: this.props.formData.pool_id,
      close_date: this.props.formData.close_date
    }
   }

  handleChange=(event)=> {
    // event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
   formData: {
     ...this.state.formData,
     [name]: value
      }
    });
    updateNewLoanForm(name,value);
  }

  handleLoanSubmit = (event) => {
    // event.preventDefault();
    this.props.handleSubmit(this.state.formData);
  }

  render() {
  return (
      <form className="checkbox" onSubmit={this.handleLoanSubmit}>
        <br></br>
        <label>Borrower Name</label>
        <input
          required
          placeholder={this.props.editMode ? this.props.formData.borrower : "Borrower Name"}
          type="text"
          name="borrower"
          onChange={this.handleChange}
          defaultValue={this.props.editMode ? this.state.formData.borrower : this.props.formData.borrower}
        /><br/>
        <label>Loan Term</label>
        <input
          required
          placeholder={this.props.editMode ?  this.props.formData.term : "Loan Term"}
          type="integer"
          name="term"
          onChange={this.handleChange}
          defaultValue={this.props.editMode ? this.state.formData.term : this.props.formData.term}
        /><br/>
        <label>Loan Amount</label>
        <input
          required
          placeholder={this.props.editMode ? this.props.formData.amount : "Loan Amount"}
          type="integer"
          name="amount"
          onChange={this.handleChange}
          defaultValue={this.props.editMode ? this.state.formData.amount : this.props.formData.amount}
        /><br/>
        <label>Interest Rate</label>
        <input
          required
          placeholder={this.props.editMode ? this.props.formData.rate : "Interest Rate"}
          type="integer"
          name="rate"
          onChange={this.handleChange}
          defaultValue={this.props.editMode ? this.state.formData.rate : this.props.formData.rate}
        /><br/>
        <label>Pool Id</label>
        <input
          placeholder={this.props.editMode ? this.props.formData.pool_id : "Pool Id Number"}
          type="integer"
          name="pool_id"
          onChange={this.handleChange}
          defaultValue={this.props.editMode ? this.state.formData.pool_id : "Not Committed"}
        /><br/>
        <label>Closing Date</label>
        <input
          required
          placeholder={this.props.editMode ? this.props.formData.close_date : "Closing Date"}
          type="date"
          name="close_date"
          onChange={this.handleChange}
          defaultValue={this.props.editMode ? this.state.formData.close_date : this.props.formData.close_date}
        /><br/>
        <input
          className={this.props.editMode ? "button3" : "button2"}
          type="submit"
          value={this.props.editMode ? "Update Loan" : "Import Loan"}
        />
        <br/>
      </form>
  )
 }
}

  const mapStateToProps = state => {
    return {
      formData: state.newLoanForm,
      loans: state.loans,
      pools: state.myPools
    }
  }

export default connect(mapStateToProps,{ updateNewLoanForm })(AddLoans);

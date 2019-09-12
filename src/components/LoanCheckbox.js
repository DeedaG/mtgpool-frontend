import React from 'react'
import { updateNewPoolForm } from '../actions/newPoolForm.js'
import { connect } from 'react-redux'


class LoanCheckbox extends React.Component {
  state = {
    loan: "",
    addedLoans: [],
  }

  handleChangedLoans = (event) => {
    this.setState({
      loan: {
      ...this.state.loan,
          id: event.target.value
        }
    })
    event.preventDefault()
    this.setState(state => {
      const addedLoans = [state.addedLoans.push(state.loan)];
    return addedLoans})
    this.props.updateNewPoolForm("loans", this.state.addedLoans)
    // this.props.updateLoansInPool("loans", this.state.addedLoans)
  }


  render() {

  return (
    <div>
     {this.props.loans.map(loan =>
       <li key = {loan.id}>
       <><input
       name="loan"
       type="checkbox"
       onChange={this.handleChangedLoans}
       value={loan.id}
      />{loan.attributes.amount}<br></br></></li>)}
      </div>
     )
    }
  }

  const mapStateToProps = state => {
     // debugger
    return {
      loans: state.loans,
      pool: state.newPoolForm
    }
  }

  export default connect(mapStateToProps,{updateNewPoolForm})(LoanCheckbox)

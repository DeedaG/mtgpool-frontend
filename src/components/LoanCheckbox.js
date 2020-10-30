import React from 'react'
import { updateNewPoolForm } from '../actions/newPoolForm.js'
import { connect } from 'react-redux'


class LoanCheckbox extends React.Component {
  state = {
    // loan: "",
    checkedLoans: []
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  handleChangedLoans(e, value){
    console.log("target =", e.target.checked)
    console.log("state is", this.state)
    if (e.target.checked){
      //append to array
      this.setState({
        checkedLoans: this.state.checkedLoans.concat([value])
        },
        function () {
          // console.log(this.state.checkedLoans);
          this.props.updateNewPoolForm("loans", this.state.checkedLoans)
        })

    } else {
      this.setState({
        checkedLoans : []
      })
   }
 }

  render() {

  return (
    <div >
     {this.props.loans.map((loan, index) =>
       <li key = {loan.id}>
       <><input
       name="loans"
       type="checkbox"
       onClick={(e)=>this.handleChangedLoans(e,loan)}
      />{this.numberWithCommas(loan.attributes.amount.toFixed(2))}<br></br></></li>)}
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

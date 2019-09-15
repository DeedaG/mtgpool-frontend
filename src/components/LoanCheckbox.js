import React from 'react'
import { updateNewPoolForm } from '../actions/newPoolForm.js'
import { connect } from 'react-redux'


class LoanCheckbox extends React.Component {
  state = {
    // loan: "",
    checkedLoans: []
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



  // handleChangedLoans = (event) => {
  //   this.setState({
  //     loan: {
  //     ...this.state.loan,
  //         id: event.target.value
  //       }
  //     })
  //   this.setState(state => {
  //     const checkedLoans = state.checkedLoans.concat(state.loan);
  //   return {
  //     checkedLoans
  //     }
  //   })
  //   this.props.updateNewPoolForm("loans", this.state.checkedLoans)
  //   // this.props.updateLoansInPool("loans", this.state.checkedLoans)
  // }


  render() {

  return (
    <div >
     {this.props.loans.map((loan, index) =>
       <li key = {loan.id}>
       <><input
       name="loans"
       type="checkbox"
       onClick={(e)=>this.handleChangedLoans(e,loan)}
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

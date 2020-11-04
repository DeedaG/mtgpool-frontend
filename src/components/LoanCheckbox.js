import React from 'react'
import { updateNewPoolForm } from '../actions/newPoolForm.js'
import { connect } from 'react-redux'


class LoanCheckbox extends React.Component {
  state = {
    checkedLoans: this.props.checkedLoans
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  handleChangedLoans(e, value){
      if (e.target.checked){
        this.setState({
          checkedLoans: this.state.checkedLoans.concat([value])
          },
          function () {
            this.props.updateNewPoolForm("loans", this.state.checkedLoans)
          })
      } else {
        this.setState({
          checkedLoans : this.props.checkedLoans
        })
     }
   }

  render() {
  return (
    <div className="checkbox">
     {this.props.loans.filter(l => l.attributes.pool_id < 1)
       .map((loan) =>
       <table key = {loan.id}><>
         <tbody>
           <tr>
             <td>
              <input
                name="loans"
                type="checkbox"
                onClick={(e)=>this.handleChangedLoans(e,loan)}
               />${this.numberWithCommas(loan.attributes.amount.toFixed(2))}, &nbsp;{loan.attributes.rate}%,
                &nbsp;{loan.attributes.term}yr, &nbsp;{loan.attributes.pool_id ?
                  <span style={{color: "red"}}>Committed
                    <span style={{color: "black"}}> Pool {loan.attributes.pool_id}</span>
                  </span>
                  :
                  <span style={{color: "green"}}>Available</span>}<br></br>
             </td>
           </tr>
          </tbody>
        </></table>)}
        <p>Current commitment: $
          <span className="doubleUnderline" >
            {this.numberWithCommas(this.props.total.toFixed(2))}
          </span>
        </p>
        <p>Outstanding: $
          <span  style={{color: "red"}}>
            {this.numberWithCommas(this.props.open.toFixed(2))}
          </span>
        </p>
      </div>
     )
    }
  }

  const mapStateToProps = state => {

    const myFunc = (total, num) => {
     return total + num;
   }
   console.log("state.newPoolForm)",state.newPoolForm)
   const checkedLoans = []
   // debugger
    const total = state.newPoolForm.loans.length > 0 ?
    checkedLoans.concat(state.newPoolForm.loans)
      .map(l => l.amount).reduce(myFunc, 0)
      : 0

    const open = total > 0 && state.newPoolForm.pool_amount > 0 ?
        state.newPoolForm.pool_amount - total : 0

    return {
      loans: state.loans,
      pool: state.newPoolForm,
      checkedLoans: checkedLoans.concat(state.newPoolForm.loans),
      total,
      open
    }
  }

  export default connect(mapStateToProps,{updateNewPoolForm})(LoanCheckbox)

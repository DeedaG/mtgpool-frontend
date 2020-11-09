import React from 'react'
import { updateNewPoolForm } from '../actions/newPoolForm.js'
import { connect } from 'react-redux'


class LoanCheckbox extends React.Component {
  state = {
    checkedLoans: []
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  handleChangedLoans(e, value){
      if (e.target.checked){

        const findLoan = this.props.loans.filter(l => l.id === value)

        this.setState({
          checkedLoans: [...this.props.checkedLoans, findLoan]
        },
            this.props.handleChange(e))
         } else {
        this.setState({
          checkedLoans : this.props.checkedLoans
        })
     }
   }
   debugger

   deletedPool(x){
     const findP = this.props.pools.find(pool => pool.id === x);
     if (typeof findP === "undefined"){
       return true
     } else {
       return false
      }
     }

     unCheckState = (e, value) => {
       window.location.assign(`/pools/${value.attributes.pool_id}/edit`)
       if (e.target.unchecked){
           this.setState({
               checkedLoans: [...this.props.checkedLoans.filter(l => l.id !== value)]
             },
             this.props.handleChange(e))
           }
     }


     unCheck(e, value){
       document.getElementById("alreadyChecked").checked = false;
       this.unCheckState(e, value)
      }


  render() {
  return (
    <div className="checkbox">
     <div>{this.props.loans
       .filter(l => this.deletedPool(l.attributes.pool_id) === true)
       .filter(l => l.attributes.pool_id < 1)
       .map((loan) =>
       <table key = {loan.id}><>
         <tbody>
           <tr>
             <td>
              <input
                id="checkId"
                name="loan.id"
                type="checkbox"
                value={loan.id}
                onClick={(e)=>this.handleChangedLoans(e,loan)}
                  />${this.numberWithCommas(loan.attributes.amount.toFixed(2))},
                  &nbsp;{loan.attributes.rate}%,
                  &nbsp;{loan.attributes.term}yr,
                  &nbsp;{loan.attributes.pool_id ?
                    <span style={{color: "red"}}>Committed
                      <span style={{color: "black"}}> Pool {loan.attributes.pool_id}</span>
                    </span>
                    :
                    <span style={{color: "green"}}>Available</span>}<br></br>
             </td>
           </tr>
          </tbody>
        </></table>)}
        </div>

        <div>{this.props.loans.filter(l => l.attributes.pool_id === this.props.poolForm.id)
          .map((loan) =>
          <table key = {loan.id}><>
            <tbody>
              <tr>
                <td>
                 <input
                   id="alreadyChecked"
                   name="loan.id"
                   type="checkbox"
                   value={loan.id}
                   defaultChecked={true}
                   onClick={(e)=>this.unCheck(e, loan)}
                     /><label for={loan.id}>${this.numberWithCommas(loan.attributes.amount.toFixed(2))},
                     &nbsp;{loan.attributes.rate}%,
                     &nbsp;{loan.attributes.term}yr,
                     &nbsp;{loan.attributes.pool_id ?
                       <span style={{color: "red"}}>Committed
                         <span style={{color: "black"}}> Pool {loan.attributes.pool_id}</span>
                       </span>
                       :
                       <span style={{color: "green"}}>Available</span>}<br></br>
                       </label>
                </td>
              </tr>
             </tbody>
           </></table>)}
           </div>


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

   const checkedLoans = []

   const prevLoans = state.loans.filter(l =>
     l.attributes.pool_id === state.newPoolForm.id)

    const total = prevLoans.length > 0 ?
      prevLoans.map(l => l.attributes.amount).reduce(myFunc, 0)
      : 0

    const open = total > 0 && state.newPoolForm.pool_amount > 0 ?
        state.newPoolForm.pool_amount - total : 0

    return {
      loans: state.loans,
      poolForm: state.newPoolForm,
      pools: state.myPools,
      prevLoans,
      checkedLoans: checkedLoans.concat(prevLoans),
      total,
      open
    }
  }

  export default connect(mapStateToProps,{updateNewPoolForm})(LoanCheckbox)

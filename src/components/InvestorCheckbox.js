import React from 'react'
import { updateNewPoolForm } from '../actions/newPoolForm.js'
import { connect } from 'react-redux'


class InvestorCheckbox extends React.Component {
  state = {
    checkedInvestor: ""
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  handleChangedInvestor(e, value){
    console.log("target =", e.target.checked)
    console.log("state is", this.state)
    if (e.target.checked){
      //append to array
      this.setState({
        checkedInvestor: value
        },
        function () {
          // console.log(this.state.checkedLoans);
          this.props.updateNewPoolForm("investor_id", this.state.checkedInvestor)
        })

    } else {
      this.setState({
        checkedInvestor : ""
      })
   }
 }

  render() {
// debugger
  return (
    <div className="investors" >
     {this.props.investors.map((investor) =>
       <table key={investor.id}><>
        <tbody>
          <tr>
            <td className="checkbox">
             <input
             name="investor_id"
             type="checkbox"
             value={investor.id}
             onClick={(e)=>this.handleChangedInvestor(e,investor.id)}
             />{investor.attributes.name}<br></br>
            </td>
          </tr>
         </tbody>
      </></table>)}
      </div>
     )
    }
  }

  const mapStateToProps = state => {
     // debugger
    return {
      investors: state.investors,
      pool: state.newPoolForm
    }
  }

  export default connect(mapStateToProps,{updateNewPoolForm})(InvestorCheckbox)

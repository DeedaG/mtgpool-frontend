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
    if (e.target.checked){
      this.setState({
        checkedInvestor: value
        },
        function () {
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
    <div className="checkbox">
     {this.props.investors.map((investor) =>
       <table key={investor.id}><>
        <tbody>
          <tr>
            <td >
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

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class MyInvestors extends React.Component {

  render() {

  const newInv = <Link to ={`/investors/new`}>Add New Investor</Link>
    // debugger
  const investorCards =  this.props.investors.length > 0 ? this.props.investors.map(investor =>
    <table className="investors"><>
      <thead >
        <tr>
          <th className="investorTextLeft">Id</th>
          <th className="investorTextCenter">Investor</th>
          <th className="investorTextRight">Fee</th>
        </tr>
      </thead>
      <tbody >
        <tr>
          <td className="investorTextLeft">{investor.id}</td>
          <td className="investorTextCenter">{investor.attributes.name} &nbsp;<Link to ={`/investors/${investor.id}/edit`}>
                <button className="button3">Edit</button>
              </Link>
          </td>
          <td className="investorTextRight">${investor.attributes.fee ? investor.attributes.fee.toFixed(2) : ""}</td>
        </tr>
      </tbody>
      <br></br></>
  </table>) : <h3>No investors at this time</h3>


  return (
      <div>
        <button className ="button2 ">{newInv}</button>
        {investorCards}
      </div>
  )
 }
}
  const mapStateToProps = state => {
    return {
      investors: state.investors,
      pools: state.myPools
    }
  }

export default connect(mapStateToProps)(MyInvestors);

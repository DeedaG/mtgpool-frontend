import React from 'react'


const LoanCard = ({loan}) => {

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    loan ?
    <table className="pools">
      <thead>
        <tr>
          <th>Borrower</th>
          <th>Loan Amount</th>
          <th>Pool Id</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{loan.attributes.borrower}</td>
          <td>{numberWithCommas(loan.attributes.amount.toFixed(2))}</td>
          <td>{loan.attributes.pool_id}</td>
        </tr>
      </tbody>
    </table>

     : null
    )
}

export default LoanCard;

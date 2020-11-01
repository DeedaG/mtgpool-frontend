import React from 'react'


const LoanCard = ({loan}) => {

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    loan ?
    <div className="loan">

          <h3>Borrower: {loan.attributes.borrower}</h3>
          <h3>Loan Number: {loan.id}</h3>
            <p>Pool Number: {loan.attributes.pool_id > 0 ? loan.attributes.pool_id :
                <span style={{color: "red"}}>Not Committed</span>}
            </p>  
          <p>Loan Amount: ${numberWithCommas(loan.attributes.amount.toFixed(2))}</p>
          <p>Interest Rate: {loan.attributes.rate}%</p>
          <p>Term: {loan.attributes.term} yr</p>
          <p>Closing Date: {loan.attributes.close_date}</p>

        </div>
     : null
    )
}

export default LoanCard;

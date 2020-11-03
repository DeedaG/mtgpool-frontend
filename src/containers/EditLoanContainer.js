import React from 'react'
import { updateLoan, deleteLoan } from '../actions/loans.js'
import { setFormDataForEditLn, resetNewLoanForm } from '../actions/newLoanForm.js'
import { connect } from 'react-redux'
import AddLoans from '../components/AddLoans.js'


class EditLoanContainer extends React.Component {

  componentDidMount() {
    this.props.loan && this.props.setFormDataForEditLn(this.props.loan)
  }

  componentDidUpdate(prevProps) {
    this.props.loan && !prevProps.loan &&
    this.props.setFormDataForEditLn(this.props.loan)
  }

  componentWillUnmount() {
    this.props.resetNewLoanForm()
  }

  handleSubmit = (formData) => {
    const { updateLoan, loan, history } = this.props
    updateLoan({
      loanId: loan.id,
      ...formData
    }, history)
    window.location.assign(`/loans/${loan.id}`);
  }
  render() {
    const { history, loan, deleteLoan } = this.props
    const loanId = loan ? loan.id : null
    return <>
        <AddLoans editMode handleSubmit={this.handleSubmit} />
        <br/>
        <button className="button4" onClick={()=>{deleteLoan(loanId, history);
          window.location.assign(`/loans`)}}>Delete Loan
        </button>
      </>

  }
};
export default connect(null, {updateLoan, deleteLoan, setFormDataForEditLn, resetNewLoanForm })(EditLoanContainer);

import React from 'react'
import { updateInvestor, deleteInvestor } from '../actions/investors.js'
import { setFormDataForEditInv, resetNewInvestorForm } from '../actions/newInvestorForm.js'
import { connect } from 'react-redux'
import NewInvestorForm from '../components/NewInvestorForm.js'


class EditInvestorContainer extends React.Component {

  componentDidMount() {
    this.props.investor && this.props.setFormDataForEditInv(this.props.investor)
  }

  componentDidUpdate(prevProps) {
    this.props.investor && !prevProps.investor &&
    this.props.setFormDataForEditInv(this.props.investor)
  }

  componentWillUnmount() {
    this.props.resetNewInvestorForm()
  }

  handleSubmit = (formData) => {
    const { updateInvestor, investor, history } = this.props
    updateInvestor({
      investorId: investor.id,
      ...formData
    }, history)
    window.location.assign(`/investors/investorId`);
  }
  render() {
    const { history, investor, deleteInvestor } = this.props
    const investorId = investor ? investor.id : null
    return <>
        <NewInvestorForm editMode handleSubmit={this.handleSubmit} />
        <br/>
        <button className="button4" onClick={()=>deleteInvestor(investorId, history)}>Delete Investor</button>
      </>

  }
};
export default connect(null, {updateInvestor, deleteInvestor, setFormDataForEditInv, resetNewInvestorForm })(EditInvestorContainer);

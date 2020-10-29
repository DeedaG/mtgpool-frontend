import React from 'react'
import { updateInvestor, deleteInvestor } from '../actions/myInvestors.js'
import { setFormDataForEdit, resetNewInvestorForm } from '../actions/newInvestorForm.js'
import { connect } from 'react-redux'
import NewInvestorForm from '../components/NewInvestorForm.js'


class EditInvestorContainer extends React.Component {

  componentDidMount() {
    this.props.investor && this.props.setFormDataForEdit(this.props.investor)
  }

  componentDidUpdate(prevProps) {
    this.props.investor && !prevProps.investor &&
    this.props.setFormDataForEdit(this.props.investor)
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
  }
  render() {
    const { history, investor, deleteInvestor } = this.props
    const investorId = investor ? investor.id : null
    return <>
        <NewInvestorForm editMode handleSubmit={this.handleSubmit} />
        <br/>
        <button style={{color:"red"}} onClick={()=>deleteInvestor(investorId, history)}>Delete Investor</button>
      </>

  }
};
export default connect(null, {updateInvestor, deleteInvestor, setFormDataForEdit, resetNewInvestorForm })(EditInvestorContainer);

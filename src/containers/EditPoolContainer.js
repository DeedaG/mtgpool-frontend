import React from 'react'
import { updatePool, deletePool } from '../actions/myPools.js'
import { setFormDataForEdit, resetNewPoolForm } from '../actions/newPoolForm.js'
import { connect } from 'react-redux'
import NewPoolForm from '../components/NewPoolForm.js'


class EditPoolContainer extends React.Component {

  componentDidMount() {
    this.props.pool && this.props.setFormDataForEdit(this.props.pool)
  }

  componentDidUpdate(prevProps) {
    this.props.pool && !prevProps.pool &&
    this.props.setFormDataForEdit(this.props.pool)
  }

  componentWillUnmount() {
    this.props.resetNewPoolForm()
  }

  handleSubmit = (formData) => {
    const { updatePool, pool, history } = this.props
    updatePool({
      poolId: pool.id,
      ...formData
    }, history)
    window.location.assign(`/pools/${pool.id}`)
  }
  render() {
    const { history, pool, deletePool } = this.props
    const poolId = pool ? pool.id : null
    return <>
        <NewPoolForm editMode pool={pool} handleSubmit={this.handleSubmit}/>
        <br/>
        <button className="button4" onClick={()=>deletePool(pool, poolId, history)}>Delete Pool</button>
      </>

  }
};
export default connect(null, {updatePool, deletePool, setFormDataForEdit, resetNewPoolForm })(EditPoolContainer);

import React from 'react'
import { updatePool } from '../actions/myPools.js'
import { connect } from 'react-redux'


const Comment =({pool}) => {

  const handleChange = (event) => {
    const { name, value } = event.target
    const updatedComments = {
      ...pool.attributes.comments,
      [name]: value
    }
    updatePool()
  }

  const handleSubmit = (event) => {
    handleChange()
  }

    return (

      pool ?
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="add notes here"
            type="text"
            value={pool.attributes.comments}
            name="comments"
            onChange={handleChange}
          >{pool.attributes.comments}</input><br></br>
        <input type="submit" />
        </form>
      </div> : null
       )
}



export default connect(null, {updatePool} )(Comment);

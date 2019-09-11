import React from 'react'
import { connect } from 'react-redux'
import Comment from './Comment.js'
import { Link } from 'react-router-dom'

class MyPools extends React.Component {
  state = {
    displaySorted: false,
    inputNumber: 0,
    compareNumber: 0
   }

   handleChange=(event)=> {
     this.setState({
       inputNumber: event.target.value
     })
   }

   handleSubmit =(event) => {
     event.preventDefault()
      this.setState({
        compareNumber: this.state.inputNumber,
        inputNumber: 0
      })
   }

    handleClick = () => {
       this.setState({
         displaySorted: !this.state.displaySorted
      })
    }

render() {

      const allPoolCards = this.props.pools.length > 0 ? this.props.pools.map(p =>
        <><Link to ={`/pools/${p.id}`} >{p.attributes.name}</Link>
        <Comment />
      <br></br><br></br></>) : null

      const greaterPools = this.props.pools.filter(p =>
        p.attributes.pool_amount > this.state.compareNumber
      ).map(p =>
        <><Link to ={`/pools/${p.id}`} >{p.attributes.name}</Link>
      <br></br><br></br></>)

      const abcPools = [...this.props.pools].sort(function(a, b) {
        var nameA = a.attributes.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.attributes.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }).map(p =>
        <><Link to ={`/pools/${p.id}`} >{p.attributes.name}</Link>
    <br></br><br></br></>)

      const abcGreaterPools = [...this.props.pools].filter(p =>
        p.attributes.pool_amount > this.state.compareNumber
      ).sort(function(a, b) {
        var nameA = a.attributes.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.attributes.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }).map(p =>
        <><Link to ={`/pools/${p.id}`} >{p.attributes.name}</Link>
    <br></br><br></br></>)


      return (
          <div>
            <h3><label>Current Pools</label></h3>
            <p>{this.state.compareNumber > 0 && this.state.displaySorted ? abcGreaterPools
                : (this.state.displaySorted ? abcPools
                  : (this.state.compareNumber > 0 ? greaterPools : allPoolCards))}</p>
                <h4><label>Sort Pools</label></h4>
            <button onClick={this.handleClick}>ABC Sort</button>

           <form onSubmit={this.handleSubmit}>

             <input
               placeholder="Search by Pool Amount"
               onChange={this.handleChange}
               value={this.state.number}>
             </input>
             <input type="submit" />
           </form>

          </div>
        )
      }
    }


  const mapStateToProps = state => {
    return {
      pools: state.myPools
      // loans: state.loans
    }
  }


export default connect(mapStateToProps)(MyPools)

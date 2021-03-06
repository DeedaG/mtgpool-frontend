import React from 'react'
import { connect } from 'react-redux'
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

    numberWithCommas(x) {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

render() {

    const pooltblHd =
    <thead>
      <tr>
        <th>Id</th>
        <th>Pool Name</th>
        <th>Pool Amount</th>
      </tr>
    </thead>

      const allPoolCards = this.props.pools.length > 0 ? this.props.pools.map(p =>
        <table className="poolName" key = {p.id}><>
          {pooltblHd}
          <tbody>
            <tr>
              <td>{p.id}</td>
              <td><Link to ={`/pools/${p.id}`} style={{color: "green"}}>{p.attributes.name}</Link></td>
              <td>${this.numberWithCommas(p.attributes.pool_amount.toFixed(2))}</td>
            </tr>
          </tbody>
          </></table>) : null

      const greaterPools = this.props.pools.filter(p =>
        p.attributes.pool_amount > this.state.compareNumber
      ).map(p =>
        <table className="poolName" key = {p.id}><>
          {pooltblHd}
          <tbody>
            <tr>
              <td><Link to ={`/pools/${p.id}`}>{p.attributes.name}</Link></td>
              &nbsp;
              <td>${p.attributes.pool_amount.toFixed(2)}</td>
            </tr>
          </tbody>
      <br></br></></table>)


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
        <table className="poolName" key = {p.id}><>
          {pooltblHd}
          <tbody>
            <tr>
              <td><Link to ={`/pools/${p.id}`}>{p.attributes.name}</Link></td>
              <td>${p.attributes.pool_amount.toFixed(2)}</td>
            </tr>
          </tbody>
      <br></br></></table>)


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
        <table className="poolName" key = {p.id}><>
          {pooltblHd}
          <tbody>
            <tr>
              <td><Link to ={`/pools/${p.id}`}>{p.attributes.name}</Link></td>
              <td>${p.attributes.pool_amount.toFixed(2)}</td>
            </tr>
          </tbody>
      <br></br></></table>)


      return (
          <div>
            <h3><label>Current Pools</label></h3>
            <div>
              {this.state.compareNumber > 0 && this.state.displaySorted ? abcGreaterPools
                : (this.state.displaySorted ? abcPools
                  : (this.state.compareNumber > 0 ? greaterPools : allPoolCards))}</div>
                <h4><label>Sort Pools</label></h4>
            <button onClick={this.handleClick}>Toggle ABC Sort</button>

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

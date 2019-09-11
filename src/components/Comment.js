import React from 'react'

class Comment extends React.Component {

  state = {
    text: "",
    comments: []
  }


  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState ({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(state => {
      const comments = [...state.comments, state.text];
       return {
         comments,
         text: ""
       }
     });
    };


  render() {

    return (

      <div>
          {this.state.comments.map(text => (
            <li key={text}>{text}</li>
          ))}
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="add notes here"
            type="text"
            value={this.state.text}
            name="text"
            onChange={this.handleChange}
          />
          <button type="submit" value="submit">Submit</button>
        </form>
       </div>
       )
      }
}

export default Comment;

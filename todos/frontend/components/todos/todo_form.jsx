import React from 'react';

class TodoForm extends React.Component {
  constractur(props){
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return event => this.setState({[property]: event.target.value});
  }

  handleSubmit(event) {
  	event.preventDefault();
    event.currentTarget
    this.receiveTodo();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" name="title" value="" />
        <textarea type="text" name="body" value="" />
        <button>Add New Todo</button>
      </form>
    );
  }

}

export default TodoForm;

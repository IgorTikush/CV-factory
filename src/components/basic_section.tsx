import React, { Component } from 'react';


class BasicSection extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      edit: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e: any) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit(e: any) {
    e.preventDefault()
    this.setState((prevState: { edit: boolean; }) => ({
      edit: !prevState.edit
    }))
  }

  render() {
    let output;
    if (this.state.edit) {
       output =
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' id='name' value={this.state.name} onChange={this.handleChange}/>
          </label>
          <label>
            E-mail:
            <input type='text' id='email' value={this.state.email} onChange={this.handleChange}/>
          </label>
          <label>
            Phone:
            <input type='text' id='phone' value={this.state.phone} onChange={this.handleChange}/>
          </label>
          <button>Add</button>
        </form>
    } else {
      output =
        <div>
          <div>Name: {this.state.name}</div>
          <div>Email: {this.state.email}</div>
          <div>Phonen number: {this.state.phone}</div>
          <button onClick={this.handleSubmit}>Edit</button>
        </div>

    }

    return (
      <div className='BasicSection'>
        <hr/>
        {output}
      </div>
    );
  }
}

export {BasicSection}

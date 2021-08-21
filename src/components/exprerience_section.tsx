import React, { Component } from 'react';


class ExprerienceSection extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      nameJob: '',
      yearsJob: '',
      dutiesJob: '',
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
            Name of Job:
            <input type='text' id='nameJob' value={this.state.nameJob} onChange={this.handleChange}/>
          </label>
          <label>
            Years of Job:
            <input type='text' id='yearsJob' value={this.state.yearsJob} onChange={this.handleChange}/>
          </label>
          <label>
            Duties:
            <input type='text' id='dutiesJob' value={this.state.dutiesJob} onChange={this.handleChange}/>
          </label>
          <button>Add</button>
        </form>
    } else {
      output =
        <div>
          <div>Name of Job: {this.state.nameJob}</div>
          <div>Years of Job: {this.state.yearsJob}</div>
          <div>Duties: {this.state.dutiesJob}</div>
          <button onClick={this.handleSubmit}>Edit</button>
        </div>
    }
    return (
      <div className='educationSection'>
        <hr/>
        {output}
      </div>
    );
  }
}

export {ExprerienceSection}

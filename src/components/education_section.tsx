import React, { Component } from 'react';


class EducationSection extends Component <any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      nameUniversity: '',
      yearsUniversity: '',
      nameOfMajor: '',
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
            Name of University:
            <input type='text' id='nameUniversity' value={this.state.nameUniversity} onChange={this.handleChange}/>
          </label>
          <label>
            Years of University:
            <input type='text' id='yearsUniversity' value={this.state.yearsUniversity} onChange={this.handleChange}/>
          </label>
          <label>
            Major:
            <input type='text' id='nameOfMajor' value={this.state.nameOfMajor} onChange={this.handleChange}/>
          </label>
          <button>Add</button>
        </form>
    } else {
      output =
        <div>
          <div>Name of University: {this.state.nameUniversity}</div>
          <div>Years of University: {this.state.yearsUniversity}</div>
          <div>Major: {this.state.nameOfMajor}</div>
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

export {EducationSection}

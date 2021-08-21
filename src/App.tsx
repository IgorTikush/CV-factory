import React, { Component } from 'react';
import './App.css';
import {BasicSection} from './components/basic_section';
import {EducationSection} from './components/education_section';
import {ExprerienceSection} from './components/exprerience_section';

class App extends Component{
  constructor(props: any) {
    super(props);

    this.state = {
      text: '',
      taskArray: []
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>CV Factory</div>
        </header>
        <BasicSection />
        <EducationSection />
        <ExprerienceSection />
      </div>

    );
  }

}

export default App;

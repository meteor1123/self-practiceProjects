import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pet from './Pet/Pet';

class App extends Component {
  state = {
    mypets: [
      { name: "fiona", age: "23"},
      { name: "shit", age: "15"},
      { name: "pooo", age: "125"}
    ],
    otherState: "some other value"
  }

  nameChangedHandler = (event) => {
    this.setState( {
      mypets: [
      { name: event.target.value, age: "23"},
      { name: "welcome", age: "32"},
      { name: "to my house", age: "125"}
    ]
    })
  };

  switchNameHandler = () => {
    this.setState( {
      mypets: [
      { name: "fiona", age: "23"},
      { name: "welcome", age: "32"},
      { name: "to my house", age: "125"}
    ]
    })
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.switchNameHandler}> switch Name </button>

        <Pet name={this.state.mypets[0].name} 
             age={this.state.mypets[0].age}
             changed={this.nameChangedHandler}
             />

        <Pet name= {this.state.mypets[1].name} age={this.state.mypets[1].age}>xixi</Pet>

        <Pet name={this.state.mypets[2].name} age={this.state.mypets[2].age}>xiha</Pet>
      </div>
    );
  }
}

export default App;

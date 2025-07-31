import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import Input from './components/Input'

export default class App extends React.Component<{}> {
  onClick() {
    alert('button clicked')
  }
  onChange() {
    alert('input changed')
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <div className='App-inputs'>
            <Input placeholder='Type something' onChange={this.onChange}/>
            <Button onClick={this.onClick} text='Send'/>
          </div>
        </header>
      </div>
    );
  }
}

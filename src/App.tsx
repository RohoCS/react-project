import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import Input from './components/Input'

function onClick() {
  alert('button clicked')
}

function onChange() {
  alert('input changed')
}

export default class App extends React.Component<{}> {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <div className='App-inputs'>
            <Input placeholder='Type something' onChange={onChange}/>
            <Button onClick={onClick} text='Send'/>
          </div>
        </header>
      </div>
    );
  }
}

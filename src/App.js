import React, { Component } from 'react';
import MainTitle from './components/MainTitle';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header image="https://app.talento.laboratoria.la/img/logo.svg" />
        <MainTitle>Guilherme</MainTitle>
      </div>
    );
  }
}

export default App;

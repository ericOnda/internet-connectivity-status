import React, { Component } from 'react';
import './App.css';

import Connectivity from './components/Connectivity';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Connectivity render={({ connected }) => (
          connected ? (
            <p>Conectado!</p>
          ) : (
            <p>Não Conectado!</p>
          ) 
        )}
        />
      </div>
    );
  }
}

export default App;

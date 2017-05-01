import React, { Component } from 'react';

import Homer from './components/Homer.jsx';
import HomerDOh from './components/HomerDOh.jsx';
import HomerWoohoo from './components/HomerWoohoo.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Homer />
        <HomerDOh />
        <HomerWoohoo />
      </div>
    );
  }
}

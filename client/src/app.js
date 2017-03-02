import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {

      }
    }

  render() {
    return (
        <div>
        This is REACT!
        </div>
      )
  }
}

ReactDom.render(<App />, document.getElementById('react-app'));

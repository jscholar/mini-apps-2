import React, { Component } from 'react';
import Events from './components/Events';

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  render() {
    const { events } = this.state;
    return (
      <div>
        Events in Human History
        <Events events={events} />
      </div>
    );
  }
}

export default App;

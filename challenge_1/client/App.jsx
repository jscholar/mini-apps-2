import React, { Component } from 'react';

import Events from './components/Events';
import EventsSearch from './components/EventsSearch';


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
        <EventsSearch />
      </div>
    );
  }
}

export default App;

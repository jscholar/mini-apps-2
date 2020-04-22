import React, { Component } from 'react';

import Events from './components/Events';
import EventsSearch from './components/EventsSearch';

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
    this.searchResultHandler = this.searchResultHandler.bind(this);
  }

  searchResultHandler(events) {
    this.setState({ events });
  }

  render() {
    const { events } = this.state;
    return (
      <div>
        Events in Human History
        <EventsSearch handleSearchResult={this.searchResultHandler} />
        <Events events={events} />
      </div>
    );
  }
}

export default App;

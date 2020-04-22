import React, { Component } from 'react';

import Events from './components/Events';
import EventsSearch from './components/EventsSearch';

import { searchEvents } from './api/events';

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query, page) {
    searchEvents(query, page)
      .then((events) => this.setState({ events }));
  }

  render() {
    const { events } = this.state;
    return (
      <div>
        Events in Human History
        <Events events={events} />
        <EventsSearch searchHandler={this.handleSearch} />
      </div>
    );
  }
}

export default App;

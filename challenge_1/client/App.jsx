import React, { Component } from 'react';

import Events from './components/Events';
import EventsSearch from './components/EventsSearch';

import { searchEvents } from './api/events';

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      query: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleQueryChange(query) {
    this.setState({ query });
  }

  handleSearch(page) {
    const { query } = this.state;
    searchEvents(query, page)
      .then((events) => this.setState({ events }));
  }

  render() {
    const { events } = this.state;
    return (
      <div>
        Events in Human History
        <EventsSearch
          searchHandler={this.handleSearch}
          queryChangeHandler={this.handleQueryChange}
        />

        <Events events={events} />
      </div>
    );
  }
}

export default App;

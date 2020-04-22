import React, { Component } from 'react';

import ReactPaginate from 'react-paginate';
import Events from './components/Events';
import EventsSearch from './components/EventsSearch';

import { searchEvents } from './api/events';

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      pageCount: 0,
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
      .then(({ events, pageCount }) => this.setState({ events, pageCount }));
  }

  render() {
    const { events, pageCount } = this.state;
    return (
      <div>
        Events in Human History
        <EventsSearch
          searchHandler={this.handleSearch}
          queryChangeHandler={this.handleQueryChange}
        />
        <ReactPaginate
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={({ selected }) => {
            // ReactPaginate is 0 indexed
            this.handleSearch(selected + 1);
          }}
        />
        <Events events={events} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { searchEvents } from '../api/events';

class SearchEvents extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ target }) {
    const { handleSearchResult } = this.props;
    searchEvents(target.value)
      .then(handleSearchResult);
  }

  render() {
    return (
      <div>

        <input
          type="text"
          name="query"
          placeholder="Search for Events"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              this.handleSubmit(e);
            }
          }}
        />

        <button
          type="submit"
          onClick={this.handleSubmit}
        >
          Search
        </button>

      </div>

    );
  }
}

SearchEvents.propTypes = {
  handleSearchResult: PropTypes.func,
};

SearchEvents.defaultProps = {
  handleSearchResult: () => {},
};

export default SearchEvents;

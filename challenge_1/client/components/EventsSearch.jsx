import React from 'react';
import PropTypes from 'prop-types';

const EventsSearch = ({ searchHandler, queryChangeHandler }) => (
  <div>
    <input
      type="text"
      name="query"
      placeholder="Search for Events"
      onChange={({ target }) => queryChangeHandler(target.value)}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          searchHandler();
        }
      }}
    />
    <button
      type="submit"
      onClick={searchHandler}
    >
      Search
    </button>
  </div>
);

EventsSearch.propTypes = {
  searchHandler: PropTypes.func,
  queryChangeHandler: PropTypes.func,
};

EventsSearch.defaultProps = {
  searchHandler: () => {},
  queryChangeHandler: () => {},
};

export default EventsSearch;

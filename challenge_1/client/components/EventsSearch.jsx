import React from 'react';
import PropTypes from 'prop-types';

const SearchEvents = ({ searchHandler, queryChangeHandler }) => (
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

SearchEvents.propTypes = {
  searchHandler: PropTypes.func,
  queryChangeHandler: PropTypes.func,
};

SearchEvents.defaultProps = {
  searchHandler: () => {},
  queryChangeHandler: () => {},
};

export default SearchEvents;

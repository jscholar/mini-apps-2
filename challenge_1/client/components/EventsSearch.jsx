import React from 'react';
import PropTypes from 'prop-types';

const SearchEvents = ({ searchHandler }) => (
  <div>
    <input
      type="text"
      name="query"
      placeholder="Search for Events"
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.stopPropagation();
          const { value } = e.target;
          searchHandler(value);
        }
      }}
    />
    <button
      type="submit"
      onClick={(e) => {
        const { value } = e.target;
        searchHandler(value);
      }}
    >
      Search
    </button>
  </div>
);

SearchEvents.propTypes = {
  searchHandler: PropTypes.func,
};

SearchEvents.defaultProps = {
  searchHandler: () => {},
};

export default SearchEvents;

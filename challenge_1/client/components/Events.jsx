import React from 'react';
import PropTypes from 'prop-types';

const Events = ({ events }) => (
  <div>
    {
      events.map((event, i) => `Event ${i}`)
    }
  </div>
);

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Events;

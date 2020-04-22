import React from 'react';
import PropTypes from 'prop-types';

const Event = ({
  date,
  description,
}) => (
  <div>
    <div>
      {date}
      {description}
    </div>
  </div>
);

Event.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Event;

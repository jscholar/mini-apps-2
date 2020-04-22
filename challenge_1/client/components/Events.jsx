import React from 'react';
import PropTypes from 'prop-types';

import Event from './Event';

const Events = ({ events }) => (
  <div>
    {
      events.map(({
        date,
        description,
        lang,
        category1,
        category2,
        granularity,
      }) => (
        <Event
          date={date}
          description={description}
          lang={lang}
          category1={category1}
          category2={category2}
          granularity={granularity}
        />
      ))
    }
  </div>
);

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Events;

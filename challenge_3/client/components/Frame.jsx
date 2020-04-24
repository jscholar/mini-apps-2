import React from 'react';
import PropTypes from 'prop-types';

const Frame = ({ totalScore, pins1, pins2 }) => (
  <div>
    <span>
      {pins1 === -1 ? '' : pins1}
    </span>
    <span>
      {pins2 === -1 ? '' : pins2}
    </span>

    <div>
      {totalScore === -1 ? '' : totalScore}
    </div>
  </div>
);

Frame.propTypes = {
  totalScore: PropTypes.number,
  pins1: PropTypes.number,
  pins2: PropTypes.number,
};

Frame.defaultProps = {
  totalScore: -1,
  pins1: -1,
  pins2: -1,
};

export default Frame;

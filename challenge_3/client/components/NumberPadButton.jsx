import React from 'react';
import PropTypes from 'prop-types';

const NumberPadButton = ({ number, clickHandler }) => (
  <button
    value={number}
    type="button"
    onClick={() => clickHandler(number)}
  >
    {number}
  </button>
);

NumberPadButton.propTypes = {
  number: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default NumberPadButton;

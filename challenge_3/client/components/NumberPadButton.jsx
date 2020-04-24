import React from 'react';
import PropTypes from 'prop-types';

const NumberPadButton = ({ number, clickHandler, disabled }) => (
  <button
    value={number}
    type="button"
    onClick={() => clickHandler(number)}
    disabled={disabled}
  >
    {number}
  </button>
);

NumberPadButton.propTypes = {
  number: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

NumberPadButton.defaultProps = {
  disabled: false,
};

export default NumberPadButton;

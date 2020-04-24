import React from 'react';
import PropTypes from 'prop-types';

import NumberPadButton from './NumberPadButton';

const NumberPad = ({ selectNumber, max }) => (
  <table>
    <tbody>
      <tr>
        <td><NumberPadButton number={0} clickHandler={selectNumber} /></td>
        <td><NumberPadButton number={1} clickHandler={selectNumber} disabled={max < 1} /></td>
        <td><NumberPadButton number={2} clickHandler={selectNumber} disabled={max < 2} /></td>
      </tr>
      <tr>
        <td><NumberPadButton number={3} clickHandler={selectNumber} disabled={max < 3} /></td>
        <td><NumberPadButton number={4} clickHandler={selectNumber} disabled={max < 4} /></td>
        <td><NumberPadButton number={5} clickHandler={selectNumber} disabled={max < 5} /></td>
      </tr>
      <tr>
        <td><NumberPadButton number={6} clickHandler={selectNumber} disabled={max < 6} /></td>
        <td><NumberPadButton number={7} clickHandler={selectNumber} disabled={max < 7} /></td>
        <td><NumberPadButton number={8} clickHandler={selectNumber} disabled={max < 8} /></td>
      </tr>
      <tr>
        <td><NumberPadButton number={9} clickHandler={selectNumber} disabled={max < 9} /></td>
        <td colSpan="2"><NumberPadButton number={10} clickHandler={selectNumber} disabled={max < 10} /></td>
      </tr>
    </tbody>
  </table>
);

NumberPad.propTypes = {
  selectNumber: PropTypes.func,
  max: PropTypes.number,
};

NumberPad.defaultProps = {
  selectNumber: () => {},
  max: 10,
};

export default NumberPad;

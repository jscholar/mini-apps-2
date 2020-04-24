import React from 'react';
import PropTypes from 'prop-types';

import NumberPadButton from './NumberPadButton';

const NumberPad = ({ selectNumber }) => (
  <table>
    <tbody>
      <tr>
        <td><NumberPadButton number={1} clickHandler={selectNumber} /></td>
        <td><NumberPadButton number={2} clickHandler={selectNumber} /></td>
        <td><NumberPadButton number={3} clickHandler={selectNumber} /></td>
      </tr>
      <tr>
        <td><NumberPadButton number={4} clickHandler={selectNumber} /></td>
        <td><NumberPadButton number={5} clickHandler={selectNumber} /></td>
        <td><NumberPadButton number={6} clickHandler={selectNumber} /></td>
      </tr>
      <tr>
        <td><NumberPadButton number={7} clickHandler={selectNumber} /></td>
        <td><NumberPadButton number={8} clickHandler={selectNumber} /></td>
        <td><NumberPadButton number={9} clickHandler={selectNumber} /></td>
      </tr>
      <tr>
        <td><NumberPadButton number={0} clickHandler={selectNumber} /></td>
        <td colSpan="2"><NumberPadButton number={10} clickHandler={selectNumber} /></td>
      </tr>
    </tbody>
  </table>
);

NumberPad.propTypes = {
  selectNumber: PropTypes.func,
};

NumberPad.defaultProps = {
  selectNumber: () => {},
};

export default NumberPad;

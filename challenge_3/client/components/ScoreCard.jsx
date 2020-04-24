/* eslint-disable react/no-array-index-key */
/* There's no better key to use here       */
import React, { useState } from 'react';

const ScoreCard = () => {
  const [scores] = useState(new Array(10).fill(0));

  return (
    <div>
      <table>

        <thead>
          <tr>
            {scores.map((_, round) => (
              <th key={round}>{round}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            {scores.map((score, round) => (
              <th key={round}>{score}</th>
            ))}
          </tr>
        </tbody>

      </table>
    </div>
  );
};

export default ScoreCard;

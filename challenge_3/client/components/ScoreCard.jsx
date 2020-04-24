/* eslint-disable react/no-array-index-key */
/* There's no better key to use here       */
import React, { useState } from 'react';
import Frame from './Frame';

const ScoreCard = () => {
  const initialScores = [];
  for (let i = 0; i < 10; i += 1) {
    initialScores.push([]);
  }
  const [scores] = useState(initialScores);

  return (
    <div>
      <table>

        <tbody>
          <tr>
            {scores.map(([pins1, pins2, totalScore], frame) => (
              <td key={frame}>
                <Frame
                  totalScore={totalScore}
                  pins1={pins1}
                  pins2={pins2}
                />
              </td>
            ))}
          </tr>
        </tbody>

      </table>
    </div>
  );
};

export default ScoreCard;

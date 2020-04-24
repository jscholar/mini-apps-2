/* eslint-disable react/no-array-index-key */
/* There's no better key to use here       */
import React, { useState } from 'react';
import Frame from './Frame';
import NumberPad from './NumberPad';

const ScoreCard = () => {
  /* Array of 10 arrays, one for each frame */
  const initialScores = [];
  for (let i = 0; i < 10; i += 1) {
    initialScores.push([null, null, 0]);
  }

  // scores: [pins1, pins2, score]
  const [scores, setScores] = useState(initialScores);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [currentPin, setCurrentPin] = useState(0);

  const scoreNext = (pins) => {
    // Janky clone of scores. Depends on array of arrays structure.
    // But it's lightweight.
    const newScores = scores.map((frameScore) => [...frameScore]);

    newScores[currentFrame][currentPin] = pins;
    newScores[currentFrame][2] += pins;
    if (currentPin === 1) {
      newScores[currentFrame + 1][2] = newScores[currentFrame][2];
      setCurrentPin(0);
      setCurrentFrame(currentFrame + 1);
    } else {
      setCurrentPin(1);
    }

    setScores(newScores);
  };

  return (
    <div>
      <table>

        <tbody>
          <tr>
            {scores.map(([pins1, pins2, score], frame) => {
              if (frame > currentFrame) {
                return <td key={frame} />;
              }
              return (
                <td key={frame}>
                  <Frame
                    totalScore={score}
                    pins1={pins1}
                    pins2={pins2}
                  />
                </td>
              );
            })}
          </tr>
        </tbody>

      </table>

      <NumberPad max={10 - scores[currentFrame][0]} selectNumber={scoreNext} />
    </div>
  );
};

export default ScoreCard;

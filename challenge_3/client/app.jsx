import ReactDOM from 'react-dom';
import React from 'react';

import ScoreCard from './components/ScoreCard';

const App = () => (
  <div>
    <ScoreCard />
  </div>
);

const app = <App />;
const containerElement = document.getElementById('app');

ReactDOM.render(app, containerElement);

import ReactDOM from 'react-dom';
import React from 'react';

const App = () => (
  <div>
    Bowling App
  </div>
);

const app = <App />;
const containerElement = document.getElementById('app');

ReactDOM.render(app, containerElement);

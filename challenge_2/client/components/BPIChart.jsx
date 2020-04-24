import React, { useEffect } from 'react';
import Chart from 'chart.js';

import fetchBPIHistory from '../api/fetchBPIHistory';

const BPIChart = () => {
  const chartRef = React.createRef();
  const chart = (
    <canvas id="bpi-chart" className="chart" ref={chartRef} />
  );

  useEffect(() => {
    fetchBPIHistory()
      .then(({ bpi }) => {
        const ctx = chartRef.current;
        const bpiTuples = Object.entries(bpi);
        const bpiChart = new Chart(ctx, {
          type: 'line',
          label: 'BPI history',
          data: {
            labels: bpiTuples.map(([label]) => label),
            datasets: [{
              label: 'BPI history',
              fill: false,
              lineTension: 0,
              backgroundColor: 'rgba(255, 220, 0, 0.3)',
              borderColor: 'rgba(255, 200, 0, 1.0)',
              data: bpiTuples.map(([, value]) => value),
            }],
          },
        });
        bpiChart.render();
      });
  });

  return (
    <div>
      {chart}
    </div>
  );
};

export default BPIChart;

const axios = require('axios');

const getBPIHistory = () => (
  axios({
    url: 'https://api.coindesk.com/v1/bpi/historical/close.json',
  })
    .then(({ data }) => data)
);

module.exports = {
  getBPIHistory,
};

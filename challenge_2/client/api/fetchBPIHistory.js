import axios from 'axios';

const fetchBPIHistory = () => (
  axios({
    url: '/priceHistory',
  })
    .then(({ data }) => data)
);

export default fetchBPIHistory;

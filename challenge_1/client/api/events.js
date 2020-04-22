import axios from 'axios';

const searchEvents = (query) => (
  axios({
    url: '/events',
    params: {
      q: query,
    },
  })
);

export default {
  searchEvents,
};

import axios from 'axios';

export const searchEvents = (query, page = 1) => (
  axios({
    url: '/events',
    params: {
      q: query,
      _page: page,
      _limit: 10,
    },
  })
    .then(({ data }) => data)
    .catch((reason) => {
      throw new Error('Request failed: ', reason);
    })
);

export default {
  searchEvents,
};

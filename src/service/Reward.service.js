import axios from 'axios';

export const RewardService = (sessionData) => {
  const authHeader = { Authorization: 'Bearer ' + sessionData?.access };

  return {
    get: async (term) => {
      return axios.get('http://127.0.0.1:8000/api/rewards/', {
        headers: authHeader,
        params: term ? { search: term } : {}
      });
    },

    create: async (title, description, duration, cost) => {
      return axios.post(
        'http://127.0.0.1:8000/api/rewards/',
        {
          title,
          description,
          duration,
          cost,
          user_id: sessionData?.id
        },
        { headers: authHeader }
      );
    },

    buy: async (id) => {
      return axios.patch(
        `http://127.0.0.1:8000/api/rewards/${id}/buy/`,
        {},
        { headers: authHeader }
      );
    }
  };
};

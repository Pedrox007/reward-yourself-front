import axios from 'axios';

export const RewardService = (userInfo) => {
  const authHeader = { Authorization: 'Bearer ' + userInfo.access };

  return {
    get: async () => {
      return axios.get('http://127.0.0.1:8000/api/rewards/', { headers: authHeader });
    },

    create: async (title, description, duration, cost) => {
      return axios.post(
        'http://127.0.0.1:8000/api/rewards/',
        {
          title,
          description,
          duration,
          cost,
          user_id: userInfo.id
        },
        { headers: authHeader }
      );
    }
  };
};

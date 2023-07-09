import axios from 'axios';

import { DefaultUrl } from './Api';

export const RewardService = (sessionData) => {
  const authHeader = { Authorization: 'Bearer ' + sessionData?.access };

  return {
    get: async (term) => {
      return axios.get(`${DefaultUrl}/api/rewards/`, {
        headers: authHeader,
        params: term ? { search: term } : {}
      });
    },

    create: async (title, description, duration, cost) => {
      return axios.post(
        `${DefaultUrl}/api/rewards/`,
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

    edit: async (id, payload) => {
      return axios.patch(`${DefaultUrl}/api/rewards/${id}/`, payload, { headers: authHeader });
    },

    del: async (id) => {
      return axios.delete(`${DefaultUrl}/api/rewards/${id}/`, { headers: authHeader });
    },

    buy: async (id) => {
      return axios.patch(`${DefaultUrl}/api/rewards/${id}/buy/`, {}, { headers: authHeader });
    }
  };
};

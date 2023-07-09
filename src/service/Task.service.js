import axios from 'axios';

import { DefaultUrl } from './Api';

export const TaskService = (sessionData) => {
  const authHeader = { Authorization: 'Bearer ' + sessionData?.access };

  return {
    get: async (term) => {
      return axios.get(`${DefaultUrl}/api/tasks/`, {
        headers: authHeader,
        params: term ? { search: term } : {}
      });
    },

    create: async (
      title,
      description,
      expected_duration,
      final_duration,
      coin_reward,
      fixed,
      finished
    ) => {
      return axios.post(
        `${DefaultUrl}/api/tasks/`,
        {
          title,
          description,
          expected_duration,
          final_duration,
          coin_reward,
          fixed,
          finished,
          user_id: sessionData?.id
        },
        { headers: authHeader }
      );
    },

    finish: async (id) => {
      return axios.patch(`${DefaultUrl}/api/tasks/${id}/finish/`, {}, { headers: authHeader });
    }
  };
};

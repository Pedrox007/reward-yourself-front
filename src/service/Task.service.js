import axios from 'axios';

export const TaskService = (sessionData) => {
  const authHeader = { Authorization: 'Bearer ' + sessionData?.access };

  return {
    get: async (term) => {
      return axios.get('http://127.0.0.1:8000/api/tasks/', {
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
        'http://127.0.0.1:8000/api/tasks/',
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
      return axios.patch(
        `http://127.0.0.1:8000/api/tasks/${id}/finish/`,
        {},
        { headers: authHeader }
      );
    }
  };
};

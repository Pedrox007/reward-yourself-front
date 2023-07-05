import axios from 'axios';

export const TaskService = (userInfo) => {
  const authHeader = { Authorization: 'Bearer ' + userInfo.access };

  return {
    get: async () => {
      return axios.get('http://127.0.0.1:8000/api/tasks/', { headers: authHeader });
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
          user_id: userInfo.id
        },
        { headers: authHeader }
      );
    }
  };
};

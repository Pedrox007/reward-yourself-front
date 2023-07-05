import axios from 'axios';

export const AuthService = (sessionData) => {
  const authHeader = { Authorization: 'Bearer ' + sessionData?.access };

  return {
    login: async (login, password) => {
      return axios.post('http://127.0.0.1:8000/api/token/', { login, password });
    },

    signin: async (username, first_name, last_name, email, password, password_confirmation) => {
      return axios.post('http://127.0.0.1:8000/api/users/register/', {
        username,
        first_name,
        last_name,
        email,
        password,
        password_confirmation
      });
    },

    refresh: async (refresh_token) => {
      return axios.post('http://127.0.0.1:8000/api/token/refresh/', {
        refresh_token,
        refresh: refresh_token
      });
    },

    info: async (id) => {
      return axios.get(`http://127.0.0.1:8000/api/users/${id}/`, { headers: authHeader });
    }
  };
};

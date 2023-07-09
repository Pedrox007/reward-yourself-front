import axios from 'axios';

import { DefaultUrl } from './Api';

export const AuthService = (sessionData) => {
  const authHeader = { Authorization: 'Bearer ' + sessionData?.access };

  return {
    login: async (login, password) => {
      return axios.post(`${DefaultUrl}/api/token/`, { login, password });
    },

    signin: async (username, first_name, last_name, email, password, password_confirmation) => {
      return axios.post(`${DefaultUrl}/api/users/register/`, {
        username,
        first_name,
        last_name,
        email,
        password,
        password_confirmation
      });
    },

    refresh: async (refresh_token) => {
      return axios.post(`${DefaultUrl}/api/token/refresh/`, {
        refresh_token,
        refresh: refresh_token
      });
    },

    info: async (id) => {
      return axios.get(`${DefaultUrl}/api/users/${id}/`, { headers: authHeader });
    }
  };
};

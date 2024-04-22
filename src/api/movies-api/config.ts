import axios from 'axios';

const api = axios.create({
  baseURL: process.env['REACT_APP_MOVIES_API_URL'],
  headers: {
    Authorization: process.env['REACT_APP_MOVIES_API_KEY'],
    Accept: process.env['REACT_APP_MOVIES_API_ACCEPT'],
  }
});

export default api;
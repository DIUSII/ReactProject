import axios from 'axios';
import {baseURL, xToken} from 'env/env.json';

const ax = () => {
  const ax = axios.create({
    baseURL,
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json',
      'X-Token': xToken,
    },
  });

  return ax;
};

export default ax;

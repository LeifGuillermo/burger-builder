import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-1f494.firebaseio.com/'
});

export default instance;

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-a0601/us-central1/api' // The API url
});

export default instance;
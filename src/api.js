import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9000/api', // This points to your backend server
});

export default api;

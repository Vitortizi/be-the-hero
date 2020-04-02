import axios from 'axios';

const api = axios.create({
    baseURL: '{{you base url}}',
});

export default api;
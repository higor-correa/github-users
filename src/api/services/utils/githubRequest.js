const axios = require('axios');

axios.defaults.baseURL = 'https://api.github.com/';
axios.defaults.headers.common['Authorization'] = process.env.TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});


module.exports = axios;
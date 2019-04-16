import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-8d995.firebaseio.com/'
});

export default instance;
import axios from 'axios';
const BASE_URL = 'http://localhost:3500';

export default axios.create({
    baseURL: BASE_URL
});

// axios to handle protected route with access token 
export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});
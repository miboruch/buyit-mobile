import io from 'socket.io-client';

export const API_URL = 'https://buyit-backend.herokuapp.com';
export const socket = io(API_URL);
export const categories = ['electronics', 'fashion', 'others', 'all'];

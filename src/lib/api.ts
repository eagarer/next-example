import axios, { AxiosInstance } from "axios";

export const apiA: AxiosInstance = axios.create({
  baseURL: 'https://json.canberkakar.com/api/public/api/comment',
  timeout: 1000,
  headers: { "Content-Type": "application/json" }
});

export const apiB: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
  headers: { "Content-Type": "application/json" }
});

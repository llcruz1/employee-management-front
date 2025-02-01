import axios, { AxiosInstance } from 'axios';

export default class BaseService {
  protected apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

import axios from 'axios';
export default class BaseService {
    apiClient;
    constructor() {
        this.apiClient = axios.create({
            baseURL: import.meta.env.VITE_API_BASE_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
//# sourceMappingURL=baseService.js.map
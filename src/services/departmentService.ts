import { Department } from '@/types/department';
import BaseService from './baseService';

class DepartmentService extends BaseService {
  async getAllDepartments(): Promise<Department[]> {
    const response = await this.apiClient.get('/departments');
    return response.data?.result;
  }
}

export default new DepartmentService();

import BaseService from './baseService';
import type { Employee } from '@/types/employee';

class EmployeeService extends BaseService {
  async getAllEmployees(): Promise<Employee[]> {
    const response = await this.apiClient.get('/employees');
    return response.data?.result;
  }

  async getEmployeeById(id: number): Promise<Employee> {
    const response = await this.apiClient.get(`/employees/${id}`);
    return response.data?.result;
  }

  async createEmployee(employee: Employee): Promise<Employee> {
    const response = await this.apiClient.post('/employees', employee);
    return response.data?.result;
  }

  async updateEmployee(id: number, updatedEmployee: Employee): Promise<Employee> {
    const response = await this.apiClient.put(`/employees/${id}`, updatedEmployee);
    return response.data?.result;
  }

  async deleteEmployee(id: number): Promise<void> {
    await this.apiClient.delete(`/employees/${id}`);
  }
}

export default new EmployeeService();

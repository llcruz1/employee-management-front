import BaseService from './baseService';
class EmployeeService extends BaseService {
    async getAllEmployees() {
        const response = await this.apiClient.get('/employees');
        return response.data?.result;
    }
    async getEmployeeById(id) {
        const response = await this.apiClient.get(`/employees/${id}`);
        return response.data?.result;
    }
    async createEmployee(employee) {
        const response = await this.apiClient.post('/employees', employee);
        return response.data?.result;
    }
    async updateEmployee(id, updatedEmployee) {
        const response = await this.apiClient.put(`/employees/${id}`, updatedEmployee);
        return response.data?.result;
    }
    async deleteEmployee(id) {
        await this.apiClient.delete(`/employees/${id}`);
    }
}
export default new EmployeeService();
//# sourceMappingURL=employeeService.js.map
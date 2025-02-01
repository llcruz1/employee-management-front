import BaseService from './baseService';
class DepartmentService extends BaseService {
    async getAllDepartments() {
        const response = await this.apiClient.get('/departments');
        return response.data?.result;
    }
}
export default new DepartmentService();
//# sourceMappingURL=departmentService.js.map
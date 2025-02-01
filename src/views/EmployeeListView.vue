<template>
  <Loading v-if="loading" />

  <div v-else class="container mt-4">
    
    <!-- New Employee Button -->
    <div class="text-end mb-3">
      <button class="btn btn-success" @click="showCreateModal = true">
        <i class="bi bi-plus"></i> New Employee
      </button>
    </div>

    <!-- Empty List Message -->
    <div v-if="employees.length === 0" class="d-flex justify-content-center align-items-center" style="height: 50vh;">
      <h4 class="text-muted">No employees found.</h4>
    </div>

    <!-- Employee Card List -->
    <div class="row">
      <div class="col-12 mb-3" v-for="employee in employees" :key="employee.id">
        <div class="card shadow-sm">
          <div class="row g-0 align-items-center p-3">
            <!-- Avatar Placeholder -->
            <div class="col-md-2 d-flex justify-content-center">
              <div
                class="rounded bg-info"
                style="width: 100px; height: 100px; background-color: #e0f7fa;"
              ></div>
            </div>

            <!-- Employee Details -->
            <div class="col-md-7">
              <h5 class="fw-bold mb-1">
                {{ employee.firstName }} {{ employee.lastName }}
                <span class="text-muted fs-6">({{ employee.department }})</span>
              </h5>
              <p class="mb-1">Hire Date</p>
              <p class="text-muted">
                {{ formatDate(employee.hireDate) }} ({{ calculateDuration(employee.hireDate) }})
              </p>
            </div>

            <!-- Actions -->
            <div class="col-md-3 text-end">
              <button class="btn btn-success btn-sm me-2" @click="goToDetails(employee.id)">
                <i class="bi bi-eye"></i> View Details
              </button>
              <button class="btn  btn-sm" @click="openDeleteModal(employee)">
                <i class="bi bi-trash"></i> ❌
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- New Employee Modal -->
    <div v-if="showCreateModal" class="modal fade show d-block" tabindex="-1" aria-modal="true" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Employee</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createEmployee">
              <div class="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input
                  id="firstName"
                  v-model="newEmployee.firstName"
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input
                  id="lastName"
                  v-model="newEmployee.lastName"
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="hireDate" class="form-label">Hire Date</label>
                <input
                  id="hireDate"
                  v-model="newEmployee.hireDate"
                  type="date"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="department" class="form-label">Department</label>
                <select v-model="newEmployee.department" class="form-select" required>
                  <option value="" disabled>Select Department</option>
                  <option v-for="dept in departments" :key="dept.key" :value="dept.name">
                    {{ dept.name }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input
                  id="phone"
                  v-model="newEmployee.phone"
                  type="text"
                  class="form-control"
                  placeholder="Phone"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input
                  id="address"
                  v-model="newEmployee.address"
                  type="text"
                  class="form-control"
                  placeholder="Address"
                  required
                />
              </div>
              <div class="text-end">
                <button type="button" class="btn btn-secondary me-2" @click="closeModal">
                  Cancel
                </button>
                <button type="submit" class="btn btn-success">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Confirm Delete Modal -->
    <div
      v-if="showDeleteModal"
      class="modal fade show d-block"
      tabindex="-1"
      aria-modal="true"
      role="dialog"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Delete Employee</h5>
            <button type="button" class="btn-close" @click="closeDeleteModal"></button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete employee '{{selectedEmployee?.firstName}}'? This action is permanent.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeDeleteModal">
              Cancel
            </button>
            <button type="button" class="btn btn-danger" @click="deleteEmployee">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Backdrop -->
    <div v-if="showCreateModal" class="modal-backdrop fade show"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import employeeService from '../services/employeeService';
import departmentService from '../services/departmentService';
import type { Employee } from '../types/employee';
import type { Department } from '../types/department';
import Loading from '../components/Loading.vue';
import iziToast from 'izitoast';

export default defineComponent({
  components: { Loading },
  data() {
    return {
      employees: [] as Employee[],
      showCreateModal: false,
      showDeleteModal: false,
      newEmployee: {
        firstName: '',
        lastName: '',
        hireDate: '',
        department: '',
        phone: '',
        address: '',
      } as Employee,
      departments: [] as Department[],
      loading: true,
      selectedEmployee: null as Employee | null
    };
  },
  async created() {
    this.loading = true;
    await Promise.all([
      this.fetchEmployees(),
      this.fetchDepartments()
    ]);
    this.loading = false;
  },
  methods: {
    async fetchEmployees() {
      this.employees = await employeeService.getAllEmployees();
    },

    async fetchDepartments() {
      this.departments = await departmentService.getAllDepartments();
    },

    openDeleteModal(employee: Employee) {
      this.selectedEmployee = employee;
      this.showDeleteModal = true;
    },

    closeDeleteModal() {
      this.selectedEmployee = null;
      this.showDeleteModal = false;
    },

    async deleteEmployee() {
      if (this.selectedEmployee !== null) {
        await employeeService.deleteEmployee(this.selectedEmployee.id);
        this.fetchEmployees();
        this.closeDeleteModal();

      iziToast.success({
        title: 'Success',
        message: 'Employee deleted successfully!',
        position: 'bottomCenter',
      });
      }
    },

    async createEmployee() {
      await employeeService.createEmployee(this.newEmployee);
      this.closeModal();
      this.fetchEmployees();
      this.fetchDepartments();

      iziToast.success({
        title: 'Success',
        message: 'Employee created successfully!',
        position: 'bottomCenter',
      });
    },

    goToDetails(id: number) {
      this.$router.push({ name: 'EmployeeDetails', params: { id } });
    },

    closeModal() {
      this.showCreateModal = false;
      this.newEmployee = {
        firstName: '',
        lastName: '',
        hireDate: '',
        department: '',
        phone: '',
        address: '',
      } as Employee;
    },

    formatDate(date: string) {
      return new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
    },

    calculateDuration(hireDate: string) {
      const start = new Date(hireDate);
      const now = new Date();
      const years = now.getFullYear() - start.getFullYear();
      const months = now.getMonth() - start.getMonth();
      const days = now.getDate() - start.getDate();
      return `${years}y ${months}m ${days}d`;
    },
  },
});
</script>

<style scoped>
.card {
  border-radius: 12px;
}
.avatar {
  background-color: #e0f7fa;
  width: 100px;
  height: 100px;
}
</style>

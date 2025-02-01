<template>
  <div class="container mt-4">
    <!-- Go Back Button -->
    <div class="mb-3">
      <button class="btn btn-secondary" @click="goBack">
        <i class="bi bi-arrow-left"></i> Go Back
      </button>
    </div>

    <Loading v-if="loading" />

    <!-- Employee Details Card -->
    <div v-else class="card shadow-sm p-4">
      <div class="row g-0">
        <!-- Avatar Placeholder -->
        <div class="col-md-3 d-flex justify-content-center align-items-center">
          <div
            class="rounded bg-info"
            style="width: 120px; height: 120px; background-color: #e0f7fa;"
          ></div>
        </div>

        <!-- Employee Details -->
        <div class="col-md-9">
          <h3 class="fw-bold mb-3">{{ employee.firstName }} {{ employee.lastName }}</h3>
          <p><strong>Department:</strong> {{ employee.department }}</p>
          <p><strong>Telephone:</strong> {{ employee.phone }}</p>
          <p><strong>Address:</strong> {{ employee.address }}</p>
          <p><strong>Hire Date:</strong> {{ formatDate(employee.hireDate) }}</p>

          <!-- Update Department Section -->
          <div class="mt-4">
            <label for="departmentSelect" class="form-label fw-bold">Update Department</label>
            <div class="d-flex">
              <select
                id="departmentSelect"
                v-model="selectedDepartment"
                class="form-select me-2"
              >
                <option v-for="dept in departments" :key="dept.key" :value="dept">
                  {{ dept.name }}
                </option>
              </select>
              <button class="btn btn-success" @click="updateDepartment">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      employee: {} as Employee,
      departments: [] as Department[],
      selectedDepartment: {key: 0, name: ''} as Department,
      loading: true
    };
  },
  async created() {
    this.loading = true;
    await Promise.all([
        this.fetchEmployee(),
        this.fetchDepartments(),
    ]);
    this.loading = false;
  },
  methods: {
    async fetchEmployee() {
      this.loading = true;
      const data = await employeeService.getEmployeeById(Number(this.id));
      this.employee = data;
      this.selectedDepartment = this.departments.find(d => d.name === data.department) as Department;
      this.loading = false;
    },

    async fetchDepartments() {
      this.departments = await departmentService.getAllDepartments();
    },

    async updateDepartment() {
      await employeeService.updateEmployee(Number(this.id), {
        ...this.employee,
        department: this.selectedDepartment.name,
      });

      this.fetchEmployee();
      
      iziToast.success({
        title: 'Success',
        message: 'Employee department updated successfully!',
        position: 'bottomCenter',
      });
    },

    goBack() {
      this.$router.push({ name: 'EmployeeList' });
    },

    formatDate(date: string) {
      return new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
    },
  },
});
</script>

<style scoped>
.card {
  border-radius: 12px;
}

.bg-info {
  background-color: #e0f7fa;
}
</style>

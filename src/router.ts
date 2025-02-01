import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import EmployeeListView from './views/EmployeeListView.vue';
import EmployeeDetailsView from './views/EmployeeDetailsView.vue';

const routes: Array<RouteRecordRaw> = [
  { 
    path: '/', 
    name: 'EmployeeList', 
    component: EmployeeListView 
  },
  {
    path: '/employee/:id',
    name: 'EmployeeDetails',
    component: EmployeeDetailsView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

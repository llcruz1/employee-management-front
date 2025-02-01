import { defineComponent } from 'vue';
import employeeService from '../services/employeeService';
import departmentService from '../services/departmentService';
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
            employee: {},
            departments: [],
            selectedDepartment: { key: 0, name: '' },
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
            this.selectedDepartment = this.departments.find(d => d.name === data.department);
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
        formatDate(date) {
            return new Date(date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            });
        },
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{ Loading },
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container mt-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.goBack) }, ...{ class: ("btn btn-secondary") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-arrow-left") }, });
    if (__VLS_ctx.loading) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Loading;
        /** @type { [typeof __VLS_components.Loading, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
        const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card shadow-sm p-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row g-0") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-md-3 d-flex justify-content-center align-items-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("rounded bg-info") }, ...{ style: ({}) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-md-9") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("fw-bold mb-3") }, });
        (__VLS_ctx.employee.firstName);
        (__VLS_ctx.employee.lastName);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.employee.department);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.employee.phone);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.employee.address);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.formatDate(__VLS_ctx.employee.hireDate));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("departmentSelect"), ...{ class: ("form-label fw-bold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ id: ("departmentSelect"), value: ((__VLS_ctx.selectedDepartment)), ...{ class: ("form-select me-2") }, });
        for (const [dept] of __VLS_getVForSourceType((__VLS_ctx.departments))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((dept.key)), value: ((dept)), });
            (dept.name);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.updateDepartment) }, ...{ class: ("btn btn-success") }, });
    }
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-secondary'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-arrow-left'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['row'];
    __VLS_styleScopedClasses['g-0'];
    __VLS_styleScopedClasses['col-md-3'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-content-center'];
    __VLS_styleScopedClasses['align-items-center'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['bg-info'];
    __VLS_styleScopedClasses['col-md-9'];
    __VLS_styleScopedClasses['fw-bold'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['form-label'];
    __VLS_styleScopedClasses['fw-bold'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['form-select'];
    __VLS_styleScopedClasses['me-2'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-success'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
//# sourceMappingURL=EmployeeDetailsView.vue.js.map
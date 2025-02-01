import { defineComponent } from 'vue';
import employeeService from '../services/employeeService';
import departmentService from '../services/departmentService';
import Loading from '../components/Loading.vue';
import iziToast from 'izitoast';
export default defineComponent({
    components: { Loading },
    data() {
        return {
            employees: [],
            showCreateModal: false,
            showDeleteModal: false,
            newEmployee: {
                firstName: '',
                lastName: '',
                hireDate: '',
                department: '',
                phone: '',
                address: '',
            },
            departments: [],
            loading: true,
            selectedEmployee: null
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
        openDeleteModal(employee) {
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
        goToDetails(id) {
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
            };
        },
        formatDate(date) {
            return new Date(date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            });
        },
        calculateDuration(hireDate) {
            const start = new Date(hireDate);
            const now = new Date();
            const years = now.getFullYear() - start.getFullYear();
            const months = now.getMonth() - start.getMonth();
            const days = now.getDate() - start.getDate();
            return `${years}y ${months}m ${days}d`;
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
    if (__VLS_ctx.loading) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Loading;
        /** @type { [typeof __VLS_components.Loading, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
        const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container mt-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-end mb-3") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!(!((__VLS_ctx.loading))))
                        return;
                    __VLS_ctx.showCreateModal = true;
                } }, ...{ class: ("btn btn-success") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-plus") }, });
        if (__VLS_ctx.employees.length === 0) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-content-center align-items-center") }, ...{ style: ({}) }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("text-muted") }, });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
        for (const [employee] of __VLS_getVForSourceType((__VLS_ctx.employees))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12 mb-3") }, key: ((employee.id)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card shadow-sm") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row g-0 align-items-center p-3") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-md-2 d-flex justify-content-center") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("rounded bg-info") }, ...{ style: ({}) }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-md-7") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("fw-bold mb-1") }, });
            (employee.firstName);
            (employee.lastName);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-muted fs-6") }, });
            (employee.department);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-1") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-muted") }, });
            (__VLS_ctx.formatDate(employee.hireDate));
            (__VLS_ctx.calculateDuration(employee.hireDate));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-md-3 text-end") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!(!((__VLS_ctx.loading))))
                            return;
                        __VLS_ctx.goToDetails(employee.id);
                    } }, ...{ class: ("btn btn-success btn-sm me-2") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-eye") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!(!((__VLS_ctx.loading))))
                            return;
                        __VLS_ctx.openDeleteModal(employee);
                    } }, ...{ class: ("btn  btn-sm") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-trash") }, });
        }
        if (__VLS_ctx.showCreateModal) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal fade show d-block") }, tabindex: ("-1"), "aria-modal": ("true"), role: ("dialog"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-dialog") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-content") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-header") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("modal-title") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.closeModal) }, type: ("button"), ...{ class: ("btn-close") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-body") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.createEmployee) }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-3") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("firstName"), ...{ class: ("form-label") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ id: ("firstName"), value: ((__VLS_ctx.newEmployee.firstName)), type: ("text"), ...{ class: ("form-control") }, placeholder: ("First Name"), required: (true), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-3") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("lastName"), ...{ class: ("form-label") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ id: ("lastName"), value: ((__VLS_ctx.newEmployee.lastName)), type: ("text"), ...{ class: ("form-control") }, placeholder: ("Last Name"), required: (true), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-3") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("hireDate"), ...{ class: ("form-label") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ id: ("hireDate"), type: ("date"), ...{ class: ("form-control") }, required: (true), });
            (__VLS_ctx.newEmployee.hireDate);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-3") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("department"), ...{ class: ("form-label") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.newEmployee.department)), ...{ class: ("form-select") }, required: (true), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), disabled: (true), });
            for (const [dept] of __VLS_getVForSourceType((__VLS_ctx.departments))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((dept.key)), value: ((dept.name)), });
                (dept.name);
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-3") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("phone"), ...{ class: ("form-label") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ id: ("phone"), value: ((__VLS_ctx.newEmployee.phone)), type: ("text"), ...{ class: ("form-control") }, placeholder: ("Phone"), required: (true), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-3") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("address"), ...{ class: ("form-label") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ id: ("address"), value: ((__VLS_ctx.newEmployee.address)), type: ("text"), ...{ class: ("form-control") }, placeholder: ("Address"), required: (true), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-end") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.closeModal) }, type: ("button"), ...{ class: ("btn btn-secondary me-2") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("btn btn-success") }, });
        }
        if (__VLS_ctx.showDeleteModal) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal fade show d-block") }, tabindex: ("-1"), "aria-modal": ("true"), role: ("dialog"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-dialog") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-content") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-header") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("modal-title") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.closeDeleteModal) }, type: ("button"), ...{ class: ("btn-close") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-body") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (__VLS_ctx.selectedEmployee?.firstName);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-footer") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.closeDeleteModal) }, type: ("button"), ...{ class: ("btn btn-secondary") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.deleteEmployee) }, type: ("button"), ...{ class: ("btn btn-danger") }, });
        }
        if (__VLS_ctx.showCreateModal) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-backdrop fade show") }, });
        }
    }
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['text-end'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-success'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-plus'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-content-center'];
    __VLS_styleScopedClasses['align-items-center'];
    __VLS_styleScopedClasses['text-muted'];
    __VLS_styleScopedClasses['row'];
    __VLS_styleScopedClasses['col-12'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['row'];
    __VLS_styleScopedClasses['g-0'];
    __VLS_styleScopedClasses['align-items-center'];
    __VLS_styleScopedClasses['p-3'];
    __VLS_styleScopedClasses['col-md-2'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-content-center'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['bg-info'];
    __VLS_styleScopedClasses['col-md-7'];
    __VLS_styleScopedClasses['fw-bold'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['text-muted'];
    __VLS_styleScopedClasses['fs-6'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['text-muted'];
    __VLS_styleScopedClasses['col-md-3'];
    __VLS_styleScopedClasses['text-end'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-success'];
    __VLS_styleScopedClasses['btn-sm'];
    __VLS_styleScopedClasses['me-2'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-eye'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-sm'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-trash'];
    __VLS_styleScopedClasses['modal'];
    __VLS_styleScopedClasses['fade'];
    __VLS_styleScopedClasses['show'];
    __VLS_styleScopedClasses['d-block'];
    __VLS_styleScopedClasses['modal-dialog'];
    __VLS_styleScopedClasses['modal-content'];
    __VLS_styleScopedClasses['modal-header'];
    __VLS_styleScopedClasses['modal-title'];
    __VLS_styleScopedClasses['btn-close'];
    __VLS_styleScopedClasses['modal-body'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['form-label'];
    __VLS_styleScopedClasses['form-control'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['form-label'];
    __VLS_styleScopedClasses['form-control'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['form-label'];
    __VLS_styleScopedClasses['form-control'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['form-label'];
    __VLS_styleScopedClasses['form-select'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['form-label'];
    __VLS_styleScopedClasses['form-control'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['form-label'];
    __VLS_styleScopedClasses['form-control'];
    __VLS_styleScopedClasses['text-end'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-secondary'];
    __VLS_styleScopedClasses['me-2'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-success'];
    __VLS_styleScopedClasses['modal'];
    __VLS_styleScopedClasses['fade'];
    __VLS_styleScopedClasses['show'];
    __VLS_styleScopedClasses['d-block'];
    __VLS_styleScopedClasses['modal-dialog'];
    __VLS_styleScopedClasses['modal-content'];
    __VLS_styleScopedClasses['modal-header'];
    __VLS_styleScopedClasses['modal-title'];
    __VLS_styleScopedClasses['btn-close'];
    __VLS_styleScopedClasses['modal-body'];
    __VLS_styleScopedClasses['modal-footer'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-secondary'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-danger'];
    __VLS_styleScopedClasses['modal-backdrop'];
    __VLS_styleScopedClasses['fade'];
    __VLS_styleScopedClasses['show'];
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
//# sourceMappingURL=EmployeeListView.vue.js.map
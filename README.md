# Employee Management Frontend

This is a frontend application for managing employees, built with **Vue 3**, **TypeScript**, and **Bootstrap** for styling. It interacts with a backend API to perform CRUD operations on employee data.

## Features

- View a list of employees.
- Add a new employee using a form.
- View employee details, including hire date, department, and contact information.
- Update the employee's department using a dropdown.
- Delete an employee with a confirmation modal.
- Toast notifications for success and error messages.
- API URL is configurable via environment variables.

---

## **Tech Stack**

- **Vue 3** (Options API)
- **TypeScript**
- **Bootstrap 5**
- **Axios** for HTTP requests
- **Vite** as the build tool
- **iziToast** for notifications

---

## **Setup Instructions**

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-folder>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create an `.env.development` file in the project root with the following content:

```env
VITE_API_BASE_URL=http://localhost:5000
```

- Replace `http://localhost:5000` with your backend API URL.

### 4. Run the Development Server

Start the Vue development server:

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

---

## **Project Structure**

```
src/
│
├── assets/              # Static assets (CSS, images)
├── components/          # Reusable Vue components (e.g., Loading)
├── services/            # API service classes (EmployeeService, DepartmentService)
├── views/               # View components (EmployeeListView, EmployeeDetailsView)
├── router.ts              # Vue Router configuration
├── types/               # Type definitions for entities
└── main.ts              # Application entry point
```

---

## **Available Scripts**

- **`npm run dev`**: Runs the project in development mode.
- **`npm run build`**: Builds the project for production.
- **`npm run preview`**: Previews the production build locally.

---


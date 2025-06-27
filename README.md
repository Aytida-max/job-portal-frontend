# Job Portal - React Frontend

This is the frontend for a full-stack Job Portal application, built with React and Vite. It provides a dynamic, responsive, and user-friendly interface for both job seekers and administrators to interact with the [Job Portal Backend API](https://github.com/Aytida-max/job-portal-backend).



---

## Features

- **Dynamic Job Browse & Searching:** Users can search for jobs by keyword and browse listings in real-time.
- **Advanced Multi-Faceted Filtering:** A powerful filtering system allows users to refine job searches by Location, Job Type, Experience, and Salary range without page reloads.
- **Secure User Authentication:** Clean and modern forms for user registration and login. The application state persists across page refreshes using a secure cookie-based session managed by the backend.
- **Role-Based UI:** The interface provides different views and capabilities for regular users versus administrators/recruiters.
- **Complete Admin Dashboard:** A dedicated dashboard for admins to perform full CRUD (Create, Read, Update, Delete) operations on companies and job postings.
- **Interactive UI/UX:** Built with modern UI components for a polished user experience, including popovers, toasts/notifications for user actions, and responsive tables.
- **Fully Responsive Design:** The layout is optimized for a seamless experience on all devices, from mobile phones to desktop screens.

---

## Tech Stack

- **Framework:** React.js (with Vite)
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui, Radix UI
- **API Communication:** Axios
- **Icons:** Lucide React

---

## Getting Started

To run this project locally, you must have the [backend server](https://github.com/Aytida-max/job-portal-backend) running first.

### Prerequisites

- Node.js installed (v18 or later recommended)
- `npm` or `yarn`

### Local Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Aytida-max/job-portal-frontend.git](https://github.com/Aytida-max/job-portal-frontend.git)
    cd job-portal-frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project. This file will hold the base URL of your backend API.

    ```env
    # .env.example

    # The base URL of your running backend server, including the version
    VITE_API_BASE_URL=http://localhost:5011/api/v1
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) 

---

## Author

- Aditya Chauhan - [https://github.com/Aytida-max](https://github.com/Aytida-max)

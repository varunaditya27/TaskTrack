# TaskTrack: A Simple Todo Application

TaskTrack is a full-stack todo application designed to help you manage your daily tasks. It features a React-based frontend and a Node.js backend.

## Backend

The backend is built with Node.js and Express.js, using MongoDB as the database.

### Prerequisites

*   Node.js (version X.X.X or higher recommended)
*   npm (comes with Node.js)
*   MongoDB (running instance)

### Setup and Running

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the `backend` directory and add the following variables:
    ```
    PORT=3001 # Or any port you prefer
    MONGODB_URL=your_mongodb_connection_string
    ```
    Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

4.  **Start the server:**
    The `package.json` currently doesn't have a `start` script. You can run the server directly using:
    ```bash
    node server.js
    ```
    (It's recommended to add a `start` script to `backend/package.json` like `"start": "node server.js"`)

## Frontend

The frontend is a single-page application built with React and Vite. It uses Tailwind CSS for styling.

### Prerequisites

*   Node.js (version X.X.X or higher recommended)
*   npm (comes with Node.js)

### Setup and Running

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    This will start the frontend application, usually on `http://localhost:5173`.
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    This will create a `dist` folder in the `frontend` directory with the optimized production build.
    ```bash
    npm run build
    ```

## Frontend-Backend Interaction

Currently, the frontend manages tasks using the browser's local storage. The backend server (`server.js`) is set up but does not yet include API endpoints for task management.

### Future Enhancements:

*   Implement CRUD (Create, Read, Update, Delete) API endpoints in the backend for tasks.
*   Connect the frontend to these backend API endpoints to persist tasks in the MongoDB database.
*   Remove local storage usage in the frontend once backend integration is complete.

## Contributing

Contributions are welcome! If you have suggestions for improvements or want to help with the future enhancements, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

## License

This project is currently not licensed. Consider adding an open-source license like MIT or Apache 2.0 if you intend to share it widely.

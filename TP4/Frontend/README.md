# React + Vite Frontend

This project is a simple React application that consumes a RESTful API built with Express. The application retrieves a list of persons and displays their details in a visually appealing format.

## Project Structure

The project is organized as follows:

```
my-fullstack-app
├── Backend
│   ├── app.js                # Entry point for the Express application
│   ├── package.json          # Backend dependencies and scripts
│   ├── controllers           # Contains controller files
│   │   └── personasController.js # Handles API requests for persons
│   ├── models                # Contains model files
│   │   └── personasModel.js  # Data model for persons
│   └── routes                # Contains route definitions
│       └── personas.routes.js # Defines API routes for persons
├── Frontend
│   ├── package.json          # Frontend dependencies and scripts
│   ├── vite.config.js        # Vite configuration for the frontend
│   ├── index.html            # Main HTML file for the React app
│   ├── README.md             # Documentation for the frontend project
│   ├── src                   # Source files for the React application
│   │   ├── App.jsx           # Main React component
│   │   ├── main.jsx          # Entry point for the React application
│   │   ├── TraerPersonas.jsx # Component to fetch persons from the API
│   │   ├── ListaTarjetas.jsx # Component to display a list of persons
│   │   ├── TarjetaPersona.jsx # Component to display individual person details
│   │   ├── App.css           # Styles for the App component
│   │   └── index.css         # Global styles for the application
│   └── public                # Public assets
│       └── vite.svg          # SVG logo used in the application
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-fullstack-app
   ```

2. **Set up the Backend:**
   - Navigate to the `Backend` directory:
     ```
     cd Backend
     ```
   - Install the dependencies:
     ```
     npm install
     ```
   - Start the server:
     ```
     node app.js
     ```

3. **Set up the Frontend:**
   - Open a new terminal and navigate to the `Frontend` directory:
     ```
     cd Frontend
     ```
   - Install the dependencies:
     ```
     npm install
     ```
   - Start the development server:
     ```
     npm run dev
     ```

4. **Access the application:**
   - Open your browser and go to `http://localhost:3000` to view the application.

## Features

- Fetches a list of persons from the Express API.
- Displays person details in a card format.
- Responsive design with a clean user interface.

## Technologies Used

- React
- Vite
- Express
- CORS

## License

This project is licensed under the MIT License.
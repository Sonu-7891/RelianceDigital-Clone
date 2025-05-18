# Reliance Digital Clone - Frontend

This is the frontend part of the Reliance Digital clone project, built with React, Material-UI, and Vite.

## Features

- 🛍️ Product browsing with filters and search
- 🔍 Advanced search functionality
- 🛒 Shopping cart management
- 👤 User authentication
- 📱 Responsive design
- 🎨 Modern UI with Material-UI

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API running (see backend README)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add the following:
```
VITE_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/         # Reusable components
├── pages/             # Page components
├── contexts/          # React contexts
├── services/          # API services
├── routes/            # Route components
├── App.jsx           # Main App component
└── main.jsx          # Entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

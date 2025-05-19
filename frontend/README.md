# Reliance Digital Clone - Frontend

This is the frontend application for the Reliance Digital Clone project, built with React, Material-UI, and Redux.

## 🚀 Features

- Modern, responsive UI design
- Product browsing with advanced filtering
- Category-based product navigation
- Product search functionality
- Product comparison
- Shopping cart management
- User authentication
- Order tracking
- Wishlist functionality
- Responsive design for all devices

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend server running (see Backend README)

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/Sonu-7891/RelianceDigital-Clone.git
cd RelianceDigital-Clone/frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
VITE_API_URL=https://reliancedigital-clone-backend.onrender.com
```

4. Start the development server:

```bash
npm run dev
```

## 🏗️ Project Structure

```
frontend/
├── public/          # Static files
├── src/
│   ├── components/  # Reusable components
│   ├── pages/       # Page components
│   ├── services/    # API services
│   ├── store/       # Redux store
│   ├── utils/       # Utility functions
│   ├── App.jsx      # Main App component
│   └── main.jsx     # Entry point
├── package.json
└── vite.config.js
```

## 🎨 UI Components

### Layout Components

- `Navbar` - Main navigation bar
- `Footer` - Site footer
- `Sidebar` - Category navigation
- `ProductCard` - Product display card
- `FilterSection` - Product filtering

### Feature Components

- `ProductGrid` - Product listing
- `ProductDetail` - Product information
- `Cart` - Shopping cart
- `Wishlist` - User wishlist
- `Compare` - Product comparison
- `SearchBar` - Product search

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop (1920px and below)
- Tablet (1024px and below)
- Mobile (768px and below)

## 🎯 Key Features Implementation

### Product Filtering

- Category-based filtering
- Price range filtering
- Brand filtering
- Discount filtering
- Search by name

### Product Display

- Grid/List view toggle
- Product cards with:
  - Product image
  - Name
  - Price
  - Discount
  - MRP
  - Compare button
  - Wishlist button

### Shopping Experience

- Add to cart
- Add to wishlist
- Compare products
- Quick view
- Product details

## 🛠️ Tech Stack

- React.js
- Material-UI
- Redux Toolkit
- React Router
- Axios
- Vite
- ESLint
- Prettier

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Reliance Digital for inspiration
- Material-UI for the component library
- All contributors who have helped shape this project

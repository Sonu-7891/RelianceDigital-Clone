# Reliance Digital Clone

A full-stack e-commerce platform clone of Reliance Digital built with the MERN stack (MongoDB, Express.js, React, Node.js).

## 🚀 Features

### User Features

- User authentication (Register/Login)
- Profile management
- Product browsing with advanced filtering
- Shopping cart functionality
- Order placement and tracking
- Secure payment integration

### Admin Features

- Admin dashboard
- Product management (CRUD)
- Order management
- User management
- Category management

## 🛠️ Tech Stack

### Backend

- Node.js & Express.js
- MongoDB with Mongoose
- JWT Authentication
- Bcrypt for password hashing
- Custom DSA implementations for search and sort

### Frontend (Coming Soon)

- React.js
- Redux for state management
- Material-UI for components
- Axios for API calls

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/reliance-digital-clone.git
cd reliance-digital-clone
```

2. Install backend dependencies:

```bash
cd Backend
npm install
```

3. Create a `.env` file in the Backend directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/reliance-digital
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=30d
NODE_ENV=development
```

4. Start the backend server:

```bash
npm run dev
```

## 📡 API Endpoints

### Authentication

- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/updatedetails` - Update user details
- `PUT /api/auth/updatepassword` - Update password

### Products

- `GET /api/products` - Get all products (with filtering)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Cart

- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add to cart
- `PUT /api/cart/:itemId` - Update cart item
- `DELETE /api/cart/:itemId` - Remove from cart
- `DELETE /api/cart` - Clear cart

### Orders

- `POST /api/order` - Create order
- `GET /api/order` - Get user orders
- `GET /api/order/:id` - Get single order
- `PUT /api/order/:id` - Update order status (admin)
- `GET /api/order/admin` - Get all orders (admin)

### Admin

- `GET /api/admin/products` - Get all products
- `POST /api/admin/products` - Create product
- `PUT /api/admin/products/:id` - Update product
- `DELETE /api/admin/products/:id` - Delete product
- `GET /api/admin/orders` - Get all orders
- `PUT /api/admin/orders/:id` - Update order status

## 🔍 Advanced Features

### Product Search & Filtering

- Text search using binary search algorithm
- Price range filtering
- Category-based filtering
- Custom sorting (price, rating) using quick sort

### Security Features

- JWT-based authentication
- Password encryption with bcrypt
- Role-based access control
- Input validation and sanitization
- Error handling middleware

## 📁 Project Structure

```
Backend/
├── config/           # Configuration files
├── controllers/      # Route controllers
├── middleware/       # Custom middleware
├── models/          # Database models
├── routes/          # API routes
├── utils/           # Utility functions
├── server.js        # Entry point
└── .env             # Environment variables
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Reliance Digital for inspiration
- MERN stack community
- All contributors who participate in this project

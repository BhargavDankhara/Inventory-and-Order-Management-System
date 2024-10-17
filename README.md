
# Inventory Management and Order Tracking System

This project is a full-stack application designed for customers and admins to manage inventory and track orders. The frontend is built with React and Tailwind CSS, while the backend uses Node.js, Express, and MongoDB. It features JWT-based authentication and role-based access for customers and admins.

---

## Features

### Customer
- **Product Catalog**: Browse products, add items to cart, and view cart before placing an order.
- **Order History**: View past orders with details (order date, status, total amount).

### Admin
- **Admin Panel**: Accessible only to admins.
- **Product Management**: Add, update, delete products, and track low-stock items.
- **Order Management**: View all orders and update their status.

---

## Technologies Used
- **Frontend**: React, Tailwind CSS, Context API/Redux
- **Backend**: Node.js, Express, MongoDB, JWT

---

## Requirements

- **Frontend**:
  - Node.js
  - Tailwind CSS
  - Redux or Context API

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - JWT for authentication

---



## Deployment
https://inventory-and-order-management-system-3fse.onrender.com

---

## API Documentation

### Authentication
- **POST** `/api/auth/login`: Logs in a user and returns a JWT.
- **POST** `/api/auth/signup`: Registers a new user.

### Product Management
- **GET** `/api/products`: Fetch all products.
- **POST** `/api/products`: Create a new product (admin only).
- **PUT** `/api/products/:id`: Update a product (admin only).
- **DELETE** `/api/products/:id`: Delete a product (admin only).

### Order Management
- **POST** `/api/orders`: Place a new order (customer only).
- **GET** `/api/orders`: Get all orders (admin only).
- **GET** `/api/orders/:id`: Get details of a specific order.

---



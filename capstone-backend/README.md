# Path2Tech Capstone Express Backend End

A robust Node.js/Express backend API for the Path2Tech Capstone e-commerce platform. Handles product management, orders, and payments.

## Features

Required Features
- **RESTful API**: JSON endpoints for frontend integration
- **Order Processing**: Checkout, order history, and status tracking
- **Database**: MongoDB with Mongoose integration

Optional Features
- **Authentication**: JWT or OAuth based user login, registration
- **Product Management**: CRUD operations for products (admin-only)
- **Payment Integration**: Stripe/Paypal webhook support
- **API Documentation**: Swagger/OpenAPI or Postman collection


## Prerequisites
- Node
- NPM
- MongoDB Atlas Account

## Installation

**Set up environment variables**
- Create a `.env` file in the root directory and create these following variables
```
DB_URL="mongodb atlas connection string" # replace with your MongoDB Connection String
```

## Project Structure
```
├── models/
└── index.js
```

## Available Scripts

To run the following scripts you can open a new terminal and then enter these commands
- `npm run start`: runs the project without hot reloading enabled, this script is supposed to run your project as a production ready server. This script starts your server at http://localhost:3500 unless you change the `PORT` environment variable
- `npm run dev`: runs the project in development mode with hot reloading enabled. This script starts your development server at http://localhost:3500

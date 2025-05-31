# 🚗 Car Dealership API

A RESTful API for managing cars, categories, customers, and managers for a car dealership system. Built with **Node.js**, **Express**, **TypeScript**, and **MongoDB**.

---

## 🔧 Features

- JWT-based authentication for managers
- CRUD operations for Cars, Categories, and Customers
- Customers can purchase cars
- Advanced filtering and pagination on `/cars`
- Modular service/controller structure
- Centralized error handling
- Input validation with `express-validator`
- Unit tests for all critical flows
- TypeScript + Mongoose schema typing

---

## 📦 Tech Stack

- **Node.js + Express**
- **TypeScript**
- **MongoDB** (via Mongoose)
- **JWT Authentication**
- **express-validator**
- **Jest** + **Supertest** for testing

---

## 📁 Project Structure

```

src/
├── app.ts
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── tests/
├── validations/
└── server.ts

```

---

## 🛠 Setup Instructions

### 1. Clone the Repository

```bash
mkdir car-dealership-api
cd car-dealership-api
npm init -y
npm install --save-dev typescript
npx tsc --init
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/car_dealership
JWT_SECRET=your_jwt_secret
```

### 4. Start the Server

```bash
npm run dev
```

---

## Run Tests

```bash
npm run test
```

---

1. seed.ts file
2. Add a script in your package.json
   "scripts": {
   "seed": "ts-node scripts/seed.ts"
   }

3. Run the seed
   npm run seed

## 🔐 API Authentication

All protected routes require a Bearer token in the header:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

## Endpoints Overview

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`

### Manager

- `GET /api/managers/me` (protected)

### Cars

- `GET /api/cars` — supports `brand`, `model`, `price`, `available`, `page`, `limit`
- `POST /api/cars` (protected)

### Customers

- `POST /api/customers`
- `POST /api/customers/purchase` — assign car to customer
- `GET /api/customers/:id/cars`

---

## Author

**Samuel Igbekele**
Backend Developer • TypeScript • Node.js • MongoDB

---

## Submission Links

- 🔗 GitHub Repo: [https://github.com/XKolz/car-dealership-api](#)
- 🔗 Postman Docs: [https://documenter.getpostman.com/view/23652017/2sB2qgdxrD](#)
- 🔗 Live API: [https://car-dealership-api-wvxy.onrender.com](#)

```

```

# Gym Booking API 🏋️‍♂️

A RESTful API for a gym class reservation system, built with [NestJS](https://nestjs.com/) and [PostgreSQL](https://www.postgresql.org/).

This project is a backend service designed for managing gym class reservations, built with NestJS and PostgreSQL. It follows clean architecture principles, includes JWT-based authentication and role-based access control, and is structured to support AWS integration and production deployment.

---

## 🚀 Features

- ✅ User registration and login with password hashing (bcrypt)
- ✅ JWT authentication
- ✅ Role-based access control: `admin` and `client`
- ✅ PostgreSQL database using TypeORM
- ✅ Modular and scalable architecture
- 🔐 Route protection with guards
- 🧱 Ready for AWS deployment with Docker _(in progress)_

---

## 📂 Project Structure

```
src/
├── auth/            # JWT authentication logic
├── users/           # User registration, login, roles
├── classes/         # (coming soon) Gym class management
├── bookings/        # (coming soon) Booking logic
├── common/          # Shared DTOs, guards, pipes, etc.
├── main.ts          # Application bootstrap
└── app.module.ts    # Root module
```

---

## 🛠 Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/gym-booking-api.git
cd gym-booking-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create your `.env` file

```env
PORT=3000
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=admin
DATABASE_NAME=gym
JWT_SECRET=supersecret
JWT_EXPIRES_IN=3600s
```

### 4. Start PostgreSQL with Docker

```bash
docker run --name postgres-gym   -e POSTGRES_PASSWORD=admin   -e POSTGRES_DB=gym   -p 5432:5432   -d postgres
```

### 5. Run the development server

```bash
npm run start:dev
```

---

## 🧪 Available Endpoints

- `POST /users/register` – Register a new user
- `POST /auth/login` – Login and receive a JWT token  
  _(more endpoints coming soon)_

---

## ✅ To Do

- [x] User login with JWT token
- [x] Password hashing and user validation
- [ ] Protect routes using JwtAuthGuard
- [ ] Role-based access control (admin/client)
- [ ] Gym class CRUD
- [ ] Booking system with slot limits
- [ ] Class time validation
- [ ] Payment integration and notifications
- [ ] AWS deployment (S3, EC2 or Lightsail)

---

## 🧠 Project Vision

This API is part of a long-term vision to deliver a solid backend foundation for real-world gym management applications. It emphasizes clean code, modular architecture, security best practices, and scalability for future growth and integration with cloud services.

---

## 🌐 Frontend Integration

This API is being developed as the backend for a gym reservation system, with planned frontend clients built using:

- 🧩 [React](https://react.dev/) – for the web-based admin dashboard and client portal
- 📱 [React Native](https://reactnative.dev/) – for the mobile app used by gym members

The API follows REST principles to allow seamless integration across platforms, enabling secure authentication, class bookings, and user role management from both web and mobile clients.

---

## 📄 License

MIT

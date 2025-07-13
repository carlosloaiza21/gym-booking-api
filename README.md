# Gym Booking API 🏋️‍♂️

A RESTful API for a gym class reservation system, built with [NestJS](https://nestjs.com/) and [PostgreSQL](https://www.postgresql.org/).

This project was created as a practical learning exercise to master NestJS, implement clean architecture, authentication with JWT, and prepare for future integration with AWS services.

---

## 🚀 Features

- ✅ User registration and login with password hashing (bcrypt)
- ✅ JWT authentication
- ✅ Role-based access control: `admin` and `client`
- ✅ PostgreSQL database using TypeORM
- ✅ Modular and scalable architecture
- 🔐 Route protection with guards
- 🧱 Ready for AWS deployment with Docker *(in progress)*

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
*(more endpoints coming soon)*

---

## ✅ To Do

- [ ] Gym class CRUD
- [ ] Booking system with slot limits
- [ ] Class time validation
- [ ] Payment integration and notifications
- [ ] AWS deployment (S3, EC2 or Lightsail)

---

## 🧠 Learning Goals

This project is part of my hands-on journey to learn NestJS deeply and apply best practices for building modern, secure, and scalable backends.

---

## 📄 License

MIT

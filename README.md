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

## 🧠 Project Vision

This API is part of a long-term vision to deliver a solid backend foundation for real-world gym management applications. It emphasizes clean code, modular architecture, security best practices, and scalability for future growth and integration with cloud services.

---

## 📄 License

MIT

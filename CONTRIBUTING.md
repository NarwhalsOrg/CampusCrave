
# Contributing to CampusCrave Backend

Thank you for contributing to the CampusCrave Backend 🚀

This backend powers the multi-vendor college canteen platform where students can order food online and vendors can manage inventory and orders in real time.

Please follow the guidelines below before contributing.

---

# Getting Started

## 1. Fork the Repository

Fork the repository to your GitHub account.

---

## 2. Clone the Repository

```bash
git clone https://github.com/your-username/CampusCrave-Backend.git
````

---

## 3. Navigate to Project Directory

```bash id="sjlwm5"
cd CampusCrave-Backend
```

---

## 4. Install Dependencies

```bash id="9u57px"
npm install
```

---

## 5. Setup Environment Variables

Create a `.env` file in the root directory.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

## 6. Start Development Server

```bash id="k0n8iv"
npm run dev
```

---

# Backend Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Socket.IO

---

# Branch Naming Convention

Use meaningful branch names.

Examples:

```bash id="c7lxyj"
feature/order-api
feature/vendor-dashboard
fix/login-bug
docs/update-readme
test/Adding-and-updating-tests
chore/Maintenance-and-config-updates
```

---

# Commit Message Convention

Examples:

```bash id="i2c7b4"
feat: added order status API
fix: resolved token validation issue
docs: updated API documentation
refactor: optimized order controller
test: add unit tests for payment service
chore: update eslint configuration
```

Examples:

```bash id="i2c7b4"
git commit -m "test: add unit tests for login service"
```
---

# Backend Contribution Guidelines

## API Development

* Follow REST API conventions
* Use proper HTTP status codes
* Validate request body
* Handle errors properly

---

## Database Guidelines

* Keep schema clean and optimized
* Use proper indexing when required
* Avoid duplicate data

---

## Authentication

* Secure routes using JWT middleware
* Never expose sensitive data
* Hash passwords before storing

---

## Code Quality

* Write modular code
* Keep controllers clean
* Separate routes, controllers, and models
* Avoid unnecessary dependencies
* Use Proper Comment's
* Use Docstring for functions

---

# Project Structure

```text id="i4um7v"
src/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/
 ├── services/
 ├── utils/
 ├── config/
 └── server.js
```

---

# Reporting Bugs

When reporting bugs, include:

* Clear description
* Steps to reproduce
* Expected behavior
* Screenshots/logs if available

---

# Pull Request Guidelines

Before creating a PR:

* [ ] Code runs successfully
* [ ] APIs tested locally
* [ ] No sensitive data committed
* [ ] Proper commit messages used
* [ ] Documentation updated if needed

---

# Code of Conduct

Please follow the `CODE_OF_CONDUCT.md` while interacting with the community.

---

# Thank You ❤️

Thank you for helping improve CampusCrave Backend.
Your contributions make the platform better for students and vendors.



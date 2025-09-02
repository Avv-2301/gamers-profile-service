# Profile Service

A Node.js microservice responsible for managing user profiles. Handles operations like fetching, updating, and deleting user profile information. Designed to work alongside a User Service for authentication.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [API Endpoints](#api-endpoints)  
- [Getting Started](#getting-started)  
- [Configuration](#configuration)  
- [Usage](#usage)  
- [Testing](#testing)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- **Fetch Profile:** Retrieve user profile information by user ID.  
- **Update Profile:** Update fields like name, email, avatar, bio, or preferences.  
- **Delete Profile:** Remove a user profile.  
- **Role-Based Updates:** Allow specific fields to be updated based on user roles.  
- **Secure Access:** JWT authentication required for all profile operations.  

---

## Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose ODM  
- **Authentication:** JWT (via User Service)  
- **Validation:** Joi  
- **Logging:** Winston / Morgan  
- **Testing:** Jest, Supertest  

---

## API Endpoints

| Endpoint                   | Method | Description                     | Request Body / Params                    |
|----------------------------|--------|---------------------------------|-----------------------------------------|
| `/api/profiles/:id`        | GET    | Fetch user profile by ID        | Authorization: Bearer `<token>`         |
| `/api/profiles/:id`        | PUT    | Update user profile             | `{ "name": "", "bio": "", "avatar": "" }` |
| `/api/profiles/:id`        | DELETE | Delete user profile             | Authorization: Bearer `<token>`         |
| `/api/profiles/:id/avatar` | PUT    | Update profile avatar only      | `{ "avatar": "<image_url>" }`           |

---

## Getting Started

### Prerequisites

- Node.js v18+  
- MongoDB (local or cloud)  
- Git  
- User Service for authentication  

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/profile-service.git
cd profile-service

# Install dependencies
npm install

# Start in development mode
npm run dev

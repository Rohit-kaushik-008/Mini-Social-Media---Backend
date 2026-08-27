# Mini Social Media 🚀

> **Goal:** Improve backend development by building a realistic social media application from scratch.

### Core Philosophy

**Build → Get stuck → Learn → Implement → Test → Move on**

Don't learn everything beforehand. Learn concepts when the project requires them.

---

## 🛠️ Stack

- Node.js + Express
- MongoDB + Mongoose
- JWT + HTTP-only Cookies
- React + Axios
- Postman / Thunder Client
- Tailwind CSS

### Initial Packages

```bash
npm install express mongoose dotenv cors bcrypt jsonwebtoken cookie-parser
npm install -D nodemon
```

Add other packages **only when needed**.

---

# 📁 Backend Structure

```text
backend/
└── src/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── services/
    ├── utils/
    ├── app.js
    └── server.js
```

---

# 🗺️ DEVELOPMENT ROADMAP

## 1. Project Planning

**Build:**

- [ ] Define MVP
- [ ] Identify features
- [ ] Identify entities
- [ ] Plan relationships
- [ ] Sketch user flow

**Learn:** Requirements, CRUD, entities, relationships.

**Next →** Project Setup

---

## 2. Backend Setup

**Build:**

- [ ] Express server
- [ ] Environment variables
- [ ] Folder structure
- [ ] MongoDB connection
- [ ] `/api/health`

**Learn:** Node, Express, middleware, HTTP, Mongoose.

**Next →** User Model

---

## 3. Authentication

**Build:**

- [ ] User model
- [ ] Register
- [ ] Login
- [ ] Logout
- [ ] `/me`
- [ ] Auth middleware

**Learn:** bcrypt, JWT, cookies, authentication vs authorization.

**Next →** User Profile

---

## 4. User Profile

**Build:**

- [ ] Get profile
- [ ] Update profile
- [ ] User posts
- [ ] Followers
- [ ] Following

**Learn:** Authorization, ownership, references.

**Next →** Posts

---

## 5. Posts

**Build:**

- [ ] Create post
- [ ] Get posts
- [ ] Get single post
- [ ] Update post
- [ ] Delete post
- [ ] Owner authorization

**Learn:** REST, CRUD, Mongoose queries, references/population.

**Next →** Follow System

---

## 6. Follow System

**Build:**

- [ ] Follow user
- [ ] Unfollow user
- [ ] Followers
- [ ] Following

**Learn:** Relationships, many-to-many data, duplicate prevention.

**Next →** Likes

---

## 7. Likes

**Build:**

- [ ] Like post
- [ ] Unlike post
- [ ] Like count
- [ ] Prevent duplicate likes

**Learn:** Relationships, unique constraints, efficient queries.

**Next →** Comments

---

## 8. Comments

**Build:**

- [ ] Create comment
- [ ] Get comments
- [ ] Delete own comment

**Learn:** References, nested resources, authorization.

**Next →** Feed

---

## 9. Feed ⭐

**Build:**

- [ ] Get posts from followed users
- [ ] Sort by latest
- [ ] Handle empty feed

**Learn:** Complex queries, relationships, sorting.

**Next →** Pagination

---

## 10. Pagination

**Build:**

- [ ] `page`
- [ ] `limit`
- [ ] Pagination metadata

Example:

```text
GET /api/posts?page=1&limit=10
```

**Learn:** `skip`, `limit`, pagination strategies.

**Next →** Search

---

## 11. Search

**Build:**

- [ ] Search users
- [ ] Search by username/name
- [ ] Pagination

**Learn:** Query parameters, regex/search, indexes.

**Next →** Media

---

## 12. Image Upload

**Build:**

- [ ] Profile image
- [ ] Post image
- [ ] File validation

**Learn:** multipart/form-data, file storage, cloud storage.

**Next →** API Quality

---

## 13. API Quality

**Build:**

- [ ] Request validation
- [ ] Centralized error handling
- [ ] Proper HTTP status codes
- [ ] Consistent API responses

**Learn:** Validation, error middleware, API design.

**Next →** Security

---

## 14. Security 🔐

**Improve:**

- [ ] Password security
- [ ] HTTP-only cookies
- [ ] CORS
- [ ] Rate limiting
- [ ] Helmet
- [ ] Input sanitization
- [ ] Authorization checks

**Learn:** Common web/API security problems.

**Next →** Testing

---

## 15. Testing

**Test:**

- [ ] Authentication
- [ ] Posts
- [ ] Likes
- [ ] Comments
- [ ] Follow system
- [ ] Feed
- [ ] Authorization
- [ ] Error cases

**Learn:** API testing, integration testing, Jest/Supertest.

**Next →** Frontend

---

## 16. Frontend Integration

```text
React
  ↓
Axios
  ↓
Express API
  ↓
MongoDB
```

**Build:**

- [ ] Login/Register
- [ ] Feed
- [ ] Create post
- [ ] Profile
- [ ] Comments
- [ ] Likes
- [ ] Follow
- [ ] Search

**Next →** Deployment

---

## 17. Deployment 🚀

**Do:**

- [ ] Deploy backend
- [ ] Deploy frontend
- [ ] Configure production environment
- [ ] Configure CORS
- [ ] Connect production database
- [ ] Test complete application

---

# 🧠 Main Topics You'll Learn

```text
Node.js
Express
REST API
MongoDB
Mongoose
CRUD
Authentication
Authorization
JWT
Cookies
Middleware
Database Relationships
Mongoose Queries
Pagination
Search
File Upload
Validation
Error Handling
Security
API Testing
Deployment
```

---

# 📊 Main Entities

```text
User
 ├── creates → Posts
 ├── follows → Users
 ├── likes → Posts
 └── comments → Posts

Post
 ├── belongs to → User
 ├── has → Likes
 └── has → Comments
```

---

# 🔌 Main API Groups

```text
/auth
/users
/posts
/comments
/feed
/search
```

Design the exact endpoints while building.

---

# 🚫 NOT IN THIS VERSION

- ❌ Socket.IO
- ❌ Real-time chat
- ❌ Real-time notifications
- ❌ Stories
- ❌ Reels
- ❌ Recommendation system

**Real-time will be a separate mini-project later.**

---

# 🏁 Definition of Done

The project is complete when:

- [ ] Authentication works
- [ ] Profiles work
- [ ] Posts CRUD works
- [ ] Follow system works
- [ ] Likes work
- [ ] Comments work
- [ ] Personalized feed works
- [ ] Pagination works
- [ ] Search works
- [ ] Image upload works
- [ ] Validation + error handling work
- [ ] Security is implemented
- [ ] API is tested
- [ ] Frontend is connected
- [ ] Project is deployed

---

# 🔥 Rule

**Don't restart from zero.
Don't learn everything beforehand.
Don't copy blindly.**

When stuck:

```text
Understand problem
      ↓
Research
      ↓
Learn concept
      ↓
Implement
      ↓
Test
      ↓
Move to next stage
```

### Final Goal

> **Become capable of designing and building a backend without following a tutorial step-by-step.**

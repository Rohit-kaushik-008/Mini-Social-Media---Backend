# Mini Social Media — Backend Learning Project

> **Project Type:** Full-Stack Web Application
> **Primary Goal:** Improve backend development through building
> **Difficulty:** Intermediate
> **Real-Time:** ❌ Not included in this version
> **Approach:** Learn while building, not before building everything

---

# 1. 🎯 Project Motivation

The purpose of this project is **not simply to create another social media clone**.

The purpose is to use a realistic application to strengthen backend development skills.

The project should help me understand:

- How real backend applications are structured
- How REST APIs are designed
- How authentication and authorization work
- How users and resources are related
- How databases are designed
- How complex queries are handled
- How pagination works
- How validation and error handling are implemented
- How to protect an API
- How frontend and backend communicate
- How to debug backend problems
- How to deploy a backend application

### Main Principle

> **Build → Encounter Problem → Learn → Implement → Test → Continue**

I do **not** need to master every backend topic before starting.

If I encounter a concept that I don't understand, I should learn that concept when the project requires it.

---

# 2. 🧠 Learning Philosophy

This project is a learning project.

Therefore:

### Don't do this:

```text
Learn entire Express
↓
Learn entire MongoDB
↓
Learn entire Mongoose
↓
Learn entire Authentication
↓
Finally start project
```

### Do this:

```text
Build Authentication
↓
Encounter JWT/Cookies
↓
Learn JWT/Cookies
↓
Implement
↓
Test
↓
Continue

Build Follow System
↓
Encounter database relationships
↓
Learn relationships
↓
Implement
↓
Test
↓
Continue
```

The project should force me to learn concepts naturally.

---

# 3. 🚧 Project Scope

This version intentionally does **NOT** include real-time functionality.

## Included

- User registration
- Login/logout
- Authentication
- Authorization
- User profiles
- Create posts
- Update posts
- Delete posts
- View posts
- Follow/unfollow
- Likes
- Comments
- Personalized feed
- Pagination
- Search
- Image upload
- Validation
- Error handling
- Security
- Testing
- Deployment

## Not Included

- Real-time chat
- Socket.IO
- Real-time notifications
- Stories
- Reels
- Video processing
- Recommendation algorithms
- Advanced messaging
- Complex moderation systems

These can become separate projects/features later.

---

# 4. 🛠️ Suggested Technology Stack

## Frontend

- React
- Axios
- React Router
- Tailwind CSS

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Authentication

Choose one approach and understand it properly:

- JWT
- HTTP-only cookies

Do not blindly implement both.

## Development

- Nodemon
- dotenv
- Postman or Thunder Client

## Validation

Choose one:

- Zod
- Joi
- express-validator

## Security

Later investigate:

- Helmet
- CORS
- Rate limiting
- Secure cookies
- Password hashing

## Testing

Later:

- Jest
- Supertest

## Deployment

Possible choices:

- Frontend hosting platform
- Backend hosting platform
- MongoDB Atlas

Do not worry about deployment at the beginning.

---

# 5. 📦 Initial Backend Packages

Start with only what you actually need.

Example:

```bash
npm init -y

npm install express mongoose dotenv cors bcrypt jsonwebtoken cookie-parser

npm install -D nodemon
```

Additional packages should be installed **when the project requires them**.

For example:

```text
Need validation?
→ Research validation libraries
→ Choose one
→ Install it

Need image upload?
→ Research upload solutions
→ Choose one
→ Install it
```

Avoid installing 20 packages at the beginning just because another project uses them.

---

# 6. 📁 Suggested Folder Structure

Start simple.

```text
backend/
│
├── src/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │
│   ├── middleware/
│   │
│   ├── models/
│   │
│   ├── routes/
│   │
│   ├── services/
│   │
│   ├── utils/
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

As the project grows, folders can evolve.

Do not create complicated architecture just to make the project look professional.

---

# 7. 🏗️ Backend Request Flow

Try to understand this flow rather than memorizing it.

```text
Client
  ↓
HTTP Request
  ↓
Route
  ↓
Middleware
  ↓
Controller
  ↓
Service
  ↓
Model
  ↓
Database
  ↓
Service
  ↓
Controller
  ↓
HTTP Response
  ↓
Client
```

For example:

```text
POST /api/posts
       ↓
Authentication Middleware
       ↓
Post Controller
       ↓
Post Service
       ↓
Post Model
       ↓
MongoDB
       ↓
Response
```

---

# 8. 🗺️ Complete Project Roadmap

---

# STAGE 0 — Project Planning

## Goal

Understand what you are building before writing the backend.

### Tasks

- [ ] Define the purpose of the application
- [ ] Define MVP features
- [ ] Define users and their capabilities
- [ ] Identify major entities
- [ ] Think about relationships
- [ ] Sketch basic user flows

### Questions to answer

- What can a user do?
- What resources exist?
- Who owns each resource?
- Who can modify each resource?
- What information needs to be stored?

### Concepts

- Requirements
- MVP
- CRUD
- Entities
- Relationships
- Authorization

---

# STAGE 1 — Project Setup

## Goal

Create a clean backend foundation.

### Tasks

- [ ] Initialize Node project
- [ ] Install Express
- [ ] Create server
- [ ] Create Express application
- [ ] Configure environment variables
- [ ] Create `.gitignore`
- [ ] Create basic folder structure
- [ ] Create health-check route

Example:

```text
GET /api/health
```

Expected response:

```json
{
  "message": "API is running"
}
```

### Concepts to learn

- Node.js
- Express
- HTTP server
- Environment variables
- npm scripts
- Middleware
- Request/response

---

# STAGE 2 — Database Setup

## Goal

Connect the backend to MongoDB.

### Tasks

- [ ] Create MongoDB database
- [ ] Configure connection
- [ ] Create database utility
- [ ] Handle connection errors
- [ ] Create first model

### Concepts

- MongoDB
- Mongoose
- Collections
- Documents
- Schemas
- Models
- ObjectId
- CRUD operations

### Questions

Understand:

> Why do I need Mongoose?

> What is the difference between a MongoDB document and a Mongoose document?

> What is ObjectId?

---

# STAGE 3 — User Model

## Goal

Design the foundation of the application.

Create a User model.

Possible fields:

```text
User
├── name
├── username
├── email
├── password
├── bio
├── profileImage
├── createdAt
└── updatedAt
```

### Tasks

- [ ] Design User schema
- [ ] Add required fields
- [ ] Add validation
- [ ] Handle unique username/email
- [ ] Add timestamps

### Concepts

- Schema design
- Validation
- Constraints
- Indexes
- Unique fields
- Password security

---

# STAGE 4 — Authentication

## Goal

Allow users to create accounts and authenticate.

### Features

```text
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
```

### Tasks

- [ ] Register user
- [ ] Hash password
- [ ] Store user
- [ ] Login
- [ ] Verify password
- [ ] Generate authentication token
- [ ] Store token securely
- [ ] Logout
- [ ] Get current user

### Concepts to learn

- Authentication
- Password hashing
- bcrypt
- JWT
- Cookies
- HTTP-only cookies
- Sessions vs JWT
- Authentication middleware

### Important question

Understand the difference between:

```text
Authentication
        vs
Authorization
```

---

# STAGE 5 — Authentication Middleware

## Goal

Protect private routes.

Example:

```text
POST /api/posts
```

should require authentication.

### Tasks

- [ ] Create auth middleware
- [ ] Extract authentication information
- [ ] Verify token
- [ ] Identify current user
- [ ] Attach user information to request
- [ ] Reject unauthorized requests

### Test

Try:

```text
Without authentication → should fail

With valid authentication → should succeed
```

---

# STAGE 6 — User Profile

## Goal

Allow users to manage their profile.

### Features

```text
GET   /api/users/:id
PATCH /api/users/:id
```

Later:

```text
GET /api/users/:id/posts
GET /api/users/:id/followers
GET /api/users/:id/following
```

### Tasks

- [ ] Get profile
- [ ] Update profile
- [ ] Prevent unauthorized profile modification
- [ ] Return safe user data
- [ ] Do not expose passwords

### Concepts

- Authorization
- Projection
- Data sanitization
- Ownership

---

# STAGE 7 — Posts

## Goal

Implement the main social media resource.

### Post model

Possible fields:

```text
Post
├── content
├── image
├── author
├── createdAt
└── updatedAt
```

### Features

```text
POST   /api/posts
GET    /api/posts
GET    /api/posts/:id
PATCH  /api/posts/:id
DELETE /api/posts/:id
```

### Tasks

- [ ] Create post
- [ ] Get posts
- [ ] Get single post
- [ ] Update post
- [ ] Delete post
- [ ] Ensure only owner can modify/delete
- [ ] Populate author information where appropriate

### Concepts

- CRUD
- References
- Population
- Ownership
- REST API design

---

# STAGE 8 — Follow System

## Goal

Introduce relationships between users.

Example:

```text
User A
   │
   └──── follows ────> User B
```

### Features

```text
POST   /api/users/:id/follow
DELETE /api/users/:id/follow
GET    /api/users/:id/followers
GET    /api/users/:id/following
```

### Questions

Before coding, decide:

> How will I represent a follow relationship?

Possible approaches:

```text
User
├── followers
└── following
```

or a separate relationship collection/model.

Research both approaches.

Understand the trade-offs before choosing.

### Concepts

- Relationships
- Referencing
- Many-to-many relationships
- Database modeling
- Duplicate prevention
- Querying relationships

---

# STAGE 9 — Likes

## Goal

Allow users to like/unlike posts.

### Features

```text
POST   /api/posts/:id/like
DELETE /api/posts/:id/like
```

### Questions

- Can a user like the same post twice?
- Where should likes be stored?
- How do I prevent duplicates?
- How do I count likes efficiently?

### Concepts

- Relationships
- Unique constraints
- Atomic operations
- Query optimization

---

# STAGE 10 — Comments

## Goal

Allow users to discuss posts.

### Features

```text
POST   /api/posts/:id/comments
GET    /api/posts/:id/comments
DELETE /api/comments/:id
```

### Comment model

```text
Comment
├── content
├── author
├── post
├── createdAt
└── updatedAt
```

### Tasks

- [ ] Create comment
- [ ] Get comments
- [ ] Delete comment
- [ ] Verify ownership
- [ ] Validate content

### Concepts

- Relationships
- References
- Nested resources
- Ownership
- Pagination

---

# STAGE 11 — Feed

## Goal

Create a personalized feed.

Example:

```text
User A follows:

User B
User C
User D

Feed:

Post from B
Post from D
Post from C
Post from B
...
```

### Endpoint

```text
GET /api/feed
```

### Questions

- How do I find users the current user follows?
- How do I find their posts?
- How do I sort posts?
- How do I paginate them?
- What happens if the user follows nobody?

### Concepts

- Complex queries
- Filtering
- Sorting
- Relationships
- Pagination
- Query optimization

This is one of the most important stages of the project.

---

# STAGE 12 — Pagination

## Goal

Stop returning huge amounts of data.

Example:

```text
GET /api/posts?page=1&limit=10
```

### Learn

- Page-based pagination
- Limit
- Skip
- Cursor-based pagination

For this project, start with page-based pagination.

Later investigate cursor pagination.

---

# STAGE 13 — Search

## Goal

Allow users to discover other users.

Example:

```text
GET /api/users/search?q=rohit
```

### Tasks

- [ ] Search by username
- [ ] Search by name
- [ ] Return useful results
- [ ] Add pagination

### Concepts

- Query parameters
- Regex/search
- Indexes
- Search performance

---

# STAGE 14 — Image Upload

## Goal

Allow users to upload:

- Profile pictures
- Post images

### Learn

- Multipart/form-data
- File uploads
- File validation
- File size limits
- Cloud storage

Don't blindly store large files inside your database.

Research appropriate storage architecture.

---

# STAGE 15 — Validation

## Goal

Make sure bad input doesn't enter the application.

Examples:

```text
Invalid email
Empty post
Extremely long post
Invalid username
Missing required field
Invalid ObjectId
```

### Learn

- Request validation
- Schema validation
- Sanitization
- Validation middleware

Choose one validation library and understand it.

---

# STAGE 16 — Error Handling

## Goal

Create consistent API errors.

Instead of every controller doing completely different things, create centralized error handling.

Example response:

```json
{
  "success": false,
  "message": "Post not found"
}
```

### Learn

- Express error middleware
- Custom errors
- HTTP status codes
- Error propagation
- Operational vs programming errors

---

# STAGE 17 — Security

Now think like an attacker.

### Investigate

- Password hashing
- HTTP-only cookies
- CORS
- Helmet
- Rate limiting
- Input validation
- NoSQL injection
- XSS
- CSRF
- Secure environment variables
- Authentication vulnerabilities

### Questions

> Can someone access another user's private functionality?

> Can someone delete another user's post?

> Can someone send malicious input?

> Can someone spam my API?

> Am I exposing sensitive information?

---

# STAGE 18 — Testing

Don't test only through the frontend.

Test the API independently.

### Test:

```text
Authentication
Posts
Likes
Comments
Following
Feed
Authorization
Validation
Error cases
```

Especially test:

```text
Valid request
Invalid request
Unauthenticated request
Unauthorized request
Non-existent resource
Duplicate operation
```

### Learn

- Unit testing
- Integration testing
- API testing
- Jest
- Supertest

You don't need 100% coverage.

Focus on important behavior.

---

# STAGE 19 — Frontend Integration

Once the backend is stable:

```text
React
   ↓
Axios
   ↓
REST API
   ↓
Express
   ↓
MongoDB
```

Build:

- Login
- Register
- Home/feed
- Create post
- Profile
- Post details
- Comments
- Likes
- Follow/unfollow
- Search

The frontend is now consuming an API you designed yourself.

---

# STAGE 20 — Deployment

Finally deploy.

### Backend

Learn:

- Production environment variables
- Production start command
- Database configuration
- CORS configuration
- Secure cookies
- Logging
- Error handling

### Database

Use a hosted MongoDB instance.

### Frontend

Connect it to the production API.

### Final test

Test the complete application from a fresh browser/device.

---

# 9. 📊 Core Data Relationships

At the conceptual level:

```text
                 ┌──────────┐
                 │   User   │
                 └────┬─────┘
                      │
          ┌───────────┼────────────┐
          │           │            │
          ↓           ↓            ↓
        Posts       Comments     Likes
          │           │            │
          │           │            │
          └───────────┴────────────┘
                      │
                    Post
                      │
                      ↓
                  Comments
```

And:

```text
User
 │
 ├──── follows ────> User
 │
 ├──── creates ────> Post
 │
 ├──── likes ──────> Post
 │
 └──── comments ───> Post
```

These relationships are one of the major learning goals of this project.

---

# 10. 🔌 API Planning

Keep a document/table separately while building.

Example:

```text
AUTH

POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me


USERS

GET    /api/users/:id
PATCH  /api/users/:id
GET    /api/users/:id/posts
GET    /api/users/:id/followers
GET    /api/users/:id/following


POSTS

POST   /api/posts
GET    /api/posts
GET    /api/posts/:id
PATCH  /api/posts/:id
DELETE /api/posts/:id


FOLLOW

POST   /api/users/:id/follow
DELETE /api/users/:id/follow


LIKES

POST   /api/posts/:id/like
DELETE /api/posts/:id/like


COMMENTS

POST   /api/posts/:id/comments
GET    /api/posts/:id/comments
DELETE /api/comments/:id


FEED

GET    /api/feed


SEARCH

GET    /api/users/search?q=
```

The exact API design can change as you learn.

---

# 11. 📚 Backend Topics This Project Should Teach Me

By the end, I should have practical experience with:

## Node.js

- Modules
- npm
- Environment variables
- Async programming
- Error handling

## Express

- Routing
- Middleware
- Controllers
- Request/response
- Error middleware
- REST APIs

## MongoDB

- Documents
- Collections
- Queries
- Updates
- Indexes
- Aggregation basics

## Mongoose

- Schemas
- Models
- References
- Population
- Validation
- Middleware
- Query methods

## Authentication

- Password hashing
- JWT
- Cookies
- Authentication middleware
- Authorization

## API Design

- REST
- HTTP methods
- Status codes
- Query parameters
- Route parameters
- Request body
- Consistent responses

## Database Design

- One-to-one
- One-to-many
- Many-to-many
- References
- Embedded documents
- Indexes

## Backend Architecture

- Routes
- Controllers
- Services
- Models
- Middleware
- Utilities
- Config

## Security

- CORS
- XSS
- CSRF
- NoSQL injection
- Rate limiting
- Secure cookies
- Password security

## Performance

- Pagination
- Indexes
- Efficient queries
- Avoiding unnecessary database requests

## Testing

- Unit testing
- Integration testing
- API testing

## Deployment

- Production environment
- Environment variables
- Database hosting
- CORS
- Production configuration

---

# 12. 🧭 How To Use This README

This README is **not a checklist that I should blindly finish as fast as possible**.

Use it as a navigation system.

At any point ask:

### 1. Where am I?

Example:

```text
STAGE 7 — Posts
```

### 2. What am I trying to accomplish?

```text
Build complete Post CRUD.
```

### 3. What do I already understand?

Don't relearn things unnecessarily.

### 4. What don't I understand?

Research only that.

### 5. Implement it myself.

Don't copy a tutorial blindly.

### 6. Test it.

Use Postman/Thunder Client.

### 7. Move forward.

---

# 13. 🧠 When I Get Stuck

Follow this process:

```text
Problem
  ↓
Understand the problem
  ↓
Read error/message carefully
  ↓
Check my own code
  ↓
Search documentation
  ↓
Search examples
  ↓
Ask AI if necessary
  ↓
Understand the explanation
  ↓
Implement myself
  ↓
Test
```

Do not immediately ask:

> "Give me the code."

Instead ask:

> "Why is this happening?"

Then:

> "What concepts do I need to understand?"

Then implement the solution yourself.

---

# 14. 🚫 Things I Should Avoid

### Avoid tutorial hell

Don't build the entire project while watching someone else.

### Avoid overengineering

Don't create:

```text
20 folders
50 abstractions
10 design patterns
```

for a small project.

### Avoid premature optimization

First make it correct.

Then make it better.

### Avoid blindly installing packages

Every package should solve an actual problem.

### Avoid learning everything beforehand

Learn what the current stage requires.

### Avoid adding endless features

Remember:

> **This is a Mini Social Media project, not Instagram.**

---

# 15. 🏆 Definition of Done

The project is considered complete when:

- [ ] Users can register
- [ ] Users can login/logout
- [ ] Authentication works
- [ ] Protected routes work
- [ ] Users can manage profiles
- [ ] Users can create posts
- [ ] Users can update/delete their own posts
- [ ] Users can follow/unfollow
- [ ] Users can like/unlike
- [ ] Users can comment
- [ ] Users can delete their own comments
- [ ] Personalized feed works
- [ ] Pagination works
- [ ] User search works
- [ ] Image upload works
- [ ] Input validation exists
- [ ] Centralized error handling exists
- [ ] Important security measures are implemented
- [ ] API has been tested
- [ ] Frontend is connected
- [ ] Application is deployed

---

# 16. 🚀 Future Version — Real-Time Mini Project

Real-time functionality is intentionally excluded from this project.

After completing this project, build a **separate small Socket.IO project**.

Possible project:

```text
Real-Time Chat Application
```

Learn:

```text
WebSocket
      ↓
Socket.IO
      ↓
Connection
      ↓
Events
      ↓
Rooms
      ↓
Broadcasting
      ↓
Private messaging
      ↓
Online/offline status
```

Then, if desired, return to this social media project and integrate real-time notifications.

---

# 17. ⭐ Final Goal

The final goal is NOT:

> "I made a social media clone."

The real goal is:

> **"I can take an idea, design its backend, design its database, create its API, implement authentication and authorization, handle relationships, validate data, secure the application, test it, connect a frontend, and deploy it."**

That is the skill this project is supposed to develop.

---

# 18. 🔥 Personal Rule

When I finish a stage, I should be able to explain:

1. **What did I build?**
2. **Why did I build it this way?**
3. **What problem does it solve?**
4. **What concept did I learn?**
5. **What alternative approaches exist?**
6. **What would I improve in a larger application?**

If I can answer these questions, I have actually learned the topic.

---

# PROJECT MINDSET

```text
Don't rush.

Don't try to know everything.

Don't copy blindly.

Don't fear getting stuck.

Don't restart from zero every time something is difficult.

Build.

Break things.

Debug.

Research.

Understand.

Fix.

Repeat.

                     ↓

              Become a Developer
```

\*\*This project is not about finishing quickly.

It is about becoming capable of building without a tutorial.\*\*

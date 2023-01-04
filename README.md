# Task Master

A task and team management site to practice and 
learn valuable programming and design concepts

Uses the P.T.F.D. stack (Postgres, Tailwind, Fresh, Deno.js)

Other technologies used include SCSS,

## Goals

Some of the goals that I had when creating this project
- Create the project with professionalism  
I wanted to create this project with scalability and readability
as a must. I created a design layout and database diagram as if
there were going to be people working on this project after me

## Learned Concepts

Concepts that were learned when creating this project

### Programming Concepts

- Deno
  - Compare and contrast with Node.js
  - How Deno uses imports
  - How Deno practices good security with allow flags when running
  - A way to use dev dependencies
  - Ability to use top level await
  - Ability to compile TSX and Typescript built in
  - Environment variables
    - Using Deno built in env function to get env variables
    - Using Deno dotenv to store environment variables when developing
  - Using the Request and Response objects
- JSON Web Tokens (JWT)
  - When to use
  - Implementation
  - Generics of cookies
    - Http only cookies to store JWTs
    - How to store a cookie on the browser from the server
    - Getting cookies from a request using Deno
    - Deleting cookies
- Fresh
  - Routes
    - File based routing (similar to Next.js)
    - Middleware
    - Api routes with file based routing and how to use
    - Creating protected routes using authentication
  - Islands
    - Island architecture in general
    - How to use Fresh islands
    - How and when to use Fresh islands
  - Custom css
    - How to implement custom css files
- Database
  - Connection pools
  - Lazy pools
  - Transactions using [deno postgres](https://deno-postgres.com/#/)
  - Using checks and indices to ensure data integrity
- Tailwind
- Typescript
- Creating a dev branch
  - Using the master branch to push to production with .gitignore
  - Creating a git branch to use in development without .gitignore 
  to use when collaborating with other developers

### Design Concepts

- The value of completing a conceptual outline and design 
before starting program
- The value of completing a database design before 
creating the database.
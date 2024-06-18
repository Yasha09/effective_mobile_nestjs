# User Data Insertion with NestJS, PostgreSQL, and TypeORM

This project demonstrates how to insert 1,000,000 user records into a PostgreSQL database using NestJS and TypeORM, with an optimized approach to achieve efficient insertion times.
Without an index, the query takes 75-80 milliseconds, while with an index, it takes 60-65 milliseconds.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **PostgreSQL**: A powerful, open-source object-relational database system.
- **TypeORM**: An ORM for TypeScript and JavaScript (ES7, ES6, ES5), which supports many databases, including PostgreSQL.

## Project Setup

### Prerequisites

- Node.js (>=14.x)
- PostgreSQL (>=13.x)
- Yarn or npm
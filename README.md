# Todo API

This is a simple Express API for managing todos. It uses Prisma for database management and Swagger for API documentation.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone this repository

2. Install the dependencies: `npm install`

3. Start the server: `npm start`


The server will start on `http://localhost:5000`. The Swagger documentation can be accessed at `http://localhost:5000/api-docs`.

## API Endpoints

- `GET /todos`: Get all todos
- `POST /todos`: Create a new todo
- `GET /todos/:id`: Get a specific todo
- `PATCH /todos/:id`: Update a specific todo
- `DELETE /todos/:id`: Delete a specific todo

## Built With

- [Express](https://expressjs.com/) - The web framework used
- [Prisma](https://www.prisma.io/) - Database management
- [Swagger](https://swagger.io/) - API documentation

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
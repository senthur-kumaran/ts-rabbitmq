# Express TypeScript Project with ESLint and Prettier

This project is a template for building Express applications using TypeScript, ESLint, and Prettier.

## Prerequisites

- Node.js
- npm (comes with Node.js)

## Setting up the Project

1. Clone the repository:
$ git clone git@github.com:senthur-kumaran/ts-rabbitmq.git


2. Change into the project directory:
$ ts-rabbitmq


3. Install the dependencies:
$ npm install


## Running the Development Server
To start the development server, run:
$ npm start


This will start the server using `nodemon`, which will automatically restart the server whenever changes are made to the code.
## Linting and Formatting
The project uses ESLint and Prettier for linting and formatting, respectively. To run the linter, use the following command:
$ npm run lint

To format the code, use the following command:
$ npm run format

## Building for Production
To build the project for production, run:
$ npm run build


This will compile the TypeScript code into JavaScript and create a `dist` directory with the compiled files.

## Deployment

The deployment process depends on the hosting environment, but typically involves copying the contents of the `dist` directory to the server.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

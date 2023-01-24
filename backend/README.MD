# Backend

Backend project for the Technical Assignment

## About the project

This is a RESTful API using a Model-Routes-Controllers-Services, in this case the entities acting as the Model of the project. Also being a mix of Functional programming and OOP programming being that the definition and structure of the routes-controllers and services are functional, but, the server definition and main error handling of it is a class.

## Technologies

This Project was made using the required technologies:

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nodejs,typescript,expressjs,jest,postgresql" />
  </a>
</p>

- [NodeJS](https://nodejs.org) Latest LTS version.
- [ExpressJS](https://expressjs.com/) to handle request to the server
- [TYPEORM](https://typeorm.io/) as an abstraction layer to handle database related actions.
- [Typescript](https://www.typescriptlang.org/) Strongly typed programming to validate types and better code development.
- [Jest](https://jestjs.io/) for unit testing

## Setup/Installation & Running

You will need to create a database and add the information in the `.env` file to be able to run the project

```bash
 # Installing Packages
 cd backend
 npm run install .
 npm run sync # Creates tables in the database
 npm run migrate:run # Creates rows in tables
 npm run  dev # Start project Local Host
```

## Testing

Unit testing can be done by using the script in the project

```bash
 npm run test
```

This will show the results of the Test and the coverage will be in the `coverage/` folder. If you want to do a more extensive test you can use test the Endpoints using this [Postman's collection](../static/Bravo%20Care.postman_collection.json).

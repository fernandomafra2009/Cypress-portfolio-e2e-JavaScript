# Cypress Portfolio - E2E and API Automation

Automated testing portfolio using Cypress and JavaScript, covering both frontend end-to-end (E2E) scenarios and REST API scenarios for the ServeRest application.

## Project Overview

This project was developed as part of a QA automation assessment and demonstrates the implementation of automated tests using Cypress for a real e-commerce frontend and REST API.

The suite covers:

- 3 frontend E2E scenarios
- 3 API automation scenarios
- Functional validation for login, registration, cart flow, user management, and product listing
- Clear assertions and maintainable test structure
- Reusable Cypress custom commands
- Organized project structure

## Application Under Test

- Frontend: https://front.serverest.dev/
- API: https://serverest.dev/

## Technologies

- JavaScript
- Cypress
- Node.js
- REST API
- Git
- GitHub

## Repository

GitHub repository:
https://github.com/fernandomafra2009/Cypress-portfolio-e2e-JavaScript

## Project Structure

```text
Cypress-portfolio-e2e-JavaScript/
├── cypress/
│   ├── e2e/
│   │   ├── api/
│   │   │   ├── login.cy.js
│   │   │   ├── produtos.cy.js
│   │   │   └── usuarios.cy.js
│   │   └── frontend/
│   │       ├── login.cy.js
│   │       ├── cadastro.cy.js
│   │       └── carrinho.cy.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── node_modules/
```

## Automated Scenarios

### Frontend E2E

#### 1. Successful Login
Validates that a user can authenticate successfully through the frontend.

Main validations:
- access the login page
- fill in email and password
- click the login button
- expect the dashboard to be displayed
- confirm the welcome message

#### 2. User Registration
Validates the registration flow for a new user in the frontend.

Main validations:
- open the registration page
- fill in the registration form
- submit the data
- confirm the success message
- validate the user is redirected to the welcome screen

#### 3. Product Selection and Cart Flow
Validates the flow of selecting a product and navigating to the cart.

Main validations:
- login with a valid user
- ensure the store page is displayed
- add a product to the cart
- verify the cart flow is triggered
- validate the expected page/message for the current application behavior

> Note: The cart page currently displays the message "Em construção aguarde" in the application under test. The automated test validates the actual implemented behavior instead of asserting functionality that is not available.

### API

#### 1. User Authentication
Validates the login API flow.

Main validations:
- HTTP status 200
- message returned by the API
- authorization token is returned
- token is present and valid as a non-empty string

#### 2. User Creation
Validates the creation of a new user through the API.

Main validations:
- HTTP status 201
- expected success message
- user ID is returned
- ID is a string

#### 3. Product Listing
Validates the retrieval of the product list from the API.

Main validations:
- HTTP status 200
- quantity field exists
- products field exists
- products is returned as an array
- at least one product is available

## Test Design

The project follows good practices in test automation, such as:

- clear and descriptive test names
- independent and reusable scenarios
- direct validation of business behavior
- use of dynamic user creation to avoid duplicate data conflicts
- separation between frontend and API tests
- reusable custom commands for login and user creation
- use of Cypress assertions for functional validation

## Configuration

The Cypress configuration is centralized in `cypress.config.js` and includes:

- base URL for the frontend application
- test file pattern
- support file configuration
- API URL exposure for API tests

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/fernandomafra2009/Cypress-portfolio-e2e-JavaScript.git
cd Cypress-portfolio-e2e-JavaScript
npm install
```

## Running the Tests

### Open Cypress in interactive mode

```bash
npx cypress open
```

### Run all tests in headless mode

```bash
npx cypress run
```

### Run a specific test file

```bash
npx cypress run --spec "cypress/e2e/frontend/login.cy.js"
```

or

```bash
npx cypress run --spec "cypress/e2e/api/login.cy.js"
```

## Available Scripts

The project includes the following scripts in `package.json`:

```json
{
  "scripts": {
    "test": "npx cypress run",
    "cy:open": "npx cypress open",
    "cy:run": "npx cypress run"
  }
}
```

## Test Execution Summary

This project includes:

| Test Type | Scenarios |
|----------|----------:|
| Frontend E2E | 3 |
| API | 3 |
| Total | 6 |

All six tests were executed successfully in the local environment.

## Best Practices Applied

This project applies several QA automation best practices, including:

- independent and isolated test scenarios
- meaningful and explicit assertions
- maintainable Cypress structure
- reusable commands
- dynamic data generation
- clear separation between test layers
- configuration separated from test logic
- repository hygiene with `.gitignore`

## Future Improvements

Potential next steps for further enhancement:

- implement Page Object Model (POM)
- add negative API test cases
- validate response schemas more strictly
- add automated CI execution via GitHub Actions
- expand the test suite to cover additional flows

## Final Notes

This project demonstrates practical knowledge of Cypress automation for both frontend and API testing, with a clean structure, clear scenario coverage, and maintainable assertions suitable for a QA automation portfolio or technical challenge.

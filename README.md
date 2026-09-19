# Cypress Portfolio - E2E and API Automation

Automated testing portfolio using **Cypress** and **JavaScript**, covering both frontend end-to-end (E2E) scenarios and REST API scenarios for the ServeRest application.

## Project Overview

This project was developed as part of a QA automation technical assessment.

The test suite covers:

* **3 frontend E2E scenarios**
* **3 API automation scenarios**
* Positive functional scenarios
* Reusable Cypress custom commands
* Clear and maintainable assertions
* Separation between frontend and API tests
* Automated test execution through Cypress

## Application Under Test

**Frontend:** ServeRest

**API:** ServeRest REST API

## Technologies

* JavaScript
* Cypress
* Node.js
* REST API
* Git
* GitHub
* GitHub Actions

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
│   ├── fixtures/
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Automated Scenarios

### Frontend E2E

#### 1. Successful Login

Validates that a newly created user can successfully authenticate through the frontend.

**Main validations:**

* Login form is displayed.
* User credentials are entered.
* Login is successfully completed.
* The expected welcome message is displayed.

#### 2. User Registration

Validates the registration of a new user through the frontend.

**Main validations:**

* Registration form is displayed.
* User information is entered.
* Administrator option is selected.
* Registration is successfully completed.
* The expected success and welcome messages are displayed.

#### 3. Product Selection and Cart Flow

Validates the product selection flow for a regular customer.

**Main validations:**

* A regular user successfully logs in.
* The product store is displayed.
* A product can be selected.
* The "Adicionar no carrinho" action is available.
* The application navigates to the current cart page.

> **Application note:** At the time this test was developed, the cart page in the provided application displays the message `Em construção aguarde`. Therefore, the test validates the behavior that is currently available in the application instead of asserting functionality that is not implemented.

### API

#### 1. User Authentication

Validates successful authentication through the REST API.

**Main validations:**

* HTTP status `200`.
* Expected success message.
* Authorization token is returned.

#### 2. User Creation

Validates successful creation of a new user through the REST API.

**Main validations:**

* HTTP status `201`.
* Expected success message.
* User ID is returned.
* Returned user ID is a string.

#### 3. Product Listing

Validates retrieval of the product list through the REST API.

**Main validations:**

* HTTP status `200`.
* Product quantity is returned.
* Products property is returned.
* Products are returned as an array.
* At least one product is available.

## Test Design

The project uses Cypress custom commands to promote code reuse and maintainability.

Examples include:

* Creating test users through the API.
* Logging into the frontend using reusable commands.
* Supporting both administrator and regular customer users.

This approach helps reduce duplicated setup logic across the test scenarios.

## Configuration

The frontend base URL is configured in `cypress.config.js`.

The API URL is exposed through the Cypress configuration and accessed by the API tests.

The project uses Cypress 16-compatible configuration and does not rely on the deprecated `Cypress.env()` approach.

## Installation

Clone the repository and install the project dependencies:

```bash
npm install
```

## Running the Tests

### Open Cypress in interactive mode

```bash
npx cypress open
```

Select **E2E Testing** and choose the desired browser.

### Run all tests in headless mode

```bash
npx cypress run
```

### Run a specific test

For example:

```bash
npx cypress run --spec "cypress/e2e/frontend/login.cy.js"
```

## Test Execution

The complete test suite contains:

| Test Type    | Scenarios |
| ------------ | --------: |
| Frontend E2E |         3 |
| API          |         3 |
| **Total**    |     **6** |

All six scenarios were successfully executed locally using Cypress.

## Best Practices Applied

The project applies several QA automation best practices:

* Independent test scenarios.
* Clear test descriptions.
* Meaningful assertions.
* Reusable custom commands.
* Dynamic test user emails to avoid data conflicts.
* Separation of API and frontend tests.
* Use of stable `data-testid` selectors where available.
* Configuration separated from test implementation.
* `.gitignore` configured to prevent unnecessary files such as `node_modules` from being committed.
* Automated test execution through Cypress CLI.

## Future Improvements

Possible improvements for future iterations include:

* Page Object Model for larger frontend test suites.
* Additional negative API scenarios.
* Additional validation of response schemas.
* Test data management through fixtures or dedicated factories.
* Parallel test execution in CI.
* Cypress screenshots and videos for failed CI executions.
* Expanded reporting and test result artifacts.

## Author

**Fernando Mafra**

QA Engineer | Test Automation

---

**Tested with Cypress and JavaScript.**

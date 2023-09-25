# Cypress Automation Framework for Todo_app

This Cypress automation framework is designed to automate the testing of the Todo_app web application based on the provided User Stories. 
It includes test scenarios and scripts to ensure the application's functionality is thoroughly validated. 

## Prerequisites

Before running the automated tests, make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)

## Installation

1. Clone/Download this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/cypress-todo-app-automation.git
Navigate to the project directory:

```shell
cd ToDo_QA_Cypress_Exercise
npm install
```
You can execute the test suite using Cypress in headless mode or by opening the Cypress Test Runner.

## Headless Mode
To run the tests in headless mode (without a graphical interface), use the following command:

```shell
npx cypress run --spec cypress\e2e\2-advanced-examples\todo.cy.js
```
## Report
To view generated HTML report, copy the `reports\html` path and paste to web browser.
 
## The following User Stories and scenarios are covered by this automation framework:

### Feature: First time user

Verify that no ToDos are displayed for first-time users.
Feature: Create a ToDo task

Verify the ability to open the Add ToDo dialog box.
Verify the ability to create a new ToDo task.
Feature: Update a ToDo task

Verify the ability to open the Update ToDo dialog box.
Verify the ability to update an existing ToDo task.
Feature: Delete a ToDo task

Verify the ability to delete a ToDo task.

Detailed test cases and implementation can be found in the individual test files within the cypress\e2e\2-advanced-examples directory.     

Contributing
Contributions to this automation framework are welcome. If you find issues or want to enhance the test coverage, feel free to open issues, submit pull requests, or provide feedback.

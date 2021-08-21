# Test_Challenge

    I need to test the new functionality of the task list. The system has never been in production, and it will be put into production after my testing. I need to test
    the following: add tasks, complete tasks, filtering, search.

### Link to the application

    https://simplest-react-todo-app.herokuapp.com/
    
### Commands for running tests

#### Installation
 
    git clone https://github.com/TarasovArtem/QA_Challenge.git

    npm install
    
#### Opening Cypress GUI

    npx cypress open 

or 

    npm run cy:open


#### Run all tests in specific browser (***Browsers should be installed on your local machine***)

   npm run cy:run
   
   npm run cy:run:chrome

    npm run cy:run:firefox

    npm run cy:run:edge

##### Tests

    ./cypress/integration/addTodos.spec.ts

    ./cypress/integration/completeTodos.spec.ts

    ./cypress/integration/filtrationTodos.spec.ts
    
    ./cypress/integration/searchTodos.spec.ts

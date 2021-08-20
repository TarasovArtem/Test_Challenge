/// <reference types="Cypress" />

import TodoList from "./todoList";

class Navigation {
    static todoList(): TodoList {
        cy.visit('/');
        return new TodoList;
    }
}
export default Navigation;
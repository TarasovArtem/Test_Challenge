/// <reference types="Cypress" />

import { TodoList } from "./index";

class Navigation {
    static todoList(): TodoList {
        cy.visit('/');
        // tslint:disable-next-line: new-parens
        return new TodoList;
    }
}
export default Navigation;
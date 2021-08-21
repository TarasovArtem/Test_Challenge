/// <reference types="Cypress" />


class TodoList {

    getAddToDo() {
        return cy.fixture('someData');
    }

    getTodoList() {
        return cy.get('.todolist');
    }

    getItems() {
        return cy.get('.todo-item');
    }

    getInputAddNew() {
        return cy.get('[placeholder="Add New"]');
    }

    getAddBtn() {
        return cy.get('.add');
    }

    getCompletedCheckbox() {
        return cy.get('input[type="checkbox"]');
    }

    getСounterOfItems() {
        return cy.get('.pull-left');
    }
}
export default TodoList
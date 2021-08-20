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

    getCompletedCheckbox() {
        return cy.get('input[type="checkbox"]');
    }

}
export default TodoList
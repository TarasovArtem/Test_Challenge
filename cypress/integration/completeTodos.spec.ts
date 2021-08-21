/// <reference types="Cypress" />

import { TodoList, Navigation, Filtration, NameTask, State }  from '../page_objects/index';

describe('Completed tasks on THINGS TO DO List', () => {

    const filtration = new Filtration();
    let todoList = new TodoList();

    beforeEach(() => {
        todoList = Navigation.todoList();
    })

    it('should show completed tasks on THINGS TO DO List', () => {
        todoList.getItems().eq(0).should('have.class', State.pending );
        todoList.getCompletedCheckbox().eq(0).check();
        todoList.getItems().eq(0).should('have.class', State.completed );
        filtration.getCompletedItemsBtn().click();
        todoList.getItems().should('contain', NameTask.Javascript);
    })
})
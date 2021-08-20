/// <reference types="Cypress" />

import TodoList from '../page_objects/todoList';
import Navigation from '../page_objects/navigation';
import Filtration from '../page_objects/filtration';
import { NameTask, State }  from '../page_objects/const';


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
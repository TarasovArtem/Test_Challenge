/// <reference types="Cypress" />

import { TodoList, Navigation, Filtration, NameTask, State }  from '../page_objects/index';

describe('Filtration of THINGS TO DO List', () => {

    let todoList = new TodoList();
    const filtration = new Filtration();

    beforeEach(() => {
        todoList = Navigation.todoList();
    })

    it('should show filtration of THINGS TO DO List', () => {
        todoList.getItems().eq(0).should('have.class', State.pending );
        todoList.getCompletedCheckbox().eq(0).check();
    })

})
/// <reference types="Cypress" />

import { TodoList, Navigation, Filtration, NameTask, State, FiltrationBtn }  from '../page_objects/index';

describe('Completed tasks on THINGS TO DO List', () => {

    const todoList = new TodoList();
    const filtration = new Filtration();
    const navigation = new Navigation();

    beforeEach(() => {
        navigation.mainPage();
    })

    it('should show completed tasks on THINGS TO DO List', () => {
        todoList.getItems().eq(0).should('have.class', State.pending );
        todoList.getCompletedCheckbox().eq(0).check();
        todoList.getItems().eq(0).should('have.class', State.completed );
        filtration.getFiltrationBtn(FiltrationBtn.completed).click();
        todoList.getItems().should('contain', NameTask.Javascript);
    })
})
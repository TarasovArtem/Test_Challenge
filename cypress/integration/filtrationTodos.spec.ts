/// <reference types="Cypress" />

import { TodoList, Navigation, Filtration, NameTask, FiltrationBtn }  from '../page_objects/index';

describe('Filtration of THINGS TO DO List', () => {

    const todoList = new TodoList();
    const filtration = new Filtration();
    const navigation = new Navigation();

    beforeEach(() => {
        navigation.mainPage();
    })

    it('should show filtration of THINGS TO DO List', () => {
        todoList.getCompletedCheckbox().eq(0).check();
        cy.log('Check' + ' ' + NameTask.Javascript + ' ' + 'as completed');
        filtration.getFiltrationBtn(FiltrationBtn.active).click();
        todoList.getItems().should(($taskItems) => {
            expect($taskItems).to.contain(NameTask.React);
            expect($taskItems).to.contain(NameTask.Build);
        })
        cy.log('Expect 2 active task:' + ' ' + NameTask.React + ',' + ' ' +  NameTask.Build);
        filtration.getFiltrationBtn(FiltrationBtn.completed).click();
        todoList.getItems().should(($taskItems) => {
            expect($taskItems).to.contain(NameTask.Javascript);
        })
        cy.log('Expect 1 completed task:' + ' ' + NameTask.Javascript);
        filtration.getFiltrationBtn(FiltrationBtn.all).click();
        todoList.getItems().should(($taskItems) => {
            expect($taskItems).to.contain(NameTask.Javascript);
            expect($taskItems).to.contain(NameTask.React);
            expect($taskItems).to.contain(NameTask.Build);
        })
        cy.log('Expect to show All task');
    })

})
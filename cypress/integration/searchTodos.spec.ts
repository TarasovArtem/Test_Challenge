/// <reference types="Cypress" />

import { TodoList, Navigation, Search, NameTask }  from '../page_objects/index';

describe('Searching by THINGS TO DO List', () => {

    const todoList = new TodoList();
    const search = new Search();
    const navigation = new Navigation();

    beforeEach(() => {
        navigation.mainPage();
    })

    it('should show searching by THINGS TO DO List ', () => {
        search.getSearchBtn().click();
        search.getInputSearch().type(NameTask.Javascript).should('have.value', NameTask.Javascript);
        todoList.getItems().should(($taskItems) => {
            expect($taskItems).to.contain(NameTask.Javascript);
        })
        search.getInputSearch().clear().type(NameTask.New).should('have.value', NameTask.New);
        search.getAlertInfo().should('have.text', NameTask.Alert);
    })

})